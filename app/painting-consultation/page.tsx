import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import ContactButtons from '../../components/ContactButtons';

const PHONE_NUMBER = "0536242933";

const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "استشارات دهانات وديكور بالرياض",
    "description": "نقدم استشارات مهنية في اختيار الألوان وتنسيق الديكورات المنزلية (بديل الخشب، فوم، ورق جدران) بما يتناسب مع الإضاءة والأثاث في الرياض.",
    "provider": {
        "@type": "ProfessionalService",
        "name": "معلم دهانات الرياض",
        "telephone": "+966536242933"
    },
    "areaServed": "Riyadh"
};

// 4 أقسام فخمة مع 4 صور حصرية (من 43 إلى 46)
const CONSULTATION_SECTIONS = [
    {
        id: 1,
        title: "تنسيق ألوان الجدران والأثاث",
        desc: "نساعدك في اختيار درجات الألوان التي تتناغم مع أثاث منزلك الحالي، مع مراعاة انعكاس الإضاءة الطبيعية والصناعية على الجدران لضمان نتيجة نهائية مريحة للعين.",
        features: ["دمج درجات الألوان الباردة والدافئة", "معاينة عينات الألوان على الواقع", "حلول لزيادة اتساع المساحات الضيقة"],
        imgNum: 43
    },
    {
        id: 2,
        title: "استشارات الديكورات المدمجة",
        desc: "نقترح عليك أفضل طرق دمج 'بديل الخشب' و 'الفوم' و 'المرايا' مع الدهانات المودرن، لخلق زوايا جمالية فريدة في الصالات والمجالس تعكس ذوقك الرفيع.",
        features: ["تنسيق براويز الفوم الكلاسيكية", "توزيع بديل الخشب بطريقة هندسية", "اختيار أماكن ورق الجدران المميزة"],
        imgNum: 44
    },
    {
        id: 3,
        title: "توفير التكاليف وحساب الكميات",
        desc: "خبرتنا تساعدك في توفير ميزانيتك من خلال حساب كميات الدهان والمواد المطلوبة بدقة متناهية، مما يمنع الهدر ويضمن الحصول على أفضل جودة بأقل سعر.",
        features: ["معاينة ميدانية مجانية للموقع", "اختيار المواد المناسبة لكل ميزانية", "تقليل الفاقد من المواد بنسبة 20%"],
        imgNum: 45
    },
    {
        id: 4,
        title: "أفكار وتوجهات 2026",
        desc: "نطلعك على أحدث صيحات عالم الديكور والدهانات لعام 2026، من الألوان الترابية الهادئة إلى التصاميم الأسمنتية الجريئة، لنضمن بقاء منزلك متجدداً لسنوات.",
        features: ["كتالوجات حصرية لأحدث الألوان", "دمج الديكور مع الوظيفة العملية", "استشارات في الإضاءة المخفية"],
        imgNum: 46
    }
];

export default function PaintingConsultation() {
    return (
        <main className="pb-[140px] bg-brand-primary min-h-screen text-right font-sans" dir="rtl">
            <Script
                id="consultation-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
            />

            {/* 🌟 الهيدر الملكي الفخم - صورة 55 */}
            <header className="relative min-h-[500px] flex flex-col items-center justify-center text-center px-5 pt-20 pb-40 rounded-b-[50px] shadow-strong border-b border-slate-800 overflow-hidden">
                <Image
                    src="/images/paint55.webp"
                    alt="استشارات دهانات وديكور الرياض"
                    fill
                    priority
                    className="object-cover -z-10 brightness-[0.25]"
                />

                <Link href="/" className="absolute top-8 right-8 text-brand-gold hover:text-white transition-colors text-lg font-bold flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700 z-10">
                    <span>←</span> العودة للرئيسية
                </Link>

                <div className="bg-brand-gold/20 text-brand-gold px-6 py-2 rounded-full text-sm font-black mb-6 border border-brand-gold/30 mt-8">
                    رؤية فنية.. لبيت العمر ✨
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                    استشارات <span className="text-brand-gold">دهانات وديكور</span>
                </h1>

                <p className="max-w-3xl mx-auto text-lg text-slate-200 leading-relaxed font-bold mb-8 drop-shadow-md">
                    نضع بين يديك خبرة سنوات في تنسيق الألوان والديكورات المنزلية. نساعدك في اتخاذ القرار الصحيح الذي يجمع بين الفخامة وتوفير التكاليف.
                </p>

                <div className="flex flex-col items-center">
                    <p className="text-white text-base mb-2 font-bold drop-shadow-md">📞 اطلب مستشارك الفني الآن</p>
                    <a href={`tel:${PHONE_NUMBER}`}
                        className="text-5xl md:text-7xl font-black text-brand-gold drop-shadow-xl tracking-wider hover:scale-105 transition-transform">
                        {PHONE_NUMBER}
                    </a>
                </div>
            </header>

            {/* 🎥 فيديو استعراض التنسيقات (حجم كامل) */}
            <section className="px-5 max-w-6xl mx-auto -mt-24 relative z-10">
                <div className="rounded-[35px] overflow-hidden w-full aspect-video bg-black shadow-strong border border-slate-800">
                    <video autoPlay muted loop playsInline controls className="w-full h-full object-contain">
                        <source src="/videos/video9.webm" type="video/webm" />
                        <source src="/videos/video9.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>

            {/* 🎨 أقسام المحتوى (مطابق للرئيسية) */}
            <section className="px-5 max-w-6xl mx-auto mt-20 relative z-0">
                {CONSULTATION_SECTIONS.map((section) => (
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
                                    جلسة تنسيق ألوان احترافية
                                </div>
                            </div>
                        </div>
                    </article>
                ))}

                {/* ⭐️ كارت الحكمة */}
                <div className="bg-slate-900 p-12 rounded-[40px] text-center shadow-strong border border-slate-800 mb-10">
                    <div className="text-brand-gold text-5xl mb-6">💡</div>
                    <p className="text-xl md:text-3xl font-black text-white leading-relaxed italic">"اللون الصحيح ليس مجرد صبغة على الجدار، بل هو روح المكان التي تشعر بها كل يوم."</p>
                    <p className="text-slate-400 mt-8 font-bold">— خبراء تنسيق الألوان بمؤسسة نواف بالرياض</p>
                </div>
            </section>

            <ContactButtons phoneNumber={PHONE_NUMBER} />
        </main>
    );
}
