'use client'

import { DemoModalProvider } from '@/contexts/DemoModalContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingDemoButton from '@/components/FloatingDemoButton'
import DemoModal from '@/components/DemoModal'
import ScrollToTop from '@/components/ScrollToTop'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <DemoModalProvider>
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
      <FloatingDemoButton />
      <DemoModal />
    </DemoModalProvider>
  )
}
