export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  publishedDate: string;
  readingTime: number;
  category: string;
  thumbnailUrl: string;
  order: number;
}

export const articles: Article[] = [
  {
    slug: 'google-trends-guide',
    title: 'Google Trends: A Practical Guide to Understanding Search Interest',
    subtitle: 'Learn how to use Google Trends to discover what people are searching for and identify emerging opportunities in your market.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-15',
    readingTime: 8,
    category: 'Google Tools',
    thumbnailUrl: '/Google Trends Logo.PNG',
    order: 1
  },
  {
    slug: 'google-keyword-planner-guide',
    title: 'Google Keyword Planner: Measuring Real Search Demand with Data',
    subtitle: 'If Google Trends shows when and where people are searching, Google Keyword Planner shows how many people are searching and how valuable those searches are.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-15',
    readingTime: 10,
    category: 'Google Tools',
    thumbnailUrl: '/Google Keyword Planner Tile.png',
    order: 2
  },
  {
    slug: 'google-ads-guide',
    title: 'Google Ads: Turning Searches into Sales',
    subtitle: 'Step-by-step guide to using Google Ads to capture search demand, track results, and grow your business — written for real business owners.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-15',
    readingTime: 12,
    category: 'Google Tools',
    thumbnailUrl: '/Google Ads Logo.PNG',
    order: 3
  },
  {
    slug: 'google-tag-manager-guide',
    title: 'Google Tag Manager (GTM): Streamline Tracking and Simplify Data Management',
    subtitle: 'Streamline your website tracking without touching code, making analytics accessible to everyone on your team.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-15',
    readingTime: 9,
    category: 'Google Tools',
    thumbnailUrl: '/Google Tag Manager Logo.PNG',
    order: 4
  },
  {
    slug: 'google-search-console-guide',
    title: 'Google Search Console (GSC): Practical Guide to Visibility and Search Engine Optimization (SEO)',
    subtitle: 'Monitor your website\'s performance in Google search results and optimize for better visibility.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-15',
    readingTime: 11,
    category: 'Google Tools',
    thumbnailUrl: '/Google Search Console Logo.PNG',
    order: 5
  },
  {
    slug: 'google-analytics-4-guide',
    title: 'Google Analytics 4 (GA4): Turning Tracking into Insights',
    subtitle: 'Navigate the new GA4 interface and extract meaningful insights from your website data.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-15',
    readingTime: 13,
    category: 'Google Tools',
    thumbnailUrl: '/GA4 Image1.png',
    order: 6
  },
  {
    slug: 'google-looker-studio-guide',
    title: 'Google Looker Studio: Visualizing Your Data Clearly and Effectively',
    subtitle: 'Create compelling reports and dashboards that make complex data easy to understand and act upon.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-15',
    readingTime: 7,
    category: 'Google Tools',
    thumbnailUrl: '/GLS Image1.png',
    order: 7
  },
  {
    slug: 'google-business-profile-guide',
    title: 'Google Business Profile (GBP): Standing Out in Local Search',
    subtitle: 'Optimize your Google Business Profile to attract more local customers and improve your search visibility.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-15',
    readingTime: 9,
    category: 'Google Tools',
    thumbnailUrl: '/GBP Image1.png',
    order: 8
  },
  {
    slug: 'google-ads-local-campaigns-guide',
    title: 'Google Ads Local Campaigns: Boosting Real-World Visibility',
    subtitle: 'Drive foot traffic and phone calls with targeted local advertising campaigns that reach customers near you.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-15',
    readingTime: 8,
    category: 'Google Tools',
    thumbnailUrl: '/GALC Image1.PNG',
    order: 9
  },
  {
    slug: 'google-maps-optimization-guide',
    title: 'Google Maps Optimization: Being the First Place People See',
    subtitle: 'Ensure your business appears prominently in Google Maps searches and attracts nearby customers.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-15',
    readingTime: 10,
    category: 'Google Tools',
    thumbnailUrl: '/GMO Image1.png',
    order: 10
  },
  {
    slug: 'google-reviews-strategy-guide',
    title: 'Google Reviews Strategy: Building Trust and Improving Rankings',
    subtitle: 'Develop a systematic approach to managing and growing your Google reviews for better visibility and credibility.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-15',
    readingTime: 11,
    category: 'Google Tools',
    thumbnailUrl: '/GR Image1.png',
    order: 11
  },
  {
    slug: 'content-creation-nano-banana',
    title: 'Explore Gemini\'s Nano Banana Image Editor',
    subtitle: 'Nano Banana, what\'s all the fuss about?',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-10',
    readingTime: 7,
    category: 'AI Creativity',
    thumbnailUrl: '/ATimage1-nano-banana.png',
    order: 12
  },
  {
    slug: 'content-creation-realtor-images',
    title: 'How Realtors Can Use AI to Make Every Listing Look Its Best',
    subtitle: 'From cloudy skies to cluttered rooms — how real estate agents can use AI image tools to polish every property photo.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-14',
    readingTime: 8,
    category: 'Content Creation',
    thumbnailUrl: '/House Articles Page.png',
    order: 13
  },
  {
    slug: 'content-creation-online-retailers',
    title: 'How AI Image Tools Help Online Retailers Upgrade Their Product Photos (Without a Studio)',
    subtitle: 'Create clean, professional product images that boost trust and sales — all using Gemini\'s Nano Banana image editor.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-14',
    readingTime: 8,
    category: 'AI Creativity',
    thumbnailUrl: '/Online Business Image1.png',
    order: 14
  },
  {
    slug: 'content-creation-night-with-ai',
    title: 'I Spent The Night With ChatGPT',
    subtitle: 'Kyle, made this for you buddy but it sucks. We will replace it completely with your article.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-14',
    readingTime: 8,
    category: 'AI Journey',
    thumbnailUrl: '/ATimage3-night-with-ai.png',
    order: 15
  },
  {
    slug: 'content-creation-restaurant-photos',
    title: 'Real Photos, Real Results: AI Prompts for Restaurant Owners',
    subtitle: 'Three simple AI image prompts to help busy restaurant owners clean up, brighten, and balance their own photos — without hiring a photographer.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-16',
    readingTime: 8,
    category: 'Content Creation',
    thumbnailUrl: '/Hash Image.png',
    order: 16
  },  
  {
    slug: 'mediocracy-the-performance-of-principle',
    title: 'The Performance of Principle — From Corporate Illusion to Independent Creation',
    subtitle: 'A critique of performative corporate ethics and the moral case for creative independence.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-16',
    readingTime: 8,
    category: 'Content Creation',
    thumbnailUrl: '/ATimage3-night-with-ai.png',
    order: 17
  },
  {
    slug: 'perplexity',
    title: 'Perplexity: The Search Tool That Actually Answers You',
    subtitle: 'A plain-language guide to using Perplexity — the AI-powered search tool that turns complex research into clear, verified answers.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-23',
    readingTime: 7,
    category: 'AI Tools',
    thumbnailUrl: '/Perplexity Main1.png',
    order: 18
  },
  {
    slug: 'perplexity-comet',
    title: 'Perplexity\'s Comet: The Future of Web Browsing',
    subtitle: 'Meet Perplexity\'s Comet — say goodbye to Chrome and Edge, the first-of-its-kind AI web browser that will change the way you work.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-23',
    readingTime: 6,
    category: 'AI Tools',
    thumbnailUrl: '/Perplexity Comet Main.png',
    order: 19
  },  
  {
    slug: 'lindy',
    title: 'Lindy AI Review: The Easiest Automation Platform for Real Work',
    subtitle: 'A rare product that delivers on its promise. Lindy’s AI agents are fast, flexible, and genuinely useful — just don’t underestimate how quickly you’ll hit the paywall.',
    author: 'SquareOneJourney Team',
    publishedDate: '2025-10-23',
    readingTime: 6,
    category: 'AI Tools',
    thumbnailUrl: '/Lindy Main.png',
    order: 20
  },    
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getNextArticle = (currentSlug: string): Article | undefined => {
  const currentIndex = articles.findIndex(article => article.slug === currentSlug);
  return currentIndex < articles.length - 1 ? articles[currentIndex + 1] : undefined;
};

export const getPreviousArticle = (currentSlug: string): Article | undefined => {
  const currentIndex = articles.findIndex(article => article.slug === currentSlug);
  return currentIndex > 0 ? articles[currentIndex - 1] : undefined;
};
