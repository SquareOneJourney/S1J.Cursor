import React, { useEffect, useState } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import { showWelcomeMessage } from '../api/send-welcome-email'
import { AuthContext, type AuthContextType } from './auth-context'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
      
      // Send welcome email for new Google OAuth users
      if (event === 'SIGNED_IN' && session?.user) {
        handleNewUserWelcome(session.user)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleNewUserWelcome = async (user: User) => {
    try {
      // Check if this is a new user (created within the last few seconds)
      const now = new Date()
      const userCreatedAt = new Date(user.created_at)
      const timeDiff = now.getTime() - userCreatedAt.getTime()
      
      // If user was created within the last 30 seconds, send welcome email
      if (timeDiff < 30000) {
        const userData = {
          email: user.email || '',
          name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'User',
          provider: user.app_metadata?.provider || 'email'
        }
        
        // Show welcome message
        showWelcomeMessage(userData)
      }
    } catch (error) {
      console.log('Welcome email error:', error)
      // Don't throw error - this shouldn't break the auth flow
    }
  }

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })
    return { error }
  }

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { error }
  }

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/`,
      },
    })
    return { error }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  const value: AuthContextType = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

