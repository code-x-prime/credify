import type { Metadata } from 'next'
import CreditCheckClient from './CreditCheckClient'

export const metadata: Metadata = {
  title: 'Credit Check Verification Services — Credify India',
  description:
    'Make smart hiring choices with Credify India’s employee credit check services. ISO 27001, ISO 9001 certified and SOC 2 audited partner.',
}

export default function CreditCheckPage() {
  return <CreditCheckClient />
}
