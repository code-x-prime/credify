import type { Metadata } from 'next'
import DueDiligenceClient from './DueDiligenceClient'

export const metadata: Metadata = {
  title: 'Due Diligence Services — Credify India',
  description:
    'Credify India’s Due Diligence Services help organizations review people, companies, and third-party organizations through structured due diligence processes.',
  alternates: {
    canonical: '/due-diligence-services',
  },
}

export default function DueDiligencePage() {
  return <DueDiligenceClient />
}
