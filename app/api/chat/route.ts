import { NextResponse } from "next/server";

// إعداد الـ Runtime ليعمل على Edge Functions (الأسرع في Vercel)
export const runtime = 'edge';

export async function POST(req: Request) {
    try {
        const { message, messageCount } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            throw new Error("API Key missing");
        }

        // إعداد التايم آوت (5 ثوانٍ) لمنع تعليق السيرفر تحت الضغط
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);

        // التعليمات البرمجية للمقاول
        const systemPrompt = `أنت المعلم ابو نشمي، خبير دهانات وديكورات بالرياض.
        قواعد الرد:
        1. أجب باختصار شديد جداً (سطر أو سطرين).
        2. استخدم لهجة سعودية مهنية وودودة (يا هلا، أبشر، من عيوني).
        3. أجب على السؤال مباشرة دون مقدمات.
        4. ${(messageCount && messageCount % 4 === 0)
                ? "في نهاية الرد اطلب من العميل الاتصال على 0536242933 للمعاينة."
                : "لا تذكر رقم الهاتف أبداً."}`;

        // استدعاء Gemini (استخدام إصدار Flash للسرعة القصوى)
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `${systemPrompt}\n\nالعميل يقول: ${message}` }] }]
            }),
            signal: controller.signal
        });

        clearTimeout(timeout);

        if (!response.ok) throw new Error("Gemini API Error");

        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "أبشر يا غالي، اتصل بي على 0536242933 وأنا أخدمك!";

        return NextResponse.json({ reply });

    } catch (error) {
        // رد الطوارئ الذكي: إذا حدث أي ضغط أو خطأ، نحول العميل للاتصال مباشرة
        return NextResponse.json({
            reply: "أبشر يا غالي، حالياً عندي ضغط رسايل، يسعدني اتصالك مباشرة على 0536242933 وأبشر بسعدك!"
        });
    }
}
