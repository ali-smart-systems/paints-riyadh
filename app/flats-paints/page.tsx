import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import ContactButtons from '../../components/ContactButtons';

const PHONE_NUMBER = "0536242933";

const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "دهانات وتشطيب فلل وقصور فاخرة بالرياض",
    "description": "نقدم خدمات دهان وتشطيب الفلل والقصور في الرياض بأعلى معايير الجودة. متخصصون في الدهانات الديكورية (مارمو، خيال) والتشطيبات الملكية.",
    "provider": {
        "@type": "ProfessionalService",
        "name": "معلم دهانات الرياض",
        "telephone": "+966536242933"
    },
    "areaServed": "Riyadh"
};

// 4 أقسام فخمة مع 4 صور حصرية للفلل (من 35 إلى 38)
const VILLA_SECTIONS = [
    {
        id: 1,
        title: "الدهانات الديكورية الملكية",
        desc: "نحن متخصصون في تنفيذ أرقى أنواع الدهانات الديكورية مثل المارمو، الخيال، والورود، بلمسات فنية تجعل من جدران قصرك لوحة إبداعية نادرة.",
        features: ["تنفيذ تأثيرات الرخام الطبيعي (مارمو)", "دهانات مخملية ذات ملمس حريري", "دمج الألوان الذهبية والفضية بدقة"],
        imgNum: 23
    },
    {
        id: 2,
        title: "تشطيب الفلل المودرن",
        desc: "للمساحات العصرية، نقدم حلول دهانات مطفية (Matte) ونصف لمعة بجودة فائقة، مع التركيز على الزوايا الحادة والتشطيبات النظيفة التي تبرز جمال التصميم المعماري.",
        features: ["تنسيق ألوان 'نيود' وعصرية", "استخدام دهانات جوتن الفاخرة", "معالجة الجدران بتقنيات الليزر"],

        imgNum: 24
    },
    {
        id: 3,
        title: "دهانات الأسقف والجبس",
        desc: "نمنح الأسقف اهتماماً خاصاً يشمل دهان الكرانيش والزخارف الجبسية بألوان متناسقة، مع ضمان عدم تشقق الدهان بفضل استخدام مواد مرنة وعالية الجودة.",
        features: ["طلاء الكرانيش بالذهب والفضة", "دهانات مقاومة للرطوبة للأسقف", "تشطيبات خالية من العيوب تحت الإضاءة"],
        imgNum: 25
    },
    {
        id: 4,
        title: "قصور الرياض الكلاسيكية",
        desc: "خبرة طويلة في التعامل مع القصور الكبيرة، حيث نوفر أطقم عمل محترفة تلتزم بالسرية والجودة، وتستخدم مواد صديقة للبيئة وعديمة الرائحة تماماً.",
        features: ["فريق عمل مدرب على المساحات الكبيرة", "تغطية كاملة للأثاث والأرضيات النادرة", "ضمان 10 سنوات على ثبات الألوان"],
        imgNum: 26
    }
];

export default function VillaPaints() {
    return (
        <main className="pb-[140px] bg-brand-primary min-h-screen text-right font-sans" dir="rtl">
            <Script
                id="villa-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
            />

            {/* 🌟 الهيدر الملكي الفخم - صورة 55 */}
            <header className="relative min-h-[500px] flex flex-col items-center justify-center text-center px-5 pt-20 pb-40 rounded-b-[50px] shadow-strong border-b border-slate-800 overflow-hidden">
                <Image
                    src="/images/paint55.webp"
                    alt="دهانات فلل وقصور بالرياض"
                    fill
                    priority
                    className="object-cover -z-10 brightness-[0.2]"
                />

                <Link href="/" className="absolute top-8 right-8 text-brand-gold hover:text-white transition-colors text-lg font-bold flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700 z-10">
                    <span>←</span> العودة للرئيسية
                </Link>

                <div className="bg-brand-gold/20 text-brand-gold px-6 py-2 rounded-full text-sm font-black mb-6 border border-brand-gold/30 mt-8">
                    فخامة تليق بنخبة الرياض ✨
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                    دهانات <span className="text-brand-gold">الفلل والقصور</span>
                </h1>

                <p className="max-w-3xl mx-auto text-lg text-slate-200 leading-relaxed font-bold mb-8 drop-shadow-md">
                    لمسة ملكية تليق بذوقك الرفيع. نحن متخصصون في التشطيبات الفاخرة والدهانات الديكورية التي تمنح منزلك طابعاً من الرقي والتميز.
                </p>

                <div className="flex flex-col items-center">
                    <p className="text-white text-base mb-2 font-bold drop-shadow-md">📞 لحجز مستشارك الفني للمعاينة</p>
                    <a href={`tel:${PHONE_NUMBER}`}
                        className="text-5xl md:text-7xl font-black text-brand-gold drop-shadow-xl tracking-wider hover:scale-105 transition-transform">
                        {PHONE_NUMBER}
                    </a>
                </div>
            </header>

            {/* 🎥 فيديو استعراض الفخامة (حجم كامل) */}
            <section className="px-5 max-w-6xl mx-auto -mt-24 relative z-10">
                <div className="rounded-[35px] overflow-hidden w-full aspect-video bg-black shadow-strong border border-slate-800">
                    <video autoPlay muted loop playsInline controls className="w-full h-full object-contain">
                        <source src="/videos/video2.webm" type="video/webm" />
                        <source src="/videos/video2.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>

            {/* 🎨 أقسام المحتوى (نفس تنسيق الفخامة) */}
            <section className="px-5 max-w-6xl mx-auto mt-20 relative z-0">
                {VILLA_SECTIONS.map((section) => (
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
                                    تشطيب قصر فاخر - الرياض
                                </div>
                            </div>
                        </div>
                    </article>
                ))}

                {/* ⭐️ كارت الجودة للنخبة */}
                <div className="bg-slate-900 p-12 rounded-[40px] text-center shadow-strong border border-slate-800 mb-10">
                    <div className="text-brand-gold text-5xl mb-6">👑</div>
                    <p className="text-xl md:text-3xl font-black text-white leading-relaxed italic">"ثقتكم هي أغلى ما نملك. نعدكم بتحويل جدران فيلتكم إلى تحفة فنية تدوم لأجيال."</p>
                    <p className="text-slate-400 mt-8 font-bold">— المهندس المسؤول عن تشطيبات النخبة بالرياض</p>
                </div>
            </section>

            <ContactButtons phoneNumber={PHONE_NUMBER} />
        </main>
    );
}
