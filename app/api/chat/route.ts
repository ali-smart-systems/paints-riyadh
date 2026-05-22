import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function POST(req: Request) {
    try {
        const { message, messageCount } = await req.json();

        // محاولة قراءة المفتاح بالطريقتين المتوافقتين مع Edge Runtime
        const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

        if (!apiKey) {
            console.error("خطأ: مفتاح API غير موجود في بيئة التشغيل السحابية");
            return NextResponse.json({ reply: "أبشر يا غالي، جاري تهيئة الذكاء الاصطناعي للموقع، اتصل بنا مباشرة: 0536242933" });
        }

        const controller = new AbortController();
        // رفع مهلة الانتظار إلى 8 ثوانٍ لإعطاء فرصة لـ Gemini للرد في أول طلب
        const timeout = setTimeout(() => controller.abort(), 8000);

        const systemPrompt = `أنت المعلم ابو نشمي، خبير دهانات وديكورات بالرياض.
        قواعد الرد:
        1. أجب باختصار شديد جداً (سطر أو سطرين).
        2. استخدم لهجة سعودية مهنية وودودة (يا هلا، أبشر، من عيوني).
        3. أجب على السؤال مباشرة دون مقدمات.
        4. ${(messageCount && messageCount % 4 === 0)
                ? "في نهاية الرد اطلب من العميل الاتصال على 0536242933 للمعاينة."
                : "لا تذكر رقم الهاتف أبداً."}`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `${systemPrompt}\n\nالعميل يقول: ${message}` }] }]
            }),
            signal: controller.signal
        });

        clearTimeout(timeout);

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Gemini API Error Status:", response.status, "Details:", errorText);
            throw new Error(`Gemini API Error: ${response.status}`);
        }

        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "أبشر يا غالي، اتصل بي على 0536242933 وأنا أخدمك!";

        return NextResponse.json({ reply });

    } catch (error: any) {
        console.error("Catch Block Triggered:", error.message || error);
        return NextResponse.json({
            reply: "أبشر يا غالي، حالياً عندي ضغط رسايل، يسعدني اتصالك مباشرة على 0536242933 وأبشر بسعدك!"
        });
    }
}
