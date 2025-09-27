import React, { useState } from 'react';
import { Search, TrendingUp, Target, DollarSign, Users, BarChart3, Loader2 } from 'lucide-react';
import { firecrawlSEOAnalyzer } from '../../lib/firecrawl';
import { SEOKeywordData } from '../../lib/schemas';

interface SEOKeywordAnalyzerProps {
  onKeywordsFound?: (keywords: SEOKeywordData[]) => void;
}

export const SEOKeywordAnalyzer: React.FC<SEOKeywordAnalyzerProps> = ({ onKeywordsFound }) => {
  const [url, setUrl] = useState('');
  const [keywords, setKeywords] = useState<SEOKeywordData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!url.trim()) {
      setError('Please enter a valid URL');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const results = await firecrawlSEOAnalyzer.extractSEOKeywords(url);
      setKeywords(results);
      onKeywordsFound?.(results);
    } catch (err) {
      setError('Failed to analyze keywords. Please check your URL and try again.');
      console.error('SEO analysis error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getCompetitionColor = (competition: string) => {
    switch (competition) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getIntentColor = (intent: string) => {
    switch (intent) {
      case 'informational': return 'text-blue-600 bg-blue-100';
      case 'commercial': return 'text-purple-600 bg-purple-100';
      case 'transactional': return 'text-green-600 bg-green-100';
      case 'navigational': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
          <Search className="mr-3 text-blue-600" size={32} />
          SEO Keyword Analyzer
        </h2>
        <p className="text-gray-600 mb-6">
          Analyze any website to discover SEO keywords, search volume, competition levels, and search intent.
        </p>

        <div className="flex gap-4 mb-6">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL (e.g., https://example.com)"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleAnalyze}
            disabled={loading || !url.trim()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <Search size={20} />
            )}
            {loading ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}
      </div>

      {keywords.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">
              Discovered Keywords ({keywords.length})
            </h3>
            <div className="text-sm text-gray-500">
              Sorted by relevance and search volume
            </div>
          </div>

          <div className="grid gap-4">
            {keywords.slice(0, 20).map((keyword, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {keyword.keyword}
                  </h4>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCompetitionColor(keyword.competition)}`}>
                      {keyword.competition} competition
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getIntentColor(keyword.searchIntent)}`}>
                      {keyword.searchIntent}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-blue-600" size={16} />
                    <div>
                      <div className="text-sm text-gray-500">Search Volume</div>
                      <div className="font-semibold">{keyword.searchVolume.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="text-orange-600" size={16} />
                    <div>
                      <div className="text-sm text-gray-500">Difficulty</div>
                      <div className="font-semibold">{keyword.difficulty}/100</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="text-green-600" size={16} />
                    <div>
                      <div className="text-sm text-gray-500">CPC</div>
                      <div className="font-semibold">${keyword.cpc.toFixed(2)}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="text-purple-600" size={16} />
                    <div>
                      <div className="text-sm text-gray-500">Related</div>
                      <div className="font-semibold">{keyword.relatedKeywords.length}</div>
                    </div>
                  </div>
                </div>

                {keyword.relatedKeywords.length > 0 && (
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Related Keywords:</div>
                    <div className="flex flex-wrap gap-1">
                      {keyword.relatedKeywords.map((related, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {related}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {keywords.length > 20 && (
            <div className="text-center text-gray-500 text-sm">
              Showing top 20 keywords out of {keywords.length} total
            </div>
          )}
        </div>
      )}
    </div>
  );
};
