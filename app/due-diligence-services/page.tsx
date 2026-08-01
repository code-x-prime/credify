import type { Metadata } from 'next'
import DueDiligenceClient from './DueDiligenceClient'

export const metadata: Metadata = {
  title: 'Due Diligence Services — Credify India',
  description:
    'Are you finalizing big business moves without checking the facts first? Credify India’s Due Diligence Services help organizations review people, companies, and outside parties.',
}

export default function DueDiligencePage() {
  return <DueDiligenceClient />
}
