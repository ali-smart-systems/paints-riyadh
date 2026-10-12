import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'شركة تركيب ورق جدران بالرياض | فني تركيب | شغف اللحظة',
  description:
    'تركيب ورق جدران بالرياض للمجالس والصالات وغرف النوم. تعرف على تجهيز الجدار، اختيار اللاصق المناسب، ومحاذاة النقشات قبل طلب خدمة التركيب.',
  alternates: {
    canonical: '/wallpaper-install',
  },
  openGraph: {
    title: 'شركة تركيب ورق جدران بالرياض | فني تركيب | شغف اللحظة',
    description: 'تركيب ورق جدران بالرياض للمجالس والصالات وغرف النوم. تعرف على تجهيز الجدار، اختيار اللاصق المناسب، ومحاذاة النقشات قبل طلب خدمة التركيب.',
    url: '/wallpaper-install',
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
    "name": "تركيب ورق جدران بالرياض",
    "description": "خدمة تركيب ورق جدران في الرياض للمجالس وغرف النوم والصالات، مع تجهيز الجدران ومراعاة مطابقة النقشات والفواصل.",
    "provider": {
        "@type": "ProfessionalService",
        "name": "معلم دهانات الرياض",
        "telephone": "+966536242933"
    },
    "areaServed": "Riyadh"
};

// 4 أقسام فخمة مع آخر 4 صور حصرية (من 51 إلى 54)
const WALLPAPER_SECTIONS = [
    {
        id: 1,
        title: "تركيب ورق جدران 3D",
        desc: "نحن خبراء في تركيب ورق الجدران ثلاثي الأبعاد الذي يمنح غرفتك عمقاً بصرياً مذهلاً. نهتم بمحاذاة النقشات والفواصل للحصول على مظهر متناسق قدر الإمكان بحسب نوع الورق وحالة الجدار.",
        features: ["تنسيق النقشات المعقدة بدقة", "اختيار مادة لاصقة مناسبة لنوع الورق والسطح", "العناية بمحاذاة الفواصل بين اللوحات"],
        imgNum: 47
    },
    {
        id: 2,
        title: "ورق الجدران الكلاسيك والمودرن",
        desc: "سواء كنت تفضل النقشات الكلاسيكية المذهبة أو التصاميم المودرن البسيطة، نهتم بتجهيز السطح وطريقة اللصق بما يناسب نوع الورق وظروف المكان.",
        features: ["تركيب ورق الجدران القماشي", "مناقشة شروط التنفيذ قبل بدء العمل", "قص احترافي حول الأفياش والمكيفات"],
        imgNum: 48
    },
    {
        id: 3,
        title: "تجهيز الجدران قبل التركيب",
        desc: "السر في جمال ورق الجدران هو السطح المستوي. نفحص حالة الجدار ونجهزه عند الحاجة؛ أما الرطوبة أو التسربات فتتطلب معالجة سببها قبل تركيب الورق.",
        features: ["معالجة الثقوب والنتوءات", "اختيار طبقة تأسيس مناسبة عند الحاجة", "فحص رطوبة الجدار قبل البدء"],
        imgNum: 49
    },
    {
        id: 4,
        title: "سرعة في التنفيذ ونظافة في العمل",
        desc: "نقدر قيمة منزلك، لذلك نحرص على حماية الأثاث والأرضيات أثناء العمل وتنظيف المكان بعد الانتهاء، مع تحديد المدة بحسب مساحة الجدران ونوع الورق.",
        features: ["تنظيف المكان بعد الانتهاء", "تقدير مدة التنفيذ حسب مساحة الغرفة", "العناية بالتفاصيل أثناء التركيب"],
        imgNum: 50
    }
];

export default function WallpaperInstall() {
    return (
        <main className="pb-[140px] bg-brand-primary min-h-screen text-right font-sans" dir="rtl">
            <Script
                id="wallpaper-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
            />

            {/* 🌟 الهيدر الملكي الفخم - صورة 55 */}
            <header className="relative min-h-[500px] flex flex-col items-center justify-center text-center px-5 pt-20 pb-40 rounded-b-[50px] shadow-strong border-b border-slate-800 overflow-hidden">
                <Image
                    src="/images/paint55.webp"
                    alt="تركيب ورق جدران الرياض"
                    fill
                    priority
                    className="object-cover -z-10 brightness-[0.2]"
                />

                <Link href="/" className="absolute top-8 right-8 text-brand-gold hover:text-white transition-colors text-lg font-bold flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700 z-10">
                    <span>←</span> العودة للرئيسية
                </Link>

                <div className="bg-purple-500/20 text-purple-400 px-6 py-2 rounded-full text-sm font-black mb-6 border border-purple-500/30 mt-8">
                    أناقة جدرانك تبدأ من هنا ✨
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                    خدمة <span className="text-brand-gold">تركيب ورق جدران بالرياض</span>
                </h1>

                <p className="max-w-3xl mx-auto text-lg text-slate-200 leading-relaxed font-bold mb-8 drop-shadow-md">
                    تركيب ورق جدران بالرياض للمجالس وغرف النوم والصالات، بتصاميم ثلاثية الأبعاد وكلاسيكية ومودرن، مع الاهتمام بتجهيز الجدران وتنسيق النقشات.
                </p>

                <div className="flex flex-col items-center">
                    <p className="text-white text-base mb-2 font-bold drop-shadow-md">📞 اتصل الآن لطلب فني التركيب</p>
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
                            <div className="absolute inset-0 bg-purple-900/30 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-white/90 backdrop-blur-md text-slate-950 px-8 py-4 rounded-2xl font-black shadow-strong text-xl">
                                    دقة في مطابقة النقشة
                                </div>
                            </div>
                        </div>
                    </article>
                ))}

                {/* ⭐️ كارت الضمان */}
                <div className="bg-slate-900 p-12 rounded-[40px] text-center shadow-strong border border-slate-800 mb-10">
                    <div className="text-brand-gold text-5xl mb-6">📜</div>
                    <p className="text-xl md:text-3xl font-black text-white leading-relaxed italic">اختيار الورق المناسب يبدأ بفحص الجدار وتحديد نوع الخامة والتصميم، ثم تجهيز السطح ومحاذاة النقشات أثناء التركيب.</p>
                    <p className="text-slate-400 mt-8 font-bold">— إرشادات قبل تركيب ورق الجدران</p>
                </div>
            </section>

            <section className="px-5 max-w-6xl mx-auto mb-10" aria-label="إرشادات الخدمة"><div className="bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-800"><h2 className="text-2xl font-bold text-white">نصائح قبل طلب الخدمة</h2><p className="text-slate-300 leading-loose mt-4">قبل تركيب ورق الجدران، تأكد من جفاف السطح واستوائه وخلوه من التقشير. تختلف طريقة التركيب واللاصق بحسب نوع الورق، كما تؤثر النقشات المتكررة في مقدار القص والهدر المطلوب.</p></div></section>

            <ContactButtons phoneNumber={PHONE_NUMBER} />
        </main>
    );
}
