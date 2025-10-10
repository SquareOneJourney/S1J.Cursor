import React from 'react';

interface ImagePlaceholderProps {
  variant?: 'hero' | 'inline' | 'wide';
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  variant = 'inline',
  width,
  height,
  alt = 'Image placeholder',
  className = ''
}) => {
  const getDimensions = () => {
    switch (variant) {
      case 'hero':
        return { width: width || 800, height: height || 400 };
      case 'wide':
        return { width: width || 600, height: height || 300 };
      case 'inline':
      default:
        return { width: width || 400, height: height || 250 };
    }
  };

  const dimensions = getDimensions();

  const getContainerClasses = () => {
    const baseClasses = 'bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 font-medium';
    
    switch (variant) {
      case 'hero':
        return `${baseClasses} w-full h-64 md:h-80 lg:h-96`;
      case 'wide':
        return `${baseClasses} w-full h-48 md:h-64`;
      case 'inline':
      default:
        return `${baseClasses} w-full h-40 md:h-48`;
    }
  };

  return (
    <div className={`${getContainerClasses()} ${className}`}>
      <div className="text-center">
        <div className="text-sm mb-2">📷</div>
        <div className="text-xs">
          {dimensions.width} × {dimensions.height}
        </div>
        <div className="text-xs mt-1 opacity-75">
          {alt}
        </div>
      </div>
    </div>
  );
};

