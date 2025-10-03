import type { Tile } from '../types/tiles';

export const exploreTiles: Tile[] = [
  {
    id: 'market-research',
    title: 'Market Research',
    description: 'Understand demand, competitors, and market gaps to validate your business ideas.',
    level: 1,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Market research is the foundation of any successful business. Learn how to identify opportunities, understand your competition, and validate your ideas using both traditional methods and cutting-edge AI tools.'
      }
    },
    links: [
      {
        name: 'Google Trends',
        url: 'https://trends.google.com',
        description: 'Track demand and interest trends',
        type: 'tool'
      },
      {
        name: 'Crayon',
        url: 'https://crayon.co',
        description: 'Competitor tracking and intelligence',
        type: 'tool'
      }
    ],
    tags: ['market research', 'business validation', 'competitive analysis'],
    subTiles: [
      {
        id: 'market-research-importance',
        title: 'What is Market Research and Why is it Important for Your Business?',
        description: 'Understand demand, competitors, and market gaps.',
        content: {
          type: 'text',
          data: {
            text: 'Market research helps you understand your target audience, identify market opportunities, and validate business ideas before investing significant resources. Example: Spotting trending services in your area to launch a local business.'
          }
        }
      },
      {
        id: 'market-research-ai-help',
        title: 'How Can AI Help?',
        description: 'Leverage AI for market insights and trend analysis.',
        content: {
          type: 'text',
          data: {
            text: 'AI can identify trends in search data, analyze consumer behavior from online platforms, and process vast amounts of market data to uncover insights that would take humans weeks to discover.'
          }
        }
      },
      {
        id: 'market-research-ai-tools',
        title: 'AI Resources and Tools',
        description: 'Essential AI-powered market research tools.',
        content: {
          type: 'text',
          data: {
            text: 'Discover the most effective AI tools for market research, from trend analysis to competitor tracking.'
          }
        },
        links: [
          {
            name: 'Google Trends',
            url: 'https://trends.google.com',
            description: 'AI-powered trend analysis',
            type: 'tool'
          },
          {
            name: 'Crayon',
            url: 'https://crayon.co',
            description: 'AI competitor tracking',
            type: 'tool'
          }
        ]
      },
      {
        id: 'market-research-limitations',
        title: 'Limitations and Considerations',
        description: 'Understanding AI limitations in market research.',
        content: {
          type: 'text',
          data: {
            text: 'Data quality depends on inputs; AI is less reliable for hyper-local niches. Always validate AI insights with real-world data and human judgment.'
          }
        }
      },
      {
        id: 'market-research-traditional',
        title: 'Traditional Methods',
        description: 'Proven non-AI market research approaches.',
        content: {
          type: 'text',
          data: {
            text: 'Surveys, focus groups, community observations, competitor visits, and direct customer interviews remain valuable for gathering qualitative insights.'
          }
        }
      },
      {
        id: 'market-research-future',
        title: 'Future Potential',
        description: 'The evolution of AI in market research.',
        content: {
          type: 'text',
          data: {
            text: 'AI-driven hyper-local market intelligence will become accessible to non-technical users, enabling real-time market analysis for small businesses.'
          }
        }
      }
    ]
  },
  {
    id: 'marketing-outreach',
    title: 'Marketing and Outreach',
    description: 'Build brand awareness, drive leads, and establish credibility in your market.',
    level: 1,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Effective marketing and outreach strategies help you connect with your target audience, build brand recognition, and drive sustainable business growth.'
      }
    },
    links: [
      {
        name: 'Canva AI',
        url: 'https://canva.com',
        description: 'AI-powered visual content creation',
        type: 'tool'
      },
      {
        name: 'Jasper',
        url: 'https://jasper.ai',
        description: 'AI copywriting assistant',
        type: 'tool'
      },
      {
        name: 'Mailchimp AI',
        url: 'https://mailchimp.com',
        description: 'AI-powered email campaigns',
        type: 'tool'
      }
    ],
    tags: ['marketing', 'outreach', 'brand awareness', 'lead generation'],
    subTiles: [
      {
        id: 'marketing-importance',
        title: 'What is Marketing and Outreach and Why is it Important for Your Business?',
        description: 'Builds brand awareness, drives leads, and establishes credibility.',
        content: {
          type: 'text',
          data: {
            text: 'Marketing and outreach are essential for business growth. They help you reach potential customers, communicate your value proposition, and build lasting relationships that drive revenue.'
          }
        }
      },
      {
        id: 'marketing-ai-help',
        title: 'How Can AI Help?',
        description: 'Automate and optimize your marketing efforts.',
        content: {
          type: 'text',
          data: {
            text: 'AI can automate content creation, optimize social media posting schedules, improve ad targeting precision, and personalize customer communications at scale.'
          }
        }
      },
      {
        id: 'marketing-ai-tools',
        title: 'AI Resources and Tools',
        description: 'Essential AI marketing tools.',
        content: {
          type: 'text',
          data: {
            text: 'Powerful AI tools to streamline your marketing workflow and improve results.'
          }
        },
        links: [
          {
            name: 'Canva AI',
            url: 'https://canva.com',
            description: 'AI-powered design and visuals',
            type: 'tool'
          },
          {
            name: 'Jasper',
            url: 'https://jasper.ai',
            description: 'AI copywriting for marketing',
            type: 'tool'
          },
          {
            name: 'Mailchimp AI',
            url: 'https://mailchimp.com',
            description: 'AI email campaign optimization',
            type: 'tool'
          }
        ]
      },
      {
        id: 'marketing-limitations',
        title: 'Limitations and Considerations',
        description: 'Understanding AI marketing limitations.',
        content: {
          type: 'text',
          data: {
            text: 'AI content may lack human nuance and emotional intelligence. Always review and customize AI-generated content to match your brand voice and values.'
          }
        }
      },
      {
        id: 'marketing-traditional',
        title: 'Traditional Methods',
        description: 'Proven marketing approaches.',
        content: {
          type: 'text',
          data: {
            text: 'Flyers, email newsletters, networking events, community engagement, word-of-mouth referrals, and direct mail remain effective marketing channels.'
          }
        }
      },
      {
        id: 'marketing-future',
        title: 'Future Potential',
        description: 'The future of AI in marketing.',
        content: {
          type: 'text',
          data: {
            text: 'AI-driven personalized omnichannel marketing will enable small businesses to compete with larger companies through sophisticated, automated customer journey optimization.'
          }
        }
      }
    ]
  },
  {
    id: 'legal-business-ethics',
    title: 'Basic Legal and Business Ethics',
    description: 'Ensure compliance, build trust, and protect your business reputation.',
    level: 1,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Understanding legal requirements and maintaining ethical business practices protects your business and builds customer trust.'
      }
    },
    links: [
      {
        name: 'LegalZoom',
        url: 'https://legalzoom.com',
        description: 'Legal document automation',
        type: 'tool'
      },
      {
        name: 'DoNotPay',
        url: 'https://donotpay.com',
        description: 'AI-assisted legal tasks',
        type: 'tool'
      }
    ],
    tags: ['legal', 'compliance', 'business ethics', 'risk management'],
    subTiles: [
      {
        id: 'legal-importance',
        title: 'What is Basic Legal and Business Ethics and Why is it Important for Your Business?',
        description: 'Compliance and trust reduce risk, build credibility, and protect your brand.',
        content: {
          type: 'text',
          data: {
            text: 'Legal compliance and ethical business practices protect you from lawsuits, build customer trust, and create a sustainable foundation for long-term business success.'
          }
        }
      },
      {
        id: 'legal-ai-help',
        title: 'How Can AI Help?',
        description: 'Streamline legal processes with AI assistance.',
        content: {
          type: 'text',
          data: {
            text: 'AI can generate standard contracts, check legal compliance requirements, monitor regulatory updates, and provide basic legal guidance for common business situations.'
          }
        }
      },
      {
        id: 'legal-ai-tools',
        title: 'AI Resources and Tools',
        description: 'AI-powered legal assistance tools.',
        content: {
          type: 'text',
          data: {
            text: 'AI tools to help with basic legal tasks and compliance monitoring.'
          }
        },
        links: [
          {
            name: 'LegalZoom',
            url: 'https://legalzoom.com',
            description: 'Automated legal documents',
            type: 'tool'
          },
          {
            name: 'DoNotPay',
            url: 'https://donotpay.com',
            description: 'AI legal assistant',
            type: 'tool'
          }
        ]
      },
      {
        id: 'legal-limitations',
        title: 'Limitations and Considerations',
        description: 'When AI cannot replace legal counsel.',
        content: {
          type: 'text',
          data: {
            text: 'AI cannot replace qualified legal counsel for complex matters, litigation, or industry-specific regulations. Always consult with attorneys for important legal decisions.'
          }
        }
      },
      {
        id: 'legal-traditional',
        title: 'Traditional Methods',
        description: 'Established legal compliance approaches.',
        content: {
          type: 'text',
          data: {
            text: 'Consulting attorneys, using official government resources, joining industry associations, and working with compliance consultants provide reliable legal guidance.'
          }
        }
      },
      {
        id: 'legal-future',
        title: 'Future Potential',
        description: 'AI evolution in legal services.',
        content: {
          type: 'text',
          data: {
            text: 'AI-powered legal monitoring and proactive compliance guidance will help small businesses stay compliant automatically and receive early warnings about regulatory changes.'
          }
        }
      }
    ]
  },
  {
    id: 'customer-experience',
    title: 'Customer Experience',
    description: 'Create satisfied customers who drive loyalty and referrals.',
    level: 1,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Exceptional customer experience is the key to business success. Learn how to delight customers and build lasting relationships.'
      }
    },
    links: [
      {
        name: 'Zendesk AI',
        url: 'https://zendesk.com',
        description: 'AI-powered customer support',
        type: 'tool'
      },
      {
        name: 'Intercom',
        url: 'https://intercom.com',
        description: 'Customer messaging platform',
        type: 'tool'
      }
    ],
    tags: ['customer experience', 'customer service', 'satisfaction', 'loyalty'],
    subTiles: [
      {
        id: 'cx-importance',
        title: 'What is Customer Experience and Why is it Important for Your Business?',
        description: 'Satisfied customers drive loyalty and referrals.',
        content: {
          type: 'text',
          data: {
            text: 'Customer experience encompasses every interaction customers have with your business. Great CX leads to higher retention, positive reviews, and word-of-mouth referrals that drive organic growth.'
          }
        }
      },
      {
        id: 'cx-ai-help',
        title: 'How Can AI Help?',
        description: 'Enhance customer experience with AI.',
        content: {
          type: 'text',
          data: {
            text: 'AI can automate customer support, analyze feedback sentiment, personalize experiences, predict customer needs, and provide 24/7 assistance through intelligent chatbots.'
          }
        }
      },
      {
        id: 'cx-ai-tools',
        title: 'AI Resources and Tools',
        description: 'AI-powered customer experience tools.',
        content: {
          type: 'text',
          data: {
            text: 'Tools to automate and improve customer interactions.'
          }
        },
        links: [
          {
            name: 'Zendesk AI',
            url: 'https://zendesk.com',
            description: 'AI customer support platform',
            type: 'tool'
          },
          {
            name: 'Intercom',
            url: 'https://intercom.com',
            description: 'AI-powered messaging',
            type: 'tool'
          }
        ]
      },
      {
        id: 'cx-limitations',
        title: 'Limitations and Considerations',
        description: 'Balancing automation with human touch.',
        content: {
          type: 'text',
          data: {
            text: 'Over-reliance on automation can reduce the human touch that customers value. Balance AI efficiency with genuine human connection for complex or emotional situations.'
          }
        }
      },
      {
        id: 'cx-traditional',
        title: 'Traditional Methods',
        description: 'Proven customer experience approaches.',
        content: {
          type: 'text',
          data: {
            text: 'Direct customer interactions, surveys, personalized service, follow-up calls, and face-to-face relationship building create meaningful customer connections.'
          }
        }
      },
      {
        id: 'cx-future',
        title: 'Future Potential',
        description: 'The future of AI in customer experience.',
        content: {
          type: 'text',
          data: {
            text: 'Seamless AI-human hybrid customer experiences will provide instant, personalized support while maintaining the warmth and empathy of human interaction when needed.'
          }
        }
      }
    ]
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Drive engagement, brand awareness, and authority through compelling content.',
    level: 1,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Content creation is essential for building your brand, engaging your audience, and establishing thought leadership in your industry.'
      }
    },
    links: [
      {
        name: 'Canva AI',
        url: 'https://canva.com',
        description: 'AI-powered design tools',
        type: 'tool'
      },
      {
        name: 'Jasper',
        url: 'https://jasper.ai',
        description: 'AI writing assistant',
        type: 'tool'
      },
      {
        name: 'Synthesia',
        url: 'https://synthesia.io',
        description: 'AI video creation',
        type: 'tool'
      }
    ],
    tags: ['content creation', 'marketing', 'branding', 'engagement'],
    subTiles: [
      {
        id: 'content-importance',
        title: 'What is Content Creation and Why is it Important for Your Business?',
        description: 'Drives engagement, brand awareness, and authority.',
        content: {
          type: 'text',
          data: {
            text: 'Content creation helps you communicate your expertise, build trust with your audience, and attract potential customers through valuable, relevant information that addresses their needs and interests.'
          }
        }
      },
      {
        id: 'content-ai-help',
        title: 'How Can AI Help?',
        description: 'Accelerate content creation with AI tools.',
        content: {
          type: 'text',
          data: {
            text: 'AI can generate copy, create graphics, write video scripts, produce social media content, and help brainstorm ideas, significantly reducing the time and effort required for content creation.'
          }
        }
      },
      {
        id: 'content-ai-tools',
        title: 'AI Resources and Tools',
        description: 'Essential AI content creation tools.',
        content: {
          type: 'text',
          data: {
            text: 'Powerful AI tools for creating various types of content.'
          }
        },
        links: [
          {
            name: 'Canva AI',
            url: 'https://canva.com',
            description: 'AI design and graphics',
            type: 'tool'
          },
          {
            name: 'Jasper',
            url: 'https://jasper.ai',
            description: 'AI copywriting',
            type: 'tool'
          },
          {
            name: 'Synthesia',
            url: 'https://synthesia.io',
            description: 'AI video creation',
            type: 'tool'
          }
        ]
      },
      {
        id: 'content-limitations',
        title: 'Limitations and Considerations',
        description: 'Maintaining authenticity in AI content.',
        content: {
          type: 'text',
          data: {
            text: 'AI content lacks personal nuance and authentic voice. Always review, edit, and add your unique perspective to AI-generated content to maintain authenticity and brand consistency.'
          }
        }
      },
      {
        id: 'content-traditional',
        title: 'Traditional Methods',
        description: 'Proven content creation approaches.',
        content: {
          type: 'text',
          data: {
            text: 'Writing, photography, videography, graphic design, and storytelling remain fundamental skills for creating compelling, authentic content that resonates with audiences.'
          }
        }
      },
      {
        id: 'content-future',
        title: 'Future Potential',
        description: 'The evolution of AI in content creation.',
        content: {
          type: 'text',
          data: {
            text: 'Fully AI-assisted creative workflows will enable small businesses to produce professional-quality content across all formats while maintaining their unique voice and brand identity.'
          }
        }
      }
    ]
  },
  {
    id: 'operations-productivity',
    title: 'Operations and Productivity',
    description: 'Optimize efficiency to reduce costs, increase capacity, and scale growth.',
    level: 1,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Efficient operations and high productivity are crucial for business success. Learn how to streamline processes and maximize output.'
      }
    },
    links: [
      {
        name: 'Trello AI',
        url: 'https://trello.com',
        description: 'AI-powered project management',
        type: 'tool'
      },
      {
        name: 'Notion AI',
        url: 'https://notion.so',
        description: 'AI workspace and productivity',
        type: 'tool'
      },
      {
        name: 'Zapier',
        url: 'https://zapier.com',
        description: 'Workflow automation',
        type: 'tool'
      }
    ],
    tags: ['operations', 'productivity', 'efficiency', 'automation'],
    subTiles: [
      {
        id: 'operations-importance',
        title: 'What is Operations and Productivity and Why is it Important for Your Business?',
        description: 'Efficient operations reduce costs, increase capacity, and scale growth.',
        content: {
          type: 'text',
          data: {
            text: 'Streamlined operations and high productivity enable you to serve more customers, reduce costs, improve quality, and scale your business effectively without proportional increases in resources.'
          }
        }
      },
      {
        id: 'operations-ai-help',
        title: 'How Can AI Help?',
        description: 'Automate and optimize business operations.',
        content: {
          type: 'text',
          data: {
            text: 'AI can automate scheduling, optimize process management, streamline workflow coordination, predict bottlenecks, and provide intelligent recommendations for operational improvements.'
          }
        }
      },
      {
        id: 'operations-ai-tools',
        title: 'AI Resources and Tools',
        description: 'AI-powered productivity and operations tools.',
        content: {
          type: 'text',
          data: {
            text: 'Tools to automate and optimize your business operations.'
          }
        },
        links: [
          {
            name: 'Trello AI',
            url: 'https://trello.com',
            description: 'AI project management',
            type: 'tool'
          },
          {
            name: 'Notion AI',
            url: 'https://notion.so',
            description: 'AI-powered workspace',
            type: 'tool'
          },
          {
            name: 'Zapier',
            url: 'https://zapier.com',
            description: 'Workflow automation',
            type: 'tool'
          }
        ]
      },
      {
        id: 'operations-limitations',
        title: 'Limitations and Considerations',
        description: 'Balancing automation with human oversight.',
        content: {
          type: 'text',
          data: {
            text: 'Over-automation can create dependency and reduce flexibility. Maintain human monitoring and decision-making capabilities for critical processes and unexpected situations.'
          }
        }
      },
      {
        id: 'operations-traditional',
        title: 'Traditional Methods',
        description: 'Proven operational management approaches.',
        content: {
          type: 'text',
          data: {
            text: 'Manual scheduling, standard operating procedures (SOPs), spreadsheets, in-person management, and regular process reviews remain important for operational control.'
          }
        }
      },
      {
        id: 'operations-future',
        title: 'Future Potential',
        description: 'The future of AI in operations.',
        content: {
          type: 'text',
          data: {
            text: 'AI-optimized operations dashboards will provide small business owners with real-time insights, predictive analytics, and automated optimization recommendations for maximum efficiency.'
          }
        }
      }
    ]
  },
  {
    id: 'networking-partnerships',
    title: 'Networking and Partnerships',
    description: 'Build opportunities, resources, and credibility through strategic relationships.',
    level: 1,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Strategic networking and partnerships can accelerate your business growth by providing access to new opportunities, resources, and markets.'
      }
    },
    links: [
      {
        name: 'LinkedIn Sales Navigator',
        url: 'https://business.linkedin.com/sales-solutions/sales-navigator',
        description: 'AI-powered networking tool',
        type: 'tool'
      },
      {
        name: 'Apollo.io',
        url: 'https://apollo.io',
        description: 'AI-powered prospecting',
        type: 'tool'
      }
    ],
    tags: ['networking', 'partnerships', 'relationships', 'business development'],
    subTiles: [
      {
        id: 'networking-importance',
        title: 'What are Networking and Partnerships and Why Are They Important for Your Business?',
        description: 'Builds opportunities, resources, and credibility.',
        content: {
          type: 'text',
          data: {
            text: 'Networking and strategic partnerships provide access to new customers, valuable resources, industry insights, and collaborative opportunities that can significantly accelerate business growth.'
          }
        }
      },
      {
        id: 'networking-ai-help',
        title: 'How Can AI Help?',
        description: 'Optimize networking and partnership strategies.',
        content: {
          type: 'text',
          data: {
            text: 'AI can identify key partners, track outreach efforts, optimize connection timing, analyze relationship patterns, and suggest strategic partnership opportunities based on business goals.'
          }
        }
      },
      {
        id: 'networking-ai-tools',
        title: 'AI Resources and Tools',
        description: 'AI-powered networking and partnership tools.',
        content: {
          type: 'text',
          data: {
            text: 'Tools to enhance your networking and partnership efforts.'
          }
        },
        links: [
          {
            name: 'LinkedIn Sales Navigator',
            url: 'https://business.linkedin.com/sales-solutions/sales-navigator',
            description: 'AI networking insights',
            type: 'tool'
          },
          {
            name: 'Apollo.io',
            url: 'https://apollo.io',
            description: 'AI prospecting platform',
            type: 'tool'
          }
        ]
      },
      {
        id: 'networking-limitations',
        title: 'Limitations and Considerations',
        description: 'The importance of authentic relationships.',
        content: {
          type: 'text',
          data: {
            text: 'AI cannot replace genuine relationship-building and trust development. Authentic connections require human interaction, empathy, and mutual value creation over time.'
          }
        }
      },
      {
        id: 'networking-traditional',
        title: 'Traditional Methods',
        description: 'Proven networking approaches.',
        content: {
          type: 'text',
          data: {
            text: 'Conferences, local networking events, industry associations, referral programs, and community involvement remain effective ways to build meaningful business relationships.'
          }
        }
      },
      {
        id: 'networking-future',
        title: 'Future Potential',
        description: 'AI evolution in networking and partnerships.',
        content: {
          type: 'text',
          data: {
            text: 'AI-assisted partnership scouting and strategic matchmaking will help businesses identify and connect with ideal partners based on complementary strengths and shared goals.'
          }
        }
      }
    ]
  },
  {
    id: 'sales-conversions-revenue',
    title: 'Sales, Conversions, and Revenue Optimization',
    description: 'Drive revenue, measure effectiveness, and maximize profit through optimized sales processes.',
    level: 1,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Effective sales processes and revenue optimization strategies are essential for sustainable business growth and profitability.'
      }
    },
    links: [
      {
        name: 'HubSpot AI',
        url: 'https://hubspot.com',
        description: 'AI-powered CRM and sales',
        type: 'tool'
      },
      {
        name: 'Salesforce Einstein',
        url: 'https://salesforce.com/products/einstein/',
        description: 'AI sales intelligence',
        type: 'tool'
      },
      {
        name: 'Prisync',
        url: 'https://prisync.com',
        description: 'AI pricing optimization',
        type: 'tool'
      },
      {
        name: 'Optimizely',
        url: 'https://optimizely.com',
        description: 'A/B testing and optimization',
        type: 'tool'
      }
    ],
    tags: ['sales', 'conversions', 'revenue optimization', 'pricing'],
    subTiles: [
      {
        id: 'sales-importance',
        title: 'What Are Sales, Conversions, and Revenue Optimization and Why Are They Important?',
        description: 'Drives revenue, measures marketing effectiveness, and maximizes profit.',
        content: {
          type: 'text',
          data: {
            text: 'Sales and conversion optimization directly impact your bottom line by improving the efficiency of turning prospects into paying customers and maximizing the value of each transaction.'
          }
        }
      },
      {
        id: 'sales-ai-help',
        title: 'How Can AI Help?',
        description: 'Optimize sales processes with AI insights.',
        content: {
          type: 'text',
          data: {
            text: 'AI can predict high-converting leads, personalize offers, optimize pricing strategies, automate follow-ups, and analyze sales patterns to improve conversion rates.'
          }
        }
      },
      {
        id: 'revenue-optimization-tips',
        title: 'Revenue Optimization Tips',
        description: 'Proven strategies to maximize revenue.',
        content: {
          type: 'text',
          data: {
            text: 'Bundle products/services, implement upsell/cross-sell strategies, create tiered pricing, run strategic promotions, and analyze customer lifetime value (CLV) to maximize revenue per customer.'
          }
        }
      },
      {
        id: 'sales-ai-tools',
        title: 'AI Resources and Tools',
        description: 'AI-powered sales and revenue optimization tools.',
        content: {
          type: 'text',
          data: {
            text: 'Advanced tools to optimize your sales and revenue processes.'
          }
        },
        links: [
          {
            name: 'HubSpot AI',
            url: 'https://hubspot.com',
            description: 'AI CRM and sales automation',
            type: 'tool'
          },
          {
            name: 'Salesforce Einstein',
            url: 'https://salesforce.com/products/einstein/',
            description: 'AI sales intelligence',
            type: 'tool'
          },
          {
            name: 'Prisync',
            url: 'https://prisync.com',
            description: 'AI pricing optimization',
            type: 'tool'
          },
          {
            name: 'Optimizely',
            url: 'https://optimizely.com',
            description: 'Conversion optimization',
            type: 'tool'
          }
        ]
      },
      {
        id: 'sales-limitations',
        title: 'Limitations and Considerations',
        description: 'Balancing AI automation with human judgment.',
        content: {
          type: 'text',
          data: {
            text: 'AI recommendations require human validation and contextual understanding. Avoid over-automating personal sales relationships and maintain human oversight for complex deals.'
          }
        }
      },
      {
        id: 'sales-traditional',
        title: 'Traditional Methods',
        description: 'Proven sales approaches.',
        content: {
          type: 'text',
          data: {
            text: 'Manual lead scoring, customer segmentation, A/B testing campaigns, personal relationship building, and direct sales conversations remain crucial for sales success.'
          }
        }
      },
      {
        id: 'sales-future',
        title: 'Future Potential',
        description: 'The future of AI in sales optimization.',
        content: {
          type: 'text',
          data: {
            text: 'Fully integrated AI-driven sales optimization systems will provide real-time insights, predictive analytics, and automated recommendations to maximize revenue and conversion rates.'
          }
        }
      }
    ]
  },
  {
    id: 'growth-scaling',
    title: 'Growth and Scaling (Including Testing and Experimentation)',
    description: 'Enable sustainable expansion through strategic growth and systematic experimentation.',
    level: 1,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Strategic growth and scaling require careful planning, systematic testing, and data-driven decision making to ensure sustainable expansion.'
      }
    },
    links: [
      {
        name: 'Google Optimize',
        url: 'https://optimize.google.com',
        description: 'A/B testing and experimentation',
        type: 'tool'
      },
      {
        name: 'GrowthHackers Projects',
        url: 'https://growthhackers.com',
        description: 'Growth experimentation platform',
        type: 'tool'
      },
      {
        name: 'Notion AI',
        url: 'https://notion.so',
        description: 'AI-powered planning and tracking',
        type: 'tool'
      }
    ],
    tags: ['growth', 'scaling', 'experimentation', 'testing'],
    subTiles: [
      {
        id: 'growth-importance',
        title: 'What is Growth and Scaling and Why is it Important for Your Business?',
        description: 'Enables reaching more customers, increasing revenue, and sustainable expansion.',
        content: {
          type: 'text',
          data: {
            text: 'Strategic growth and scaling allow you to expand your market reach, increase revenue potential, and build a sustainable business that can thrive in competitive markets while maintaining quality and efficiency.'
          }
        }
      },
      {
        id: 'growth-ai-help',
        title: 'How Can AI Help?',
        description: 'Optimize growth strategies with AI insights.',
        content: {
          type: 'text',
          data: {
            text: 'AI can predict growth opportunities, test market strategies, automate scaling processes, analyze expansion patterns, and provide data-driven recommendations for sustainable growth.'
          }
        }
      },
      {
        id: 'testing-experimentation',
        title: 'Testing and Experimentation',
        description: 'Systematic approaches to validate growth strategies.',
        content: {
          type: 'text',
          data: {
            text: 'A/B testing, pilot campaigns, small-scale experiments, and controlled rollouts help validate approaches before full implementation, reducing risk and optimizing results.'
          }
        }
      },
      {
        id: 'growth-ai-tools',
        title: 'AI Resources and Tools',
        description: 'AI-powered growth and experimentation tools.',
        content: {
          type: 'text',
          data: {
            text: 'Tools to optimize your growth and scaling efforts.'
          }
        },
        links: [
          {
            name: 'Google Optimize',
            url: 'https://optimize.google.com',
            description: 'A/B testing platform',
            type: 'tool'
          },
          {
            name: 'GrowthHackers Projects',
            url: 'https://growthhackers.com',
            description: 'Growth experimentation',
            type: 'tool'
          },
          {
            name: 'Notion AI',
            url: 'https://notion.so',
            description: 'AI planning and tracking',
            type: 'tool'
          }
        ]
      },
      {
        id: 'growth-limitations',
        title: 'Limitations and Considerations',
        description: 'Understanding data limitations in growth experiments.',
        content: {
          type: 'text',
          data: {
            text: 'Small data sets may yield misleading results. Always validate AI insights with sufficient sample sizes, multiple test cycles, and real-world market feedback before scaling.'
          }
        }
      },
      {
        id: 'growth-traditional',
        title: 'Traditional Methods',
        description: 'Proven growth approaches.',
        content: {
          type: 'text',
          data: {
            text: 'Manual experiments, focus groups, surveys, incremental rollout, market research, and gradual expansion remain important for sustainable growth validation.'
          }
        }
      },
      {
        id: 'growth-future',
        title: 'Future Potential',
        description: 'The future of AI in growth and scaling.',
        content: {
          type: 'text',
          data: {
            text: 'AI-powered predictive growth models and automated experimentation systems will enable businesses to identify and capitalize on growth opportunities with unprecedented speed and accuracy.'
          }
        }
      }
    ]
  },
  {
    id: 'finance-accounting',
    title: 'Finance and Accounting',
    description: 'Control cash flow, ensure profitability, and make informed strategic decisions.',
    level: 1,
    journeyType: 'explore',
    content: {
      type: 'text',
      data: {
        text: 'Proper financial management and accounting practices are essential for business sustainability, growth planning, and regulatory compliance.'
      }
    },
    links: [
      {
        name: 'QuickBooks',
        url: 'https://quickbooks.intuit.com',
        description: 'AI-powered accounting software',
        type: 'tool'
      },
      {
        name: 'Xero',
        url: 'https://xero.com',
        description: 'Cloud accounting with AI features',
        type: 'tool'
      },
      {
        name: 'Botkeeper',
        url: 'https://botkeeper.com',
        description: 'AI bookkeeping services',
        type: 'tool'
      }
    ],
    tags: ['finance', 'accounting', 'cash flow', 'profitability'],
    subTiles: [
      {
        id: 'finance-importance',
        title: 'What is Finance and Accounting and Why is it Important for Your Business?',
        description: 'Controls cash flow, ensures profitability, and informs strategic decisions.',
        content: {
          type: 'text',
          data: {
            text: 'Proper financial management helps you track performance, make informed decisions, maintain cash flow, ensure profitability, and avoid financial pitfalls. Example: Businesses with proper accounting avoid cash crunches and optimize tax benefits.'
          }
        }
      },
      {
        id: 'finance-ai-help',
        title: 'How Can AI Help?',
        description: 'Automate and optimize financial processes.',
        content: {
          type: 'text',
          data: {
            text: 'AI can automate bookkeeping, generate financial reports, analyze spending trends, predict cash flow, categorize expenses, and provide insights for financial optimization.'
          }
        }
      },
      {
        id: 'finance-ai-tools',
        title: 'AI Resources and Tools',
        description: 'AI-powered finance and accounting tools.',
        content: {
          type: 'text',
          data: {
            text: 'Modern tools to streamline your financial management.'
          }
        },
        links: [
          {
            name: 'QuickBooks',
            url: 'https://quickbooks.intuit.com',
            description: 'AI accounting software',
            type: 'tool'
          },
          {
            name: 'Xero',
            url: 'https://xero.com',
            description: 'Cloud accounting platform',
            type: 'tool'
          },
          {
            name: 'Botkeeper',
            url: 'https://botkeeper.com',
            description: 'AI bookkeeping services',
            type: 'tool'
          }
        ]
      },
      {
        id: 'finance-limitations',
        title: 'Limitations and Considerations',
        description: 'When to seek professional financial advice.',
        content: {
          type: 'text',
          data: {
            text: 'AI cannot replace professional financial advice for complex scenarios, tax planning, investment decisions, or regulatory compliance. Consult with accountants and financial advisors for important financial matters.'
          }
        }
      },
      {
        id: 'finance-traditional',
        title: 'Traditional Methods',
        description: 'Proven financial management approaches.',
        content: {
          type: 'text',
          data: {
            text: 'Manual bookkeeping, spreadsheets, consulting accountants, regular financial reviews, and working with financial advisors provide reliable financial management and oversight.'
          }
        }
      },
      {
        id: 'finance-future',
        title: 'Future Potential',
        description: 'The future of AI in finance and accounting.',
        content: {
          type: 'text',
          data: {
            text: 'Fully automated financial dashboards with real-time AI insights will provide small businesses with enterprise-level financial intelligence, predictive analytics, and automated compliance monitoring.'
          }
        }
      }
    ]
  }
];
