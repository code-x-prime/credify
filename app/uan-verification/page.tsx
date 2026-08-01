import type { Metadata } from 'next'
import UanServiceClient from './UanServiceClient'

export const metadata: Metadata = {
  title: 'UAN Verification Services — Credify India',
  description:
    'Could missing or unclear employment details impact your upcoming hiring choices? Credify India offers UAN Verification Services for accurate employment verification.',
}

export default function UanVerificationPage() {
  return <UanServiceClient />
}
