"use client";
import React, { useState, useEffect, useRef } from 'react';

const NawafChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'أهلاً بك يا هندسة.. أنا مساعد مؤسسة ابو نشمي للديكورات، كيف أقدر أخدمك اليوم؟' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // الاستماع لإشارة الفتح القادمة من الأزرار
    useEffect(() => {
        const toggleChat = () => setIsOpen(prev => !prev);
        window.addEventListener('toggle-nawaf-chat', toggleChat);
        return () => window.removeEventListener('toggle-nawaf-chat', toggleChat);
    }, []);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || loading) return;

        const userMsg = { role: 'user', text: input };
        const newMessages = [...messages, userMsg];
        setMessages(newMessages);
        setInput('');
        setLoading(true);

        const userMessageCount = newMessages.filter(m => m.role === 'user').length;

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input, messageCount: userMessageCount }),
            });
            const data = await res.json();
            setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'bot', text: 'المعذرة، عندي ضغط رسايل حالياً.. كلمني مباشرة 0536242933' }]);
        } finally {
            setLoading(false);
        }
    };

    // إذا كانت النافذة مغلقة، لا ترجع أي شيء (لا يوجد زر)
    if (!isOpen) return null;

    return (
        <div className="fixed bottom-[30px] left-[100px] z-[999999] w-[320px] h-[450px] bg-white rounded-[20px] shadow-2xl flex flex-col border border-slate-200 overflow-hidden font-sans transition-all duration-300" dir="rtl">

            {/* هيدر الشات */}
            <div className="bg-[#0f172a] text-[#fbbf24] p-4 text-center font-black text-lg border-b border-[#fbbf24]/30 flex justify-between items-center">
                <span>مساعد ابو نشمي للديكورات</span>
                <button onClick={() => setIsOpen(false)} className="text-white hover:text-red-400 text-xl">✕</button>
            </div>

            {/* منطقة الرسائل */}
            <div ref={scrollRef} className="flex-1 p-4 bg-slate-50 overflow-y-auto flex flex-col gap-3">
                {messages.map((msg, i) => (
                    <div key={i} className={`px-4 py-2.5 rounded-2xl max-w-[85%] text-[15px] shadow-sm ${msg.role === 'user'
                        ? 'self-end bg-[#e63946] text-white rounded-br-none'
                        : 'self-start bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                        }`}>
                        {msg.text}
                    </div>
                ))}
                {loading && <div className="text-xs text-slate-500 font-medium animate-pulse self-start">جاري الكتابة...</div>}
            </div>

            {/* حقل الإدخال */}
            <div className="p-3 bg-white border-t border-slate-200 flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    className="flex-1 p-3 bg-slate-100 border border-slate-200 rounded-xl outline-none text-slate-800 text-sm focus:border-[#e63946] focus:bg-white transition-colors"
                    placeholder="اسأل عن الأسعار أو الأنواع..."
                />
                <button
                    onClick={handleSend}
                    className="bg-[#e63946] text-white px-5 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-md"
                >
                    إرسال
                </button>
            </div>
        </div>
    );
};

export default NawafChat;
