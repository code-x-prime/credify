import type { Metadata } from 'next'
import UanClient from './UanClient'

export const metadata: Metadata = {
  title: 'UAN Verification API — Credify India',
  description:
    'Simplify employment verification with Credify India’s UAN Verification API. Check UAN-related employment information securely to speed up employee onboarding.',
}

export default function UanVerificationPage() {
  return <UanClient />
}
