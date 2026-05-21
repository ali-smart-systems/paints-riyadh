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
  {
    id: 1,
    title: "دهانات داخلية",
    desc: "نحول مساحاتك الداخلية إلى لوحات فنية تنبض بالحياة، باستخدام أحدث كتالوجات الألوان العالمية لعام 2026 التي تناسب المجالس، الصالات، وغرف النوم.",
    features: ["دهانات قابلة للغسيل ومقاومة للبقع", "درجات ألوان مطفية ونصف لمعة فخمة", "تنفيذ دقيق بدون روائح مزعجة"],
    link: "/interior-paints", imgNum: 1
  },
  {
    id: 2,
    title: "دهانات خارجية",
    desc: "نحمي واجهة منزلك ونبرز جمالها المعماري باستخدام أفضل أنواع الدهانات الخارجية (بروفايل، كسر رخام، ورشات) المقاومة لأقسى الظروف المناخية في الرياض.",
    features: ["عزل حراري ومائي متقدم", "مقاومة للتشققات وتغير الألوان (ضمان 10 سنوات)", "استخدام دهانات جوتن وعسيب الأصلية"],
    link: "/exterior-paints", imgNum: 2
  },
  {
    id: 3,
    title: "ترميم ومعالجة الجدران",
    desc: "لا نكتفي بالطلاء، بل نعالج الجذور. نقدم حلولاً هندسية متكاملة لترميم الجدران القديمة وإعادتها لحالتها الأصلية قبل البدء بأي أعمال ديكورية.",
    features: ["معالجة الشروخ والتشققات العميقة", "القضاء على الرطوبة وتقشر الدهان القديم", "صنفرة وتأسيس بمعجون عالي الصلابة"],
    link: "/wall-repair", imgNum: 3
  },
  {
    id: 4,
    title: "دهانات شقق وتسليم مفتاح",
    desc: "خدمة تشطيب متكاملة للشقق السكنية الجديدة أو المجددة. نتولى المشروع من الألف إلى الياء لنسلمك شقتك جاهزة للسكن بوقت قياسي.",
    features: ["تنسيق الألوان لتعطي إيحاءً باتساع المكان", "حماية كاملة للأرضيات والأبواب أثناء العمل", "باقات أسعار تنافسية للعرسان"],
    link: "/apartments-paints", imgNum: 4
  },
  {
    id: 5,
    title: "دهانات وديكورات فلل",
    desc: "نضفي لمسات من الفخامة المطلقة على الفلل والقصور, بدمج الدهانات الحديثة مع أعمال الديكور المتقدمة لإنتاج فراغات تنطق بالرقي.",
    features: ["تنفيذ ديكورات الفوم وبديل الرخام والخشب", "تذهيب وتعتيق بطابع كلاسيكي أو نيو-كلاسيك", "إشراف هندسي على دقة التشطيبات"],
    link: "/flats-paints", imgNum: 5
  },
  {
    id: 6,
    title: "دهانات المشاريع التجارية",
    desc: "نصمم وننفذ دهانات تعكس الهوية البصرية لعلامتك التجارية (Brand Identity)، ونجعل محلك أو مكتبك بيئة جاذبة للعملاء ومريحة للموظفين.",
    features: ["دهانات شديدة التحمل للاحتكاك والاستهلاك", "إمكانية العمل بنظام الورديات الليلية لعدم التعطيل", "ألوان مدروسة هندسياً لزيادة الإنتاجية"],
    link: "/commercial-paints", imgNum: 6
  },
  {
    id: 7,
    title: "تركيب ورق جدران احترافي",
    desc: "دقة متناهية في قص وتركيب ورق الجدران لضمان استمرارية النقشات دون أي فواصل مرئية أو فقاعات هواء، ليظهر الجدار كقطعة واحدة.",
    features: ["استخدام غراء إيطالي أصلي مضاد للفطريات", "تركيب جميع الأنواع (ورقي، فينيل، مخملي)", "تجهيز الجدار مسبقاً لضمان الثبات التام"],
    link: "/wallpaper-install", imgNum: 7
  },
  {
    id: 8,
    title: "معرض تصاميم ورق الجدران",
    desc: "تصفح أضخم كتالوج لورق الجدران لعام 2026. وفرنا لك خيارات لا حصر لها تناسب غرف الأطفال، المجالس الفخمة، والممرات المودرن.",
    features: ["مناظر 3D ثلاثية الأبعاد تعطي عمقاً للمكان", "نقشات هندسية ونباتية حديثة", "خامات قابلة للمسح والتنظيف بسهولة"],
    link: "/wallpapers-paints", imgNum: 8
  },
  {
    id: 9,
    title: "استشارات هندسية للدهانات",
    desc: "محتار في اختيار الألوان؟ خبراؤنا يقدمون لك استشارة متكاملة لتوزيع الألوان بناءً على مساحة الغرف، ومسارات الإضاءة الطبيعية والصناعية.",
    features: ["مطابقة الألوان مع لون الأثاث والأرضيات", "اختيار نوع الدهان المناسب لاستخدام كل غرفة", "زيارة ميدانية لرفع المقاسات وتقديم العينات"],
    link: "/painting-consultation", imgNum: 9
  },
  {
    id: 10,
    title: "معرض أحدث أعمالنا",
    desc: "الأفعال أبلغ من الأقوال. ندعوك لأخذ جولة بصرية في أرشيف مشاريعنا التي قمنا بتسليمها مؤخراً لعملائنا في مختلف أحياء الرياض.",
    features: ["صور حقيقية 100% من مواقع العمل", "مقارنات (قبل وبعد) لتوضيح حجم الإنجاز", "تغطية لأحياء شمال الرياض (العارض، الملقا، النرجس)"],
    link: "/latest-works", imgNum: 10
  }
];

