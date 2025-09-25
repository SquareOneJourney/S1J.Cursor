import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from '../ProgressBar';
import { ResultsSummary } from '../ResultsSummary';
import { generateStartResult } from '../../utils/aiSimulator';
import type { StartData, JourneyResult } from '../../types/journeys';

export function StartJourney() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<StartData>({ 
    location: '', 
    skills: '', 
    hoursPerWeek: '', 
    businessType: '' 
  });
  const [result, setResult] = useState<JourneyResult | null>(null);

  const totalSteps = 4;

  const skillOptions = [
    'Marketing & Sales',
    'Technology & Development',
    'Writing & Content Creation',
    'Design & Creative',
    'Finance & Analysis',
    'Operations & Management',
    'Teaching & Training',
    'Health & Wellness',
    'Crafts & Handmade',
    'Other'
  ];

  const hourOptions = [
    '5-10 hours',
    '10-20 hours',
    '20-40 hours',
    '40+ hours'
  ];

  const businessTypes = [
    'Physical',
    'Digital', 
    'Both'
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Avoid setting the same result repeatedly if already set
      if (!result) {
        const aiResult = generateStartResult(data);
        setResult(aiResult);
      }
    }
  };

  if (result) {
    return (
      <ResultsSummary
        journeyType="start"
        userData={data}
        result={result}
        onBack={() => setResult(null)}
        onHome={() => navigate('/')}
      />
    );
  }

  const isStepComplete = (step: number) => {
    switch (step) {
      case 1: return !!data.location;
      case 2: return !!data.skills;
      case 3: return !!data.hoursPerWeek;
      case 4: return !!data.businessType;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Start Your Business Journey</h1>
            <p className="text-gray-600">Let's create a personalized business plan just for you.</p>
          </div>

          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Where are you located?
                </h2>
                <input
                  type="text"
                  value={data.location}
                  onChange={(e) => setData({ ...data, location: e.target.value })}
                  placeholder="City, State or Region"
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-200"
                />
                <p className="text-sm text-gray-500 mt-2">
                  This helps us understand your local market opportunities.
                </p>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  What's your strongest skill area?
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {skillOptions.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => setData({ ...data, skills: skill })}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                        data.skills === skill
                          ? 'border-green-500 bg-green-50 text-green-900'
                          : 'border-gray-200 bg-white hover:border-green-200'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  How many hours can you commit per week?
                </h2>
                <div className="space-y-3">
                  {hourOptions.map((hours) => (
                    <button
                      key={hours}
                      onClick={() => setData({ ...data, hoursPerWeek: hours })}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                        data.hoursPerWeek === hours
                          ? 'border-green-500 bg-green-50 text-green-900'
                          : 'border-gray-200 bg-white hover:border-green-200'
                      }`}
                    >
                      {hours}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Are you thinking physical, digital, or both?
                </h2>
                <div className="space-y-3">
                  {businessTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setData({ ...data, businessType: type })}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                        data.businessType === type
                          ? 'border-green-500 bg-green-50 text-green-900'
                          : 'border-gray-200 bg-white hover:border-green-200'
                      }`}
                    >
                      <div className="font-semibold">{type}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {type === 'Physical' && 'Local services, brick-and-mortar, in-person'}
                        {type === 'Digital' && 'Online services, e-commerce, remote work'}
                        {type === 'Both' && 'Hybrid model with online and offline presence'}
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
              disabled={!isStepComplete(currentStep)}
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {currentStep === totalSteps ? 'Generate My Business Plan' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}