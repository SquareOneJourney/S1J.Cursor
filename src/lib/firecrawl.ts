import FirecrawlApp from '@mendable/firecrawl-js';
import { 
  SEOKeywordData, 
  CompetitorData, 
  NicheContentData,
  validateSEOKeywords,
  validateCompetitor,
  validateNicheContent,
  validateFirecrawlResponse
} from './schemas';

// Initialize Firecrawl with API key from environment variables
const firecrawl = new FirecrawlApp({ 
  apiKey: import.meta.env.VITE_FIRECRAWL_API_KEY 
});

// Re-export types for backward compatibility
export type { SEOKeywordData, CompetitorData, NicheContentData };

export class FirecrawlSEOAnalyzer {
  private firecrawl: FirecrawlApp;

  constructor() {
    this.firecrawl = firecrawl;
  }

  /**
   * Extract SEO keywords from a website
   */
  async extractSEOKeywords(url: string): Promise<SEOKeywordData[]> {
    try {
      const scrapeResult = await this.firecrawl.scrapeUrl(url, {
        formats: ['markdown'],
        onlyMainContent: true,
        includeTags: ['meta', 'title', 'h1', 'h2', 'h3', 'p', 'a']
      });

      // Validate Firecrawl response
      const validatedResponse = validateFirecrawlResponse(scrapeResult);

      if (!validatedResponse.success) {
        throw new Error('Failed to scrape URL');
      }

      const content = validatedResponse.data?.markdown || '';
      const meta = validatedResponse.data?.metadata || {};

      // Extract keywords from content
      const keywords = this.extractKeywordsFromContent(content, meta);
      
      const keywordData = keywords.map(keyword => ({
        keyword,
        searchVolume: Math.floor(Math.random() * 10000) + 100, // Mock data
        difficulty: Math.floor(Math.random() * 100) + 1,
        cpc: Math.random() * 5,
        competition: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as 'low' | 'medium' | 'high',
        relatedKeywords: this.generateRelatedKeywords(keyword),
        searchIntent: this.determineSearchIntent(keyword)
      }));

      // Validate the keyword data before returning
      return validateSEOKeywords(keywordData);
    } catch (error) {
      console.error('Error extracting SEO keywords:', error);
      throw error;
    }
  }

  /**
   * Analyze competitor websites
   */
  async analyzeCompetitor(domain: string): Promise<CompetitorData> {
    try {
      const scrapeResult = await this.firecrawl.scrapeUrl(`https://${domain}`, {
        formats: ['markdown', 'html'],
        onlyMainContent: true,
        includeTags: ['meta', 'title', 'h1', 'h2', 'h3', 'p', 'a', 'link']
      });

      // Validate Firecrawl response
      const validatedResponse = validateFirecrawlResponse(scrapeResult);

      if (!validatedResponse.success) {
        throw new Error('Failed to scrape competitor domain');
      }

      const content = validatedResponse.data?.markdown || '';
      const html = validatedResponse.data?.html || '';
      const meta = validatedResponse.data?.metadata || {};

      // Extract competitor data
      const keywords = this.extractKeywordsFromContent(content, meta);
      const socialMedia = this.extractSocialMedia(html);
      
      const competitorData = {
        domain: `https://${domain}`,
        title: meta.title || '',
        description: meta.description || '',
        keywords: keywords.slice(0, 20), // Top 20 keywords
        backlinks: Math.floor(Math.random() * 10000) + 100, // Mock data
        domainAuthority: Math.floor(Math.random() * 100) + 1,
        socialMedia,
        content: {
          totalPages: Math.floor(Math.random() * 1000) + 10,
          blogPosts: Math.floor(Math.random() * 500) + 5,
          lastUpdated: new Date().toISOString()
        }
      };

      // Validate the competitor data before returning
      return validateCompetitor(competitorData);
    } catch (error) {
      console.error('Error analyzing competitor:', error);
      throw error;
    }
  }

