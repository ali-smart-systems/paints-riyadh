import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import ContactButtons from '../../components/ContactButtons';

const PHONE_NUMBER = "0536242933";

const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "دهانات داخلية وديكورات بالرياض",
    "description": "تنفيذ أرقى الدهانات الداخلية في الرياض باستخدام أصباغ جوتن والجزيرة. متخصصون في تشطيب الشقق والفلل بأحدث ألوان 2026.",
    "provider": {
        "@type": "ProfessionalService",
        "name": "معلم دهانات الرياض",
        "telephone": "+966536242933"
    },
    "areaServed": "Riyadh"
};

// 4 أقسام فخمة مع 4 صور حصرية (من 39 إلى 42)
const INTERIOR_SECTIONS = [
    {
        id: 1,
        title: "دهانات السادة والمودرن",
        desc: "ننفذ أرقى ألوان الدهانات السادة باستخدام درجات 'البيج' و 'الرمادي' العصرية من جوتن، مع صنفرة يدوية وآلية تضمن ملمساً ناعماً كالحرير لجدران منزلك.",
        features: ["استخدام معجون عالي الجودة للقضاء على العيوب", "تنسيق ألوان احترافي لزيادة اتساع الغرف", "دهانات مطفية ونصف لمعة سهلة التنظيف"],
        imgNum: 39
    },
    {
        id: 2,
        title: "الديكورات الجدارية الحديثة",
        desc: "نحن مبدعون في تنفيذ ديكورات 'الخيال' و 'الفيروز' و 'الاستيل' التي تمنح الصالات والمجالس طابعاً من الفخامة يتناسب مع أحدث صيحات الديكور في الرياض.",
        features: ["تركيب بديل الرخام والخشب بتناغم", "تنفيذ نقوش يدوية وفنية خاصة", "استخدام مواد أصلية تضمن ثبات اللمعة"],
        imgNum: 40
    },
    {
        id: 3,
        title: "تجديد دهانات المجالس والصالات",
        desc: "نحول مجالسكم القديمة إلى مساحات عصرية من خلال معالجة التشققات وإعادة الطلاء بألوان دافئة، مع الالتزام التام بنظافة المكان وتغطية الأثاث بالكامل.",
        features: ["عمل سريع لا يعطل حياتك اليومية", "مواد صديقة للبيئة وبدون رائحة", "إنجاز المجالس الكبيرة في وقت قياسي"],
        imgNum: 41
    },
    {
        id: 4,
        title: "غرف النوم والأطفال",
        desc: "نقدم حلول دهانات مريحة للعين ومقاومة للبقع لغرف الأطفال، مع تشطيبات هادئة لغرف النوم الرئيسية تضمن لك الراحة والهدوء النفسي.",
        features: ["دهانات آمنة تماماً على الأطفال", "ألوان مدروسة لراحة الأعصاب", "سهولة غسل الجدران من الأقلام والبقع"],
        imgNum: 42
    }
];

export default function InteriorPaints() {
    return (
        <main className="pb-[140px] bg-brand-primary min-h-screen text-right font-sans" dir="rtl">
            <Script
                id="interior-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
            />

            {/* 🌟 الهيدر الملكي الفخم - صورة 55 */}
            <header className="relative min-h-[500px] flex flex-col items-center justify-center text-center px-5 pt-20 pb-40 rounded-b-[50px] shadow-strong border-b border-slate-800 overflow-hidden">
                <Image
                    src="/images/paint55.webp"
                    alt="دهانات داخلية بالرياض"
                    fill
                    priority
                    className="object-cover -z-10 brightness-[0.2]"
                />

                <Link href="/" className="absolute top-8 right-8 text-brand-gold hover:text-white transition-colors text-lg font-bold flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700 z-10">
                    <span>←</span> العودة للرئيسية
                </Link>

                <div className="bg-brand-gold/20 text-brand-gold px-6 py-2 rounded-full text-sm font-black mb-6 border border-brand-gold/30 mt-8">
                    ألوان تخطف الأنظار 🎨
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                    دهانات <span className="text-brand-gold">داخلية وديكورات</span>
                </h1>

                <p className="max-w-3xl mx-auto text-lg text-slate-200 leading-relaxed font-bold mb-8 drop-shadow-md">
                    أحدث ألوان عام 2026 بين يديك. دقة متناهية في التنفيذ باستخدام أجود أنواع الأصباغ العالمية لضمان جمال يدوم في منزلك.
                </p>

                <div className="flex flex-col items-center">
                    <p className="text-white text-base mb-2 font-bold drop-shadow-md">📞 اتصل الآن لمناقشة ألوان منزلك</p>
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
                        <source src="/videos/video3.webm" type="video/webm" />
                        <source src="/videos/video3.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>

            {/* 🎨 أقسام المحتوى (مطابق للرئيسية) */}
            <section className="px-5 max-w-6xl mx-auto mt-20 relative z-0">
                {INTERIOR_SECTIONS.map((section) => (
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
                            <div className="absolute inset-0 bg-brand-primary/60 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-brand-gold/90 backdrop-blur-md text-brand-primary px-8 py-4 rounded-2xl font-black shadow-strong text-xl">
                                    تنفيذ دهان داخلي احترافي
                                </div>
                            </div>
                        </div>
                    </article>
                ))}

                {/* ⭐️ كارت الجودة */}
                <div className="bg-slate-900 p-12 rounded-[40px] text-center shadow-strong border border-slate-800 mb-10">
                    <div className="text-brand-gold text-4xl mb-4">★★★★★</div>
                    <p className="text-xl md:text-3xl font-black text-white leading-relaxed italic">"نحن لا نقوم بطلاء الجدران فقط، نحن نصنع لك بيئة مريحة وجميلة تسكن فيها مع عائلتك بكل فخر."</p>
                    <p className="text-slate-400 mt-6 font-bold">— فريق دهانات الرياض المعتمد</p>
                </div>
            </section>

            <ContactButtons phoneNumber={PHONE_NUMBER} />
        </main>
    );
}
