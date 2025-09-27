import React, { useState } from 'react';
import { Building2, Globe, Users, Calendar, Share2, ExternalLink, Loader2, TrendingUp, Link as LinkIcon } from 'lucide-react';
import { firecrawlSEOAnalyzer } from '../../lib/firecrawl';
import { CompetitorData } from '../../lib/schemas';

interface CompetitorAnalyzerProps {
  onCompetitorAnalyzed?: (competitor: CompetitorData) => void;
}

export const CompetitorAnalyzer: React.FC<CompetitorAnalyzerProps> = ({ onCompetitorAnalyzed }) => {
  const [domain, setDomain] = useState('');
  const [competitor, setCompetitor] = useState<CompetitorData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!domain.trim()) {
      setError('Please enter a valid domain');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await firecrawlSEOAnalyzer.analyzeCompetitor(domain);
      setCompetitor(result);
      onCompetitorAnalyzed?.(result);
    } catch (err) {
      setError('Failed to analyze competitor. Please check your domain and try again.');
      console.error('Competitor analysis error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getDomainAuthorityColor = (da: number) => {
    if (da >= 70) return 'text-green-600 bg-green-100';
    if (da >= 40) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getBacklinksColor = (backlinks: number) => {
    if (backlinks >= 5000) return 'text-green-600 bg-green-100';
    if (backlinks >= 1000) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
          <Building2 className="mr-3 text-green-600" size={32} />
          Competitor Analyzer
        </h2>
        <p className="text-gray-600 mb-6">
          Analyze competitor websites to understand their SEO strategy, content approach, and market positioning.
        </p>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Enter competitor domain (e.g., example.com)"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <button
            onClick={handleAnalyze}
            disabled={loading || !domain.trim()}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <Building2 size={20} />
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

      {competitor && (
        <div className="space-y-6">
          {/* Header Info */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{competitor.title}</h3>
                <p className="text-gray-600 mb-3">{competitor.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Globe size={16} />
                  <span>{competitor.domain}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDomainAuthorityColor(competitor.domainAuthority)}`}>
                  DA: {competitor.domainAuthority}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getBacklinksColor(competitor.backlinks)}`}>
                  {competitor.backlinks.toLocaleString()} backlinks
                </span>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-blue-600" size={24} />
                <h4 className="font-semibold text-gray-900">Domain Authority</h4>
              </div>
              <div className="text-3xl font-bold text-blue-600">{competitor.domainAuthority}</div>
              <div className="text-sm text-gray-600">Out of 100</div>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <LinkIcon className="text-green-600" size={24} />
                <h4 className="font-semibold text-gray-900">Backlinks</h4>
              </div>
              <div className="text-3xl font-bold text-green-600">{competitor.backlinks.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total backlinks</div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-purple-600" size={24} />
                <h4 className="font-semibold text-gray-900">Content Volume</h4>
              </div>
              <div className="text-3xl font-bold text-purple-600">{competitor.content.totalPages}</div>
              <div className="text-sm text-gray-600">Total pages</div>
            </div>
          </div>

          {/* Content Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Calendar className="mr-2 text-gray-600" size={20} />
                Content Overview
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Pages:</span>
                  <span className="font-semibold">{competitor.content.totalPages}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Blog Posts:</span>
                  <span className="font-semibold">{competitor.content.blogPosts}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Updated:</span>
                  <span className="font-semibold">
                    {new Date(competitor.content.lastUpdated).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Share2 className="mr-2 text-gray-600" size={20} />
                Social Media
              </h4>
              <div className="space-y-2">
                {competitor.socialMedia.twitter && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Twitter:</span>
                    <a
                      href={competitor.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      Visit <ExternalLink size={14} />
                    </a>
                  </div>
                )}
                {competitor.socialMedia.facebook && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Facebook:</span>
                    <a
                      href={competitor.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      Visit <ExternalLink size={14} />
                    </a>
                  </div>
                )}
                {competitor.socialMedia.linkedin && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">LinkedIn:</span>
                    <a
                      href={competitor.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      Visit <ExternalLink size={14} />
                    </a>
                  </div>
                )}
                {!competitor.socialMedia.twitter && !competitor.socialMedia.facebook && !competitor.socialMedia.linkedin && (
                  <div className="text-gray-500 text-sm">No social media links found</div>
                )}
              </div>
            </div>
          </div>

          {/* Keywords */}
          {competitor.keywords.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Top Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {competitor.keywords.slice(0, 20).map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              {competitor.keywords.length > 20 && (
                <div className="text-sm text-gray-500 mt-2">
                  Showing top 20 keywords out of {competitor.keywords.length} total
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
