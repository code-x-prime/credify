import Link from 'next/link'
import { ArrowRight, SearchX } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-white">
      <div className="text-center max-w-md mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-6">
          <SearchX className="w-8 h-8 text-[#001f7d]" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Page Not Found</h1>
        <p className="text-slate-500 text-sm sm:text-base mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 bg-[#001f7d] text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-[#f97316] transition-all duration-300 shadow-[0_4px_20px_rgba(0,31,125,0.3)]"
        >
          Back to Homepage
          <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  )
}
