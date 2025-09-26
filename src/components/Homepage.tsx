import { useNavigate } from 'react-router-dom';
import { Compass, Rocket, ArrowRight, Clock, TrendingUp } from 'lucide-react';

export function Homepage() {
  const navigate = useNavigate();

  const journeys = [
    {
      id: 'explore',
      title: 'Explore',
      subtitle: 'For the AI-Curious',
      description: 'Discover what AI can do for your business and why it\'s worth your time.',
      icon: Compass,
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      iconColor: 'text-blue-600',
      stats: '',
      features: ['AI Basics', 'General Information']
    },
    {
      id: 'start',
      title: 'Start',
      subtitle: 'Let the Journey Begin',
      description: 'Dive deeper into the "how" AI can improve your business and how it\'s worth your actual time.',
      icon: Rocket,
      color: 'bg-green-50 border-green-200 hover:bg-green-100',
      iconColor: 'text-green-600',
      stats: '',
      features: ['AI Tools', 'Instruction Guides', 'Tailored Recommendations']
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f2f1f0' }}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 font-heading">
            Start at <span className="text-blue-600">SquareOne</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto font-serif">
          A small business resource built for you. Explore our step-by-step guides to help you learn AI and grow your business.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 font-medium">
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              Self-paced learning
            </div>
            <div className="flex items-center">
              <TrendingUp size={16} className="mr-2" />
              It's time for your next journey
            </div>
          </div>
        </div>

        {/* Journey Tiles */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {journeys.map((journey) => {
              const IconComponent = journey.icon;
              return (
                <div
                  key={journey.id}
                  className={`${journey.color} border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 group relative overflow-hidden`}
                  onClick={() => navigate(`/${journey.id}`)}
                >
                {/* Level indicators */}
                <div className="absolute top-4 right-4 flex space-x-1">
                  {[1, 2, 3].map((level)  => (
                    <div
                      key={level}
                      className={`w-2 h-2 rounded-full ${
                        level <= 3 ? journey.iconColor.replace('text-', 'bg-') : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className={`relative inline-flex items-center justify-center w-10 h-10 ${journey.iconColor} bg-white rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent size={20} />
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 font-heading">
                    {journey.title}
                  </h2>
                  
                  <div className={`text-base font-semibold ${journey.iconColor} mb-3 font-heading`}>
                    {journey.subtitle}
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-base font-serif">
                    {journey.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    {journey.stats && (
                      <div className="text-xs text-gray-500 mb-2">{journey.stats}</div>
                    )}
                    <div className="space-y-1">
                      {journey.features.map((feature, index) => (
                        <div key={index} className="text-xs text-gray-700 bg-white/50 rounded-full px-2 py-1">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`inline-flex items-center ${journey.iconColor} font-semibold text-base group-hover:gap-3 gap-2 transition-all duration-300`}>
                    Start Journey
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* How it works */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Your Journey</h3>
              <p className="text-gray-600">Select from Explore or Start based on where you are in your business journey.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Explore Interactive Tiles</h3>
              <p className="text-gray-600">Dive into level-based tiles with videos, guides, and hands-on exercises.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Your Worksheet</h3>
              <p className="text-gray-600">Save insights, add notes, and download your personalized action plan.</p>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">About Us</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              We began this journey just like you: with a spark of an idea and a desire to build something of our own. Originally, we wanted to create a small online business, maybe a SaaS product or a simple digital service. But there was a problem: we quickly found ourselves lost in a maze of new, flashy AI tools and tech jargon. There was no straightforward guide, no plain-language explanation, and definitely no one walking us through step by step.
            </p>
            <p className="text-center font-bold text-lg">
              We saw a clear gap. The world didn't need another flashy tool. It needed a straightforward process.
            </p>
            <p>
              Our mission is simple: to provide a guided, no-nonsense platform that helps you move from idea to launch, step by step. We strip away the hype and focus on what works. We're not here to sell you on the magic of AI; we're here to give you a practical path to follow. We've been where you are, and we built the solution we needed.
            </p>
            <p className="text-center font-semibold text-lg text-gray-900">
              It's time to start your next journey…
            </p>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 font-banner">Follow Us</h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {/* X (Twitter) */}
            <a 
              href="https://x.com/Square1Journey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Patreon */}
            <a 
              href="https://www.patreon.com/c/SquareOneJourney" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 .48v23.04h4.22V.48zm15.385 0c-4.764 0-8.641 3.88-8.641 8.65 0 4.77 3.877 8.65 8.641 8.65 4.764 0 8.642-3.88 8.642-8.65 0-4.77-3.878-8.65-8.642-8.65zm0 14.99c-3.49 0-6.32-2.83-6.32-6.34 0-3.51 2.83-6.34 6.32-6.34 3.49 0 6.32 2.83 6.32 6.34 0 3.51-2.83 6.34-6.32 6.34z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@squareonejourney" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/squareonejourney" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a 
              href="https://www.youtube.com/@SquareOneJourney-1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-gray-600 mb-4">© 2025 SquareOneJourney. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <button
                onClick={() => navigate('/terms')}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Terms and Conditions
              </button>
              <button
                onClick={() => navigate('/privacy')}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigate('/data-protection')}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Data Protection
              </button>
              <button
                onClick={() => navigate('/disclaimer')}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}