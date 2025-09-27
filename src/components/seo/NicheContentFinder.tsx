import React, { useState } from 'react';
import { Search, FileText, Calendar, User, MessageSquare, Heart, Share2, Loader2, TrendingUp, BookOpen } from 'lucide-react';
import { seoResearchTools, NicheContent } from '../../lib/seo-tools';

interface NicheContentFinderProps {
  onContentFound?: (content: NicheContent[]) => void;
}

export const NicheContentFinder: React.FC<NicheContentFinderProps> = ({ onContentFound }) => {
  const [topics, setTopics] = useState('');
  const [content, setContent] = useState<NicheContent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!topics.trim()) {
      setError('Please enter at least one topic');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const topicList = topics.split(',').map(t => t.trim()).filter(t => t.length > 0);
      const results = await seoResearchTools.findNicheContent(topicList);
      setContent(results);
      onContentFound?.(results);
    } catch (err) {
      setError('Failed to find niche content. Please try again.');
      console.error('Niche content search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600 bg-green-100';
      case 'negative': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getReadabilityColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
          <Search className="mr-3 text-purple-600" size={32} />
          Niche Content Discovery
        </h2>
        <p className="text-gray-600 mb-6">
          Discover content ideas and trending topics in your niche to inspire your own content strategy.
        </p>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={topics}
            onChange={(e) => setTopics(e.target.value)}
            placeholder="Enter topics (comma-separated): AI automation, small business, digital marketing"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            onClick={handleSearch}
            disabled={loading || !topics.trim()}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <Search size={20} />
            )}
            {loading ? 'Searching...' : 'Find Content'}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}
      </div>

      {content.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">
              Content Ideas ({content.length})
            </h3>
            <div className="text-sm text-gray-500">
              Based on your topics: {topics}
            </div>
          </div>

          <div className="grid gap-6">
            {content.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>{item.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{formatDate(item.publishDate)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText size={16} />
                        <span>{item.wordCount.toLocaleString()} words</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSentimentColor(item.sentiment)}`}>
                      {item.sentiment}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getReadabilityColor(item.readabilityScore)}`}>
                      {item.readabilityScore}/100
                    </span>
                  </div>
                </div>

                {/* Engagement Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Heart className="text-red-500" size={16} />
                    <div>
                      <div className="text-sm text-gray-500">Likes</div>
                      <div className="font-semibold">{item.engagement.likes.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="text-blue-500" size={16} />
                    <div>
                      <div className="text-sm text-gray-500">Comments</div>
                      <div className="font-semibold">{item.engagement.comments.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Share2 className="text-green-500" size={16} />
                    <div>
                      <div className="text-sm text-gray-500">Shares</div>
                      <div className="font-semibold">{item.engagement.shares.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-purple-500" size={16} />
                    <div>
                      <div className="text-sm text-gray-500">Total Engagement</div>
                      <div className="font-semibold">
                        {(item.engagement.likes + item.engagement.comments + item.engagement.shares).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Keywords */}
                {item.keywords.length > 0 && (
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Keywords:</div>
                    <div className="flex flex-wrap gap-1">
                      {item.keywords.map((keyword, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <BookOpen size={16} />
                    View Content Idea
                  </a>
                  <div className="text-sm text-gray-500">
                    Readability: {item.readabilityScore}/100
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {content.length === 0 && !loading && (
        <div className="text-center py-12">
          <Search className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Content Ideas Found</h3>
          <p className="text-gray-600">
            Try different topics or keywords to find relevant content ideas in your niche.
          </p>
        </div>
      )}
    </div>
  );
};