import type { Metadata } from 'next'
import DriverServiceClient from './DriverServiceClient'

export const metadata: Metadata = {
  title: 'Driver Verification Services — Credify India',
  description:
    'Can you really hand over a vehicle without first checking the driver’s background? Credify India offers Driver Verification Services for safer fleet & workforce management.',
}

export default function DriverVerificationPage() {
  return <DriverServiceClient />
}
