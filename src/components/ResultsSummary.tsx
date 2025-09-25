import React from 'react';
import { Download, Home, ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import { generateWorksheetPDF } from '../utils/pdfGenerator';
import type { JourneyResult } from '../types/journeys';

interface ResultsSummaryProps {
  journeyType: string;
  userData: any;
  result: JourneyResult;
  onBack: () => void;
  onHome: () => void;
}

export function ResultsSummary({ journeyType, userData, result, onBack, onHome }: ResultsSummaryProps) {
  const handleDownloadPDF = () => {
    generateWorksheetPDF(journeyType, userData, result);
  };

  const colorScheme = {
    explore: {
      bg: 'bg-gradient-to-br from-blue-50 via-white to-indigo-50',
      primary: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
      accent: 'bg-blue-50 border-blue-200'
    },
    start: {
      bg: 'bg-gradient-to-br from-green-50 via-white to-emerald-50',
      primary: 'text-green-600',
      button: 'bg-green-600 hover:bg-green-700',
      accent: 'bg-green-50 border-green-200'
    },
  };

  const colors = colorScheme[journeyType as keyof typeof colorScheme];

  return (
    <div className={`min-h-screen ${colors.bg}`}>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className={`${colors.accent} border-2 p-8`}>
            <div className="flex items-center mb-4">
              <CheckCircle className={`w-8 h-8 ${colors.primary} mr-3`} />
              <h1 className="text-3xl font-bold text-gray-900">
                {result.title}
              </h1>
            </div>
            <p className="text-lg text-gray-700">
              {result.summary}
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Key Takeaways */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Key Takeaways
                </h2>
                <ul className="space-y-3">
                  {result.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Next Steps */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                  Next Steps
                </h2>
                <ol className="space-y-3">
                  {result.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Resources */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <ExternalLink className="w-5 h-5 text-purple-500 mr-2" />
                Recommended Resources
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {result.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {resource.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                    </div>
                    <p className="text-sm text-gray-600">
                      {resource.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Download Section */}
            <div className={`${colors.accent} border-2 rounded-xl p-6 text-center`}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Get Your Personalized Worksheet
              </h3>
              <p className="text-gray-600 mb-4">
                Download a PDF with all your information, recommendations, and action steps.
              </p>
              <button
                onClick={handleDownloadPDF}
                className={`inline-flex items-center px-6 py-3 ${colors.button} text-white rounded-lg transition-colors duration-200 mr-4 mb-2`}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Worksheet
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={onBack}
              className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Journey
            </button>

            <div className="flex gap-4">
              <button
                onClick={onHome}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </button>
              
              <button
                onClick={onHome}
                className={`inline-flex items-center px-6 py-2 ${colors.button} text-white rounded-lg transition-colors duration-200`}
              >
                Try Another Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}