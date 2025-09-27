import React, { useState } from 'react';
import { SEOKeywordAnalyzer } from './SEOKeywordAnalyzer';
import { CompetitorAnalyzer } from './CompetitorAnalyzer';
import { NicheContentFinder } from './NicheContentFinder';
import { Search, Building2, FileText, BarChart3, TrendingUp, Target } from 'lucide-react';
import { SEOKeywordData, CompetitorData, NicheContent } from '../../lib/seo-tools';

type TabType = 'keywords' | 'competitors' | 'content';

export const SEODashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('keywords');
  const [keywords, setKeywords] = useState<SEOKeywordData[]>([]);
  const [competitors, setCompetitors] = useState<CompetitorData[]>([]);
  const [content, setContent] = useState<NicheContent[]>([]);

  const tabs = [
    {
      id: 'keywords' as TabType,
      label: 'Keyword Research',
      icon: Search,
      description: 'Discover SEO keywords and analyze search metrics'
    },
    {
      id: 'competitors' as TabType,
      label: 'Competitor Analysis',
      icon: Building2,
      description: 'Analyze competitor websites and strategies'
    },
    {
      id: 'content' as TabType,
      label: 'Content Ideas',
      icon: FileText,
      description: 'Find content ideas and trending topics'
    }
  ];

  const handleKeywordsFound = (foundKeywords: SEOKeywordData[]) => {
    setKeywords(foundKeywords);
  };

  const handleCompetitorAnalyzed = (competitor: CompetitorData) => {
    setCompetitors(prev => [competitor, ...prev.filter(c => c.domain !== competitor.domain)]);
  };

  const handleContentFound = (foundContent: NicheContent[]) => {
    setContent(foundContent);
  };

  const getTotalSearchVolume = () => {
    return keywords.reduce((sum, keyword) => sum + keyword.searchVolume, 0);
  };


  const getLowCompetitionKeywords = () => {
    return keywords.filter(keyword => keyword.competition === 'low').length;
  };

  const getTotalEngagement = () => {
    return content.reduce((sum, item) => 
      sum + item.engagement.likes + item.engagement.comments + item.engagement.shares, 0
    );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f2f1f0' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 font-heading">
            SEO Research <span className="text-blue-600">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto font-serif">
            Discover keywords, analyze competitors, and find content ideas to boost your SEO strategy.
          </p>
        </div>

        {/* Stats Overview */}
        {(keywords.length > 0 || competitors.length > 0 || content.length > 0) && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Search className="text-blue-600" size={24} />
                <h3 className="font-semibold text-gray-900">Keywords Found</h3>
              </div>
              <div className="text-3xl font-bold text-blue-600">{keywords.length}</div>
              <div className="text-sm text-gray-600">
                {getTotalSearchVolume().toLocaleString()} total volume
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Target className="text-green-600" size={24} />
                <h3 className="font-semibold text-gray-900">Low Competition</h3>
              </div>
              <div className="text-3xl font-bold text-green-600">{getLowCompetitionKeywords()}</div>
              <div className="text-sm text-gray-600">
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="text-purple-600" size={24} />
                <h3 className="font-semibold text-gray-900">Competitors</h3>
              </div>
              <div className="text-3xl font-bold text-purple-600">{competitors.length}</div>
              <div className="text-sm text-gray-600">Analyzed domains</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-orange-600" size={24} />
                <h3 className="font-semibold text-gray-900">Content Ideas</h3>
              </div>
              <div className="text-3xl font-bold text-orange-600">{content.length}</div>
              <div className="text-sm text-gray-600">
                {getTotalEngagement().toLocaleString()} total engagement
              </div>
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <IconComponent size={20} />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {tabs.find(tab => tab.id === activeTab)?.label}
              </h2>
              <p className="text-gray-600">
                {tabs.find(tab => tab.id === activeTab)?.description}
              </p>
            </div>

            {/* Tab Content */}
            {activeTab === 'keywords' && (
              <SEOKeywordAnalyzer onKeywordsFound={handleKeywordsFound} />
            )}

            {activeTab === 'competitors' && (
              <CompetitorAnalyzer onCompetitorAnalyzed={handleCompetitorAnalyzed} />
            )}

            {activeTab === 'content' && (
              <NicheContentFinder onContentFound={handleContentFound} />
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <BarChart3 className="mx-auto text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Export Data</h3>
              <p className="text-gray-600 text-sm mb-4">
                Download your research data as CSV or JSON
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Export Results
              </button>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <Target className="mx-auto text-green-600 mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Save Research</h3>
              <p className="text-gray-600 text-sm mb-4">
                Save your findings to your worksheet
              </p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Save to Worksheet
              </button>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <TrendingUp className="mx-auto text-purple-600 mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Track Progress</h3>
              <p className="text-gray-600 text-sm mb-4">
                Monitor your SEO improvements over time
              </p>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                View Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};