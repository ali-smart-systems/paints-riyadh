import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'دهانات داخلية وديكورات بالرياض للشقق والفلل | شغف اللحظة',
  description:
    'دهانات داخلية بالرياض للشقق والفلل والمجالس وغرف النوم، مع تجهيز الجدران وتجديد الطلاء واختيار درجات الألوان والتشطيبات المناسبة لكل مساحة.',
  alternates: {
    canonical: '/interior-paints',
  },
  openGraph: {
    title: 'دهانات داخلية وديكورات بالرياض للشقق والفلل | شغف اللحظة',
    description: 'دهانات داخلية بالرياض للشقق والفلل والمجالس وغرف النوم، مع تجهيز الجدران وتجديد الطلاء واختيار درجات الألوان والتشطيبات المناسبة لكل مساحة.',
    url: '/interior-paints',
  },
};
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import ContactButtons from '../../components/ContactButtons';

const PHONE_NUMBER = "0536242933";

const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "دهانات داخلية وديكورات بالرياض",
    "description": "خدمة دهانات داخلية في الرياض للمجالس وغرف النوم والصالات، تشمل تجهيز الأسطح وتجديد الطلاء واختيار التشطيبات والألوان المناسبة.",
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
        desc: "ننفذ درجات الدهانات السادة مثل البيج والرمادي، مع الاهتمام بتجهيز الجدار والصنفرة واختيار التشطيب المناسب لطبيعة الغرفة.",
        features: ["معالجة العيوب السطحية المناسبة قبل الطلاء", "تنسيق درجات الألوان بما يناسب مساحة الغرفة وإضاءتها", "دهانات مطفية ونصف لمعة سهلة التنظيف"],
        imgNum: 19
    },
    {
        id: 2,
        title: "الديكورات الجدارية الحديثة",
        desc: "نحن مبدعون في تنفيذ ديكورات 'الخيال' و 'الفيروز' و 'الاستيل' التي تمنح الصالات والمجالس طابعاً من الفخامة يتناسب مع أحدث صيحات الديكور في الرياض.",
        features: ["تركيب بديل الرخام والخشب بتناغم", "تنفيذ نقوش يدوية وفنية خاصة", "اختيار المواد المناسبة لنوع التشطيب"],
        imgNum: 20
    },
    {
        id: 3,
        title: "تجديد دهانات المجالس والصالات",
        desc: "يمكن تجديد المجالس والصالات بمعالجة عيوب السطح المناسبة وإعادة الطلاء بألوان متناسقة، مع مراعاة تغطية الأثاث وحماية الأرضيات أثناء العمل.",
        features: ["تنظيم مراحل العمل بحسب مساحة المكان", "اختيار نوع الدهان بحسب متطلبات المكان", "تقدير مدة التنفيذ بحسب حالة الجدران"],
        imgNum: 21
    },
    {
        id: 4,
        title: "غرف النوم والأطفال",
        desc: "نساعد في اختيار درجات ألوان وتشطيبات مناسبة لغرف النوم والأطفال، مع مراعاة قابلية التنظيف والتهوية أثناء أعمال الطلاء.",
        features: ["مراعاة مواصفات الدهان وتهوية الغرفة", "اختيار ألوان هادئة بحسب تفضيل الأسرة", "اختيار تشطيبات قابلة للتنظيف عند الحاجة"],
        imgNum: 22
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
                    دهانات <span className="text-brand-gold">داخلية وديكورات بالرياض</span>
                </h1>

                <p className="max-w-3xl mx-auto text-lg text-slate-200 leading-relaxed font-bold mb-8 drop-shadow-md">
                    دهانات داخلية بالرياض للمجالس وغرف النوم والصالات، مع الاهتمام بتجهيز الجدران وتنسيق الألوان واختيار التشطيب المناسب لكل مساحة.
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
                    <div className="text-brand-gold text-4xl mb-4">🎨</div>
                    <p className="text-xl md:text-3xl font-black text-white leading-relaxed italic">قبل تجديد الدهانات الداخلية، من المفيد فحص حالة الجدران واختيار درجات الألوان وفق إضاءة الغرفة ونوع الاستخدام، ثم تحديد التشطيب المناسب.</p>
                    <p className="text-slate-400 mt-6 font-bold">— نصائح لاختيار الدهانات الداخلية</p>
                </div>
            </section>

            <section className="px-5 max-w-6xl mx-auto mb-10" aria-label="إرشادات الخدمة"><div className="bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-800"><h2 className="text-2xl font-bold text-white">نصائح قبل طلب الخدمة</h2><p className="text-slate-300 leading-loose mt-4">في دهانات الشقق والفلل، يساعد اختيار درجة اللمعة المناسبة على تحقيق توازن بين المظهر وسهولة التنظيف. جرّب عينة لون في إضاءة الغرفة قبل اعتماد اللون، وحدد أعمال معالجة العيوب قبل بدء الدهان.</p></div></section>

            <ContactButtons phoneNumber={PHONE_NUMBER} />
        </main>
    );
}
