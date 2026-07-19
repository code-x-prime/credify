'use client'

import { createContext, useCallback, useContext, useState } from 'react'

interface DemoModalContextType {
  isOpen: boolean
  openDemoModal: () => void
  closeDemoModal: () => void
}

const DemoModalContext = createContext<DemoModalContextType>({
  isOpen: false,
  openDemoModal: () => {},
  closeDemoModal: () => {},
})

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const openDemoModal = useCallback(() => setIsOpen(true), [])
  const closeDemoModal = useCallback(() => setIsOpen(false), [])

  return (
    <DemoModalContext.Provider value={{ isOpen, openDemoModal, closeDemoModal }}>
      {children}
    </DemoModalContext.Provider>
  )
}

export function useDemoModal() {
  return useContext(DemoModalContext)
}
