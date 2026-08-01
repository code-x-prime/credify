import type { Metadata } from 'next'
import KycClient from './KycClient'

export const metadata: Metadata = {
  title: 'KYC API — Credify India',
  description:
    'Speed up customer onboarding with Credify India’s KYC API. Automate Know Your Customer verification, simplify compliance workflows, and give secure onboarding experiences.',
}

export default function KycApiPage() {
  return <KycClient />
}
