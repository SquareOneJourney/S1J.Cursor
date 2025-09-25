import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, FileText } from 'lucide-react';

interface ArticlePageProps {
  title: string;
  content: React.ReactNode;
  onBack: () => void;
}

export function ArticlePage({ title, content, onBack }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Explore
          </button>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 prose prose-lg max-w-none">
          {content}
        </div>
      </div>
    </div>
  );
}

// Marketing Research Without AI Article Component
export function MarketingResearchWithoutAI({ onBack }: { onBack?: () => void } = {}) {
  const navigate = useNavigate();

  const handleBackToExplore = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/explore');
    }
  };

  const handleStartJourney = () => {
    navigate('/');
  };

  const articleContent = (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          Starting a small business can feel overwhelming, especially when it comes to figuring out if people actually want what you're planning to offer. The good news? You don't need expensive consultants or advanced AI tools to figure this out. With a handful of free, everyday online resources, you can research your market from home and gain the clarity you need to move forward with confidence.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          This guide will walk you through a simple, approachable, and actionable process to validate your business idea — no AI required.
        </p>
      </section>

      {/* Step 1 */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Use Google Maps and Street View</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Virtual Location Scouting</h3>
        <p className="text-gray-700 leading-relaxed">
          Instead of driving around, use Google Maps to explore neighborhoods virtually. Look at the areas you're interested in and see what's nearby. You can even "walk" down the streets using Street View to check for surrounding businesses, apartment complexes, and get a feel for the area.
        </p>
      </section>

      {/* Step 2 */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Check Online Directories and Reviews</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Search for Competitors</h3>
        <p className="text-gray-700 leading-relaxed">
          Google "[your business type] near me" to find existing services in the area. Read reviews to see what customers like or complain about. These insights will highlight gaps in service or quality that you might be able to fill.
        </p>
      </section>

      {/* Step 3 */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Use Social Media Insights</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Join Community Conversations</h3>
        <p className="text-gray-700 leading-relaxed">
          Local Facebook Groups and community pages are goldmines of information. See what neighbors are talking about — or even ask directly: "What do you wish we had more of in terms of local services?" People often share real frustrations and unmet needs.
        </p>
      </section>

      {/* Step 4 */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Look for Local Forums and Reddit</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Tap Into Online Communities</h3>
        <p className="text-gray-700 leading-relaxed">
          Reddit and other local forums often host discussions about everyday problems and service gaps. Search your city's subreddit or browse posts about local businesses to spot opportunities.
        </p>
      </section>

      {/* Step 5 */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 5: Use Google Trends and Keyword Planner</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Measure Demand Online</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Google Trends:</strong> See if people in your region are searching for services like yours and whether interest is growing over time.</li>
          <li><strong>Google Keyword Planner:</strong> Shows how many people are searching for specific terms in your area. Even if you're not running ads, you can use it for free to check demand.</li>
        </ul>
      </section>

      {/* Step 6 */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 6: Run a Simple Survey</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Ask People Directly</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Create a short Google Form and share it in local groups or forums. Example questions:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Do you currently use a [business type] service?</li>
          <li>What do you wish your local [business type] offered?</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Direct feedback helps you validate demand and pinpoint what people actually want.
        </p>
      </section>

      {/* Quick Recap */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Recap</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Google Maps:</strong> Explore neighborhoods and nearby businesses.</li>
          <li><strong>Google Search + Reviews:</strong> Identify competitors and customer complaints.</li>
          <li><strong>Google Trends + Keyword Planner:</strong> Track demand and interest.</li>
          <li><strong>Facebook Groups:</strong> Join conversations and ask questions.</li>
          <li><strong>Reddit/Local Forums:</strong> Spot unmet needs from community chatter.</li>
          <li><strong>Surveys:</strong> Collect direct input from potential customers.</li>
        </ul>
      </section>

      {/* Cost Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much Does This Cost?</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Free Resources:</h3>
          <div className="grid gap-4">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <ExternalLink size={20} className="text-green-500" />
              </div>
              <div className="flex-1">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Google Maps
                </a>
                <p className="text-gray-600 mt-1">Virtual location scouting and competitor research</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                    tool
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <ExternalLink size={20} className="text-green-500" />
              </div>
              <div className="flex-1">
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Google Search
                </a>
                <p className="text-gray-600 mt-1">Search for competitors and read reviews</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                    tool
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <ExternalLink size={20} className="text-green-500" />
              </div>
              <div className="flex-1">
                <a
                  href="https://facebook.com/groups"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Facebook Groups
                </a>
                <p className="text-gray-600 mt-1">Join local community conversations</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                    tool
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <FileText size={20} className="text-blue-500" />
              </div>
              <div className="flex-1">
                <span className="text-lg font-medium text-gray-700">Community resources & bulletin boards</span>
                <p className="text-gray-600 mt-1">Local community information sources</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                    resource
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <ExternalLink size={20} className="text-green-500" />
              </div>
              <div className="flex-1">
                <a
                  href="https://reddit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Reddit
                </a>
                <p className="text-gray-600 mt-1">Browse local subreddits for community discussions</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                    tool
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <FileText size={20} className="text-blue-500" />
              </div>
              <div className="flex-1">
                <span className="text-lg font-medium text-gray-700">Local forums</span>
                <p className="text-gray-600 mt-1">Community-specific discussion platforms</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                    resource
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <ExternalLink size={20} className="text-green-500" />
              </div>
              <div className="flex-1">
                <a
                  href="https://trends.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Google Trends
                </a>
                <p className="text-gray-600 mt-1">Track demand and interest in your area</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                    tool
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Paid (or Technically Free) Resources:</h3>
          <div className="grid gap-4">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <ExternalLink size={20} className="text-green-500" />
              </div>
              <div className="flex-1">
                <a
                  href="https://ads.google.com/home/tools/keyword-planner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Google Keyword Planner
                </a>
                <p className="text-gray-600 mt-1">Track search volume and demand for specific terms in your area</p>
                <div className="mt-2 space-y-1">
                  <p className="text-sm text-gray-500">• Requires a Google Ads account</p>
                  <p className="text-sm text-gray-500">• No ad spend necessary, but you'll need to provide basic info and a credit card</p>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                    tool
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing & CTA */}
      <section className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Closing & Call to Action</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Market research doesn't have to be complicated or expensive. By combining free online tools with some community sleuthing, you can gather the same insights you'd get from expensive reports or consultants — and start building your side business with confidence.
        </p>
        
        <button
          onClick={handleStartJourney}
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          <span className="mr-2">👉</span>
          Start Your Journey Free Today
        </button>
      </section>
    </div>
  );

  return (
    <ArticlePage
      title="How to Do Market Research Without AI: A Step-by-Step Guide for New Entrepreneurs"
      content={articleContent}
      onBack={handleBackToExplore}
    />
  );
}
