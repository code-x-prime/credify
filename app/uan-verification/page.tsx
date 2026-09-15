import type { Metadata } from 'next'
import UanServiceClient from './UanServiceClient'

export const metadata: Metadata = {
  title: 'UAN Verification Services — Credify India',
  description:
    'Credify India offers UAN Verification Services for accurate, reliable employment history verification to support informed hiring decisions.',
  alternates: {
    canonical: '/uan-verification',
  },
}

export default function UanVerificationPage() {
  return <UanServiceClient />
}
