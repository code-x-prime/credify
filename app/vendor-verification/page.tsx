import type { Metadata } from 'next'
import VendorServiceClient from './VendorServiceClient'

export const metadata: Metadata = {
  title: 'Vendor Verification Services — Credify India',
  description:
    'Can working with an unchecked vendor put your operations, finances, or compliance at risk? Credify India offers Vendor Verification Services for secure business partnerships.',
}

export default function VendorVerificationPage() {
  return <VendorServiceClient />
}
