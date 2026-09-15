import type { Metadata } from 'next'
import VendorServiceClient from './VendorServiceClient'

export const metadata: Metadata = {
  title: 'Vendor Verification Services — Credify India',
  description:
    'Credify India offers Vendor Verification Services to support secure business partnerships through structured operational, financial, and compliance risk evaluation.',
  alternates: {
    canonical: '/vendor-verification',
  },
}

export default function VendorVerificationPage() {
  return <VendorServiceClient />
}
