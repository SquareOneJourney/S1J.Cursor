import React from 'react';

interface NextArticleCTAProps {
  title?: string;
  callToAction?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const NextArticleCTA: React.FC<NextArticleCTAProps> = ({
  title = 'Up Next',
  callToAction = 'Explore the next article',
  href,
  onClick,
  children
}) => {
  const buttonContent = (
    <span className="inline-flex items-center gap-2">
      {callToAction}
      <span aria-hidden className="text-lg leading-none">&rarr;</span>
    </span>
  );

  return (
    <div className="my-16">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            {title}
          </p>
          <div className="mt-3 text-xl md:text-2xl font-serif text-gray-900 leading-relaxed">
            {children}
          </div>
        </div>
        {(href || onClick) && (
          href ? (
            <a
              href={href}
              className="self-start md:self-center inline-flex items-center px-5 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
            >
              {buttonContent}
            </a>
          ) : (
            <button
              type="button"
              onClick={onClick}
              className="self-start md:self-center inline-flex items-center px-5 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
            >
              {buttonContent}
            </button>
          )
        )}
      </div>
    </div>
  );
};
