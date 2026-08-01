import type { Metadata } from 'next'
import FaceMatchClient from './FaceMatchClient'

export const metadata: Metadata = {
  title: 'Face Match API — Credify India',
  description:
    'Face Match API for Secure Identity Verification & Fraud Prevention. Compare facial images safely with AI-powered, scalable API integrations.',
}

export default function FaceMatchApiPage() {
  return <FaceMatchClient />
}
