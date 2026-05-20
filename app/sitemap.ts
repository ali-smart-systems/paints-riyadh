// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.paints-riyadh.com'

  // تمت إضافة الرابط الناقص (wallpaper-install) لتصبح 11 صفحة مؤرشفة
  const links = [
    '',
    '/interior-paints',
    '/exterior-paints',
    '/commercial-paints',
    '/apartments-paints',
    '/flats-paints',
    '/wallpapers-paints',
    '/wallpaper-install', // ← الرابط الجديد
    '/wall-repair',
    '/painting-consultation',
    '/latest-works'
  ]

  return links.map((link) => ({
    url: `${baseUrl}${link}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: link === '' ? 1 : 0.8,
  }))
}