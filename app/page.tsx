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
  { id: 1, title: "دهانات داخلية", desc: "نحول مساحاتك الداخلية إلى لوحات فنية تنبض بالحياة، باستخدام أحدث كتالوجات الألوان العالمية لعام 2026 التي تناسب المجالس، الصالات، وغرف النوم.", features: ["دهانات قابلة للغسيل ومقاومة للبقع", "درجات ألوان مطفية ونصف لمعة فخمة", "تنفيذ دقيق بدون روائح مزعجة"], link: "/interior-paints", imgNum: 1 },
  { id: 2, title: "دهانات خارجية", desc: "نحمي واجهة منزلك ونبرز جمالها المعماري باستخدام أفضل أنواع الدهانات الخارجية (بروفايل، كسر رخام، ورشات) المقاومة لأقسى الظروف المناخية في الرياض.", features: ["عزل حراري ومائي متقدم", "مقاومة للتشققات وتغير الألوان (ضمان 10 سنوات)", "استخدام دهانات جوتن وعسيب الأصلية"], link: "/exterior-paints", imgNum: 2 },
  { id: 3, title: "ترميم ومعالجة الجدران", desc: "لا نكتفي بالطلاء، بل نعالج الجذور. نقدم حلولاً هندسية متكاملة لترميم الجدران القديمة وإعادتها لحالتها الأصلية قبل البدء بأي أعمال ديكورية.", features: ["معالجة الشروخ والتشققات العميقة", "القضاء على الرطوبة وتقشر الدهان القديم", "صنفرة وتأسيس بمعجون عالي الصلابة"], link: "/wall-repair", imgNum: 3 },
  { id: 4, title: "دهانات شقق وتسليم مفتاح", desc: "خدمة تشطيب متكاملة للشقق السكنية الجديدة أو المجددة. نتولى المشروع من الألف إلى الياء لنسلمك شقتك جاهزة للسكن بوقت قياسي.", features: ["تنسيق الألوان لتعطي إيحاءً باتساع المكان", "حماية كاملة للأرضيات والأبواب أثناء العمل", "باقات أسعار تنافسية للعرسان"], link: "/apartments-paints", imgNum: 4 },
  { id: 5, title: "دهانات وديكورات فلل", desc: "نضفي لمسات من الفخامة المطلقة على الفلل والقصور, بدمج الدهانات الحديثة مع أعمال الديكور المتقدمة لإنتاج فراغات تنطق بالرقي.", features: ["تنفيذ ديكورات الفوم وبديل الرخام والخشب", "تذهيب وتعتيق بطابع كلاسيكي أو نيو-كلاسيك", "إشراف هندسي على دقة التشطيبات"], link: "/flats-paints", imgNum: 5 },
  { id: 6, title: "دهانات المشاريع التجارية", desc: "نصمم وننفذ دهانات تعكس الهوية البصرية لعلامتك التجارية (Brand Identity)، ونجعل محلك أو مكتبك بيئة جاذبة للعملاء ومريحة للموظفين.", features: ["دهانات شديدة التحمل للاحتكاك والاستهلاك", "إمكانية العمل بنظام الورديات الليلية لعدم التعطيل", "ألوان مدروسة هندسياً لزيادة الإنتاجية"], link: "/commercial-paints", imgNum: 6 },
  { id: 7, title: "تركيب ورق جدران احترافي", desc: "دقة متناهية في قص وتركيب ورق الجدران لضمان استمرارية النقشات دون أي فواصل مرئية أو فقاعات هواء، ليظهر الجدار كقطعة واحدة.", features: ["استخدام غراء إيطالي أصلي مضاد للفطريات", "تركيب جميع الأنواع (ورقي، فينيل، مخملي)", "تجهيز الجدار مسبقاً لضمان الثبات التام"], link: "/wallpaper-install", imgNum: 7 },
  { id: 8, title: "معرض تصاميم ورق الجدران", desc: "تصفح أضخم كتالوج لورق الجدران لعام 2026. وفرنا لك خيارات لا حصر لها تناسب غرف الأطفال، المجالس الفخمة، والممرات المودرن.", features: ["مناظر 3D ثلاثية الأبعاد تعطي عمقاً للمكان", "نقشات هندسية ونباتية حديثة", "خامات قابلة للمسح والتنظيف بسهولة"], link: "/wallpapers-paints", imgNum: 8 },
  { id: 9, title: "استشارات هندسية للدهانات", desc: "محتار في اختيار الألوان؟ خبراؤنا يقدمون لك استشارة متكاملة لتوزيع الألوان بناءً على مساحة الغرف، ومسارات الإضاءة الطبيعية والصناعية.", features: ["مطابقة الألوان مع لون الأثاث والأرضيات", "اختيار نوع الدهان المناسب لاستخدام كل غرفة", "زيارة ميدانية لرفع المقاسات وتقديم العينات"], link: "/painting-consultation", imgNum: 9 },
  { id: 10, title: "معرض أحدث أعمالنا", desc: "الأفعال أبلغ من الأقوال. ندعوك لأخذ جولة بصرية في أرشيف مشاريعنا التي قمنا بتسليمها مؤخراً لعملائنا في مختلف أحياء الرياض.", features: ["صور حقيقية 100% من مواقع العمل", "مقارنات (قبل وبعد) لتوضيح حجم الإنجاز", "تغطية لأحياء شمال الرياض (العارض، الملقا، النرجس)"], link: "/latest-works", imgNum: 10 }
];

export default function Home() {
  return (
    <main className="pb-[140px] min-h-screen text-right font-sans relative bg-slate-950" dir="rtl">
      <Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />

      <div className="fixed inset-0 z-0">
        <Image src="/images/paint18.webp" alt="Background" fill className="object-cover" priority />
      </div>

      <div className="relative z-10">
        <header className="relative min-h-[550px] flex flex-col items-center justify-center text-center px-5 bg-gradient-to-b from-black/60 to-transparent">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-lg">مـعلم دهانات الرياض</h1>
          <a href={`tel:${PHONE_NUMBER}`} className="text-6xl font-black text-amber-400 drop-shadow-2xl">{PHONE_NUMBER}</a>
        </header>

        <section className="px-5 max-w-6xl mx-auto space-y-10">
          {SECTIONS.map((section) => (
            <article key={section.id} className="flex flex-wrap items-stretch rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
              <div className="flex-1 min-w-[300px] p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-black text-white mb-4">{section.title}</h2>
                <p className="text-slate-100 text-lg mb-6 leading-relaxed">{section.desc}</p>
                <ul className="space-y-2 mb-8">
                  {section.features.map((f, i) => <li key={i} className="text-amber-300 font-bold">✓ {f}</li>)}
                </ul>
                <a href={section.link} className="bg-amber-500 text-white px-8 py-3 rounded-full w-fit font-black hover:bg-amber-600">التفاصيل</a>
              </div>
              <div className="flex-1 min-w-[300px] min-h-[300px] relative">
                <Image src={`/images/paint${section.imgNum}.webp`} alt={section.title} fill className="object-cover" />
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
