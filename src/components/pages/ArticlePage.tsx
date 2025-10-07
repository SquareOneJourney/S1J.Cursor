import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
      navigate('/start');
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
