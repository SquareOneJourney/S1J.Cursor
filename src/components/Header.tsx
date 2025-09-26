import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, FileText, Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  onOpenLogin: () => void;
  onOpenSignUp: () => void;
}

export const Header = ({ onOpenLogin, onOpenSignUp }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/')}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
            tabIndex={0}
            role="button"
            aria-label="Go to homepage"
          >
            <img 
              src="/logo.svg" 
              alt="SquareOneJourney Logo" 
              className="w-10 h-10 mr-3"
            />
            <div className="text-2xl font-bold text-blue-600 font-heading">
              SquareOne<span className="text-gray-900">Journey</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate('/')}
              onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
              aria-label="Navigate to home page"
            >
              <Home size={16} />
              <span>Home</span>
            </button>


            {user && (
              <button
                onClick={() => navigate('/worksheet')}
                onKeyDown={(e) => e.key === 'Enter' && navigate('/worksheet')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/worksheet')
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                aria-label="Navigate to worksheet page"
              >
                <FileText size={16} />
                <span>My Worksheet</span>
              </button>
            )}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  {user.email}
                </span>
                <button
                  onClick={signOut}
                  onKeyDown={(e) => e.key === 'Enter' && signOut()}
                  className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
                  aria-label="Sign out of account"
                >
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={onOpenLogin}
                  onKeyDown={(e) => e.key === 'Enter' && onOpenLogin()}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  aria-label="Open sign in modal"
                >
                  Sign In
                </button>
                <button
                  onClick={onOpenSignUp}
                  onKeyDown={(e) => e.key === 'Enter' && onOpenSignUp()}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                  aria-label="Open sign up modal"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleToggleMenu}
              onKeyDown={(e) => e.key === 'Enter' && handleToggleMenu()}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>


        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <button
                onClick={() => handleNavigate('/')}
                onKeyDown={(e) => e.key === 'Enter' && handleNavigate('/')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                aria-label="Navigate to home page"
              >
                Home
              </button>
              {user && (
                <button
                  onClick={() => handleNavigate('/worksheet')}
                  onKeyDown={(e) => e.key === 'Enter' && handleNavigate('/worksheet')}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/worksheet')
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  aria-label="Navigate to worksheet page"
                >
                  My Worksheet
                </button>
              )}
              <div className="border-t border-gray-200 pt-3">
                {user ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-sm text-gray-500">
                      {user.email}
                    </div>
                    <button
                      onClick={() => {
                        signOut();
                        setIsMenuOpen(false);
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && (signOut(), setIsMenuOpen(false))}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                      aria-label="Sign out of account"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        onOpenLogin();
                        setIsMenuOpen(false);
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && (onOpenLogin(), setIsMenuOpen(false))}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      aria-label="Open sign in modal"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        onOpenSignUp();
                        setIsMenuOpen(false);
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && (onOpenSignUp(), setIsMenuOpen(false))}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-50"
                      aria-label="Open sign up modal"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

    </header>
  );
}
