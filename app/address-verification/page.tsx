import type { Metadata } from 'next'
import AddressClient from './AddressClient'

export const metadata: Metadata = {
  title: 'Address Verification Services — Credify India',
  description:
    'Verify residential addresses with confidence through Credify India’s address verification services. ISO 27001, ISO 9001 certified and SOC 2 audited partner.',
}

export default function AddressVerificationPage() {
  return <AddressClient />
}
