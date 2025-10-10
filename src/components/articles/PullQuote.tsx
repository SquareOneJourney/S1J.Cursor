import React from 'react';

interface PullQuoteProps {
  children: React.ReactNode;
  author?: string;
  className?: string;
}

export const PullQuote: React.FC<PullQuoteProps> = ({
  children,
  author,
  className = ''
}) => {
  return (
    <div className={`my-12 ${className}`}>
      <div className="border-t border-gray-200 pt-8 pb-4">
        <blockquote className="text-center">
          <div className="text-2xl md:text-3xl font-serif italic text-gray-700 leading-relaxed mb-4">
            "{children}"
          </div>
          {author && (
            <div className="text-sm text-gray-500 font-medium">
              — {author}
            </div>
          )}
        </blockquote>
      </div>
      <div className="border-b border-gray-200 pb-8"></div>
    </div>
  );
};