export default function Home() {
  return (
    <main className="pb-[140px] min-h-screen text-right font-sans relative bg-slate-900" dir="rtl">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* 🖼️ الصورة الخلفية: صافية 100% بدون أي ضبابية أو تعتيم رمادي */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/paint18.webp"
          alt="خلفية ديكورات فخمة مضيئة"
          fill
          priority
          className="object-cover" 
        />
      </div>

      <div className="relative z-10">
        {/* 🌟 الهيدر الملكي: تدرج لوني داكن من الأعلى فقط لحماية النص، ثم يختفي ليترك الصورة نقية */}
        <header className="relative min-h-[550px] flex flex-col items-center justify-center text-center px-5 pt-20 pb-40 rounded-b-[50px] border-b border-white/10 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
          <div className="bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-black mb-6 shadow-md animate-pulse">
            خصم حصري 20% لجميع أحياء شمال الرياض ⚡
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            مـعلم دهانات <br />
            <span className="text-brand-gold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">وديكورات الرياض</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-white leading-relaxed font-black mb-8 drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]">
            نحول رؤيتك إلى واقع بأيدي خبراء. تشطيبات متكاملة، دهانات حديثة، وديكورات فخمة تضفي طابعاً ملكياً على مساحتك. نضمن لك أعلى معايير الجودة والتزاماً صارماً بموعد التسليم.
          </p>

          <div className="flex flex-col items-center">
            <p className="text-white text-base mb-2 font-bold drop-shadow-md">📞 احجز استشارتك المجانية الآن</p>
            <a href={`tel:${PHONE_NUMBER}`}
              className="text-5xl md:text-7xl font-black text-amber-400 drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] tracking-wider hover:scale-105 transition-transform">
              {PHONE_NUMBER}
            </a>
          </div>
        </header>

        {/* 🎥 فيديو الواجهة */}
        <section className="px-5 max-w-6xl mx-auto -mt-24">
          <div className="rounded-[35px] overflow-hidden h-[350px] bg-black shadow-2xl border border-white/20">
            <video
              autoPlay muted loop playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/video1.webm" type="video/webm" />
              <source src="/videos/video1.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* 🎨 معرض الأقسام */}
        <section className="px-5 max-w-6xl mx-auto mt-20">
          {SECTIONS.map((section) => (
            <article key={section.id} className="flex flex-wrap items-stretch bg-slate-950/85 rounded-[40px] overflow-hidden mb-16 shadow-2xl border border-white/10 hover:border-amber-400/50 transition-all duration-300">

              {/* 📝 قسم النص (يمين) */}
              <div className="flex-1 min-w-[300px] p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-black text-white mb-4 drop-shadow-md">
                  <span className="text-amber-400 ml-2">|</span>{section.title}
                </h2>
                <p className="text-white text-base leading-loose font-medium mb-6 drop-shadow-sm">
                  {section.desc}
                </p>
                <ul className="space-y-3 mb-10">
                  {section.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-amber-50 font-semibold drop-shadow-sm">
                      <span className="text-amber-400 ml-3 text-lg">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={section.link} className="inline-block bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-4 rounded-full font-black shadow-lg hover:brightness-110 transition-all w-fit">
                  الدخول لمعرض القسم ←
                </a>
              </div>

              {/* 🖼️ قسم الصورة (يسار) */}
              <div className="flex-1 min-w-[300px] relative min-h-[400px] group overflow-hidden">
                <Image
                  src={`/images/paint${section.imgNum}.webp`}
                  alt={section.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/60 flex items-end justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-slate-950/90 backdrop-blur-md border border-amber-400/40 text-amber-400 px-6 py-3 rounded-2xl font-bold shadow-2xl">
                    👆 اضغط على الصورة لفتح {section.title}
                  </div>
                </div>
                <a href={section.link} className="absolute inset-0" title={section.title}></a>
              </div>
            </article>
          ))}

          {/* ⭐️ كارت التقييم */}
          <div className="bg-slate-950/85 p-12 rounded-[40px] text-center shadow-2xl border border-white/10">
            <div className="text-amber-400 text-4xl mb-4">★★★★★</div>
            <p className="text-xl font-black text-white leading-relaxed italic drop-shadow-sm">"شغل احترافي، دقة في المواعيد، ونتيجة فاخرة جداً."</p>
            <p className="text-amber-200 font-bold mt-6 drop-shadow-sm">— ابو فهد (حي الملقا)</p>
          </div>
        </section>
      </div>

      <ContactButtons phoneNumber={PHONE_NUMBER} />
    </main>
  );
}
