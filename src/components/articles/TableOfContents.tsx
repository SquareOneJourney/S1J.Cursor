import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TableOfContentsProps {
  headings: Array<{ id: string; text: string; level: number }>;
  className?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  headings,
  className = ''
}) => {
  const [activeId, setActiveId] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.id)).filter(Boolean);
      
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveId(element.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className={`${className}`}>
      {/* Mobile Toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
        >
          <span className="font-medium text-gray-900">Table of Contents</span>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {/* Desktop Sidebar / Mobile Expanded */}
      <div className={`${isExpanded ? 'block' : 'hidden'} lg:block`}>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">Table of Contents</h3>
          <nav className="space-y-2">
            {headings.map((heading) => (
              <button
                key={heading.id}
                onClick={() => scrollToHeading(heading.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  activeId === heading.id
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                } ${
                  heading.level === 3 ? 'ml-4' : heading.level === 4 ? 'ml-8' : ''
                }`}
              >
                {heading.text}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

