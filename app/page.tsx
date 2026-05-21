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
    desc: "نحول مساحاتك الداخلية إلى لوحات فنية تنبض بالحياة، باستخدام أحدث كتالوجات الألوان العالمية لعام 2026.",
    features: [
      "دهانات قابلة للغسيل ومقاومة للبقع",
      "درجات ألوان مطفية ونصف لمعة فخمة",
      "تنفيذ دقيق بدون روائح مزعجة"
    ],
    link: "/interior-paints",
    imgNum: 1
  },
  {
    id: 2,
    title: "دهانات خارجية",
    desc: "نحمي واجهة منزلك ونبرز جمالها المعماري باستخدام أفضل أنواع الدهانات الخارجية.",
    features: [
      "عزل حراري ومائي متقدم",
      "مقاومة للتشققات وتغير الألوان",
      "استخدام دهانات أصلية"
    ],
    link: "/exterior-paints",
    imgNum: 2
  },
  {
    id: 3,
    title: "ترميم ومعالجة الجدران",
    desc: "حلول هندسية متكاملة لترميم الجدران القديمة.",
    features: [
      "معالجة الشروخ",
      "القضاء على الرطوبة",
      "صنفرة وتأسيس احترافي"
    ],
    link: "/wall-repair",
    imgNum: 3
  }
];

export default function Home() {
  return (
    <main
      className="pb-[140px] min-h-screen text-right font-sans relative overflow-hidden"
      dir="rtl"
    >

      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(JSON_LD),
        }}
      />

      {/* الخلفية الأساسية */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/paint18.webp"
          alt="خلفية"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* طبقة خفيفة فوق الخلفية فقط */}
      <div className="fixed inset-0 bg-black/20 z-[1]"></div>

      <div className="relative z-10">

        {/* الهيدر */}
        <header className="relative min-h-[550px] flex flex-col items-center justify-center text-center px-5 pt-20 pb-40">

          <div className="bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-black mb-6 shadow-md animate-pulse">
            خصم حصري 20% لجميع أحياء شمال الرياض ⚡
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            معلم دهانات <br />
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              وديكورات الرياض
            </span>
          </h1>


<p className="max-w-3xl mx-auto text-lg text-white leading-relaxed font-black mb-8 drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]">
            نحول رؤيتك إلى واقع بأيدي خبراء. تشطيبات متكاملة،
            دهانات حديثة، وديكورات فخمة تضفي طابعاً ملكياً
            على مساحتك.
          </p>

          <div className="flex flex-col items-center">
            <p className="text-white text-base mb-2 font-bold">
              📞 احجز استشارتك المجانية الآن
            </p>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="text-5xl md:text-7xl font-black text-amber-400 drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] tracking-wider hover:scale-105 transition-transform"
            >
              {PHONE_NUMBER}
            </a>
          </div>
        </header>

        {/* الفيديو */}
        <section className="px-5 max-w-6xl mx-auto -mt-24">
          <div className="rounded-[35px] overflow-hidden h-[350px] shadow-2xl border border-white/10">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/video1.webm" type="video/webm" />
              <source src="/videos/video1.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* الكروت */}
        <section className="px-5 max-w-6xl mx-auto mt-20">

          {SECTIONS.map((section) => (
            <article
              key={section.id}

              className="
              flex flex-wrap items-stretch
              rounded-[40px]
              overflow-hidden
              mb-16

              bg-white/5
              backdrop-blur-[3px]

              border border-white/10
              shadow-[0_8px_32px_rgba(0,0,0,0.35)]

              transition-all duration-300
              hover:border-amber-400/40
            "
            >

              {/* النص */}
              <div className="flex-1 min-w-[300px] p-8 md:p-12 flex flex-col justify-center">

                <h2 className="text-3xl font-black text-white mb-4">
                  <span className="text-amber-400 ml-2">|</span>
                  {section.title}
                </h2>

                <p className="text-white text-base leading-loose font-medium mb-6">
                  {section.desc}
                </p>

                <ul className="space-y-3 mb-10">
                  {section.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start text-amber-50 font-semibold"
                    >
                      <span className="text-amber-400 ml-3 text-lg">
                        ✔
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={section.link}
                  className="
                  inline-block
                  bg-gradient-to-r
                  from-amber-500
                  to-yellow-600
                  text-white
                  px-8 py-4
                  rounded-full
                  font-black
                  shadow-lg
                  hover:brightness-110
                  transition-all
                  w-fit
                "
                >
                  الدخول لمعرض القسم ←
                </a>
              </div>



{/* الصورة */}
              <div className="flex-1 min-w-[300px] relative min-h-[400px] group overflow-hidden">

                <Image
                  src={`/images/paint${section.imgNum}.webp`}
                  alt={section.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />

                {/* طبقة زجاجية شفافة جداً */}
                <div
                  className="
                    absolute inset-0
                    bg-white/5
                  "
                ></div>

                {/* رسالة hover */}
                <div
                  className="
                    absolute inset-0
                    flex items-end justify-center
                    p-8
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                  "
                >
                  <div
                    className="
                      bg-black/30
                      backdrop-blur-md
                      border border-white/20
                      text-white
                      px-6 py-3
                      rounded-2xl
                      font-bold
                      shadow-2xl
                    "
                  >
                    👆 اضغط على الصورة لفتح {section.title}
                  </div>
                </div>

                <a
                  href={section.link}
                  className="absolute inset-0"
                  title={section.title}
                ></a>
              </div>
            </article>
          ))}

          {/* كرت التقييم */}
          <div
            className="
              bg-white/5
              backdrop-blur-[4px]

              p-12
              rounded-[40px]
              text-center

              border border-white/10

              shadow-[0_8px_32px_rgba(0,0,0,0.35)]
            "
          >

            <div className="text-amber-400 text-4xl mb-4">
              ★★★★★
            </div>

            <p className="text-xl font-black text-white leading-relaxed italic">
              "شغل احترافي، دقة في المواعيد، ونتيجة فاخرة جداً."
            </p>

            <p className="text-amber-200 font-bold mt-6">
              — ابو فهد (حي الملقا)
            </p>

          </div>
        </section>
      </div>

      <ContactButtons phoneNumber={PHONE_NUMBER} />

    </main>
  );
}