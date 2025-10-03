import type { Tile } from '../types/tiles';

export const startTiles: Tile[] = [
  {
    id: 'start-market-research',
    title: 'Market Research: How To Validate Your Business Idea',
    description: 'Don\'t waste time or money on untested ideas. This guide shows you how to validate a business idea with demand checks, competitor analysis, and local feedback — with optional AI helpers along the way.',
    level: 1,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Avoid wasting time and money. These 4 steps will show you how to test demand, check competitors, and get local input — before you invest.'
      }
    },
    links: [
      {
        name: 'Google Trends',
        url: 'https://trends.google.com',
        description: 'Validate demand with search data',
        type: 'tool'
      },
      {
        name: 'Google Maps',
        url: 'https://maps.google.com',
        description: 'Research competitors and reviews',
        type: 'tool'
      },
      {
        name: 'Google Forms',
        url: 'https://forms.google.com',
        description: 'Create surveys for local input',
        type: 'tool'
      }
    ],
    tags: ['market validation', 'competitor analysis', 'business planning', 'demand validation'],
    subTiles: [
      {
        id: 'start-market-research-intro',
        title: 'Intro — How to Validate Your Business Idea',
        description: 'Why validation matters and what you\'ll learn in this 4-step system.',
        content: {
          type: 'text',
          data: {
            text: `**Why validation matters**

Most businesses don't fail because founders didn't work hard enough — they fail because the idea wasn't tested first. Validation helps you:
• Avoid wasted time and money
• Spot hidden market opportunities  
• Build confidence before investing

**What you'll learn**

A 4-step system for quick validation:
1. Identify demand with search data
2. Spot competitors and their gaps
3. Collect local input with surveys & social listening
4. Analyze everything and decide whether to go forward or pivot

**What makes this different**
• **Practical:** short, clear steps you can follow today
• **Flexible:** do it manually, or use AI add-ons for speed
• **Real-world:** built for small business ideas, not just theory

👉 **Next:** Open Step 1: Identify Demand Using Search Data to begin.`
          }
        }
      },
      {
        id: 'start-market-research-demand',
        title: 'Step 1: Identify Demand Using Search Data',
        description: 'Use Google Trends and search data to validate if people are actively looking for your service.',
        content: {
          type: 'text',
          data: {
            text: `**Why it matters**
Search data shows if people are actively looking for your service.

**Steps**
1. Go to Google Trends
2. Enter your service/product + region
3. Compare related terms
4. Look for seasonal spikes

**Example**
"Brush removal services Ohio" → steady growth, springtime peaks → strong seasonal demand.

**AI Add-On**
Copy chart → ChatGPT prompt:
*"Summarize what this Google Trends chart means for small business opportunities in Ohio. Suggest when to launch + related services."*`
          }
        },
        links: [
          {
            name: 'Google Trends',
            url: 'https://trends.google.com',
            description: 'Free search trend analysis',
            type: 'tool'
          },
          {
            name: 'Ubersuggest',
            url: 'https://neilpatel.com/ubersuggest',
            description: 'Keyword research and search volume',
            type: 'tool'
          },
          {
            name: 'AnswerThePublic',
            url: 'https://answerthepublic.com',
            description: 'Discover what people are searching for',
            type: 'tool'
          }
        ]
      },
      {
        id: 'start-market-research-competitors',
        title: 'Step 2: Spot Competitors',
        description: 'Research competitors to find what works and what frustrates customers.',
        content: {
          type: 'text',
          data: {
            text: `**Why it matters**
Competitors reveal both what works and what frustrates customers.

**Steps**
1. Google "[your service] near me"
2. Open top 10 businesses
3. Check reviews for recurring issues

**Example**
Cleveland competitors: reviews show "late arrivals, hidden fees, messy cleanup."
→ Differentiate with **speed + transparent pricing**.

**AI Add-On**
Drop 50 reviews into ChatGPT:
*"Summarize the top 5 pain points customers mention. Suggest how a new business could stand out."*`
          }
        },
        links: [
          {
            name: 'Google Maps',
            url: 'https://maps.google.com',
            description: 'Find local competitors and read reviews',
            type: 'tool'
          },
          {
            name: 'Yelp',
            url: 'https://yelp.com',
            description: 'Business reviews and competitor analysis',
            type: 'tool'
          },
          {
            name: 'Crayon',
            url: 'https://crayon.co',
            description: 'Advanced competitor intelligence',
            type: 'tool'
          }
        ]
      },
      {
        id: 'start-market-research-local-input',
        title: 'Step 3: Collect Local Input (Surveys & Social Listening)',
        description: 'Get direct input from your target market through surveys and social listening.',
        content: {
          type: 'text',
          data: {
            text: `**Why it matters**
Direct input confirms what people in your area actually want.

**Steps**
1. Create a Google Form (3–5 questions max)
2. Share in Facebook Groups, Reddit, or Nextdoor
3. Listen to how locals describe their needs

**Example**
Survey: 70% used brush removal before. Top issues: "slow quotes, no cleanup."
→ Opportunity: **fast response + full debris hauling**.

**AI Add-On**
Paste survey results into AI:
*"Analyze these survey responses and summarize top 3 themes. Suggest how I could position differently."*`
          }
        },
        links: [
          {
            name: 'Google Forms',
            url: 'https://forms.google.com',
            description: 'Create free surveys',
            type: 'tool'
          },
          {
            name: 'SurveyMonkey',
            url: 'https://surveymonkey.com',
            description: 'Advanced survey features (free tier)',
            type: 'tool'
          },
          {
            name: 'Facebook Groups',
            url: 'https://facebook.com/groups',
            description: 'Find local community groups',
            type: 'tool'
          },
          {
            name: 'Reddit',
            url: 'https://reddit.com',
            description: 'Local subreddits and community discussions',
            type: 'tool'
          },
          {
            name: 'Nextdoor',
            url: 'https://nextdoor.com',
            description: 'Neighborhood social network',
            type: 'tool'
          }
        ]
      },
      {
        id: 'start-market-research-analyze',
        title: 'Step 4: Analyze & Decide',
        description: 'Bring all your findings together to make a confident go/no-go decision.',
        content: {
          type: 'text',
          data: {
            text: `**Why it matters**
Bringing it all together prevents chasing weak ideas.

**Checklist**
✅ Demand proven by search data
✅ Competitors leave gaps
✅ Locals confirm frustrations

If all three = yes → move forward.
If not → pivot or adjust before investing.

**Example**
• **Demand:** rising trend in spring
• **Competitors:** reliability complaints  
• **Locals:** want fast quotes + cleanup
→ **Decision:** launch with speed + transparency as USP.

**AI Add-On**
Paste findings into ChatGPT:
*"Summarize whether this is a strong idea. Suggest 3 positioning angles."*

**Resource Bundle (All in One Place)**
• Google Trends | Ubersuggest | AnswerThePublic
• Google Maps | Yelp | Crayon  
• Google Forms | SurveyMonkey | Facebook Groups | Reddit | Nextdoor`
          }
        },
        links: [
          {
            name: 'Google Trends',
            url: 'https://trends.google.com',
            description: 'Search trend validation',
            type: 'tool'
          },
          {
            name: 'Ubersuggest',
            url: 'https://neilpatel.com/ubersuggest',
            description: 'Keyword research',
            type: 'tool'
          },
          {
            name: 'AnswerThePublic',
            url: 'https://answerthepublic.com',
            description: 'Search question insights',
            type: 'tool'
          },
          {
            name: 'Google Maps',
            url: 'https://maps.google.com',
            description: 'Competitor research',
            type: 'tool'
          },
          {
            name: 'Yelp',
            url: 'https://yelp.com',
            description: 'Review analysis',
            type: 'tool'
          },
          {
            name: 'Crayon',
            url: 'https://crayon.co',
            description: 'Advanced competitor tracking',
            type: 'tool'
          },
          {
            name: 'Google Forms',
            url: 'https://forms.google.com',
            description: 'Survey creation',
            type: 'tool'
          },
          {
            name: 'SurveyMonkey',
            url: 'https://surveymonkey.com',
            description: 'Professional surveys',
            type: 'tool'
          },
          {
            name: 'Facebook Groups',
            url: 'https://facebook.com/groups',
            description: 'Community feedback',
            type: 'tool'
          },
          {
            name: 'Reddit',
            url: 'https://reddit.com',
            description: 'Local discussions',
            type: 'tool'
          },
          {
            name: 'Nextdoor',
            url: 'https://nextdoor.com',
            description: 'Neighborhood insights',
            type: 'tool'
          }
        ]
      }
    ]
  },
  {
    id: 'start-marketing-outreach',
    title: 'Marketing and Outreach',
    description: 'Launch your brand, attract your first customers, and build initial market presence.',
    level: 1,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Effective startup marketing focuses on building awareness, attracting early customers, and establishing credibility in your market with limited resources.'
      }
    },
    links: [
      {
        name: 'Canva AI',
        url: 'https://canva.com',
        description: 'Create professional marketing materials',
        type: 'tool'
      },
      {
        name: 'Mailchimp',
        url: 'https://mailchimp.com',
        description: 'Email marketing for startups',
        type: 'tool'
      },
      {
        name: 'Buffer',
        url: 'https://buffer.com',
        description: 'Social media management',
        type: 'tool'
      }
    ],
    tags: ['startup marketing', 'brand building', 'customer acquisition'],
    subTiles: [
      {
        id: 'start-marketing-importance',
        title: 'What is Marketing and Outreach and Why is it Critical for Your Startup?',
        description: 'Build awareness, attract first customers, and establish market credibility.',
        content: {
          type: 'text',
          data: {
            text: 'Startup marketing is about getting your first customers and building initial brand recognition. Without effective marketing, even great products can fail. Focus on building trust, communicating value, and reaching your target audience where they are.'
          }
        }
      },
      {
        id: 'start-marketing-ai-help',
        title: 'How Can AI Help Your Startup Marketing?',
        description: 'Automate content creation and optimize marketing efforts on a budget.',
        content: {
          type: 'text',
          data: {
            text: 'AI can help startups create professional marketing content, write compelling copy, design graphics, schedule social media posts, and optimize ad targeting - all while keeping costs low and maintaining quality.'
          }
        }
      },
      {
        id: 'start-marketing-ai-tools',
        title: 'AI Marketing Tools for Startups',
        description: 'Budget-friendly AI tools to launch your marketing efforts.',
        content: {
          type: 'text',
          data: {
            text: 'Essential AI-powered marketing tools that startups can afford and use immediately.'
          }
        },
        links: [
          {
            name: 'Canva AI',
            url: 'https://canva.com',
            description: 'AI design for marketing materials',
            type: 'tool'
          },
          {
            name: 'Jasper AI',
            url: 'https://jasper.ai',
            description: 'AI copywriting for marketing',
            type: 'tool'
          },
          {
            name: 'Mailchimp AI',
            url: 'https://mailchimp.com',
            description: 'AI email marketing optimization',
            type: 'tool'
          }
        ]
      },
      {
        id: 'start-marketing-limitations',
        title: 'Limitations and Considerations for Startup Marketing',
        description: 'Maintaining authenticity while using AI marketing tools.',
        content: {
          type: 'text',
          data: {
            text: 'AI-generated content may lack personal touch and authentic voice. Startups should review and customize AI content to reflect their unique brand personality and values. Authentic storytelling remains crucial for building trust.'
          }
        }
      },
      {
        id: 'start-marketing-traditional',
        title: 'Traditional Marketing Methods for Startups',
        description: 'Proven low-cost marketing approaches for new businesses.',
        content: {
          type: 'text',
          data: {
            text: 'Word-of-mouth referrals, local networking events, community involvement, direct outreach, partnerships with complementary businesses, and grassroots marketing efforts remain highly effective for startups.'
          }
        }
      },
      {
        id: 'start-marketing-future',
        title: 'Future Potential for Startup Marketing',
        description: 'How AI will democratize sophisticated marketing for startups.',
        content: {
          type: 'text',
          data: {
            text: 'AI will enable startups to compete with larger companies through personalized marketing automation, predictive customer insights, and sophisticated campaign optimization previously available only to enterprises.'
          }
        }
      }
    ]
  },
  {
    id: 'start-legal-business-ethics',
    title: 'Basic Legal and Business Ethics',
    description: 'Set up your business legally and establish ethical practices from day one.',
    level: 1,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Proper legal setup and ethical practices protect your startup and build customer trust from the beginning.'
      }
    },
    links: [
      {
        name: 'LegalZoom',
        url: 'https://legalzoom.com',
        description: 'Business formation and legal documents',
        type: 'tool'
      },
      {
        name: 'Incfile',
        url: 'https://incfile.com',
        description: 'Affordable business incorporation',
        type: 'tool'
      }
    ],
    tags: ['business formation', 'legal compliance', 'startup ethics'],
    subTiles: [
      {
        id: 'start-legal-importance',
        title: 'What is Legal Setup and Business Ethics and Why is it Important for Your Startup?',
        description: 'Protect your business and build trust from the start.',
        content: {
          type: 'text',
          data: {
            text: 'Proper legal setup protects you personally, establishes credibility with customers and partners, and prevents costly legal issues later. Ethical practices build trust and create a strong foundation for sustainable growth.'
          }
        }
      },
      {
        id: 'start-legal-ai-help',
        title: 'How Can AI Help with Legal and Ethical Setup?',
        description: 'Use AI for basic legal documents and compliance guidance.',
        content: {
          type: 'text',
          data: {
            text: 'AI can help generate basic contracts, privacy policies, terms of service, and provide guidance on common legal requirements. It can also help you understand compliance obligations for your specific business type.'
          }
        }
      },
      {
        id: 'start-legal-ai-tools',
        title: 'AI Legal Tools for Startups',
        description: 'Affordable AI-powered legal assistance for new businesses.',
        content: {
          type: 'text',
          data: {
            text: 'AI tools to help with basic legal setup and compliance monitoring.'
          }
        },
        links: [
          {
            name: 'LegalZoom AI',
            url: 'https://legalzoom.com',
            description: 'AI-assisted business formation',
            type: 'tool'
          },
          {
            name: 'DoNotPay',
            url: 'https://donotpay.com',
            description: 'AI legal assistant for small tasks',
            type: 'tool'
          }
        ]
      },
      {
        id: 'start-legal-limitations',
        title: 'Limitations and Considerations for Startup Legal Matters',
        description: 'When to seek professional legal counsel.',
        content: {
          type: 'text',
          data: {
            text: 'AI cannot replace qualified legal counsel for complex matters, industry-specific regulations, or significant legal decisions. Always consult with attorneys for business formation, contracts, and compliance in regulated industries.'
          }
        }
      },
      {
        id: 'start-legal-traditional',
        title: 'Traditional Legal Setup Methods',
        description: 'Proven approaches for startup legal compliance.',
        content: {
          type: 'text',
          data: {
            text: 'Consulting with business attorneys, using established legal service providers, working with accountants for tax setup, and joining industry associations for compliance guidance provide reliable legal foundation.'
          }
        }
      },
      {
        id: 'start-legal-future',
        title: 'Future Potential for Startup Legal Services',
        description: 'How AI will transform legal services for entrepreneurs.',
        content: {
          type: 'text',
          data: {
            text: 'AI will provide real-time compliance monitoring, automated legal document generation, and proactive legal guidance, making sophisticated legal services accessible and affordable for all startups.'
          }
        }
      }
    ]
  },
  {
    id: 'start-customer-experience',
    title: 'Customer Experience',
    description: 'Design exceptional experiences that turn first-time customers into loyal advocates.',
    level: 1,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Creating outstanding customer experiences from day one helps startups build loyalty, generate referrals, and establish a strong reputation in the market.'
      }
    },
    links: [
      {
        name: 'Zendesk',
        url: 'https://zendesk.com',
        description: 'Customer support platform',
        type: 'tool'
      },
      {
        name: 'Intercom',
        url: 'https://intercom.com',
        description: 'Customer messaging and support',
        type: 'tool'
      }
    ],
    tags: ['customer service', 'user experience', 'customer retention'],
    subTiles: [
      {
        id: 'start-cx-importance',
        title: 'What is Customer Experience and Why is it Critical for Your Startup?',
        description: 'Turn first customers into loyal advocates and referral sources.',
        content: {
          type: 'text',
          data: {
            text: 'For startups, exceptional customer experience is crucial because you rely heavily on word-of-mouth referrals and repeat business. Every customer interaction is an opportunity to build your reputation and generate organic growth.'
          }
        }
      },
      {
        id: 'start-cx-ai-help',
        title: 'How Can AI Help Your Startup\'s Customer Experience?',
        description: 'Provide 24/7 support and personalized experiences on a startup budget.',
        content: {
          type: 'text',
          data: {
            text: 'AI enables startups to provide professional customer support around the clock, personalize interactions, quickly resolve common issues, and gather valuable feedback to improve your product or service continuously.'
          }
        }
      },
      {
        id: 'start-cx-ai-tools',
        title: 'AI Customer Experience Tools for Startups',
        description: 'Affordable AI tools to deliver exceptional customer service.',
        content: {
          type: 'text',
          data: {
            text: 'AI-powered tools to enhance your customer experience without hiring a large support team.'
          }
        },
        links: [
          {
            name: 'Zendesk AI',
            url: 'https://zendesk.com',
            description: 'AI customer support automation',
            type: 'tool'
          },
          {
            name: 'Intercom',
            url: 'https://intercom.com',
            description: 'AI-powered customer messaging',
            type: 'tool'
          },
          {
            name: 'Tidio',
            url: 'https://tidio.com',
            description: 'AI chatbot for small businesses',
            type: 'tool'
          }
        ]
      },
      {
        id: 'start-cx-limitations',
        title: 'Limitations and Considerations for Startup Customer Experience',
        description: 'Balancing AI efficiency with personal touch.',
        content: {
          type: 'text',
          data: {
            text: 'While AI can handle routine inquiries, startups should maintain personal connections with customers. Complex issues, complaints, and relationship building still require human attention and empathy.'
          }
        }
      },
      {
        id: 'start-cx-traditional',
        title: 'Traditional Customer Experience Methods',
        description: 'Personal approaches that build strong customer relationships.',
        content: {
          type: 'text',
          data: {
            text: 'Personal phone calls, face-to-face meetings, handwritten thank-you notes, follow-up surveys, and direct feedback conversations create strong emotional connections that drive customer loyalty.'
          }
        }
      },
      {
        id: 'start-cx-future',
        title: 'Future Potential for Startup Customer Experience',
        description: 'How AI will enhance personal customer relationships.',
        content: {
          type: 'text',
          data: {
            text: 'AI will enable startups to provide enterprise-level personalization and support while maintaining the personal touch that customers value, creating the best of both worlds for customer experience.'
          }
        }
      }
    ]
  },
  {
    id: 'start-content-creation',
    title: 'Content Creation',
    description: 'Create compelling content that attracts customers and builds your brand authority.',
    level: 1,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Strategic content creation helps startups build brand awareness, demonstrate expertise, and attract customers through valuable, engaging content.'
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
        name: 'Jasper',
        url: 'https://jasper.ai',
        description: 'AI writing and content generation',
        type: 'tool'
      },
      {
        name: 'Loom',
        url: 'https://loom.com',
        description: 'Easy video content creation',
        type: 'tool'
      }
    ],
    tags: ['content marketing', 'brand building', 'thought leadership'],
    subTiles: [
      {
        id: 'start-content-importance',
        title: 'What is Content Creation and Why is it Essential for Your Startup?',
        description: 'Build authority, attract customers, and establish your brand voice.',
        content: {
          type: 'text',
          data: {
            text: 'Content creation helps startups build credibility, attract potential customers, and establish thought leadership in their industry. It\'s a cost-effective way to market your business and demonstrate your expertise to potential customers.'
          }
        }
      },
      {
        id: 'start-content-ai-help',
        title: 'How Can AI Help Your Startup\'s Content Creation?',
        description: 'Create professional content quickly and affordably.',
        content: {
          type: 'text',
          data: {
            text: 'AI can help startups create blog posts, social media content, graphics, video scripts, and marketing copy quickly and professionally, enabling consistent content creation even with limited resources and time.'
          }
        }
      },
      {
        id: 'start-content-ai-tools',
        title: 'AI Content Creation Tools for Startups',
        description: 'Essential AI tools for creating engaging content on a budget.',
        content: {
          type: 'text',
          data: {
            text: 'Powerful AI tools to help you create professional content without a large team or budget.'
          }
        },
        links: [
          {
            name: 'Canva AI',
            url: 'https://canva.com',
            description: 'AI design for graphics and visuals',
            type: 'tool'
          },
          {
            name: 'Jasper AI',
            url: 'https://jasper.ai',
            description: 'AI writing and copywriting',
            type: 'tool'
          },
          {
            name: 'Synthesia',
            url: 'https://synthesia.io',
            description: 'AI video content creation',
            type: 'tool'
          }
        ]
      },
      {
        id: 'start-content-limitations',
        title: 'Limitations and Considerations for Startup Content',
        description: 'Maintaining authenticity and brand voice with AI content.',
        content: {
          type: 'text',
          data: {
            text: 'AI content needs human review and personalization to reflect your unique brand voice and expertise. Startups should use AI as a starting point but add personal insights, experiences, and authentic storytelling.'
          }
        }
      },
      {
        id: 'start-content-traditional',
        title: 'Traditional Content Creation Methods',
        description: 'Proven approaches for authentic content creation.',
        content: {
          type: 'text',
          data: {
            text: 'Personal storytelling, behind-the-scenes content, customer testimonials, case studies, and sharing your entrepreneurial journey create authentic content that resonates with your audience.'
          }
        }
      },
      {
        id: 'start-content-future',
        title: 'Future Potential for Startup Content Creation',
        description: 'How AI will revolutionize content for entrepreneurs.',
        content: {
          type: 'text',
          data: {
            text: 'AI will enable startups to create personalized, multi-format content at scale while maintaining authentic brand voice, making professional content marketing accessible to every entrepreneur.'
          }
        }
      }
    ]
  },
  {
    id: 'start-operations-productivity',
    title: 'Operations and Productivity',
    description: 'Set up efficient systems and processes to maximize productivity from day one.',
    level: 1,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Establishing efficient operations and productivity systems early helps startups scale effectively and avoid operational chaos as they grow.'
      }
    },
    links: [
      {
        name: 'Notion',
        url: 'https://notion.so',
        description: 'All-in-one workspace for startups',
        type: 'tool'
      },
      {
        name: 'Trello',
        url: 'https://trello.com',
        description: 'Simple project management',
        type: 'tool'
      },
      {
        name: 'Zapier',
        url: 'https://zapier.com',
        description: 'Workflow automation',
        type: 'tool'
      }
    ],
    tags: ['operations', 'productivity', 'systems', 'automation'],
    subTiles: [
      {
        id: 'start-operations-importance',
        title: 'What are Operations and Productivity and Why are They Critical for Your Startup?',
        description: 'Build scalable systems that grow with your business.',
        content: {
          type: 'text',
          data: {
            text: 'Efficient operations and productivity systems help startups maximize limited resources, maintain quality as they scale, and avoid the chaos that can derail growing businesses. Good systems free up time for strategic work.'
          }
        }
      },
      {
        id: 'start-operations-ai-help',
        title: 'How Can AI Help Your Startup\'s Operations?',
        description: 'Automate routine tasks and optimize workflows.',
        content: {
          type: 'text',
          data: {
            text: 'AI can automate scheduling, task management, data entry, customer communications, and workflow optimization, allowing startup founders to focus on high-value activities like product development and customer acquisition.'
          }
        }
      },
      {
        id: 'start-operations-ai-tools',
        title: 'AI Operations Tools for Startups',
        description: 'Essential AI tools to streamline your startup operations.',
        content: {
          type: 'text',
          data: {
            text: 'AI-powered tools to automate and optimize your startup operations from day one.'
          }
        },
        links: [
          {
            name: 'Notion AI',
            url: 'https://notion.so',
            description: 'AI-powered workspace and documentation',
            type: 'tool'
          },
          {
            name: 'Zapier',
            url: 'https://zapier.com',
            description: 'AI workflow automation',
            type: 'tool'
          },
          {
            name: 'Monday.com',
            url: 'https://monday.com',
            description: 'AI project management',
            type: 'tool'
          }
        ]
      },
      {
        id: 'start-operations-limitations',
        title: 'Limitations and Considerations for Startup Operations',
        description: 'Balancing automation with flexibility and human oversight.',
        content: {
          type: 'text',
          data: {
            text: 'Startups need to balance automation with flexibility since business needs change rapidly. Avoid over-automating processes that may need frequent adjustments, and maintain human oversight for critical operations.'
          }
        }
      },
      {
        id: 'start-operations-traditional',
        title: 'Traditional Operations Methods for Startups',
        description: 'Proven operational approaches for new businesses.',
        content: {
          type: 'text',
          data: {
            text: 'Simple spreadsheets, manual checklists, regular team meetings, clear standard operating procedures (SOPs), and hands-on management remain effective for startup operations, especially in early stages.'
          }
        }
      },
      {
        id: 'start-operations-future',
        title: 'Future Potential for Startup Operations',
        description: 'How AI will transform startup operations management.',
        content: {
          type: 'text',
          data: {
            text: 'AI will provide startups with enterprise-level operational intelligence, predictive analytics, and automated optimization, enabling small teams to operate with the efficiency of much larger organizations.'
          }
        }
      }
    ]
  },
  {
    id: 'start-networking-partnerships',
    title: 'Networking and Partnerships',
    description: 'Build strategic relationships that accelerate your startup\'s growth and success.',
    level: 1,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Strategic networking and partnerships are crucial for startups to access resources, customers, mentorship, and growth opportunities that would be difficult to achieve alone.'
      }
    },
    links: [
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com',
        description: 'Professional networking platform',
        type: 'tool'
      },
      {
        name: 'Meetup',
        url: 'https://meetup.com',
        description: 'Find local networking events',
        type: 'tool'
      },
      {
        name: 'AngelList',
        url: 'https://angel.co',
        description: 'Startup networking and funding',
        type: 'tool'
      }
    ],
    tags: ['networking', 'partnerships', 'mentorship', 'business development'],
    subTiles: [
      {
        id: 'start-networking-importance',
        title: 'What are Networking and Partnerships and Why are They Essential for Your Startup?',
        description: 'Access resources, mentorship, and opportunities for rapid growth.',
        content: {
          type: 'text',
          data: {
            text: 'For startups, networking and partnerships provide access to customers, mentors, investors, suppliers, and collaborators that can accelerate growth. Strong relationships often make the difference between startup success and failure.'
          }
        }
      },
      {
        id: 'start-networking-ai-help',
        title: 'How Can AI Help Your Startup\'s Networking Efforts?',
        description: 'Identify ideal partners and optimize relationship building.',
        content: {
          type: 'text',
          data: {
            text: 'AI can help identify potential partners, track relationship building efforts, suggest optimal outreach timing, analyze networking opportunities, and help you prepare for meetings with relevant insights about contacts.'
          }
        }
      },
      {
        id: 'start-networking-ai-tools',
        title: 'AI Networking Tools for Startups',
        description: 'AI-powered tools to enhance your networking and partnership efforts.',
        content: {
          type: 'text',
          data: {
            text: 'AI tools to help you network more effectively and build strategic partnerships.'
          }
        },
        links: [
          {
            name: 'LinkedIn Sales Navigator',
            url: 'https://business.linkedin.com/sales-solutions/sales-navigator',
            description: 'AI-powered professional networking',
            type: 'tool'
          },
          {
            name: 'Apollo.io',
            url: 'https://apollo.io',
            description: 'AI prospecting and outreach',
            type: 'tool'
          },
          {
            name: 'Clay',
            url: 'https://clay.com',
            description: 'AI relationship management',
            type: 'tool'
          }
        ]
      },
      {
        id: 'start-networking-limitations',
        title: 'Limitations and Considerations for Startup Networking',
        description: 'The importance of authentic relationship building.',
        content: {
          type: 'text',
          data: {
            text: 'AI cannot replace genuine relationship building, trust development, and authentic connections. Startups should use AI to identify opportunities but focus on building real, mutually beneficial relationships through personal interaction.'
          }
        }
      },
      {
        id: 'start-networking-traditional',
        title: 'Traditional Networking Methods for Startups',
        description: 'Proven approaches for building business relationships.',
        content: {
          type: 'text',
          data: {
            text: 'Industry conferences, local meetups, startup events, accelerator programs, mentorship programs, and direct outreach remain the foundation of effective startup networking and relationship building.'
          }
        }
      },
      {
        id: 'start-networking-future',
        title: 'Future Potential for Startup Networking',
        description: 'How AI will enhance relationship building for entrepreneurs.',
        content: {
          type: 'text',
          data: {
            text: 'AI will provide intelligent matchmaking, relationship insights, and networking optimization while preserving the authentic human connections that drive successful partnerships and business relationships.'
          }
        }
      }
    ]
  },
  {
    id: 'start-sales-conversions-revenue',
    title: 'Sales, Conversions, and Revenue Optimization',
    description: 'Generate your first sales and build sustainable revenue streams for your startup.',
    level: 1,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Effective sales processes and revenue optimization are critical for startup survival and growth, helping you convert prospects into paying customers and build sustainable income.'
      }
    },
    links: [
      {
        name: 'HubSpot',
        url: 'https://hubspot.com',
        description: 'Free CRM for startups',
        type: 'tool'
      },
      {
        name: 'Stripe',
        url: 'https://stripe.com',
        description: 'Payment processing for startups',
        type: 'tool'
      },
      {
        name: 'Calendly',
        url: 'https://calendly.com',
        description: 'Sales meeting scheduling',
        type: 'tool'
      }
    ],
    tags: ['sales', 'revenue', 'conversions', 'customer acquisition'],
    subTiles: [
      {
        id: 'start-sales-importance',
        title: 'What are Sales and Revenue Optimization and Why are They Critical for Your Startup?',
        description: 'Generate cash flow and validate your business model.',
        content: {
          type: 'text',
          data: {
            text: 'Sales and revenue generation are the lifeblood of any startup. They provide the cash flow needed to operate, validate your business model, and demonstrate market demand to investors and stakeholders.'
          }
        }
      },
      {
        id: 'start-sales-ai-help',
        title: 'How Can AI Help Your Startup\'s Sales Efforts?',
        description: 'Optimize lead generation, qualification, and conversion processes.',
        content: {
          type: 'text',
          data: {
            text: 'AI can help startups identify high-quality leads, personalize sales outreach, optimize pricing strategies, automate follow-ups, and analyze sales patterns to improve conversion rates and revenue per customer.'
          }
        }
      },
      {
        id: 'start-revenue-optimization-tips',
        title: 'Revenue Optimization Strategies for Startups',
        description: 'Proven tactics to maximize revenue from limited customers.',
        content: {
          type: 'text',
          data: {
            text: 'Focus on customer lifetime value (CLV), implement upselling and cross-selling, create tiered pricing options, offer strategic promotions, and optimize your sales funnel to maximize revenue from each customer interaction.'
          }
        }
      },
      {
        id: 'start-sales-ai-tools',
        title: 'AI Sales Tools for Startups',
        description: 'Affordable AI tools to boost your startup\'s sales performance.',
        content: {
          type: 'text',
          data: {
            text: 'AI-powered sales tools designed for startups and small businesses.'
          }
        },
        links: [
          {
            name: 'HubSpot AI',
            url: 'https://hubspot.com',
            description: 'Free AI-powered CRM',
            type: 'tool'
          },
          {
            name: 'Pipedrive',
            url: 'https://pipedrive.com',
            description: 'AI sales pipeline management',
            type: 'tool'
          },
          {
            name: 'Outreach.io',
            url: 'https://outreach.io',
            description: 'AI sales engagement',
            type: 'tool'
          }
        ]
      },
      {
        id: 'start-sales-limitations',
        title: 'Limitations and Considerations for Startup Sales',
        description: 'Balancing AI efficiency with personal relationship building.',
        content: {
          type: 'text',
          data: {
            text: 'While AI can optimize sales processes, startups often rely on personal relationships and trust-building. Don\'t over-automate personal interactions, especially with early customers who need hands-on attention and support.'
          }
        }
      },
      {
        id: 'start-sales-traditional',
        title: 'Traditional Sales Methods for Startups',
        description: 'Proven sales approaches for new businesses.',
        content: {
          type: 'text',
          data: {
            text: 'Direct personal selling, referral programs, networking-based sales, consultative selling, and relationship-driven approaches remain highly effective for startups, especially in B2B markets.'
          }
        }
      },
      {
        id: 'start-sales-future',
        title: 'Future Potential for Startup Sales',
        description: 'How AI will transform sales for entrepreneurs.',
        content: {
          type: 'text',
          data: {
            text: 'AI will enable startups to compete with larger companies through intelligent lead scoring, personalized sales automation, and predictive revenue optimization while maintaining the personal touch that customers value.'
          }
        }
      }
    ]
  },
  {
    id: 'start-growth-scaling',
    title: 'Growth and Scaling (Including Testing and Experimentation)',
    description: 'Plan and execute sustainable growth strategies with systematic testing and validation.',
    level: 1,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Strategic growth and scaling require careful planning, systematic testing, and data-driven decision making to ensure your startup can expand sustainably without losing quality or focus.'
      }
    },
    links: [
      {
        name: 'Google Analytics',
        url: 'https://analytics.google.com',
        description: 'Track growth metrics and user behavior',
        type: 'tool'
      },
      {
        name: 'Mixpanel',
        url: 'https://mixpanel.com',
        description: 'Product analytics for growth',
        type: 'tool'
      },
      {
        name: 'Optimizely',
        url: 'https://optimizely.com',
        description: 'A/B testing and experimentation',
        type: 'tool'
      }
    ],
    tags: ['growth hacking', 'scaling', 'experimentation', 'metrics'],
    subTiles: [
      {
        id: 'start-growth-importance',
        title: 'What are Growth and Scaling and Why are They Essential for Your Startup?',
        description: 'Expand sustainably while maintaining quality and focus.',
        content: {
          type: 'text',
          data: {
            text: 'Growth and scaling enable startups to capture market opportunities, achieve economies of scale, and build sustainable competitive advantages. Proper scaling ensures you can grow without compromising quality or customer experience.'
          }
        }
      },
      {
        id: 'start-growth-ai-help',
        title: 'How Can AI Help Your Startup\'s Growth Efforts?',
        description: 'Identify opportunities and optimize growth strategies with data.',
        content: {
          type: 'text',
          data: {
            text: 'AI can analyze growth patterns, predict successful strategies, automate growth experiments, identify bottlenecks, and provide insights for sustainable scaling based on data rather than guesswork.'
          }
        }
      },
      {
        id: 'start-testing-experimentation',
        title: 'Testing and Experimentation for Startup Growth',
        description: 'Validate growth strategies before full implementation.',
        content: {
          type: 'text',
          data: {
            text: 'Systematic A/B testing, pilot programs, MVP development, customer feedback loops, and small-scale experiments help startups validate growth strategies and avoid costly mistakes during scaling.'
          }
        }
      },
      {
        id: 'start-growth-ai-tools',
        title: 'AI Growth Tools for Startups',
        description: 'AI-powered tools to optimize your startup\'s growth and scaling.',
        content: {
          type: 'text',
          data: {
            text: 'AI tools to help you grow and scale your startup systematically and sustainably.'
          }
        },
        links: [
          {
            name: 'Google Analytics Intelligence',
            url: 'https://analytics.google.com',
            description: 'AI-powered growth insights',
            type: 'tool'
          },
          {
            name: 'Mixpanel',
            url: 'https://mixpanel.com',
            description: 'AI product analytics',
            type: 'tool'
          },
          {
            name: 'Amplitude',
            url: 'https://amplitude.com',
            description: 'AI growth analytics',
            type: 'tool'
          }
        ]
      },
      {
        id: 'start-growth-limitations',
        title: 'Limitations and Considerations for Startup Growth',
        description: 'Avoiding common scaling pitfalls and maintaining quality.',
        content: {
          type: 'text',
          data: {
            text: 'Rapid growth can strain resources, compromise quality, and dilute company culture. Startups should balance growth ambitions with operational capacity and maintain focus on core value propositions during scaling.'
          }
        }
      },
      {
        id: 'start-growth-traditional',
        title: 'Traditional Growth Methods for Startups',
        description: 'Proven approaches for sustainable startup growth.',
        content: {
          type: 'text',
          data: {
            text: 'Organic growth through customer satisfaction, referral programs, strategic partnerships, geographic expansion, product line extensions, and reinvestment of profits remain reliable growth strategies for startups.'
          }
        }
      },
      {
        id: 'start-growth-future',
        title: 'Future Potential for Startup Growth',
        description: 'How AI will revolutionize startup scaling and growth.',
        content: {
          type: 'text',
          data: {
            text: 'AI will enable startups to predict optimal growth strategies, automate scaling processes, and maintain quality during rapid expansion through intelligent resource allocation and predictive analytics.'
          }
        }
      }
    ]
  },
  {
    id: 'start-finance-accounting',
    title: 'Finance and Accounting',
    description: 'Establish solid financial foundations and accounting practices for your startup.',
    level: 1,
    journeyType: 'start',
    content: {
      type: 'text',
      data: {
        text: 'Proper financial management and accounting practices are essential for startup success, helping you track performance, make informed decisions, and maintain healthy cash flow.'
      }
    },
    links: [
      {
        name: 'QuickBooks',
        url: 'https://quickbooks.intuit.com',
        description: 'Accounting software for startups',
        type: 'tool'
      },
      {
        name: 'Wave',
        url: 'https://waveapps.com',
        description: 'Free accounting for small businesses',
        type: 'tool'
      },
      {
        name: 'FreshBooks',
        url: 'https://freshbooks.com',
        description: 'Simple invoicing and accounting',
        type: 'tool'
      }
    ],
    tags: ['startup finance', 'accounting', 'cash flow', 'financial planning'],
    subTiles: [
      {
        id: 'start-finance-importance',
        title: 'What are Finance and Accounting and Why are They Critical for Your Startup?',
        description: 'Track performance, manage cash flow, and make informed decisions.',
        content: {
          type: 'text',
          data: {
            text: 'Proper financial management helps startups track performance, maintain cash flow, make informed decisions, prepare for funding, and avoid financial pitfalls that cause many startups to fail. Example: Startups with good financial tracking can identify problems early and adjust quickly.'
          }
        }
      },
      {
        id: 'start-finance-ai-help',
        title: 'How Can AI Help Your Startup\'s Financial Management?',
        description: 'Automate bookkeeping and gain financial insights.',
        content: {
          type: 'text',
          data: {
            text: 'AI can automate expense tracking, categorize transactions, generate financial reports, predict cash flow, identify spending patterns, and provide insights for better financial decision-making, saving time and reducing errors.'
          }
        }
      },
      {
        id: 'start-finance-ai-tools',
        title: 'AI Finance Tools for Startups',
        description: 'Affordable AI-powered financial management tools.',
        content: {
          type: 'text',
          data: {
            text: 'AI tools to help you manage your startup\'s finances effectively and affordably.'
          }
        },
        links: [
          {
            name: 'QuickBooks AI',
            url: 'https://quickbooks.intuit.com',
            description: 'AI-powered accounting and insights',
            type: 'tool'
          },
          {
            name: 'Xero',
            url: 'https://xero.com',
            description: 'AI accounting features',
            type: 'tool'
          },
          {
            name: 'Receipt Bank',
            url: 'https://receipt-bank.com',
            description: 'AI expense management',
            type: 'tool'
          }
        ]
      },
      {
        id: 'start-finance-limitations',
        title: 'Limitations and Considerations for Startup Finance',
        description: 'When to seek professional financial guidance.',
        content: {
          type: 'text',
          data: {
            text: 'AI cannot replace professional financial advice for complex scenarios, tax planning, funding preparation, or strategic financial decisions. Startups should consult with accountants and financial advisors for important financial matters.'
          }
        }
      },
      {
        id: 'start-finance-traditional',
        title: 'Traditional Financial Management for Startups',
        description: 'Proven approaches for startup financial management.',
        content: {
          type: 'text',
          data: {
            text: 'Simple spreadsheets, regular financial reviews, working with accountants, maintaining separate business accounts, and following basic bookkeeping principles provide a solid foundation for startup financial management.'
          }
        }
      },
      {
        id: 'start-finance-future',
        title: 'Future Potential for Startup Finance',
        description: 'How AI will transform financial management for entrepreneurs.',
        content: {
          type: 'text',
          data: {
            text: 'AI will provide startups with real-time financial intelligence, predictive cash flow analysis, automated compliance, and sophisticated financial insights previously available only to larger companies with dedicated finance teams.'
          }
        }
      }
    ]
  }
];
