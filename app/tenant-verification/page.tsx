import type { Metadata } from 'next'
import TenantServiceClient from './TenantServiceClient'

export const metadata: Metadata = {
  title: 'Tenant Verification Services — Credify India',
  description:
    'Are you giving out keys to your place without really knowing the person? Credify India offers Tenant Verification Services for secure rental decisions.',
}

export default function TenantVerificationPage() {
  return <TenantServiceClient />
}
