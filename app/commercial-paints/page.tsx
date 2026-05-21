import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import ContactButtons from '../../components/ContactButtons';

const PHONE_NUMBER = "0536242933";

const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "دهانات وتشطيب مشاريع تجارية بالرياض",
    "description": "تشطيب ودهان المكاتب والمطاعم والمحلات التجارية في الرياض. سرعة في التنفيذ، جودة عالية، والتزام بمواعيد الافتتاح.",
    "provider": {
        "@type": "ProfessionalService",
        "name": "معلم دهانات الرياض",
        "telephone": "+966536242933"
    },
    "areaServed": "Riyadh"
};

// 4 أقسام فخمة مع 4 صور حصرية (من 27 إلى 30)
const COMMERCIAL_SECTIONS = [
    {
        id: 1,
        title: "تشطيب المكاتب والشركات",
        desc: "نخلق بيئة عمل ملهمة من خلال دهانات عصرية وألوان تحفز الإنتاجية. نستخدم مواد عالية التحمل ومقاومة للبصمات والخدوش لتناسب حركة الموظفين الكثيفة.",
        features: ["دهانات مطفية فخمة (Matte)", "سرعة التنفيذ خارج أوقات الدوام", "تنسيق الألوان مع الهوية المؤسسية"],
        imgNum: 15
    },
    {
        id: 2,
        title: "دهانات المطاعم والكافيهات",
        desc: "ندرك أهمية الانطباع الأول لزبائنك. نوفر دهانات ديكورية خاصة تتحمل الحرارة والرطوبة وقابلة للتنظيف المتكرر، مع لمسات فنية تضفي طابعاً خاصاً على مكانك.",
        features: ["دهانات مقاومة للبقع والزيوت", "تنفيذ ديكورات أسمنتية ومودرن", "حلول إضاءة تبرز جمال الدهان"],
        imgNum: 16
    },
    {
        id: 3,
        title: "تشطيب المحلات والمعارض",
        desc: "الالتزام التام بموعد الافتتاح هو أولويتنا. نوفر أطقم عمل متكاملة لإنهاء أعمال الدهانات في وقت قياسي وبأعلى معايير الجودة لجذب المتسوقين.",
        features: ["استخدام دهانات سريعة الجفاف", "تشطيبات براقة تبرز المعروضات", "العمل بنظام النوبات لضغط الوقت"],
        imgNum: 17
    },
    {
        id: 4,
        title: "المساحات التجارية الكبيرة",
        desc: "للمستودعات والمراكز التجارية الكبيرة، نوفر خيارات دهانات اقتصادية وعملية تغطي مساحات شاسعة بجودة ثابتة وتكلفة مدروسة تناسب ميزانية مشروعك.",
        features: ["توفير دهانات الرش للأداء السريع", "دهانات إيبوكسي للأرضيات", "ضمان طويل الأمد على جودة العمل"],
        imgNum: 55
    }
];

export default function CommercialPaints() {
    return (
        <main className="pb-[140px] bg-brand-primary min-h-screen text-right font-sans" dir="rtl">
            <Script
                id="commercial-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
            />

            {/* 🌟 الهيدر الملكي (صورة 55 ثابتة للجميع) */}
            <header className="relative min-h-[500px] flex flex-col items-center justify-center text-center px-5 pt-20 pb-40 rounded-b-[50px] shadow-strong border-b border-slate-800 overflow-hidden">
                <Image
                    src="/images/paint55.webp"
                    alt="خلفية دهانات تجارية بالرياض"
                    fill
                    priority
                    className="object-cover -z-10 brightness-[0.25]"
                />

                <Link href="/" className="absolute top-8 right-8 text-brand-gold hover:text-white transition-colors text-lg font-bold flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700 z-10">
                    <span>←</span> العودة للرئيسية
                </Link>

                <div className="bg-brand-accent text-white px-6 py-2 rounded-full text-sm font-black mb-6 shadow-soft animate-pulse mt-8">
                    حلول احترافية لقطاع الأعمال 🏢
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                    دهانات <span className="text-brand-gold">المشاريع التجارية</span>
                </h1>

                <p className="max-w-3xl mx-auto text-lg text-slate-100 leading-relaxed font-bold mb-8 drop-shadow-md">
                    تشطيب ودهان المكاتب، المطاعم، والمحلات التجارية بالرياض. نجمع بين سرعة التنفيذ، الجودة العالية، والالتزام الصارم بمواعيد الافتتاح.
                </p>

                <div className="flex flex-col items-center">
                    <p className="text-white text-base mb-2 font-bold drop-shadow-md">📞 لطلب عرض سعر لمشروعك</p>
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
                        <source src="/videos/video8.webm" type="video/webm" />
                        <source src="/videos/video8.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>

            {/* 🎨 أقسام المحتوى (نفس تصميم الرئيسية الفخم) */}
            <section className="px-5 max-w-6xl mx-auto mt-20 relative z-0">
                {COMMERCIAL_SECTIONS.map((section) => (
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
                                <div className="bg-slate-950/90 backdrop-blur-md border border-brand-gold/50 text-brand-gold px-6 py-3 rounded-2xl font-bold shadow-strong">
                                    تنفيذ مشروع تجاري بالرياض
                                </div>
                            </div>
                        </div>
                    </article>
                ))}

                {/* ⭐️ كارت الثقة لرواد الأعمال */}
                <div className="bg-slate-900 p-12 rounded-[40px] text-center shadow-strong border border-slate-800 mb-10">
                    <div className="text-brand-gold text-4xl mb-4">★★★★★</div>
                    <p className="text-xl md:text-2xl font-black text-white leading-relaxed italic">"أنهوا دهان المطعم في 3 أيام فقط قبل موعد الافتتاح وبجودة أبهرت الجميع. احترافية عالية جداً."</p>
                    <p className="text-slate-400 mt-6 font-bold">— المدير التنفيذي لشركة أغذية (الرياض)</p>
                </div>
            </section>

            <ContactButtons phoneNumber={PHONE_NUMBER} />
        </main>
    );
}
