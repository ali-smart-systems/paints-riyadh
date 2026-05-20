// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/', '/private/'],
            },
            {
                userAgent: 'Googlebot-Image',
                allow: '/',
            },
        ],
        sitemap: 'https://www.paints-riyadh.com/sitemap.xml',
    }
}