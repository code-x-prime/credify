import type { Metadata } from 'next'
import OcrClient from './OcrClient'

export const metadata: Metadata = {
  title: 'Document OCR API — Credify India',
  description:
    'Automate document data extraction with Credify India’s Document OCR API. Extract data from identity and business documents accurately with scalable API integration.',
}

export default function DocumentOcrPage() {
  return <OcrClient />
}
