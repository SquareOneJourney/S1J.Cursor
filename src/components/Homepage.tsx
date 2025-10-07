import { useNavigate } from 'react-router-dom';
import { ArrowRight, TrendingUp, Building2, Eye, TrendingUp as Scale } from 'lucide-react';

export function Homepage() {
  const navigate = useNavigate();

  const stages = [
    {
      id: 'stage-1',
      title: 'Stage 1: Build the Foundation',
      subtitle: 'Establish the essential foundations for your business success.',
      description: 'Market research, legal setup, and financial foundations to get your business started right.',
      icon: Building2,
      color: 'bg-white border-gray-200 hover:bg-gray-50',
      iconColor: 'text-gray-600',
      features: ['Market Research', 'Legal & Ethics', 'Finance & Accounting']
    },
    {
      id: 'stage-2',
      title: 'Stage 2: Grow Visibility',
      subtitle: 'Build your brand presence and attract customers to your business.',
      description: 'Marketing strategies, content creation, and customer experience to grow your audience.',
      icon: Eye,
      color: 'bg-white border-gray-200 hover:bg-gray-50',
      iconColor: 'text-gray-600',
      features: ['Marketing & Outreach', 'Content Creation', 'AI Tools', 'Customer Experience']
    },
    {
      id: 'stage-3',
      title: 'Stage 3: Scale & Sustain',
      subtitle: 'Optimize operations, build partnerships, and scale your business sustainably.',
      description: 'Sales optimization, operations, networking, and growth strategies for long-term success.',
      icon: Scale,
      color: 'bg-white border-gray-200 hover:bg-gray-50',
      iconColor: 'text-gray-600',
      features: ['Sales & Revenue', 'Operations', 'Networking', 'Growth & Scaling']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-black mb-8 font-heading tracking-tight">
            Start your
            <br />
            <span className="font-semibold">SquareOneJourney</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 max-w-4xl mx-auto font-light leading-relaxed">
            A small business resource built for you. Explore our step-by-step guides to help you learn AI and grow your business.
          </p>
          <div className="flex items-center justify-center space-x-4 sm:space-x-8 md:space-x-12 text-sm sm:text-base text-gray-500 font-light">
            <div className="flex items-center">
              <TrendingUp size={20} className="mr-3" />
              It's time for your next journey
            </div>
          </div>
        </div>


        {/* Stage Tiles */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-32">
          {stages.map((stage) => {
              const IconComponent = stage.icon;
              return (
                <div
                  key={stage.id}
                  className="group relative"
                  onClick={() => navigate(`/start?stage=${stage.id}`)}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-purple-400/50 to-purple-500/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-110"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-gray-100/50 overflow-hidden">
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative text-center">
                      {/* Icon with Enhanced Styling */}
                      <div className="relative inline-block mb-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-110"></div>
                        <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gray-50/80 backdrop-blur-sm rounded-2xl group-hover:bg-white transition-all duration-500 border border-gray-100/50">
                          <IconComponent size={28} className="text-gray-700 group-hover:text-blue-600 transition-colors duration-500" />
                        </div>
                      </div>
                      
                      {/* Title with Enhanced Typography */}
                      <h2 className="text-2xl font-semibold text-black mb-4 font-heading group-hover:text-blue-900 transition-colors duration-500">
                        {stage.title}
                      </h2>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-8 leading-relaxed text-base font-light group-hover:text-gray-700 transition-colors duration-500">
                        {stage.description}
                      </p>

                      {/* Features with Enhanced Styling */}
                      <div className="mb-8">
                        <div className="flex flex-wrap justify-center gap-2">
                          {stage.features.map((feature, index) => (
                            <div key={index} className="text-sm text-gray-500 bg-gray-50/80 backdrop-blur-sm rounded-full px-4 py-2 font-light border border-gray-100/50 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-all duration-500">
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* CTA Button with Premium Styling */}
                      <div className="inline-flex items-center px-6 py-3 bg-black text-white font-medium text-base rounded-2xl group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-500">
                        <span>Explore Stage</span>
                        <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              );
          })}
        </div>


        {/* About Us Section */}
        <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl p-16 mb-32 border border-gray-100/50 overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20 opacity-50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-light text-black mb-12 font-heading bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              About Us
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-8 text-lg font-light">
              <p className="relative">
                We began this journey just like you: with a spark of an idea and a desire to build something of our own. Originally, we wanted to create a small online business, maybe a SaaS product or a simple digital service. But there was a problem: we quickly found ourselves lost in a maze of new, flashy AI tools and tech jargon. There was no straightforward guide, no plain-language explanation, and definitely no one walking us through step by step.
              </p>
              <div className="relative p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm">
                <p className="text-2xl font-medium text-black">
                  We saw a clear gap. The world didn't need another flashy tool. It needed a straightforward process.
                </p>
              </div>
              <p>
                Our mission is simple: to provide a guided, no-nonsense platform that helps you move from idea to launch, step by step. We strip away the hype and focus on what works. We're not here to sell you on the magic of AI; we're here to give you a practical path to follow. We've been where you are, and we built the solution we needed.
              </p>
              <div className="relative p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200/50">
                <p className="text-xl font-medium text-black">
                  It's time to start your next journey…
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="text-center mb-32">
          <h2 className="text-4xl font-light text-black mb-12 font-heading bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Follow Us
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {/* X (Twitter) */}
            <a 
              href="https://x.com/Square1Journey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-16 h-16 bg-white/80 backdrop-blur-sm text-gray-700 rounded-2xl border border-gray-200/50 hover:border-blue-300 hover:bg-blue-50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-110"></div>
              <svg className="relative w-7 h-7 group-hover:text-blue-600 transition-colors duration-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Patreon */}
            <a 
              href="https://www.patreon.com/c/SquareOneJourney" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-16 h-16 bg-white/90 backdrop-blur-sm text-gray-700 rounded-2xl border border-white/40 hover:border-orange-300 hover:bg-orange-50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25 shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-110"></div>
              <svg className="relative w-7 h-7 group-hover:text-orange-600 transition-colors duration-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 .48v23.04h4.22V.48zm15.385 0c-4.764 0-8.641 3.88-8.641 8.65 0 4.77 3.877 8.65 8.641 8.65 4.764 0 8.642-3.88 8.642-8.65 0-4.77-3.878-8.65-8.642-8.65zm0 14.99c-3.49 0-6.32-2.83-6.32-6.34 0-3.51 2.83-6.34 6.32-6.34 3.49 0 6.32 2.83 6.32 6.34 0 3.51-2.83 6.34-6.32 6.34z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@squareonejourney" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-16 h-16 bg-white/90 backdrop-blur-sm text-gray-700 rounded-2xl border border-white/40 hover:border-pink-300 hover:bg-pink-50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-110"></div>
              <svg className="relative w-7 h-7 group-hover:text-pink-600 transition-colors duration-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/squareonejourney" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-16 h-16 bg-white/90 backdrop-blur-sm text-gray-700 rounded-2xl border border-white/40 hover:border-blue-400 hover:bg-blue-50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-110"></div>
              <svg className="relative w-7 h-7 group-hover:text-blue-600 transition-colors duration-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a 
              href="https://www.youtube.com/@SquareOneJourney-1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-16 h-16 bg-white/90 backdrop-blur-sm text-gray-700 rounded-2xl border border-white/40 hover:border-red-300 hover:bg-red-50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-110"></div>
              <svg className="relative w-7 h-7 group-hover:text-red-600 transition-colors duration-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-gray-200/50 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 via-transparent to-purple-50/10 opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <p className="text-gray-500 mb-8 text-sm font-light">© 2025 SquareOneJourney. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <button
                onClick={() => navigate('/terms')}
                className="relative px-4 py-2 text-gray-600 hover:text-black transition-all duration-300 font-light rounded-lg hover:bg-gray-100/50"
              >
                Terms and Conditions
              </button>
              <button
                onClick={() => navigate('/privacy')}
                className="relative px-4 py-2 text-gray-600 hover:text-black transition-all duration-300 font-light rounded-lg hover:bg-gray-100/50"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigate('/data-protection')}
                className="relative px-4 py-2 text-gray-600 hover:text-black transition-all duration-300 font-light rounded-lg hover:bg-gray-100/50"
              >
                Data Protection
              </button>
              <button
                onClick={() => navigate('/disclaimer')}
                className="relative px-4 py-2 text-gray-600 hover:text-black transition-all duration-300 font-light rounded-lg hover:bg-gray-100/50"
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