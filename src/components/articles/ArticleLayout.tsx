import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { ReadingProgressBar } from './ReadingProgressBar';
import { Article } from '../../data/articles';
import { getNextArticle, getPreviousArticle } from '../../data/articles';

interface ArticleLayoutProps {
  article: Article;
  children: React.ReactNode;
}

export const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  article,
  children
}) => {
  const navigate = useNavigate();

  const nextArticle = getNextArticle(article.slug);
  const previousArticle = getPreviousArticle(article.slug);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = async () => {
    const url = window.location.href;
    const title = article.title;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        // You could add a toast notification here
      } catch (err) {
        console.log('Error copying to clipboard:', err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ReadingProgressBar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8">
          <div>
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <button
                  onClick={() => navigate('/')}
                  className="hover:text-gray-900 transition-colors"
                >
                  Home
                </button>
                <span>/</span>
                <button
                  onClick={() => navigate('/articles')}
                  className="hover:text-gray-900 transition-colors"
                >
                  Articles
                </button>
                <span>/</span>
                <span className="text-gray-900 font-medium truncate">{article.title}</span>
              </div>
            </nav>

            {/* Back Button */}
            <div className="sticky top-24 z-40 mb-8">
              <button
                onClick={() => navigate('/articles')}
                className="flex w-fit items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-gray-600 shadow-sm ring-1 ring-gray-200 backdrop-blur hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={18} />
                <span className="text-sm font-medium">Back to Articles</span>
              </button>
            </div>

            {/* Article Header */}
            <header className="mb-12">
              <div className="mb-6">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {article.subtitle}
              </p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center">
                  <span>By {article.author}</span>
                </div>
                <div className="flex items-center">
                  <span>{formatDate(article.publishedDate)}</span>
                </div>
                <div className="flex items-center">
                  <span>{article.readingTime} min read</span>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Share2 size={16} className="mr-1" />
                  Share
                </button>
              </div>

            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              {children}
            </article>

            {/* Social Share Buttons */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <span className="text-sm font-medium">Share on X</span>
                </button>
                <button
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <span className="text-sm font-medium">Share on LinkedIn</span>
                </button>
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <span className="text-sm font-medium">Share on Facebook</span>
                </button>
              </div>
            </div>

            {/* Comments Placeholder */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <MessageCircle size={32} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Comments</h3>
                <p className="text-gray-600 mb-4">Comments will be available soon.</p>
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors text-sm font-medium">
                  Enable Notifications
                </button>
              </div>
            </div>

            {/* Next/Previous Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Previous Article */}
                {previousArticle && (
                  <button
                    onClick={() => navigate(`/articles/${previousArticle.slug}`)}
                    className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all text-left"
                  >
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <ChevronLeft size={16} className="mr-1" />
                      Previous Article
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {previousArticle.title}
                    </h3>
                  </button>
                )}

                {/* Next Article */}
                {nextArticle && (
                  <button
                    onClick={() => navigate(`/articles/${nextArticle.slug}`)}
                    className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all text-left md:text-right"
                  >
                    <div className="flex items-center justify-end text-sm text-gray-500 mb-2">
                      Next Article
                      <ChevronRight size={16} className="ml-1" />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {nextArticle.title}
                    </h3>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
