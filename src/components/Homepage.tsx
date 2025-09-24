import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Rocket, Zap, ArrowRight } from 'lucide-react';

export function Homepage() {
  const navigate = useNavigate();

  const journeys = [
    {
      id: 'explore',
      title: 'Explore',
      subtitle: 'AI-Curious',
      description: 'See what AI can do for your business with quick, practical demos.',
      icon: Search,
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 'start',
      title: 'Start',
      subtitle: 'New Business',
      description: 'Get a tailored business idea and launch plan powered by market insights.',
      icon: Rocket,
      color: 'bg-green-50 border-green-200 hover:bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 'integrate',
      title: 'Integrate',
      subtitle: 'Existing Business',
      description: 'Find the perfect AI solutions to streamline your current operations.',
      icon: Zap,
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Start at <span className="text-blue-600">SquareOne</span>
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Every great journey starts somewhere. Whether you're curious about AI, 
            starting fresh, or ready to upgrade, we'll guide you step by step.
          </p>
          <div className="text-sm text-gray-500 font-medium">
            Let the journey begin
          </div>
        </div>

        {/* Journey Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {journeys.map((journey) => {
            const IconComponent = journey.icon;
            return (
              <div
                key={journey.id}
                className={`${journey.color} border-2 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 group`}
                onClick={() => navigate(`/${journey.id}`)}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${journey.iconColor} bg-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {journey.title}
                  </h2>
                  
                  <div className={`text-sm font-semibold ${journey.iconColor} mb-4`}>
                    {journey.subtitle}
                  </div>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {journey.description}
                  </p>
                  
                  <div className={`inline-flex items-center ${journey.iconColor} font-semibold group-hover:gap-3 gap-2 transition-all duration-300`}>
                    Get Started
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-20">
          <p className="text-gray-500">
            No login required • Get your personalized worksheet • Start in under 5 minutes
          </p>
        </div>
      </div>
    </div>
  );
}