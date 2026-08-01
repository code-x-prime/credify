import type { Metadata } from 'next'
import LivenessClient from './LivenessClient'

export const metadata: Metadata = {
  title: 'Liveness Detection API — Credify India',
  description:
    'Liveness Detection API for Secure Identity Verification & Fraud Prevention. Spot spoofing attempts and confirm real user presence with AI-powered API integrations.',
}

export default function LivenessDetectionPage() {
  return <LivenessClient />
}
