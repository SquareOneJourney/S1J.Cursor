import { useNavigate } from 'react-router-dom';
import { Compass, Rocket, Zap, ArrowRight, Clock, TrendingUp } from 'lucide-react';

export function Homepage() {
  const navigate = useNavigate();

  const journeys = [
    {
      id: 'explore',
      title: 'Explore',
      subtitle: 'For the AI-Curious',
      description: 'Discover what AI can do for your business with interactive demos and practical examples.',
      icon: Compass,
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      iconColor: 'text-blue-600',
      stats: '3 levels • 5-20 min each',
      features: ['AI Basics', 'Content Generation', 'Customer Service']
    },
    {
      id: 'start',
      title: 'Start',
      subtitle: 'For New Businesses',
      description: 'Get a personalized business idea and launch plan powered by AI market insights.',
      icon: Rocket,
      color: 'bg-green-50 border-green-200 hover:bg-green-100',
      iconColor: 'text-green-600',
      stats: '3 levels • 10-45 min each',
      features: ['Business Ideas', 'Branding', 'Marketing Setup']
    },
    {
      id: 'integrate',
      title: 'Integrate',
      subtitle: 'For Existing Businesses',
      description: 'Find AI solutions to streamline your current operations and boost efficiency.',
      icon: Zap, 
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      iconColor: 'text-orange-600',
      stats: '3 levels • 15-40 min each',
      features: ['Workflow Automation', 'Data Analysis', 'Inventory Management']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Start at <span className="text-blue-600">SquareOne</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          A small business resource built for you with step-by-step guides to help you learn AI and grow your business.
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
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {journeys.map((journey) => {
            const IconComponent = journey.icon;
            return (
              <div
                key={journey.id}
                className={`${journey.color} border-2 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 group relative overflow-hidden`}
                onClick={() => navigate(`/${journey.id}`)}
              >
                {/* Level indicators */}
                <div className="absolute top-4 right-4 flex space-x-1">
                  {[1, 2, 3].map((level) => (
                    <div
                      key={level}
                      className={`w-2 h-2 rounded-full ${
                        level <= 3 ? journey.iconColor.replace('text-', 'bg-') : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${journey.iconColor} bg-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent size={40} />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {journey.title}
                  </h2>
                  
                  <div className={`text-lg font-semibold ${journey.iconColor} mb-4`}>
                    {journey.subtitle}
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {journey.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-3">{journey.stats}</div>
                    <div className="space-y-2">
                      {journey.features.map((feature, index) => (
                        <div key={index} className="text-sm text-gray-700 bg-white/50 rounded-full px-3 py-1">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`inline-flex items-center ${journey.iconColor} font-semibold text-lg group-hover:gap-3 gap-2 transition-all duration-300`}>
                    Start Journey
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
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
              <p className="text-gray-600">Select from Explore, Start, or Integrate based on where you are in your business journey.</p>
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

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-500 mb-4">
            No login required • Get your personalized worksheet • Start in under 5 minutes
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <span>Interactive Learning</span>
            <span>•</span>
            <span>Personalized Results</span>
            <span>•</span>
            <span>Download & Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}