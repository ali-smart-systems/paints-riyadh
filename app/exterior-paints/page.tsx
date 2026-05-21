import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import ContactButtons from '../../components/ContactButtons';

const PHONE_NUMBER = "0536242933";

const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "دهانات واجهات خارجية وبروفايل بالرياض",
    "description": "تنفيذ دهانات واجهات خارجية، رشات بروفايل، ودهانات ديكورية مقاومة للرطوبة والأمطار في الرياض. ضمان على جودة التنفيذ وثبات الألوان.",
    "provider": {
        "@type": "ProfessionalService",
        "name": "معلم دهانات الرياض",
        "telephone": "+966536242933"
    },
    "areaServed": "Riyadh"
};

// 4 أقسام فخمة مع 4 صور حصرية (من 31 إلى 34)
const EXTERIOR_SECTIONS = [
    {
        id: 1,
        title: "رشات البروفايل الحديثة",
        desc: "نتميز بتنفيذ رشة البروفايل بأشكالها الطولية والعرضية، باستخدام مواد عالية الجودة تتحمل قسوة مناخ الرياض وتحافظ على مظهرها الفخم لسنوات طويلة.",
        features: ["مقاومة عالية للأشعة فوق البنفسجية", "ثبات تام للألوان ضد البهتان", "إخفاء عيوب اللياسة بشكل كامل"],
        imgNum: 27
    },
    {
        id: 2,
        title: "الدهانات الخارجية الديكورية",
        desc: "نوفر خيارات ديكورية رائعة للواجهات مثل الجرافيت والرخام الصناعي، مما يمنح فيلتك طابعاً معمارياً فريداً يجمع بين الأصالة والحداثة.",
        features: ["تصاميم تحاكي الحجر الطبيعي", "مرونة عالية تمنع ظهور التشققات", "سهولة في التنظيف ومقاومة للأتربة"],
        imgNum: 28
    },
    {
        id: 3,
        title: "عزل وحماية الواجهات",
        desc: "لا نهتم بالجمال فقط، بل نركز على الحماية. نستخدم دهانات أساس (Primer) عازلة تمنع تسرب مياه الأمطار والرطوبة إلى داخل الجدران.",
        features: ["حماية الجدران من تمليح الإسمنت", "عزل حراري خفيف يساعد في التبريد", "إطالة عمر الواجهة الافتراضي"],
        imgNum: 29
    },
    {
        id: 4,
        title: "تجديد أسوار وفلل الرياض",
        desc: "نقوم بصيانة وتجديد واجهات الفلل والأسوار القديمة، مع معالجة الشروخ والتقشير وإعادة طلائها بمواد حديثة تجعل منزلك يبدو كأنه جديد.",
        features: ["صنفرة وتنظيف الواجهات القديمة", "استخدام سكافوليد (سقالات) آمنة", "إنجاز العمل في وقت قياسي"],
        imgNum: 30
    }
];

export default function ExteriorPaints() {
    return (
        <main className="pb-[140px] bg-brand-primary min-h-screen text-right font-sans" dir="rtl">
            <Script
                id="exterior-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}

            />

            {/* 🌟 الهيدر الملكي الفخم - صورة 55 */}
            <header className="relative min-h-[500px] flex flex-col items-center justify-center text-center px-5 pt-20 pb-40 rounded-b-[50px] shadow-strong border-b border-slate-800 overflow-hidden">
                <Image
                    src="/images/paint55.webp"
                    alt="دهانات واجهات خارجية بالرياض"
                    fill
                    priority
                    className="object-cover -z-10 brightness-[0.25]"
                />

                <Link href="/" className="absolute top-8 right-8 text-brand-gold hover:text-white transition-colors text-lg font-bold flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700 z-10">
                    <span>←</span> العودة للرئيسية
                </Link>

                <div className="bg-brand-accent text-white px-6 py-2 rounded-full text-sm font-black mb-6 shadow-soft animate-pulse mt-8">
                    حماية وأناقة تدوم لسنوات ☀️
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                    دهانات <span className="text-brand-gold">واجهات خارجية</span>
                </h1>

                <p className="max-w-3xl mx-auto text-lg text-slate-100 leading-relaxed font-bold mb-8 drop-shadow-md">
                    تنفيذ أرقى دهانات الواجهات، رشات بروفايل، ودهانات ديكورية مقاومة للرطوبة والأمطار. نضمن لك ثبات الألوان لسنوات طويلة.
                </p>

                <div className="flex flex-col items-center">
                    <p className="text-white text-base mb-2 font-bold drop-shadow-md">📞 لطلب معاينة واجهة منزلك</p>
                    <a href={`tel:${PHONE_NUMBER}`}
                        className="text-5xl md:text-7xl font-black text-brand-gold drop-shadow-xl tracking-wider hover:scale-105 transition-transform">
                        {PHONE_NUMBER}
                    </a>
                </div>
            </header>

            {/* 🎥 فيديو العمل (حجم كامل) */}
            <section className="px-5 max-w-6xl mx-auto -mt-24 relative z-10">
                <div className="rounded-[35px] overflow-hidden w-full aspect-video bg-black shadow-strong border border-slate-800">
                    <video autoPlay muted loop playsInline controls className="w-full h-full object-contain">
                        <source src="/videos/video4.webm" type="video/webm" />
                        <source src="/videos/video4.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>

            {/* 🎨 أقسام المحتوى (مطابق للرئيسية) */}
            <section className="px-5 max-w-6xl mx-auto mt-20 relative z-0">
                {EXTERIOR_SECTIONS.map((section) => (
                    <article key={section.id} className="flex flex-wrap items-stretch bg-slate-900 rounded-[40px] overflow-hidden mb-16 shadow-strong border border-slate-800">

                        {/* 📝 قسم النص */}
                        <div className="flex-1 min-w-[300px] p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl font-black text-white mb-4">
                                <span className="text-brand-gold ml-2">|</span>{section.title}
                            </h2>
                            <p className="text-slate-400 text-base leading-loose mb-6 font-bold">
                                {section.desc}
                            </p>
                            <ul className="space-y-3 mb-10">
                                {section.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-slate-300 font-bold">
                                        <span className="text-brand-success ml-3 text-lg">✔</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 🖼️ قسم الصورة */}
                        <div className="flex-1 min-w-[300px] relative min-h-[400px] group">
                            <Image
                                src={`/images/paint${section.imgNum}.webp`}
                                alt={section.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-brand-primary/80 flex items-end justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-slate-950/90 backdrop-blur-md border border-brand-gold/50 text-brand-gold px-6 py-3 rounded-2xl font-bold shadow-strong text-center">
                                    تنفيذ دهانات خارجية بالرياض
                                </div>
                            </div>
                        </div>
                    </article>
                ))}

                {/* ⭐️ كارت الجودة والضمان */}
                <div className="bg-slate-900 p-12 rounded-[40px] text-center shadow-strong border border-slate-800 mb-10">
                    <div className="text-brand-gold text-4xl mb-4">★★★★★</div>
                    <p className="text-xl md:text-2xl font-black text-white leading-relaxed italic">"نفذوا لي بروفايل للواجهة والنتيجة كانت رائعة جداً، دقة في المواعيد ونظافة في العمل واللون ثابت رغم الأمطار."</p>
                    <p className="text-slate-400 mt-6 font-bold">— محمد القحطاني (حي الملقا)</p>
                </div>
            </section>

            <ContactButtons phoneNumber={PHONE_NUMBER} />
        </main>
    );
}
