import type { Metadata } from 'next'
import DocServiceClient from './DocServiceClient'


export const metadata: Metadata = {
  title: 'Document Verification Services — Credify India',
  description:
    'Fast, Secure & Reliable Document Verification Services with Credify India. ISO 27001, ISO 9001 certified and SOC 2 audited partner.',
}

export default function DocumentVerificationPage() {
  return <DocServiceClient />
}
