import type { Metadata } from 'next'
import IdentityClient from './IdentityClient'

export const metadata: Metadata = {
  title: 'Identity Verification API — Credify India',
  description:
    "Accelerate Customer Onboarding using Credify India's Identity Verification API. Securely verify identities in a flash, improve compliance, and mitigate fraud risks.",
}

export default function IdentityVerificationPage() {
  return <IdentityClient />
}
