"use client";
import React from 'react';

// أيقونة الذكاء الاصطناعي (تم تكبيرها لتناسب الحجم الجديد)
const AI_Icon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a1 1 0 0 1 .15 1.99c.07.01.12.01.19.01H12zm0-2a2.001 2.001 0 0 0 0 4h.34A6.002 6.002 0 0 1 18 10c0 .34-.03.68-.08 1.01h.34A2.001 2.001 0 0 0 20.26 13c-.01-.34-.03-.68-.08-1.01H20.26A6.002 6.002 0 0 1 14 18h.34A2.001 2.001 0 0 0 16.26 21c-.01-.34-.03-.68-.08-1.01h.34A6.002 6.002 0 0 1 10 14h-.34A2.001 2.001 0 0 0 7.74 11c.01-.34.03-.68.08-1.01H7.74A6.002 6.002 0 0 1 14 4h.34A2.001 2.001 0 0 0 16.26 1H16.26c-.34.05-.68.08-1.01.08zM10.19 14.19a4 4 0 1 0 7.62 0H10.19zm1.81.81a2 2 0 1 1-3.81 0h3.81zM11.81 9.19a4 4 0 1 1 7.62 0h-7.62zm1.81-.81a2 2 0 1 0 3.81 0h-3.81z" />
    </svg>
);

export default function ContactButtons({ phoneNumber }: { phoneNumber: string }) {
    const whatsappLink = `https://wa.me/966${phoneNumber.substring(1)}`;

    const trackConversion = (type: 'call' | 'whatsapp' | 'chat') => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
                'send_to': 'AW-18028385637/tiS7CJHgxZIcEOWqzZRD',
                'event_category': 'Contact',
                'event_label': type === 'call' ? 'Phone Call' : type === 'whatsapp' ? 'WhatsApp Click' : 'Chat Click'
            });
        }
    };

    const openChat = () => {
        trackConversion('chat');
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('toggle-nawaf-chat'));
        }
    };

    return (
        // تم رفع الأزرار للأعلى قليلاً (bottom-[60px]) وزيادة الفراغ بينها (gap-5)
        <div className="fixed bottom-[60px] left-[20px] flex flex-col items-center gap-5 z-[99998]">

            {/* 1. زر شات الذكاء الاصطناعي (أصبح بيضاوياً ويحتوي على نص) */}
            <button
                onClick={openChat}
                aria-label="تحدث مع الذكاء الاصطناعي"
                className="h-[75px] px-6 bg-[#1e293b] text-[#fbbf24] rounded-full flex items-center justify-center gap-3 cursor-pointer shadow-2xl border-2 border-[#fbbf24] hover:bg-slate-800 hover:scale-105 transition-all duration-300"
            >
                <AI_Icon />
                <span className="text-xl font-black whitespace-nowrap">شات ذكي</span>
            </button>

            {/* 2. زر الواتساب (تم تكبيره إلى 75px) */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('whatsapp')}
                aria-label="تواصل معنا عبر الواتساب"
                className="w-[75px] h-[75px] bg-[#25D366] text-white rounded-full flex items-center justify-center no-underline shadow-2xl hover:bg-green-600 hover:scale-105 transition-all duration-300"
            >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.658 1.43 5.63 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </a>

            {/* 3. زر الاتصال (تم تغيير اللون للذهبي مع نص أسود داكن، وتكبير الحجم) */}
            <a
                href={`tel:${phoneNumber}`}
                onClick={() => trackConversion('call')}
                className="h-[75px] px-8 bg-[#d4af37] text-slate-950 rounded-full flex items-center justify-center gap-3 text-2xl font-black no-underline shadow-2xl border-2 border-[#fef08a] hover:bg-[#c29b27] hover:scale-105 transition-all duration-300"
            >
                <span className="text-3xl">📞</span> اتصل الآن
            </a>
        </div>
    );
}
