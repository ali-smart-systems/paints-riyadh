import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import ContactButtons from '../../components/ContactButtons';

const PHONE_NUMBER = "0536242933";

const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ترميم جدران ومعالجة رطوبة بالرياض",
    "description": "نقدم حلولاً نهائية لمشاكل رطوبة الجدران، تقشير الدهان، وإصلاح التشققات الإنشائية والسطحية في الرياض باستخدام أفضل المواد العازلة.",
    "provider": {
        "@type": "ProfessionalService",
        "name": "معلم دهانات الرياض",
        "telephone": "+966536242933"
    },
    "areaServed": "Riyadh"
};

// 4 أقسام تقنية مع 4 صور حصرية للترميم (من 47 إلى 50)
const REPAIR_SECTIONS = [
    {
        id: 1,
        title: "علاج الرطوبة وتقشير الدهان",
        desc: "نقدم حلاً جذرياً لمشكلة تساقط الدهان الناتج عن الرطوبة. نقوم بتقشير الطبقات المتضررة وصولاً للأصل، ثم نطبق مواد عزل كيميائية تمنع عودة الرطوبة مستقبلاً.",
        features: ["استخدام عوازل مائية متطورة", "تجفيف الجدران بتقنيات حديثة", "ضمان عدم عودة الملوحة للسطح"],
        imgNum: 43
    },
    {
        id: 2,
        title: "إصلاح التشققات الإنشائية",
        desc: "نعالج شروخ الجدران العميقة والسطحية باستخدام مواد مالئة (Putty) مرنة تتحمل تمدد وتقلص المبنى، مما يضمن اختفاء الشرخ تماماً وعدم ظهوره بعد الدهان.",
        features: ["حقن الشروخ بمواد إيبوكسية", "استخدام مشبك ألياف لتقوية الزوايا", "تسوية السطح ليكون قطعة واحدة"],
        imgNum: 44
    },
    {
        id: 3,
        title: "تجهيز وصنفرة الجدران",
        desc: "السر في الدهان الناجح هو التأسيس. نقوم بعمليات صنفرة دقيقة ومعجون متعدد الطبقات لخلق سطح أملس تماماً وخالٍ من النتوءات قبل تطبيق اللون النهائي.",
        features: ["استخدام صنفرة آلية بدون غبار", "تطبيق طبقات أساس (Primer) قوية", "فحص استواء الجدار بالإضاءة الجانبية"],
        imgNum: 45
    },
    {
        id: 4,
        title: "ترميم الواجهات الخارجية",
        desc: "نعيد لفللكم رونقها من خلال صيانة الواجهات المتأثرة بالشمس والأمطار، مع ترميم الديكورات الجبسية والأسمنتية المكسورة وإعادة طلائها بمواد مقاومة للظروف الجوية.",
        features: ["ترميم البروفايل والرشة المتضررة", "معالجة هبوط الدهان في الأسوار", "تنظيف وتجديد الحجر الصناعي"],
        imgNum: 46
    }
];

export default function WallRepair() {
    return (
        <main className="pb-[140px] bg-brand-primary min-h-screen text-right font-sans" dir="rtl">
            <Script
                id="wall-repair-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
            />

            {/* 🌟 الهيدر الملكي الفخم - صورة 55 */}
            <header className="relative min-h-[500px] flex flex-col items-center justify-center text-center px-5 pt-20 pb-40 rounded-b-[50px] shadow-strong border-b border-slate-800 overflow-hidden">
                <Image
                    src="/images/paint55.webp"
                    alt="ترميم جدران بالرياض"
                    fill
                    priority
                    className="object-cover -z-10 brightness-[0.2]"
                />

                <Link href="/" className="absolute top-8 right-8 text-brand-gold hover:text-white transition-colors text-lg font-bold flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700 z-10">
                    <span>←</span> العودة للرئيسية
                </Link>

                <div className="bg-red-500/20 text-red-400 px-6 py-2 rounded-full text-sm font-black mb-6 border border-red-500/30 mt-8">
                    حلول هندسية نهائية للعيوب 🛠️
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                    ترميم جدران و <span className="text-brand-gold">معالجة رطوبة</span>
                </h1>

                <p className="max-w-3xl mx-auto text-lg text-slate-200 leading-relaxed font-bold mb-8 drop-shadow-md">
                    وداعاً للتشققات وتقشير الدهان. نقدم خدمات ترميم متكاملة تعيد جدران منزلك لحالتها الأصلية باستخدام أقوى العوازل والمواد المالئة.
                </p>

                <div className="flex flex-col items-center">
                    <p className="text-white text-base mb-2 font-bold drop-shadow-md">📞 اطلب فني للمعاينة المجانية الآن</p>
                    <a href={`tel:${PHONE_NUMBER}`}
                        className="text-5xl md:text-7xl font-black text-brand-gold drop-shadow-xl tracking-wider hover:scale-105 transition-transform">
                        {PHONE_NUMBER}
                    </a>
                </div>
            </header>

            {/* 🎥 فيديو التنفيذ (حجم كامل) */}
            <section className="px-5 max-w-6xl mx-auto -mt-24 relative z-10">
                <div className="rounded-[35px] overflow-hidden w-full aspect-video bg-black shadow-strong border border-slate-800">
                    <video autoPlay muted loop playsInline controls className="w-full h-full object-contain">
                        <source src="/videos/video10.webm" type="video/webm" />
                        <source src="/videos/video10.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>

            {/* 🎨 أقسام المحتوى (الترميم) */}
            <section className="px-5 max-w-6xl mx-auto mt-20 relative z-0">
                {REPAIR_SECTIONS.map((section) => (
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
                            <div className="absolute inset-0 bg-red-900/40 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-white/90 backdrop-blur-md text-slate-950 px-8 py-4 rounded-2xl font-black shadow-strong text-xl">
                                    قبل وبعد الترميم
                                </div>
                            </div>
                        </div>
                    </article>
                ))}

                {/* ⭐️ كارت الجودة الفنية */}
                <div className="bg-slate-900 p-12 rounded-[40px] text-center shadow-strong border border-slate-800 mb-10">
                    <div className="text-red-500 text-5xl mb-6">🛡️</div>
                    <p className="text-xl md:text-3xl font-black text-white leading-relaxed italic">"الترميم الصحيح يوفر عليك تكاليف الدهان المتكرر. نحن نعالج المشكلة من جذورها لضمان راحة بالك."</p>
                    <p className="text-slate-400 mt-8 font-bold">— قسم الصيانة والترميم بمؤسسة نواف</p>
                </div>
            </section>

            <ContactButtons phoneNumber={PHONE_NUMBER} />
        </main>
    );
}
