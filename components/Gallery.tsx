import React from 'react';
import Image from 'next/image';

interface GalleryProps {
    title: string; // اسم القسم، مثال: "دهانات داخلية"
}

// عبارات وصفية حقيقية لكل صورة بحسب القسم (لم نلمسها للحفاظ على قوة الـ SEO)
const galleryAlts: Record<string, string[]> = {
    "دهانات داخلية": [
        "دهان غرفة معيشة مودرن بحي النرجس بالرياض بألوان عصرية 2026",
        "تشطيب دهانات غرف نوم أطفال حي الياسمين، أصباغ جوتن آمنة",
        "دهان داخلي مميز مع ديكور جبسي بحي الملقا بأسعار منافسة",
        "تنفيذ دهان جدران غرفة استقبال بحي الصحافة مع ألوان هادئة"
    ],
    "دهانات خارجية": [
        "دهان خارجي مقاوم للأمطار والحرارة في فيلا حي الأندلس بالرياض",
        "طلاء واجهة منزل حديث بحي الروضة باستخدام أصباغ مقاومة للشمس",
        "تشطيب واجهة مبنى إداري بالملقا بأصباغ فاخرة",
        "دهان جدران خارجية لفيلا كلاسيكية مع عزل بالرمال"
    ],
    "دهانات فلل": [
        "دهان فخم لصالة رئيسية في فيلا راقية شمال الرياض",
        "تشطيب دهانات مودرن في فيلا مستقلة بحي الياسمين",
        "تنفيذ دهانات زخرفية مع جبس في فيلا بحي التعاون",
        "أصباغ فاخرة لجدران غرف النوم بلمسة ملكية خاصة"
    ],
    "دهانات شقق": [
        "دهان غرف شقة في حي المروج بالرياض بألوان حديثة 2026",
        "دهان جدران شقة صغيرة في العليا بلمسة عصرية",
        "تشطيب سريع وراقي لجدران شقق حي المونسية",
        "دهانات داخلية شقق عائلية بجودة مضمونة وبدون رائحة"
    ],
    "ورق جدران": [
        "تركيب ورق جدران ثلاثي الأبعاد في غرفة أطفال بحي الحمراء",
        "ورق جدران مودرن لصالة استقبال بالرياض - تصميم فاخر",
        "تنسيق ورق جدران كلاسيكي مع أصباغ جوتن في الرياض",
        "تركيب ورق جدران مقاوم للرطوبة في حمام شقة حديثة"
    ],
    "افتراضي": [
        "صورة دهانات وديكورات بالرياض - تنفيذ 2026",
        "خدمة معلم دهانات محترف لكل أحياء الرياض",
        "أفضل أصباغ حديثة وتشطيبات فاخرة بالرياض",
        "تنفيذ دهان وورق جدران وديكورات بأعلى جودة"
    ]
};

const getImageAlt = (section: string, num: number): string => {
    if (galleryAlts[section] && galleryAlts[section][num - 1]) {
        return `${galleryAlts[section][num - 1]}`;
    }
    if (galleryAlts["افتراضي"] && galleryAlts["افتراضي"][num - 1]) {
        return `${section} - ${galleryAlts["افتراضي"][num - 1]}`;
    }
    return `${section} - صورة دهانات وديكورات بالرياض ${num}`;
};

export default function Gallery({ title }: GalleryProps) {
    return (
        <div className="w-full space-y-8 mt-10 px-4 text-right" dir="rtl">
            {/* عنوان القسم بتصميم احترافي وجذاب */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-[#e63946] to-[#0f172a] rounded-full shadow-sm"></div>
                <h3 className="text-2xl md:text-3xl font-black text-[#0f172a] tracking-tight">
                    {title}
                </h3>
            </div>

            {/* شبكة الصور الموحدة - Responsive */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {[1, 2, 3, 4].map((num) => (
                    <div
                        key={num}
                        className="group relative bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                    >
                        {/* ⚡ حاوية الصورة (Aspect Square) تضمن أن كل الصور مربعة ومتناسقة مهما كان حجمها الأصلي */}
                        <div className="aspect-square relative bg-stone-100 overflow-hidden flex items-center justify-center">
                            <Image
                                src={`/images/paint${num}.webp`} // ⚡ تم توجيهها لصيغ webp الخفيفة التي جهزناها
                                alt={getImageAlt(title, num)}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                                loading="lazy"
                            />

                            {/* تأثير التدرج الأسود المخفي الذي يظهر عند تمرير الماوس */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* شارة أو زر تفاعلي يظهر بحركة ناعمة للمستخدم */}
                            <div className="absolute bottom-4 right-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                                <span className="bg-[#e63946] text-white text-[10px] sm:text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-white/20">
                                    أعمالنا 📸
                                </span>
                            </div>
                        </div>

                        {/* شريط الوصف السفلي الأنيق */}
                        <div className="p-3 text-center bg-white border-t border-gray-50 group-hover:bg-[#f8fafc] transition-colors">
                            <p className="text-[11px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider">
                                نموذج رقم {num}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
