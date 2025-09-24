import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from '../ProgressBar';
import { ResultsSummary } from '../ResultsSummary';
import { generateExploreResult } from '../../utils/aiSimulator';
import type { ExploreData } from '../../types/journeys';

export function ExploreJourney() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<ExploreData>({ industry: '', helpArea: '' });
  const [result, setResult] = useState(null);

  const totalSteps = 2;

  const industries = [
    'Restaurant/Food Service',
    'Retail/E-commerce', 
    'Professional Services',
    'Healthcare/Wellness',
    'Real Estate',
    'Fitness/Personal Training',
    'Beauty/Salon Services',
    'Home Services',
    'Consulting',
    'Other'
  ];

  const helpAreas = [
    'Marketing copy',
    'Customer messages', 
    'Pricing',
    'Scheduling'
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      const aiResult = generateExploreResult(data);
      setResult(aiResult);
    }
  };

  if (result) {
    return (
      <ResultsSummary
        journeyType="explore"
        userData={data}
        result={result}
        onBack={() => setResult(null)}
        onHome={() => navigate('/')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore AI for Your Business</h1>
            <p className="text-gray-600">Let's discover what AI can do for you with practical demos.</p>
          </div>

          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  What industry are you curious about?
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => setData({ ...data, industry })}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                        data.industry === industry
                          ? 'border-blue-500 bg-blue-50 text-blue-900'
                          : 'border-gray-200 bg-white hover:border-blue-200'
                      }`}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  What would you like AI to help you with?
                </h2>
                <div className="space-y-3">
                  {helpAreas.map((area) => (
                    <button
                      key={area}
                      onClick={() => setData({ ...data, helpArea: area })}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                        data.helpArea === area
                          ? 'border-blue-500 bg-blue-50 text-blue-900'
                          : 'border-gray-200 bg-white hover:border-blue-200'
                      }`}
                    >
                      <div className="font-semibold">{area}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {area === 'Marketing copy' && 'Headlines, emails, social posts'}
                        {area === 'Customer messages' && 'Chatbots, responses, follow-ups'}
                        {area === 'Pricing' && 'Dynamic pricing, competitor analysis'}
                        {area === 'Scheduling' && 'Appointments, reminders, optimization'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-12">
            <button
              onClick={() => currentStep > 1 ? setCurrentStep(currentStep - 1) : navigate('/')}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              {currentStep > 1 ? 'Back' : 'Home'}
            </button>

            <button
              onClick={handleNext}
              disabled={!data.industry || (currentStep === 2 && !data.helpArea)}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {currentStep === totalSteps ? 'Show Me AI Demos' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}