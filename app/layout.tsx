// app/layout.tsx
import './globals.css';
import { Metadata, Viewport } from 'next';
import Script from 'next/script';
import NawafChat from '../components/NawafChat';

export const viewport: Viewport = {

  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a', // تم تحديثه ليطابق كود brand.primary بالضبط
};

export const metadata: Metadata = {
  title: 'ديكورات ودهانات شغف اللحظة',
  description: 'أفضل معلم ومقاول دهانات في الرياض، تنفيذ بويات داخلية وخارجية، بديل الرخام، الفوم، وورق جدران. نخدم أحياء العارض، النرجس، الملقا، الياسمين وكافة مناطق شمال الرياض بخصم 20%.',
  keywords: [
    "معلم دهانات الرياض", "صباغ حي العارض", "معلم بوية حي النرجس",
    "بديل الرخام شمال الرياض", "ديكورات فوم العارض", "دهانات جوتن النرجس",
    "مقاول ترميم الرياض", "دهانات حي الملقا", "صباغ حي الياسمين",
    "معلم ديكورات حطين", "تركيب ورق جدران الرياض", "دهانات حي القيروان"
  ],
  metadataBase: new URL('https://www.paints-riyadh.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'srE7zYz29bthebfKw-8K44rgGBfFAHoTBP1p0qvxN9Q',
  },
  openGraph: {
    title: 'معلم دهانات الرياض - خبرة وإبداع في الديكورات',
    description: 'تنفيذ كافة أعمال البويات والديكور (بديل رخام، فوم، خشب) بالرياض بأحدث التقنيات.',
    url: 'https://www.paints-riyadh.com',
    siteName: 'دهانات وديكورات الرياض',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "معلم دهانات وديكورات الرياض",
    "url": "https://www.paints-riyadh.com",
    "telephone": "+966536242933",
    "areaServed": [
      { "@type": "City", "name": "الرياض" },
      { "@type": "Neighborhood", "name": "حي العارض" },
      { "@type": "Neighborhood", "name": "حي النرجس" },
      { "@type": "Neighborhood", "name": "حي الملقا" },
      { "@type": "Neighborhood", "name": "حي الياسمين" },
      { "@type": "Neighborhood", "name": "حي حطين" },
      { "@type": "Neighborhood", "name": "حي القيروان" }
    ],
    "description": "تنفيذ أعمال الدهانات والديكور، بديل الرخام، الفوم، وورق الجدران في مدينة الرياض.",
    "priceRange": "$$"
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      {/* ⚡ التعديل هنا: حقن كلاسات Tailwind الأساسية مباشرة في الـ body */}
      <body className="antialiased bg-brand-primary text-white font-sans overflow-x-hidden selection:bg-brand-accent selection:text-white">

        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18028385637"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18028385637');
            gtag('config', 'G-LE7K3T2VJ8', {
              'send_page_view': true,
              'linker': { 'domains': ['www.paints-riyadh.com', 'paints-riyadh.com'] } 
            });
          `}
        </Script>

        <NawafChat />
      </body>
    </html>
  );
}
