import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Us — Credify India',
  description:
    'Building Trust Through Every Verification Since 2015. Learn more about Credify India, our mission, vision, principles, and certifications.',
}

export default function AboutPage() {
  return <AboutClient />
}
