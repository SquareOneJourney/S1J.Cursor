import { useContext } from 'react'
import { WorksheetContext } from '../contexts/worksheet-context'

export function useWorksheet() {
  const context = useContext(WorksheetContext)
  if (context === undefined) {
    throw new Error('useWorksheet must be used within a WorksheetProvider')
  }
  return context
}
