import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import ContactButtons from '../../components/ContactButtons';

const PHONE_NUMBER = "0536242933";

const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "معرض أعمال دهانات وديكورات الرياض 2026",
    "description": "شاهد أحدث مشاريع الدهانات والديكور التي تم تنفيذها في أحياء الرياض. دقة في التنفيذ وأرقى التصاميم العالمية.",
    "provider": {
        "@type": "ProfessionalService",
        "name": "معلم دهانات الرياض",
        "telephone": "+966536242933"
    }
};

// 8 صور حصرية لهذه الصفحة (من 19 إلى 26)
const GALLERY_IMAGES = [31, 32, 33, 34, 35, 36, 37, 38];

export default function LatestWorks() {
    return (
        <main className="pb-[140px] bg-brand-primary min-h-screen text-right font-sans" dir="rtl">
            <Script
                id="gallery-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
            />

            {/* 🌟 الهيدر الملكي الفخم - مطابق للرئيسية */}
            <header className="relative min-h-[500px] flex flex-col items-center justify-center text-center px-5 pt-20 pb-40 rounded-b-[50px] shadow-strong border-b border-slate-800 overflow-hidden">
                <Image
                    src="/images/paint55.webp"
                    alt="خلفية معرض الأعمال"
                    fill
                    priority
                    className="object-cover -z-10 brightness-[0.2]"
                />

                <Link href="/" className="absolute top-8 right-8 text-brand-gold hover:text-white transition-colors text-lg font-bold flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700 z-10">
                    <span>←</span> العودة للرئيسية
                </Link>

                <div className="bg-brand-gold/20 text-brand-gold px-6 py-2 rounded-full text-sm font-black mb-6 border border-brand-gold/30 mt-10">
                    أحدث الإنجازات لعام 2026 🏆
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                    معرض <span className="text-brand-gold">الأعمال الأخيرة</span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed font-bold mb-8 drop-shadow-md">
                    هنا نستعرض دقة تفاصيلنا في أرقى فلل وشقق الرياض. صور حقيقية من مواقع العمل تعكس جودتنا.
                </p>
            </header>

            {/* 🎥 فيديو العمل - حجم كامل مطابق لتنسيق الصفحة الرئيسية */}
            <section className="px-5 max-w-6xl mx-auto -mt-24 relative z-10">
                <div className="rounded-[35px] overflow-hidden w-full aspect-video bg-black shadow-strong border border-slate-800">
                    <video autoPlay muted loop playsInline controls className="w-full h-full object-contain">
                        <source src="/videos/video7.webm" type="video/webm" />
                        <source src="/videos/video7.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>

            {/* 🎨 معرض الصور الشبكي الفخم - نفس قياسات وحواف صور الصفحة الرئيسية */}
            <section className="px-5 max-w-6xl mx-auto mt-20 mb-20">
                <div className="flex items-center justify-between mb-10">
                    <h3 className="text-2xl md:text-3xl font-black text-white">
                        <span className="text-brand-gold ml-2">|</span>ألبوم المشاريع الحديثة
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {GALLERY_IMAGES.map((imgNum, index) => (
                        <div key={index} className="relative h-[350px] md:h-[450px] rounded-[40px] overflow-hidden shadow-strong border border-slate-800 group bg-slate-900">
                            <Image
                                src={`/images/paint${imgNum}.webp`}
                                alt={`أحدث أعمال دهانات الرياض - نموذج ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            {/* Overlay مطابق للرئيسية */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                            <div className="absolute bottom-8 right-8 left-8">
                                <div className="bg-slate-950/80 backdrop-blur-md border border-brand-gold/30 p-4 rounded-2xl shadow-strong transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-brand-gold font-black text-lg">مشروع تنفيذ دهانات وديكورات</p>
                                    <p className="text-slate-300 text-sm mt-1 font-bold">الرياض - حي {["النخيل", "حطين", "الملقا", "الياسمين", "الصحافة", "المنار", "الروضة", "النرجس"][index]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 📞 كارت الاتصال النهائي */}
            <section className="px-5 max-w-4xl mx-auto mb-20">
                <a href={`tel:${PHONE_NUMBER}`} className="group relative flex flex-col items-center justify-center bg-slate-900 border border-brand-gold/20 hover:border-brand-gold p-12 rounded-[40px] transition-all duration-500 shadow-strong overflow-hidden text-center">
                    <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="text-brand-gold text-xl font-bold mb-4">هل أعجبك مستوى التنفيذ؟</span>
                    <span className="text-white text-3xl md:text-5xl font-black leading-tight">احصل على معاينة مجانية <br /> واتصل بنا الآن</span>
                    <div className="mt-8 text-5xl font-black text-brand-gold tracking-tighter">{PHONE_NUMBER}</div>
                </a>
            </section>

            <ContactButtons phoneNumber={PHONE_NUMBER} />
        </main>
    );
}
