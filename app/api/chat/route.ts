import { NextResponse } from "next/server";

export async function POST(req: Request) {
    // نستقبل رسالة العميل + رقم الرسالة
    const { message, messageCount } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    // الأوامر الأساسية الثابتة
    let systemPrompt = `أنت المعلم نواف، خبير دهانات وديكورات بالرياض.
  قواعد صارمة للرد:
  1. أجب باختصار شديد جداً (في سطر أو سطرين كحد أقصى).
  2. اجعل أسلوبك يشبه رسائل الواتساب السريعة.
  3. تحدث بلهجة سعودية محببة (يا هلا، أبشر، من عيوني).
  4. أجب على سؤال العميل مباشرة بدون مقدمات.`;

    // اللمسة الهندسية: إذا كان رقم الرسالة يقبل القسمة على 4 بدون باقٍ
    if (messageCount && messageCount % 4 === 0) {
        systemPrompt += `\n5. (مهم جداً): في نهاية هذا الرد، اطلب من العميل بوضوح أن يتصل على 0559771963 للمعاينة المجانية وتطبيق الخصم.`;
    } else {
        systemPrompt += `\n5. (تحذير صارم): لا تطلب من العميل الاتصال ولا تذكر رقم الهاتف أبداً في هذا الرد. أجب على السؤال فقط.`;
    }

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `${systemPrompt}\n\nالعميل يقول: ${message}` }] }]
            })
        });

        const data = await response.json();

        if (data.error) {
            console.error("Google API Error:", data.error.message);
            return NextResponse.json({ reply: "المعذرة يا غالي، عندي ضغط رسايل حالياً.. تقدر تتصل علي مباشرة على 0559771963 وأبشر بسعدك!" });
        }

        const reply = data.candidates[0].content.parts[0].text;
        return NextResponse.json({ reply });

    } catch (error) {
        return NextResponse.json({ reply: "المعذرة يا غالي، عندي ضغط رسايل حالياً.. تقدر تتصل علي مباشرة على 0559771963 وأبشر بسعدك!" });
    }
}