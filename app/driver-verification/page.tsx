import type { Metadata } from 'next'
import DriverServiceClient from './DriverServiceClient'

export const metadata: Metadata = {
  title: 'Driver Verification Services — Credify India',
  description:
    'Credify India offers comprehensive Driver Verification Services for safer fleet and workforce management, verifying driving history and background before deployment.',
  alternates: {
    canonical: '/driver-verification',
  },
}

export default function DriverVerificationPage() {
  return <DriverServiceClient />
}
