import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // هذا الجزء هو المسؤول عن تحويل الروابط القديمة .html لتعمل مع نظام Next.js الجديد
  async redirects() {
    return [
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true, // يخبر جوجل أن هذا توجيه دائم (301) للحفاظ على الأرشفة
      },
    ]
  },
};

export default nextConfig;