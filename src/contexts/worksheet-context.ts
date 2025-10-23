import { createContext } from 'react'
import type { WorksheetItem, Worksheet } from '../types/worksheet'

export interface WorksheetContextType {
  worksheet: Worksheet
  addItem: (item: Omit<WorksheetItem, 'id' | 'savedAt'>) => void
  removeItem: (id: string) => void
  updateNotes: (id: string, notes: string) => void
  clearWorksheet: () => void
}

export const WorksheetContext = createContext<WorksheetContextType | undefined>(undefined)

