import { createContext } from 'react'
import type { ToastType } from '../components/ui/Toast'

export interface ToastOptions {
  type: ToastType
  title: string
  message?: string
  duration?: number
}

export interface ToastContextType {
  showToast: (toast: ToastOptions) => void
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined)

