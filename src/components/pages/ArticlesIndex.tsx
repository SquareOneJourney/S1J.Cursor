import React from 'react';
import { ArticleCard } from '../articles/ArticleCard';
import { articles } from '../../data/articles';

export const ArticlesIndex: React.FC = () => {
  // Sort articles by order
  const sortedArticles = [...articles].sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-gray-900 mb-6">
            Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive guides to help you master Google's marketing tools and grow your business with data-driven strategies.
          </p>
        </header>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              className="h-full"
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-12 border border-gray-200">
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              These articles are just the beginning. Explore our comprehensive platform to discover step-by-step guides, tools, and resources designed specifically for small business owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/start'}
                className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Explore Our Platform
              </button>
              <button
                onClick={() => window.location.href = '/seo'}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try SEO Tools
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

