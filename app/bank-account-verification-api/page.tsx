import type { Metadata } from 'next'
import BankAccountClient from './BankAccountClient'

export const metadata: Metadata = {
  title: 'Bank Account Verification API — Credify India',
  description:
    'Bank Account Verification API for Secure Payments & Customer Verification. Automate account verification, reduce failed payments, and enhance compliance with secure API integrations.',
}

export default function BankAccountVerificationPage() {
  return <BankAccountClient />
}