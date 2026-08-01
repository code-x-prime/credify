import type { Metadata } from 'next'
import RiskIntelligenceClient from './RiskIntelligenceClient'

export const metadata: Metadata = {
  title: 'Risk Intelligence API — Credify India',
  description:
    'Risk Intelligence API for Smarter Fraud Detection & Risk Assessment. Make risk-aware business decisions with Credify India.',
}

export default function RiskIntelligencePage() {
  return <RiskIntelligenceClient />
}
