import type { Tile, TileCategory } from '../types/tiles';

export const tiles: Tile[] = [
  // Explore Journey Tiles - 10 tiles as specified
  {
    id: 'marketing-research-without-ai',
    title: 'Marketing Research Without AI',
    description: 'Learn how to conduct effective market research using free online tools and community insights.',
    level: 1,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'A comprehensive guide to market research using Google Maps, social media, and community forums to validate your business idea without expensive tools or consultants.'
      }
    },
    links: [
      {
        name: 'Google Maps',
        url: 'https://maps.google.com',
        description: 'Virtual location scouting and competitor research',
        type: 'tool'
      },
      {
        name: 'Google Trends',
        url: 'https://trends.google.com',
        description: 'Track demand and interest in your area',
        type: 'tool'
      }
    ],
    tags: ['market research', 'business validation', 'free tools'],
    estimatedTime: '20 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'marketing-research-with-ai',
    title: 'Marketing Research With AI',
    description: 'Learn how AI tools like ChatGPT and Claude can uncover insights, trends, and customer needs faster than ever.',
    level: 1,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Discover how AI can accelerate your market research process, analyze customer feedback, and identify trends that would take hours to find manually.'
      }
    },
    links: [
      {
        name: 'ChatGPT',
        url: 'https://chat.openai.com',
        description: 'AI assistant for market research analysis',
        type: 'tool'
      },
      {
        name: 'Claude',
        url: 'https://claude.ai',
        description: 'Advanced AI for data analysis and insights',
        type: 'tool'
      }
    ],
    tags: ['AI tools', 'market research', 'data analysis'],
    estimatedTime: '15 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'ai-everyday-business-tasks',
    title: 'AI in Everyday Business Tasks',
    description: 'Discover simple ways AI can save you time on scheduling, emails, and admin work.',
    level: 1,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Learn practical AI applications for daily business operations including email management, scheduling, and administrative tasks.'
      }
    },
    links: [
      {
        name: 'Calendly AI',
        url: 'https://calendly.com',
        description: 'AI-powered scheduling assistant',
        type: 'tool'
      },
      {
        name: 'Grammarly Business',
        url: 'https://grammarly.com',
        description: 'AI writing assistant for emails and documents',
        type: 'tool'
      }
    ],
    tags: ['productivity', 'automation', 'admin tasks'],
    estimatedTime: '12 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'ai-content-creation',
    title: 'AI for Content Creation',
    description: 'From blogs to graphics to video scripts — see how AI can boost your marketing reach.',
    level: 2,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Explore how AI can help create engaging content across multiple formats including blog posts, social media graphics, and video scripts.'
      }
    },
    links: [
      {
        name: 'Canva AI',
        url: 'https://canva.com',
        description: 'AI-powered design and content creation',
        type: 'tool'
      },
      {
        name: 'Jasper AI',
        url: 'https://jasper.ai',
        description: 'AI writing assistant for marketing content',
        type: 'tool'
      }
    ],
    tags: ['content creation', 'marketing', 'design'],
    estimatedTime: '18 minutes',
    difficulty: 'intermediate'
  },
  {
    id: 'ai-customer-service',
    title: 'AI and Customer Service',
    description: 'Learn how chatbots and automation tools can improve customer satisfaction without extra hires.',
    level: 2,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Discover how AI-powered customer service tools can handle common inquiries, provide instant responses, and improve customer satisfaction.'
      }
    },
    links: [
      {
        name: 'Intercom',
        url: 'https://intercom.com',
        description: 'AI-powered customer service platform',
        type: 'tool'
      },
      {
        name: 'Zendesk Chat',
        url: 'https://zendesk.com',
        description: 'Customer service with AI automation',
        type: 'tool'
      }
    ],
    tags: ['customer service', 'chatbots', 'automation'],
    estimatedTime: '20 minutes',
    difficulty: 'intermediate'
  },
  {
    id: 'ai-market-insights-trends',
    title: 'AI for Market Insights & Trends',
    description: 'See how AI can help you spot shifts in your industry and stay one step ahead of competitors.',
    level: 2,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Learn how AI can analyze market data, track competitor activities, and identify emerging trends to keep your business competitive.'
      }
    },
    links: [
      {
        name: 'Google Analytics Intelligence',
        url: 'https://analytics.google.com',
        description: 'AI-powered website and market insights',
        type: 'tool'
      },
      {
        name: 'SEMrush',
        url: 'https://semrush.com',
        description: 'AI-driven competitive analysis',
        type: 'tool'
      }
    ],
    tags: ['market analysis', 'competitive intelligence', 'trends'],
    estimatedTime: '25 minutes',
    difficulty: 'intermediate'
  },
  {
    id: 'common-myths-about-ai',
    title: 'Common Myths About AI',
    description: 'Cut through the noise: what AI can really do, and what it can\'t.',
    level: 1,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Separate fact from fiction about AI capabilities, limitations, and realistic expectations for small business applications.'
      }
    },
    links: [
      {
        name: 'AI Reality Check',
        url: 'https://example.com/ai-myths',
        description: 'Debunking common AI misconceptions',
        type: 'guide'
      },
      {
        name: 'AI Capabilities Guide',
        url: 'https://example.com/ai-capabilities',
        description: 'What AI can and cannot do for businesses',
        type: 'guide'
      }
    ],
    tags: ['AI education', 'myths', 'realistic expectations'],
    estimatedTime: '10 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'ai-local-small-businesses',
    title: 'AI for Local & Small Businesses',
    description: 'Practical examples of how small businesses (not just big corporations) are using AI.',
    level: 1,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Real-world examples of how local restaurants, retail stores, and service businesses are successfully implementing AI solutions.'
      }
    },
    links: [
      {
        name: 'Small Business AI Case Studies',
        url: 'https://example.com/small-business-cases',
        description: 'Real examples of AI in small businesses',
        type: 'guide'
      },
      {
        name: 'Local Business AI Tools',
        url: 'https://example.com/local-ai-tools',
        description: 'AI tools specifically for local businesses',
        type: 'tool'
      }
    ],
    tags: ['small business', 'local business', 'case studies'],
    estimatedTime: '15 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'getting-comfortable-ai-tools',
    title: 'Getting Comfortable with AI Tools',
    description: 'A gentle introduction to experimenting with AI tools, without overwhelm.',
    level: 1,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'A beginner-friendly guide to starting your AI journey with simple, low-risk experiments that build confidence and understanding.'
      }
    },
    links: [
      {
        name: 'AI Experimentation Guide',
        url: 'https://example.com/ai-experiments',
        description: 'Safe ways to start experimenting with AI',
        type: 'guide'
      },
      {
        name: 'Beginner AI Tools',
        url: 'https://example.com/beginner-tools',
        description: 'User-friendly AI tools for beginners',
        type: 'tool'
      }
    ],
    tags: ['beginner friendly', 'experimentation', 'confidence building'],
    estimatedTime: '12 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'future-business-ai',
    title: 'The Future of Business and AI',
    description: 'What the next 5–10 years of AI mean for small business owners and entrepreneurs.',
    level: 3,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Explore upcoming AI trends, emerging technologies, and how to prepare your business for the future of AI integration.'
      }
    },
    links: [
      {
        name: 'AI Future Trends Report',
        url: 'https://example.com/ai-future-trends',
        description: 'Industry predictions for AI in business',
        type: 'guide'
      },
      {
        name: 'Future-Proofing Your Business',
        url: 'https://example.com/future-proofing',
        description: 'How to prepare for AI evolution',
        type: 'guide'
      }
    ],
    tags: ['future trends', 'strategic planning', 'innovation'],
    estimatedTime: '30 minutes',
    difficulty: 'advanced'
  },

  // Start Journey Tiles - Same as Explore but with start journeyType
  {
    id: 'start-marketing-research-without-ai',
    title: 'Marketing Research Without AI',
    description: 'Learn how to conduct effective market research using free online tools and community insights.',
    level: 1,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'A comprehensive guide to market research using Google Maps, social media, and community forums to validate your business idea without expensive tools or consultants.'
      }
    },
    links: [
      {
        name: 'Google Maps',
        url: 'https://maps.google.com',
        description: 'Virtual location scouting and competitor research',
        type: 'tool'
      },
      {
        name: 'Google Trends',
        url: 'https://trends.google.com',
        description: 'Track demand and interest in your area',
        type: 'tool'
      }
    ],
    tags: ['market research', 'business validation', 'free tools'],
    estimatedTime: '20 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'start-marketing-research-with-ai',
    title: 'Marketing Research With AI',
    description: 'Learn how AI tools like ChatGPT and Claude can uncover insights, trends, and customer needs faster than ever.',
    level: 1,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Discover how AI can accelerate your market research process, analyze customer feedback, and identify trends that would take hours to find manually.'
      }
    },
    links: [
      {
        name: 'ChatGPT',
        url: 'https://chat.openai.com',
        description: 'AI assistant for market research analysis',
        type: 'tool'
      },
      {
        name: 'Claude',
        url: 'https://claude.ai',
        description: 'Advanced AI for data analysis and insights',
        type: 'tool'
      }
    ],
    tags: ['AI tools', 'market research', 'data analysis'],
    estimatedTime: '15 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'start-ai-everyday-business-tasks',
    title: 'AI in Everyday Business Tasks',
    description: 'Discover simple ways AI can save you time on scheduling, emails, and admin work.',
    level: 1,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Learn practical AI applications for daily business operations including email management, scheduling, and administrative tasks.'
      }
    },
    links: [
      {
        name: 'Calendly AI',
        url: 'https://calendly.com',
        description: 'AI-powered scheduling assistant',
        type: 'tool'
      },
      {
        name: 'Grammarly Business',
        url: 'https://grammarly.com',
        description: 'AI writing assistant for emails and documents',
        type: 'tool'
      }
    ],
    tags: ['productivity', 'automation', 'admin tasks'],
    estimatedTime: '12 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'start-ai-content-creation',
    title: 'AI for Content Creation',
    description: 'From blogs to graphics to video scripts — see how AI can boost your marketing reach.',
    level: 2,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Explore how AI can help create engaging content across multiple formats including blog posts, social media graphics, and video scripts.'
      }
    },
    links: [
      {
        name: 'Canva AI',
        url: 'https://canva.com',
        description: 'AI-powered design and content creation',
        type: 'tool'
      },
      {
        name: 'Jasper AI',
        url: 'https://jasper.ai',
        description: 'AI writing assistant for marketing content',
        type: 'tool'
      }
    ],
    tags: ['content creation', 'marketing', 'design'],
    estimatedTime: '18 minutes',
    difficulty: 'intermediate'
  },
  {
    id: 'start-ai-customer-service',
    title: 'AI and Customer Service',
    description: 'Learn how chatbots and automation tools can improve customer satisfaction without extra hires.',
    level: 2,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Discover how AI-powered customer service tools can handle common inquiries, provide instant responses, and improve customer satisfaction.'
      }
    },
    links: [
      {
        name: 'Intercom',
        url: 'https://intercom.com',
        description: 'AI-powered customer service platform',
        type: 'tool'
      },
      {
        name: 'Zendesk Chat',
        url: 'https://zendesk.com',
        description: 'Customer service with AI automation',
        type: 'tool'
      }
    ],
    tags: ['customer service', 'chatbots', 'automation'],
    estimatedTime: '20 minutes',
    difficulty: 'intermediate'
  },
  {
    id: 'start-ai-market-insights-trends',
    title: 'AI for Market Insights & Trends',
    description: 'See how AI can help you spot shifts in your industry and stay one step ahead of competitors.',
    level: 2,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Learn how AI can analyze market data, track competitor activities, and identify emerging trends to keep your business competitive.'
      }
    },
    links: [
      {
        name: 'Google Analytics Intelligence',
        url: 'https://analytics.google.com',
        description: 'AI-powered website and market insights',
        type: 'tool'
      },
      {
        name: 'SEMrush',
        url: 'https://semrush.com',
        description: 'AI-driven competitive analysis',
        type: 'tool'
      }
    ],
    tags: ['market analysis', 'competitive intelligence', 'trends'],
    estimatedTime: '25 minutes',
    difficulty: 'intermediate'
  },
  {
    id: 'start-common-myths-about-ai',
    title: 'Common Myths About AI',
    description: 'Cut through the noise: what AI can really do, and what it can\'t.',
    level: 1,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Separate fact from fiction about AI capabilities, limitations, and realistic expectations for small business applications.'
      }
    },
    links: [
      {
        name: 'AI Reality Check',
        url: 'https://example.com/ai-myths',
        description: 'Debunking common AI misconceptions',
        type: 'guide'
      },
      {
        name: 'AI Capabilities Guide',
        url: 'https://example.com/ai-capabilities',
        description: 'What AI can and cannot do for businesses',
        type: 'guide'
      }
    ],
    tags: ['AI education', 'myths', 'realistic expectations'],
    estimatedTime: '10 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'start-ai-local-small-businesses',
    title: 'AI for Local & Small Businesses',
    description: 'Practical examples of how small businesses (not just big corporations) are using AI.',
    level: 1,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Real-world examples of how local restaurants, retail stores, and service businesses are successfully implementing AI solutions.'
      }
    },
    links: [
      {
        name: 'Small Business AI Case Studies',
        url: 'https://example.com/small-business-cases',
        description: 'Real examples of AI in small businesses',
        type: 'guide'
      },
      {
        name: 'Local Business AI Tools',
        url: 'https://example.com/local-ai-tools',
        description: 'AI tools specifically for local businesses',
        type: 'tool'
      }
    ],
    tags: ['small business', 'local business', 'case studies'],
    estimatedTime: '15 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'start-getting-comfortable-ai-tools',
    title: 'Getting Comfortable with AI Tools',
    description: 'A gentle introduction to experimenting with AI tools, without overwhelm.',
    level: 1,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'A beginner-friendly guide to starting your AI journey with simple, low-risk experiments that build confidence and understanding.'
      }
    },
    links: [
      {
        name: 'AI Experimentation Guide',
        url: 'https://example.com/ai-experiments',
        description: 'Safe ways to start experimenting with AI',
        type: 'guide'
      },
      {
        name: 'Beginner AI Tools',
        url: 'https://example.com/beginner-tools',
        description: 'User-friendly AI tools for beginners',
        type: 'tool'
      }
    ],
    tags: ['beginner friendly', 'experimentation', 'confidence building'],
    estimatedTime: '12 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'start-future-business-ai',
    title: 'The Future of Business and AI',
    description: 'What the next 5–10 years of AI mean for small business owners and entrepreneurs.',
    level: 3,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Explore upcoming AI trends, emerging technologies, and how to prepare your business for the future of AI integration.'
      }
    },
    links: [
      {
        name: 'AI Future Trends Report',
        url: 'https://example.com/ai-future-trends',
        description: 'Industry predictions for AI in business',
        type: 'guide'
      },
      {
        name: 'Future-Proofing Your Business',
        url: 'https://example.com/future-proofing',
        description: 'How to prepare for AI evolution',
        type: 'guide'
      }
    ],
    tags: ['future trends', 'strategic planning', 'innovation'],
    estimatedTime: '30 minutes',
    difficulty: 'advanced'
  },

];

export const tileCategories: TileCategory[] = [
  {
    id: 'explore-basics',
    name: 'AI Basics',
    description: 'Start your AI journey with fundamental concepts and practical applications.',
    tiles: tiles.filter(t => t.journeyType === 'explore' && t.level === 1),
    level: 1,
    journeyType: 'explore'
  },
  {
    id: 'explore-advanced',
    name: 'Advanced AI Applications',
    description: 'Dive deeper into AI tools and advanced use cases for your business.',
    tiles: tiles.filter(t => t.journeyType === 'explore' && t.level > 1),
    level: 2,
    journeyType: 'explore'
  },
  {
    id: 'start-basics',
    name: 'AI Basics',
    description: 'Start your AI journey with fundamental concepts and practical applications.',
    tiles: tiles.filter(t => t.journeyType === 'start' && t.level === 1),
    level: 1,
    journeyType: 'start'
  },
  {
    id: 'start-advanced',
    name: 'Advanced AI Applications',
    description: 'Dive deeper into AI tools and advanced use cases for your business.',
    tiles: tiles.filter(t => t.journeyType === 'start' && t.level > 1),
    level: 2,
    journeyType: 'start'
  },
];
