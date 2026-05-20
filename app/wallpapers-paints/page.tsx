import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import ContactButtons from '../../components/ContactButtons';

const PHONE_NUMBER = "0559771963";

const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "تركيب ورق جدران 3D وديكورات حوائط بالرياض",
    "description": "متخصصون في تركيب ورق الجدران ثلاثي الأبعاد (3D)، ورق الجدران الكلاسيكي، وديكورات الفوم في الرياض. نستخدم أفضل الخامات لضمان الجودة.",
    "provider": {
        "@type": "ProfessionalService",
        "name": "معلم دهانات الرياض",
        "telephone": "+966559771963"
    },
    "areaServed": "Riyadh"
};

// 4 أقسام فخمة مع الصور المخصصة لورق الجدران (51 إلى 54)
const WALLPAPER_SECTIONS = [
    {
        id: 1,
        title: "تركيب ورق جدران ثلاثي الأبعاد (3D)",
        desc: "نتميز باحترافية عالية في تركيب ورق الجدران 3D الذي يمنح الغرف عمقاً بصرياً واتساعاً وهمياً. نعتمد على دقة مجهرية في مطابقة النقشات لتبدو الجدران كلوحة فنية متصلة.",
        features: ["تنسيق النقشات المعقدة بدون فواصل", "غراء أصلي مقاوم للرطوبة", "تصاميم تناسب الصالات وغرف النوم"],
        imgNum: 51
    },
    {
        id: 2,
        title: "تنسيق الورق مع الدهانات السادة",
        desc: "نقدم خدمة استشارية لدمج ورق الجدران مع الدهانات السادة والمودرن من جوتن، لخلق توازن بصري يبرز جمال الديكور ويجعل الغرفة أكثر أناقة وعصرية.",
        features: ["دمج ألوان 'النيود' مع الورق", "تأطير الورق ببراويز الفوم", "لمسات نهائية نظيفة تماماً"],
        imgNum: 52
    },
    {
        id: 3,
        title: "ديكورات الحوائط والفوم",
        desc: "إضافة إلى ورق الجدران، ننفذ ديكورات الفوم (بديل الجبس) وبديل الخشب، مما يمنح حوائط منزلك طابعاً كلاسيكياً أو مودرن يتناسب مع أرقى فلل الرياض.",
        features: ["تركيب فوم مع مرايا", "بديل خشب مقاوم للخدش", "توزيع هندسي دقيق للبراويز"],
        imgNum: 53
    },
    {
        id: 4,
        title: "كتالوجات 2026 الحصرية",
        desc: "نوفر لعملائنا إمكانية الاطلاع على أحدث كتالوجات ورق الجدران العالمية لعام 2026، مع توفير خامات قابلة للغسيل ومقاومة للاحتكاك بضمان حقيقي.",
        features: ["خامات قماشية وبلاستيكية", "سهولة التنظيف ومقاومة البقع", "سرعة في التنفيذ ونظافة في الموقع"],
        imgNum: 54
    }
];

export default function WallpapersPaints() {
    return (
        <main className="pb-[140px] bg-brand-primary min-h-screen text-right font-sans" dir="rtl">
            <Script
                id="wallpapers-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
            />

            {/* 🌟 الهيدر الملكي الفخم - صورة 55 */}
            <header className="relative min-h-[500px] flex flex-col items-center justify-center text-center px-5 pt-20 pb-40 rounded-b-[50px] shadow-strong border-b border-slate-800 overflow-hidden">
                <Image
                    src="/images/paint55.webp"
                    alt="تركيب ورق جدران 3D الرياض"
                    fill
                    priority
                    className="object-cover -z-10 brightness-[0.2]"
                />

                <Link href="/" className="absolute top-8 right-8 text-brand-gold hover:text-white transition-colors text-lg font-bold flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700 z-10">
                    <span>←</span> العودة للرئيسية
                </Link>

                <div className="bg-purple-500/20 text-purple-400 px-6 py-2 rounded-full text-sm font-black mb-6 border border-purple-500/30 mt-8">
                    أناقة جدرانك.. فن نتقنه 🎨
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                    تركيب ورق <span className="text-brand-gold">جدران 3D</span>
                </h1>

                <p className="max-w-3xl mx-auto text-lg text-slate-200 leading-relaxed font-bold mb-8 drop-shadow-md">
                    تشكيلة فاخرة من التصاميم العصرية والكلاسيكية. تركيب احترافي بدون فقاعات أو فراغات باستخدام أجود أنواع الغراء الأصلي لضمان ثبات يدوم طويلاً.
                </p>

                <div className="flex flex-col items-center">
                    <p className="text-white text-base mb-2 font-bold drop-shadow-md">📞 تواصل لطلب كتالوج 2026 مجاناً</p>
                    <a href={`tel:${PHONE_NUMBER}`}
                        className="text-5xl md:text-7xl font-black text-brand-gold drop-shadow-xl tracking-wider hover:scale-105 transition-transform">
                        {PHONE_NUMBER}
                    </a>
                </div>
            </header>

            {/* 🎥 فيديو التنفيذ (حجم كامل) - فيديو 11 */}
            <section className="px-5 max-w-6xl mx-auto -mt-24 relative z-10">
                <div className="rounded-[35px] overflow-hidden w-full aspect-video bg-black shadow-strong border border-slate-800">
                    <video autoPlay muted loop playsInline controls className="w-full h-full object-contain">
                        <source src="/videos/video11.webm" type="video/webm" />
                        <source src="/videos/video11.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>

            {/* 🎨 أقسام المحتوى (ورق الجدران) */}
            <section className="px-5 max-w-6xl mx-auto mt-20 relative z-0">
                {WALLPAPER_SECTIONS.map((section) => (
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
                            <div className="absolute inset-0 bg-purple-900/40 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-white/90 backdrop-blur-md text-slate-950 px-8 py-4 rounded-2xl font-black shadow-strong text-xl">
                                    دقة في مطابقة النقشة
                                </div>
                            </div>
                        </div>
                    </article>
                ))}

                {/* ⭐️ كارت الضمان الفني */}
                <div className="bg-slate-900 p-12 rounded-[40px] text-center shadow-strong border border-slate-800 mb-10">
                    <div className="text-brand-gold text-4xl mb-4">📜</div>
                    <p className="text-xl md:text-3xl font-black text-white leading-relaxed italic">"نحن لا نركب ورق جدران فقط، نحن نعيد تعريف مساحتك لتعكس ذوقك الخاص بأعلى معايير الدقة."</p>
                    <p className="text-slate-400 mt-6 font-bold">— خبراء الديكور بمؤسسة نواف بالرياض</p>
                </div>
            </section>

            <ContactButtons phoneNumber={PHONE_NUMBER} />
        </main>
    );
}
