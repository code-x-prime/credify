import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const siteTitle = 'Credify — India\'s Trusted Background Verification Partner'
const siteDescription =
  "India's proven background verification services partner. Trusted by 50+ enterprises since 2015 for secure, accurate, and compliant background checks across 15+ service types."

export const metadata: Metadata = {
  metadataBase: new URL('https://credify.in'),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: 'https://credify.in',
    siteName: 'Credify India',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/credify-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Credify India — Trusted Background Verification Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/images/credify-og-image.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${inter.variable} scroll-smooth`} style={{ background: '#ffffff' }}>
      <body className="font-sans antialiased" style={{ background: '#ffffff', color: '#0f172a' }}>
        <ClientLayout>
          {children}
        </ClientLayout>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
