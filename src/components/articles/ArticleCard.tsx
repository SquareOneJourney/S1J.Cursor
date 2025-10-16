import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Article } from '../../data/articles';

interface ArticleCardProps {
  article: Article;
  className?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  className = ''
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articles/${article.slug}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article
      onClick={handleClick}
      className={`group cursor-pointer bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-gray-100 border-b border-gray-200 flex items-center justify-center overflow-hidden">
        {article.thumbnailUrl ? (
          <img
            src={article.thumbnailUrl}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="text-center text-gray-400 text-xs uppercase tracking-wide">
            Image Coming Soon
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Reading Time */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {article.category}
          </span>
          <div className="flex items-center text-xs text-gray-500">
            <Clock size={14} className="mr-1" />
            {article.readingTime} min read
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
          {article.title}
        </h3>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-4">
          {article.subtitle}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span>By {article.author}</span>
          <span>{formatDate(article.publishedDate)}</span>
        </div>

        {/* Read More */}
        <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
          <span>Read More</span>
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </article>
  );
};






