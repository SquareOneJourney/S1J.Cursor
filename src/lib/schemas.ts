import { z } from 'zod';

// SEO Keyword Schema
export const SEOKeywordSchema = z.object({
  keyword: z.string().min(1),
  searchVolume: z.number().int().min(0),
  difficulty: z.number().int().min(0).max(100),
  cpc: z.number().min(0),
  competition: z.enum(['low', 'medium', 'high']),
  relatedKeywords: z.array(z.string()),
  searchIntent: z.enum(['informational', 'navigational', 'transactional', 'commercial'])
});

// Competitor Schema
export const CompetitorSchema = z.object({
  domain: z.string().url(),
  title: z.string(),
  description: z.string(),
  keywords: z.array(z.string()),
  backlinks: z.number().int().min(0),
  domainAuthority: z.number().int().min(0).max(100),
  socialMedia: z.object({
    twitter: z.string().url().optional(),
    facebook: z.string().url().optional(),
    linkedin: z.string().url().optional()
  }),
  content: z.object({
    totalPages: z.number().int().min(0),
    blogPosts: z.number().int().min(0),
    lastUpdated: z.string().datetime()
  })
});

// Niche Content Schema
export const NicheContentSchema = z.object({
  title: z.string().min(1),
  url: z.string().url(),
  description: z.string(),
  keywords: z.array(z.string()),
  publishDate: z.string().datetime(),
  author: z.string(),
  wordCount: z.number().int().min(0),
  readabilityScore: z.number().int().min(0).max(100),
  sentiment: z.enum(['positive', 'neutral', 'negative']),
  engagement: z.object({
    shares: z.number().int().min(0),
    comments: z.number().int().min(0),
    likes: z.number().int().min(0)
  })
});

// API Response Schemas
export const FirecrawlScrapeResponseSchema = z.object({
  success: z.boolean(),
  data: z.object({
    markdown: z.string().optional(),
    html: z.string().optional(),
    metadata: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      image: z.string().optional(),
      url: z.string().url().optional()
    }).optional()
  }).optional(),
  error: z.string().optional()
});

// Validation Functions
export const validateSEOKeywords = (data: unknown) => {
  return SEOKeywordSchema.array().parse(data);
};

export const validateCompetitor = (data: unknown) => {
  return CompetitorSchema.parse(data);
};

export const validateNicheContent = (data: unknown) => {
  return NicheContentSchema.array().parse(data);
};

export const validateFirecrawlResponse = (data: unknown) => {
  return FirecrawlScrapeResponseSchema.parse(data);
};

// Type exports
export type SEOKeywordData = z.infer<typeof SEOKeywordSchema>;
export type CompetitorData = z.infer<typeof CompetitorSchema>;
export type NicheContentData = z.infer<typeof NicheContentSchema>;
export type FirecrawlScrapeResponse = z.infer<typeof FirecrawlScrapeResponseSchema>;
