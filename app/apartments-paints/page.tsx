import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import ContactButtons from '../../components/ContactButtons'; // تأكد من صحة المسار

const PHONE_NUMBER = "0536242933";

const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "دهانات وتشطيب شقق بالرياض",
    "description": "أفضل خدمات دهانات وتشطيب الشقق في الرياض، تجديد دهانات قديمة بمواد عديمة الرائحة وتسليم سريع.",
    "provider": {
        "@type": "ProfessionalService",
        "name": "معلم دهانات الرياض",
        "telephone": "+966536242933"
    },
    "areaServed": "Riyadh"
};

// تقسيم محتوى الشقق إلى أقسام مثل الصفحة الرئيسية مع الصور المخصصة
const APARTMENT_SECTIONS = [
    {
        id: 1,
        title: "تجديد دهانات الشقق القديمة",
        desc: "نعيد الحياة لشقتك القديمة بخطوات مدروسة تبدأ من معالجة التشققات، وتقشير الدهان التالف، وصولاً إلى تأسيس الجدران بمعجون متين يضمن بقاء الدهان الجديد لسنوات طويلة دون عيوب.",
        features: ["معالجة الرطوبة والتشققات العميقة", "صنفرة وتأسيس دقيق للجدران", "إعادة الجدار لحالته الأصلية قبل الطلاء"],
        imgNum: 11
    },
    {
        id: 2,
        title: "مواد آمنة وعديمة الرائحة",
        desc: "صحة عائلتك تهمنا. نستخدم دهانات داخلية صديقة للبيئة وعديمة الرائحة من كبرى الشركات مثل جوتن والجزيرة، مما يسمح لك بالسكن في الشقة في نفس يوم انتهاء العمل.",
        features: ["دهانات صحية قابلة للغسيل", "جفاف سريع للون وبدون روائح مزعجة", "اعتماد ماركات عالمية أصلية 100%"],
        imgNum: 12
    },
    {
        id: 3,
        title: "حماية الأثاث والأرضيات",
        desc: "نلتزم بأعلى معايير النظافة أثناء العمل. نقوم بتغليف كامل الأثاث، الأبواب، النوافذ، وتغطية الأرضيات بالنايلون والكرتون المقوى قبل فتح أي علبة دهان.",
        features: ["تغليف احترافي للأثاث والأبواب", "استخدام شريط لاصق عازل (تطويق)", "تسليم الشقة نظيفة تماماً بعد العمل"],
        imgNum: 13
    },
    {
        id: 4,
        title: "تشطيب عرسان وتسليم مفتاح",
        desc: "باقات خاصة لتجهيز شقق العرسان بألوان عصرية تضفي اتساعاً وراحة نفسية للمكان، مع الالتزام التام بتسليم العمل في الوقت المحدد لضمان راحة بالك.",
        features: ["مساعدة هندسية في تنسيق الألوان", "باقات أسعار مخفضة وتنافسية", "إشراف دقيق وتسليم على المفتاح"],
        imgNum: 14
    }
];

export default function ApartmentsPaints() {
    return (
        <main className="pb-[140px] bg-brand-primary min-h-screen text-right font-sans" dir="rtl">
            <Script
                id="apartments-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
            />

            {/* 🌟 الهيدر الملكي (نفس تصميم الرئيسية مع صورة 55) */}
            <header className="relative min-h-[500px] flex flex-col items-center justify-center text-center px-5 pt-20 pb-40 rounded-b-[50px] shadow-strong border-b border-slate-800 overflow-hidden">
                <Image
                    src="/images/paint55.webp"
                    alt="خلفية دهانات وديكورات الرياض"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover -z-10 brightness-[0.3]"
                />

                <Link href="/" className="absolute top-8 right-8 text-brand-gold hover:text-white transition-colors text-lg font-bold flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700">
                    <span>←</span> العودة للرئيسية
                </Link>

                <div className="bg-brand-accent text-white px-6 py-2 rounded-full text-sm font-black mb-6 shadow-soft animate-pulse mt-8">
                    تجديد الشقق بأسرع وقت وأفضل جودة ⚡
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                    دهانات و <span className="text-brand-gold">تشطيب شقق</span>
                </h1>

                <p className="max-w-3xl mx-auto text-lg text-slate-100 leading-relaxed font-bold mb-8 drop-shadow-md">
                    تجديد كامل لشقتك في وقت قياسي وبأقل التكاليف. تنفيذ دقيق، مواد عديمة الرائحة، وحماية كاملة لأثاثك. نسلمك الشقة على المفتاح.
                </p>

                <div className="flex flex-col items-center">
                    <p className="text-white text-base mb-2 font-bold drop-shadow-md">📞 احجز استشارتك المجانية الآن</p>
                    <a href={`tel:${PHONE_NUMBER}`}
                        className="text-5xl md:text-7xl font-black text-brand-gold drop-shadow-xl tracking-wider hover:scale-105 transition-transform">
                        {PHONE_NUMBER}
                    </a>
                </div>
            </header>

            {/* 🎥 فيديو الواجهة (استخدام فيديو 5) */}
            <section className="px-5 max-w-6xl mx-auto -mt-24 relative z-10">
                <div className="rounded-[35px] overflow-hidden h-[350px] bg-black shadow-strong border border-slate-800">
                    <video autoPlay muted loop playsInline controls className="w-full h-full object-cover">
                        <source src="/videos/video5.webm" type="video/webm" />
                        <source src="/videos/video5.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>

            {/* 🎨 معرض الأقسام (مطابق لتصميم الرئيسية مع وصف لكل صورة) */}
            <section className="px-5 max-w-6xl mx-auto mt-20 relative z-0">
                {APARTMENT_SECTIONS.map((section) => (
                    <article key={section.id} className="flex flex-wrap items-stretch bg-slate-900 rounded-[40px] overflow-hidden mb-16 shadow-strong border border-slate-800">

                        {/* 📝 قسم النص (يمين) */}
                        <div className="flex-1 min-w-[300px] p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl font-black text-white mb-4">
                                <span className="text-brand-gold ml-2">|</span>{section.title}
                            </h2>
                            <p className="text-slate-400 text-base leading-loose mb-6">
                                {section.desc}
                            </p>
                            <ul className="space-y-3 mb-10">
                                {section.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-slate-300 font-medium">
                                        <span className="text-brand-success ml-3 text-lg">✔</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 🖼️ قسم الصورة (يسار) */}
                        <div className="flex-1 min-w-[300px] relative min-h-[400px] group">
                            <Image
                                src={`/images/paint${section.imgNum}.webp`}
                                alt={section.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-brand-primary/80 flex items-end justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-slate-950/80 backdrop-blur-md border border-brand-gold/50 text-brand-gold px-6 py-3 rounded-2xl font-bold shadow-strong">
                                    صورة من أعمالنا لتشطيب الشقق
                                </div>
                            </div>
                        </div>
                    </article>
                ))}

                {/* ⭐️ كارت التقييم */}
                <div className="bg-slate-900 p-12 rounded-[40px] text-center shadow-strong border border-slate-800">
                    <div className="text-brand-gold text-4xl mb-4">★★★★★</div>
                    <p className="text-xl font-bold text-white leading-relaxed italic">"استلمت شقتي كالجديدة تماماً بدون أي ريحة للبوية، ومحافظين على نظافة الأرضيات بشكل عجيب."</p>
                    <p className="text-slate-400 mt-6">— عبدالله الدوسري (حي الياسمين)</p>
                </div>
            </section>

            {/* 📞 الأزرار العائمة */}
            <ContactButtons phoneNumber={PHONE_NUMBER} />
        </main>
    );
}
