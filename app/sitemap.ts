import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://credify.in' // Replace with production domain if needed

  const routes = [
    '',
    '/about',
    '/aadhaar-verification-api',
    '/kyc-api',
    '/pan-verification-api',
    '/identity-verification-api',
    '/face-match-api',
    '/liveness-detection-api',
    '/risk-intelligence-api',
    '/career',
    '/contact',
    '/business-verification-api',
    '/document-ocr-api',
    '/uan-verification-api',
    '/gst-verification-api',
    '/employee-background-verification',
    '/employment-verification',
    '/court-record-verification',
    '/education-verification',
    '/police-verification',
    '/criminal-background-check',
    '/address-verification',
    '/credit-check-verification',
    '/drug-screening-verification',
    '/uan-verification',
    '/document-verification',
    '/vendor-verification',
    '/tenant-verification',
    '/driver-verification',
    '/due-diligence-services',
  ]

  const currentDate = new Date().toISOString()

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/about' ? 0.8 : 0.9,
  }))
}
