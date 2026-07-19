'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

export default function FloatingDemoButton() {
  const { openDemoModal } = useDemoModal()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={openDemoModal}
        className="relative flex items-center bg-[#16a34a] text-white rounded-full shadow-[0_4px_24px_rgba(22,163,74,0.4)] hover:shadow-[0_6px_32px_rgba(22,163,74,0.5)] transition-shadow duration-300 overflow-hidden"
        aria-label="Request a Demo"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-[pulse-ring_2.5s_ease-out_infinite] pointer-events-none" />

        {/* Icon (always visible) */}
        <span className="relative z-10 flex items-center justify-center w-14 h-14 sm:w-14 sm:h-14">
          <Calendar size={22} strokeWidth={2} />
        </span>

        {/* Expanded text (desktop hover only) */}
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative z-10 text-sm font-semibold whitespace-nowrap overflow-hidden pr-5 hidden sm:block"
            >
              Request a Demo
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
