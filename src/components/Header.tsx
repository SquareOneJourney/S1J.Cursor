import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FileText, Menu, X, LogOut, Building2, Eye, TrendingUp, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  onOpenLogin: () => void;
  onOpenSignUp: () => void;
}

export const Header = ({ onOpenLogin, onOpenSignUp }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const { user, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleStageHover = (stageId: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setHoveredStage(stageId);
  };

  const handleStageLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredStage(null);
    }, 150); // 150ms delay before closing
    setHoverTimeout(timeout);
  };

  const stages = [
    {
      id: 'stage-1',
      title: 'Build the Foundation',
      icon: Building2,
      description: 'Establish essential foundations',
      items: [
        { title: 'Market Research', description: 'Validate your business idea', tileId: 'market-research-validation' },
        { title: 'Legal & Ethics', description: 'Set up business legally', tileId: 'basic-legal-business-ethics' },
        { title: 'Finance & Accounting', description: 'Establish financial foundations', tileId: 'finance-accounting' }
      ]
    },
    {
      id: 'stage-2', 
      title: 'Grow Visibility',
      icon: Eye,
      description: 'Build brand presence',
      items: [
        { title: 'Marketing & Outreach', description: 'Attract customers', tileId: 'marketing-outreach' },
        { title: 'Content Creation', description: 'Create engaging content', tileId: 'content-creation' },
        { title: 'AI Tools', description: 'Leverage AI for content', tileId: 'ai-content-creation' },
        { title: 'Customer Experience', description: 'Deliver exceptional service', tileId: 'customer-experience' }
      ]
    },
    {
      id: 'stage-3',
      title: 'Scale & Sustain', 
      icon: TrendingUp,
      description: 'Optimize and grow',
      items: [
        { title: 'Sales & Revenue', description: 'Optimize conversions', tileId: 'sales-conversions-revenue-optimization' },
        { title: 'Operations', description: 'Streamline processes', tileId: 'operations-productivity' },
        { title: 'Networking', description: 'Build partnerships', tileId: 'networking-partnerships' },
        { title: 'Growth & Scaling', description: 'Scale sustainably', tileId: 'growth-scaling-testing-experimentation' }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => navigate('/')}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
            tabIndex={0}
            role="button"
            aria-label="Go to homepage"
          >
            <div className="relative">
              <img 
                src="/S1J Logo Final.png" 
                alt="SquareOneJourney Logo" 
                className="w-10 h-10 mr-4 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
            </div>
            <div className="text-xl font-light text-black tracking-tight">
              <span className="font-medium">Square</span>
              <span className="text-gray-600">One</span>
              <span className="font-medium">Journey</span>
            </div>
          </div>

          {/* Desktop Navigation - Apple Style */}
          <nav className="hidden md:flex items-center space-x-8">
            {stages.map((stage) => (
              <div 
                key={stage.id}
                className="relative group"
                onMouseEnter={() => handleStageHover(stage.id)}
                onMouseLeave={handleStageLeave}
              >
                <button
                  onClick={() => navigate(`/start?stage=${stage.id}`)}
                  className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200"
                >
                  <span>{stage.title}</span>
                  <ChevronDown size={12} className={`transition-transform duration-200 ${hoveredStage === stage.id ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Apple-style Dropdown */}
                {hoveredStage === stage.id && (
                  <div 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100/50 backdrop-blur-xl overflow-hidden"
                    onMouseEnter={() => handleStageHover(stage.id)}
                    onMouseLeave={handleStageLeave}
                  >
                    <div className="p-4">
                      <div className="space-y-1">
                        {stage.items.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => navigate(`/start?stage=${stage.id}&tile=${item.tileId}`)}
                            className="w-full text-left p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group/item"
                          >
                            <div className="font-medium text-gray-900 text-sm group-hover/item:text-black">
                              {item.title}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {item.description}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {user && (
              <div className="relative group">
                <button
                  onClick={() => navigate('/worksheet')}
                  className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive('/worksheet')
                      ? 'text-black' 
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  <FileText size={16} />
                  <span>My Worksheet</span>
                </button>
              </div>
            )}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200">
                    <span className="text-sm text-gray-700 font-medium">
                      {user.email?.split('@')[0]}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
                </div>
                <div className="relative group">
                  <button
                    onClick={signOut}
                    onKeyDown={(e) => e.key === 'Enter' && signOut()}
                    className="relative px-6 py-3 text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-300 rounded-full"
                    aria-label="Sign out of account"
                  >
                    <span className="relative z-10">Sign Out</span>
                    <div className="absolute inset-0 bg-red-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="relative group">
                  <button
                    onClick={onOpenLogin}
                    onKeyDown={(e) => e.key === 'Enter' && onOpenLogin()}
                    className="relative px-6 py-3 text-sm font-medium text-gray-600 hover:text-black transition-all duration-300 rounded-full"
                    aria-label="Open sign in modal"
                  >
                    <span className="relative z-10">Sign In</span>
                    <div className="absolute inset-0 bg-gray-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                  </button>
                </div>
                <div className="relative group">
                  <button
                    onClick={onOpenSignUp}
                    onKeyDown={(e) => e.key === 'Enter' && onOpenSignUp()}
                    className="relative px-8 py-3 text-sm font-medium text-white transition-all duration-300 rounded-full overflow-hidden"
                    aria-label="Open sign up modal"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Sign Up</span>
                    <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <div className="relative group">
              <button
                onClick={handleToggleMenu}
                onKeyDown={(e) => e.key === 'Enter' && handleToggleMenu()}
                className="relative p-3 rounded-full text-gray-700 hover:text-black transition-all duration-300"
                aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                aria-expanded={isMenuOpen}
              >
                <div className="relative z-10">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
                <div className="absolute inset-0 bg-gray-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </button>
            </div>
          </div>
        </div>


        {/* Mobile Navigation - Apple Style */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-1 bg-white/95 backdrop-blur-xl border-t border-gray-100/50">
              {/* Stages in Mobile */}
              {stages.map((stage) => (
                <div key={stage.id} className="space-y-1">
                  <button
                    onClick={() => handleNavigate(`/start?stage=${stage.id}`)}
                    className="w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-xl transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <stage.icon size={16} className="text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium">{stage.title}</div>
                        <div className="text-sm text-gray-500">{stage.description}</div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
              
              {user && (
                <div className="pt-2">
                  <button
                    onClick={() => handleNavigate('/worksheet')}
                    className={`w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-colors duration-200 ${
                      isActive('/worksheet')
                        ? 'text-black bg-gray-100' 
                        : 'text-gray-700 hover:text-black hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <FileText size={16} />
                      <span>My Worksheet</span>
                    </div>
                  </button>
                </div>
              )}
              
              <div className="border-t border-gray-200/50 pt-4 space-y-2">
                {user ? (
                  <>
                    <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200">
                      <div className="text-sm text-gray-700 font-medium">
                        {user.email?.split('@')[0]}
                      </div>
                      <div className="text-xs text-gray-500">
                        {user.email}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        signOut();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors duration-200"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        onOpenLogin();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-xl transition-colors duration-200"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        onOpenSignUp();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-base font-medium text-white bg-black hover:bg-gray-800 rounded-xl transition-colors duration-200"
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
};