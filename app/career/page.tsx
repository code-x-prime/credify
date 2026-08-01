import type { Metadata } from 'next'
import CareerClient from './CareerClient'

export const metadata: Metadata = {
  title: 'Careers — Join Credify India Verification & Tech Team',
  description:
    'Build the future of verification & intelligence with Credify India. Explore open opportunities across engineering, product, operations, and business growth.',
}

export default function CareerPage() {
  return <CareerClient />
}
