import type { Metadata } from 'next'
import TenantServiceClient from './TenantServiceClient'

export const metadata: Metadata = {
  title: 'Tenant Verification Services — Credify India',
  description:
    'Credify India offers comprehensive Tenant Verification Services to support secure, informed rental decisions through structured background checks.',
  alternates: {
    canonical: '/tenant-verification',
  },
}

export default function TenantVerificationPage() {
  return <TenantServiceClient />
}
