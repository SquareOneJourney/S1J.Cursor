import React, { useState } from 'react'
import { X, Mail, Lock } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToSignUp: () => void
}

export const LoginModal = ({ isOpen, onClose, onSwitchToSignUp }: LoginModalProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { signIn, signInWithGoogle } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await signIn(email, password)
    
    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }
    
    onClose()
    setLoading(false)
  }

  const handleGoogleSignIn = async () => {
    setError('')
    setLoading(true)
    
    const { error } = await signInWithGoogle()
    
    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }
    // Note: If successful, user will be redirected, so we don't need to handle success here
  }

  const handleClose = () => {
    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4 overflow-y-auto"
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-title"
    >
      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full my-8 border border-gray-100/50 shadow-2xl">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 opacity-50 rounded-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 id="login-title" className="text-3xl font-light text-gray-900 font-heading bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <button
              onClick={handleClose}
              onKeyDown={(e) => e.key === 'Enter' && handleClose()}
              className="text-gray-400 hover:text-gray-600 transition-all duration-300 p-2 rounded-xl hover:bg-gray-100"
              aria-label="Close login modal"
              tabIndex={0}
            >
              <X size={24} />
            </button>
          </div>

          {/* Google Sign In Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            onKeyDown={(e) => e.key === 'Enter' && handleGoogleSignIn()}
            disabled={loading}
            className="group w-full flex items-center justify-center px-6 py-4 border border-gray-200/50 rounded-2xl text-gray-700 bg-white/80 backdrop-blur-sm hover:bg-white hover:border-gray-300 hover:shadow-lg disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-500 mb-8"
            aria-label="Sign in with Google"
          >
            <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="font-medium">Continue with Google</span>
          </button>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-300 bg-white/80 backdrop-blur-sm transition-all duration-300"
                placeholder="Enter your email"
                required
                aria-describedby="email-error"
                autoComplete="email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-3">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-300 bg-white/80 backdrop-blur-sm transition-all duration-300"
                placeholder="Enter your password"
                required
                aria-describedby="password-error"
                autoComplete="current-password"
              />
            </div>
          </div>

          {error && (
            <div 
              id="login-error"
              className="bg-red-50/80 backdrop-blur-sm border border-red-200/50 text-red-700 px-4 py-3 rounded-2xl"
              role="alert"
              aria-live="polite"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="group w-full bg-black text-white py-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-500 font-medium"
            aria-describedby={error ? "login-error" : undefined}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600 font-light">
            Don't have an account?{' '}
            <button
              onClick={onSwitchToSignUp}
              onKeyDown={(e) => e.key === 'Enter' && onSwitchToSignUp()}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
              tabIndex={0}
              aria-label="Switch to sign up form"
            >
              Create one
            </button>
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}
