import { useState, useEffect, type ReactNode } from 'react'
import { useToast } from '../hooks/useToast'
import type { WorksheetItem, Worksheet } from '../types/worksheet'
import { WorksheetContext, type WorksheetContextType } from './worksheet-context'

interface WorksheetProviderProps {
  children: ReactNode
}

export function WorksheetProvider({ children }: WorksheetProviderProps) {
  const { showToast } = useToast()
  const [worksheet, setWorksheet] = useState<Worksheet>(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem('squareone-worksheet')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        return {
          ...parsed,
          items: parsed.items.map((item: WorksheetItem) => ({
            ...item,
            savedAt: new Date(item.savedAt)
          }))
        }
      } catch (error) {
        console.error('Error loading worksheet from localStorage:', error)
      }
    }
    
    // Default empty worksheet
    return {
      id: 'default',
      items: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  })

  // Save to localStorage whenever worksheet changes
  useEffect(() => {
    localStorage.setItem('squareone-worksheet', JSON.stringify(worksheet))
  }, [worksheet])

  const addItem = (itemData: Omit<WorksheetItem, 'id' | 'savedAt'>) => {
    const newItem: WorksheetItem = {
      ...itemData,
      id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      savedAt: new Date()
    }

    setWorksheet(prev => ({
      ...prev,
      items: [...prev.items, newItem],
      updatedAt: new Date()
    }))

    showToast({
      type: 'success',
      title: 'Saved to Worksheet',
      message: `${itemData.title} has been added to your worksheet.`,
      duration: 3000
    })
  }

  const removeItem = (id: string) => {
    setWorksheet(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id),
      updatedAt: new Date()
    }))
  }

  const updateNotes = (id: string, notes: string) => {
    setWorksheet(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === id ? { ...item, notes } : item
      ),
      updatedAt: new Date()
    }))
  }

  const clearWorksheet = () => {
    setWorksheet(prev => ({
      ...prev,
      items: [],
      updatedAt: new Date()
    }))
  }

  const value: WorksheetContextType = {
    worksheet,
    addItem,
    removeItem,
    updateNotes,
    clearWorksheet
  }

  return (
    <WorksheetContext.Provider value={value}>
      {children}
    </WorksheetContext.Provider>
  )
}