  /**
   * Find niche content related to specific topics
   */
  async findNicheContent(topics: string[], maxResults: number = 10): Promise<NicheContentData[]> {
    try {
      const searchQueries = topics.map(topic => 
        `site:reddit.com OR site:medium.com OR site:dev.to "${topic}" AI business`
      );

      const results: NicheContentData[] = [];

      for (const query of searchQueries) {
        try {
          // Note: This is a simplified implementation
          // In a real scenario, you'd use a search API or web scraping
          const mockContent = {
            title: `How to Use ${topics[0]} for Small Business Growth`,
            url: `https://example.com/${topics[0].toLowerCase().replace(/\s+/g, '-')}`,
            description: `A comprehensive guide on leveraging ${topics[0]} to grow your small business with practical examples and case studies.`,
            keywords: [topics[0], 'small business', 'growth', 'AI tools'],
            publishDate: new Date().toISOString(),
            author: 'Business Expert',
            wordCount: Math.floor(Math.random() * 2000) + 500,
            readabilityScore: Math.floor(Math.random() * 40) + 60,
            sentiment: ['positive', 'neutral', 'negative'][Math.floor(Math.random() * 3)] as 'positive' | 'neutral' | 'negative',
            engagement: {
              shares: Math.floor(Math.random() * 1000),
              comments: Math.floor(Math.random() * 100),
              likes: Math.floor(Math.random() * 500)
            }
          };
          
          // Validate each content item before adding
          const validatedContent = validateNicheContent([mockContent]);
          results.push(...validatedContent);
        } catch (error) {
          console.error(`Error finding content for topic: ${query}`, error);
        }
      }

      return results.slice(0, maxResults);
    } catch (error) {
      console.error('Error finding niche content:', error);
      throw error;
    }
  }

  /**
   * Extract keywords from content using basic text analysis
   */
  private extractKeywordsFromContent(content: string, meta: any): string[] {
    const text = content.toLowerCase();
    const stopWords = new Set([
      'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
      'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
      'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those'
    ]);

    // Extract words and count frequency
    const words = text.match(/\b[a-z]{3,}\b/g) || [];
    const wordCount: { [key: string]: number } = {};

    words.forEach(word => {
      if (!stopWords.has(word)) {
        wordCount[word] = (wordCount[word] || 0) + 1;
      }
    });

    // Sort by frequency and return top keywords
    return Object.entries(wordCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 50)
      .map(([word]) => word);
  }

  /**
   * Generate related keywords
   */
  private generateRelatedKeywords(keyword: string): string[] {
    const related = [
      `${keyword} guide`,
      `${keyword} tutorial`,
      `${keyword} tips`,
      `${keyword} best practices`,
      `${keyword} tools`,
      `${keyword} software`,
      `${keyword} examples`
    ];
    return related.slice(0, 5);
  }

  /**
   * Determine search intent based on keyword
   */
  private determineSearchIntent(keyword: string): 'informational' | 'navigational' | 'transactional' | 'commercial' {
    const transactional = ['buy', 'purchase', 'order', 'price', 'cost'];
    const commercial = ['best', 'top', 'review', 'compare', 'vs'];
    const navigational = ['login', 'sign in', 'register', 'homepage'];

    if (transactional.some(word => keyword.includes(word))) return 'transactional';
    if (commercial.some(word => keyword.includes(word))) return 'commercial';
    if (navigational.some(word => keyword.includes(word))) return 'navigational';
    return 'informational';
  }

  /**
   * Extract social media links from HTML
   */
  private extractSocialMedia(html: string): { twitter?: string; facebook?: string; linkedin?: string } {
    const socialMedia: { twitter?: string; facebook?: string; linkedin?: string } = {};

    // Extract Twitter
    const twitterMatch = html.match(/https?:\/\/(?:www\.)?(?:twitter\.com|x\.com)\/[a-zA-Z0-9_]+/);
    if (twitterMatch) socialMedia.twitter = twitterMatch[0];

    // Extract Facebook
    const facebookMatch = html.match(/https?:\/\/(?:www\.)?facebook\.com\/[a-zA-Z0-9.]+/);
    if (facebookMatch) socialMedia.facebook = facebookMatch[0];

    // Extract LinkedIn
    const linkedinMatch = html.match(/https?:\/\/(?:www\.)?linkedin\.com\/[a-zA-Z0-9\/]+/);
    if (linkedinMatch) socialMedia.linkedin = linkedinMatch[0];

    return socialMedia;
  }
}

export const firecrawlSEOAnalyzer = new FirecrawlSEOAnalyzer();
