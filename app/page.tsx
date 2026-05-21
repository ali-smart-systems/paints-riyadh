import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import ContactButtons from '../components/ContactButtons';

const PHONE_NUMBER = "0536242933";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "معلم دهانات وديكورات الرياض",
  "image": "https://www.paints-riyadh.com/images/paint1.webp",
  "description": "أفضل معلم دهانات في الرياض، تنفيذ دهانات داخلية وخارجية بأسعار منافسة في شمال الرياض.",
  "telephone": "+966536242933",
  "url": "https://www.paints-riyadh.com",
};

const SECTIONS = [
  { id: 1, title: "دهانات داخلية", desc: "نحول مساحاتك الداخلية إلى لوحات فنية تنبض بالحياة...", features: ["دهانات قابلة للغسيل", "ألوان مطفية فخمة", "تنفيذ دقيق"], link: "/interior-paints", imgNum: 1 },
  { id: 2, title: "دهانات خارجية", desc: "نحمي واجهة منزلك ونبرز جمالها المعماري...", features: ["عزل حراري ومائي", "مقاومة للتشققات", "جودة جوتن"], link: "/exterior-paints", imgNum: 2 },
  { id: 3, title: "ترميم الجدران", desc: "حلول هندسية لمعالجة الشروخ والرطوبة...", features: ["معالجة الشروخ", "القضاء على الرطوبة", "تأسيس صلب"], link: "/wall-repair", imgNum: 3 },
  { id: 4, title: "تشطيب شقق", desc: "خدمة متكاملة للشقق الجديدة والمجددة...", features: ["تنسيق ألوان", "حماية الأرضيات", "باقات للعرسان"], link: "/apartments-paints", imgNum: 4 },
  { id: 5, title: "ديكورات فلل", desc: "لمسات فخامة وجمال للفلل والقصور...", features: ["فوم وبديل رخام", "تذهيب وتعتيق", "إشراف هندسي"], link: "/flats-paints", imgNum: 5 },
  { id: 6, title: "دهانات تجارية", desc: "نصمم هوية بصرية لمحلك أو مكتبك...", features: ["دهانات متينة", "نظام ورديات", "تصميم هندسي"], link: "/commercial-paints", imgNum: 6 },
  { id: 7, title: "ورق جدران", desc: "دقة في التركيب ونقشات عصرية...", features: ["غراء إيطالي", "جميع الأنواع", "تجهيز الجدار"], link: "/wallpaper-install", imgNum: 7 },
  { id: 8, title: "معرض ورق الجدران", desc: "كتالوج 2026 للأطفال والمجالس...", features: ["مناظر 3D", "نقشات حديثة", "خامات قابلة للمسح"], link: "/wallpapers-paints", imgNum: 8 },
  { id: 9, title: "استشارات هندسية", desc: "نساعدك في اختيار الألوان المناسبة...", features: ["مطابقة الأثاث", "اختيار الدهان", "زيارة ميدانية"], link: "/painting-consultation", imgNum: 9 },
  { id: 10, title: "أحدث أعمالنا", desc: "جولة بصرية في أرشيف مشاريعنا...", features: ["صور حقيقية", "قبل وبعد", "تغطية الشمال"], link: "/latest-works", imgNum: 10 }
];

export default function Home() {
  return (
    <main className="pb-[140px] min-h-screen text-right font-sans relative bg-slate-950" dir="rtl">
      {/* الصورة الخلفية ثابتة */}
      <div className="fixed inset-0 z-0">
        <Image src="/images/paint18.webp" alt="bg" fill className="object-cover" priority />
      </div>

      <div className="relative z-10">
        {/* الهيدر */}
        <header className="relative min-h-[550px] flex flex-col items-center justify-center text-center px-5 bg-gradient-to-b from-black/70 to-transparent">
          <h1 className="text-5xl font-black text-white mb-6">مـعلم دهانات الرياض</h1>
          <a href={`tel:${PHONE_NUMBER}`} className="text-6xl font-black text-amber-400">{PHONE_NUMBER}</a>
        </header>

        {/* المعرض مع كروت الزجاج */}
        <section className="px-5 max-w-6xl mx-auto space-y-8">
          {SECTIONS.map((section) => (
            <article 
              key={section.id} 
              className="flex flex-wrap items-stretch rounded-[30px] overflow-hidden border border-white/10 
                         bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex-1 p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-white mb-3">{section.title}</h2>
                <p className="text-slate-200 mb-4">{section.desc}</p>
                <ul className="space-y-1 mb-6">
                  {section.features.map((f, i) => <li key={i} className="text-amber-300 text-sm">✓ {f}</li>)}
                </ul>
                <a href={section.link} className="bg-amber-500 text-white px-6 py-2 rounded-full w-fit font-bold">التفاصيل</a>
              </div>
              <div className="flex-1 min-h-[300px] relative">
                <Image src={`/images/paint${section.imgNum}.webp`} alt={section.title} fill className="object-cover" />
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
