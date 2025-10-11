import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ArticleLayout } from '../articles/ArticleLayout';
import { ImagePlaceholder } from '../articles/ImagePlaceholder';
import { PullQuote } from '../articles/PullQuote';
import { NextArticleCTA } from '../articles/NextArticleCTA';
import { getArticleBySlug } from '../../data/articles';

// Import MDX components
import GoogleTrendsGuide from '../../content/articles/google-trends-guide.mdx';
import GoogleKeywordPlannerGuide from '../../content/articles/google-keyword-planner-guide.mdx';
import GoogleAdsGuide from '../../content/articles/google-ads-guide.mdx';
import GoogleTagManagerGuide from '../../content/articles/google-tag-manager-guide.mdx';
import GoogleSearchConsoleGuide from '../../content/articles/google-search-console-guide.mdx';
import GoogleAnalytics4Guide from '../../content/articles/google-analytics-4-guide.mdx';
import GoogleLookerStudioGuide from '../../content/articles/google-looker-studio-guide.mdx';
import GoogleBusinessProfileGuide from '../../content/articles/google-business-profile-guide.mdx';
import GoogleAdsLocalCampaignsGuide from '../../content/articles/google-ads-local-campaigns-guide.mdx';
import GoogleMapsOptimizationGuide from '../../content/articles/google-maps-optimization-guide.mdx';
import GoogleReviewsStrategyGuide from '../../content/articles/google-reviews-strategy-guide.mdx';
import NanoBananaPromptCheatSheetGuide from '../../content/articles/nano-banana-prompt-cheat-sheet.mdx';

const mdxComponents = {
  GoogleTrendsGuide,
  GoogleKeywordPlannerGuide,
  GoogleAdsGuide,
  GoogleTagManagerGuide,
  GoogleSearchConsoleGuide,
  GoogleAnalytics4Guide,
  GoogleLookerStudioGuide,
  GoogleBusinessProfileGuide,
  GoogleAdsLocalCampaignsGuide,
  GoogleMapsOptimizationGuide,
  GoogleReviewsStrategyGuide,
  NanoBananaPromptCheatSheetGuide,
};

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/articles" replace />;
  }

  const article = getArticleBySlug(slug);
  
  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  // Get the corresponding MDX component
  // Remove the '-guide' suffix before converting to PascalCase
  const baseSlug = slug.replace('-guide', '');
  const componentName = `${baseSlug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('')}Guide`;
  
  const MdxComponent = mdxComponents[componentName as keyof typeof mdxComponents];

  if (!MdxComponent) {
    return <Navigate to="/articles" replace />;
  }

  return (
    <ArticleLayout article={article}>
      <MdxComponent 
        components={{
          ImagePlaceholder,
          PullQuote,
          NextArticleCTA,
        }}
      />
    </ArticleLayout>
  );
};
