import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from '../ProgressBar';
import { ResultsSummary } from '../ResultsSummary';
import { generateIntegrateResult } from '../../utils/aiSimulator';
import type { IntegrateData } from '../../types/journeys';

export function IntegrateJourney() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<IntegrateData>({ 
    improvementArea: '', 
    volume: '', 
    channel: '', 
    painPoint: '' 
  });
  const [result, setResult] = useState(null);

  const totalSteps = 4;

  const improvementAreas = [
    'Customer messages',
    'Marketing', 
    'Bookkeeping',
    'Scheduling',
    'Inventory'
  ];

  const volumeOptions = [
    'Just getting started (1-10/day)',
    'Growing business (10-50/day)',
    'Established (50-200/day)',
    'High volume (200+/day)'
  ];

  const getChannelOptions = () => {
    switch (data.improvementArea) {
      case 'Customer messages':
        return ['Email', 'Phone', 'Live chat', 'Social media', 'In-person'];
      case 'Marketing':
        return ['Social media', 'Email marketing', 'Website', 'Paid ads', 'Print/Local'];
      case 'Bookkeeping':
        return ['Spreadsheets', 'QuickBooks', 'Paper receipts', 'Multiple systems', 'No system'];
      case 'Scheduling':
        return ['Phone calls', 'Email back-and-forth', 'Online booking', 'Walk-ins', 'Mixed methods'];
      case 'Inventory':
        return ['Manual tracking', 'Spreadsheets', 'POS system', 'Multiple locations', 'No tracking'];
      default:
        return [];
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      const aiResult = generateIntegrateResult(data);
      setResult(aiResult);
    }
  };

  if (result) {
    return (
      <ResultsSummary
        journeyType="integrate"
        userData={data}
        result={result}
        onBack={() => setResult(null)}
        onHome={() => navigate('/')}
      />
    );
  }

  const isStepComplete = (step: number) => {
    switch (step) {
      case 1: return !!data.improvementArea;
      case 2: return !!data.volume;
      case 3: return !!data.channel;
      case 4: return !!data.painPoint;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Integrate AI into Your Business</h1>
            <p className="text-gray-600">Let's find the perfect AI solution to streamline your operations.</p>
          </div>

          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Which area would you like to improve?
                </h2>
                <div className="space-y-3">
                  {improvementAreas.map((area) => (
                    <button
                      key={area}
                      onClick={() => setData({ ...data, improvementArea: area, channel: '', volume: '', painPoint: '' })}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                        data.improvementArea === area
                          ? 'border-orange-500 bg-orange-50 text-orange-900'
                          : 'border-gray-200 bg-white hover:border-orange-200'
                      }`}
                    >
                      <div className="font-semibold">{area}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {area === 'Customer messages' && 'Automate responses, improve support'}
                        {area === 'Marketing' && 'Content creation, social media, campaigns'}
                        {area === 'Bookkeeping' && 'Expense tracking, invoicing, reporting'}
                        {area === 'Scheduling' && 'Appointments, resource management'}
                        {area === 'Inventory' && 'Stock tracking, ordering, forecasting'}
                      </div>
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
                  What's your current volume?
                </h2>
                <div className="space-y-3">
                  {volumeOptions.map((volume) => (
                    <button
                      key={volume}
                      onClick={() => setData({ ...data, volume })}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                        data.volume === volume
                          ? 'border-orange-500 bg-orange-50 text-orange-900'
                          : 'border-gray-200 bg-white hover:border-orange-200'
                      }`}
                    >
                      {volume}
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
                  What's your primary channel or method?
                </h2>
                <div className="space-y-3">
                  {getChannelOptions().map((channel) => (
                    <button
                      key={channel}
                      onClick={() => setData({ ...data, channel })}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                        data.channel === channel
                          ? 'border-orange-500 bg-orange-50 text-orange-900'
                          : 'border-gray-200 bg-white hover:border-orange-200'
                      }`}
                    >
                      {channel}
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
                  What's your biggest pain point?
                </h2>
                <textarea
                  value={data.painPoint}
                  onChange={(e) => setData({ ...data, painPoint: e.target.value })}
                  placeholder="Describe what takes too much time or causes frustration..."
                  rows={4}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-200"
                />
                <p className="text-sm text-gray-500 mt-2">
                  This helps us recommend the most impactful AI solution for you.
                </p>
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
              className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {currentStep === totalSteps ? 'Generate My AI Plan' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}