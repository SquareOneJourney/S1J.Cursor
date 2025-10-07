import type { Tile } from '../types/tiles';

export const startTiles: Tile[] = [
  // Main Stage 1: Build the Foundation
  {
    id: 'stage-1-build-foundation',
    title: 'Stage 1: Build the Foundation',
    description: 'Establish the essential foundations for your business success.',
    level: 1,
    journeyType: 'start',
    isMainStage: true,
    content: {
      type: 'text',
      data: {
        text: 'This stage focuses on the fundamental building blocks every successful business needs. From validating your idea to setting up proper legal and financial structures, these foundations will support all your future growth.'
      }
    },
    tags: ['foundation', 'validation', 'legal', 'finance'],
    subTiles: [
      {
        id: 'market-research-validation',
        title: 'Market Research: How to Validate Your Business Idea',
        description: 'Don\'t waste time or money on untested ideas. This guide shows you how to validate a business idea with demand checks, competitor analysis, and local feedback — with optional AI helpers along the way.',
        content: {
          type: 'text',
          data: {
            text: `**Why Market Validation Matters**

Most businesses don't fail because founders didn't work hard enough — they fail because the idea wasn't tested first. Market validation gives you clarity and confidence.

• Avoid wasted time and money
• Spot hidden market opportunities
• Build confidence before investing
• Make data-driven decisions, not guesses

**The 4-Step Validation System**

You can do real market research from home using free online tools. Here's the four-part system that works:

1. Identify demand with search data and trend analysis
2. Spot competitors and uncover market gaps
3. Collect local feedback through surveys and social listening
4. Combine your findings and make a confident go/no-go decision

## Step 1: Identify Demand Using Search Data

**Why It Matters** Search data reveals what people actually want and when they want it.

**Try This:**
• Visit Google Trends (trends.google.com)
• Enter your product/service + region
• Compare related search terms
• Look for seasonal spikes or steady growth
• Check "Related Queries" for expansion ideas

**Example:** Searching "brush removal services Ohio" shows steady growth and springtime peaks — meaning strong seasonal demand and predictable cash flow.

**Bonus Tool: Google Keyword Planner**
Use it (free with a Google Ads account) to check monthly search volume for your terms.

**Example:** "Mobile car detailing Tampa" gets 2,000 monthly searches vs. "eco car wash Tampa" at 150 — go where the interest is strongest.

**Optional AI Shortcut:** Summarize what this Google Trends chart means for small business opportunities in Ohio. Suggest launch timing and related service ideas.

## Step 2: Spot Competitors and Market Gaps

**Why It Matters** Knowing who's already serving your market helps you avoid crowded spaces — and find what's missing.

**How to Research:**
• Open Google Maps ® search [your service] + [your city]
• Count how many similar businesses exist
• Read their Google reviews (1–3 stars = honest feedback)
• Visit websites to note pricing, offers, and branding
• Check social media for engagement and complaints

**Example:** If landscaping companies nearby get complaints about unreliable schedules, you could brand around "always-on-time service."

**Social Listening**
Join Facebook Groups, Nextdoor, or local forums. Watch for posts asking for recommendations and note recurring complaints or service requests — these often reveal unmet demand.

**Optional AI Shortcut:** Analyze these competitor reviews and identify the top 3 pain points. Suggest how a new business could position itself as the better choice.

## Step 3: Collect Local Input (Surveys & Social Listening)

**Why It Matters** Direct input from potential customers gives you real-world validation — not just online guesses.

**Create a Simple Survey**
Use Google Forms or Typeform. Keep it under 7 questions and share via Facebook Groups, Reddit city threads, or local email lists.

**Ask questions like:**
• What's your biggest frustration with current [service] options?
• How much would you pay for a better solution?
• What would make you switch providers?
• What extra services would you want?
• How do you usually find local services?

Offer a small incentive (like a free consultation) to boost responses.

**Listen Without Asking**
Monitor Facebook, Reddit, or Yelp discussions for repeated frustrations. Set up Google Alerts for your service and location.

**Example:** If Reddit users in Austin keep asking for "affordable home cleaners who bring their own supplies," you've found a gap.

**Optional AI Shortcut:** Write a 5-question survey to validate demand for a mobile coffee cart in Austin. Focus on convenience, price, and preferred locations.

## Step 4: Analyze and Decide

**Why It Matters** Bringing your findings together helps you make a confident, data-driven choice.

**How to Analyze:**
• Review all findings systematically
• Quantify demand indicators (search volume, competitor count, survey size)
• Evaluate market saturation vs. opportunity
• Factor in your budget, time, and skill advantages

**Decision Matrix:**
• **High Demand + Low Competition** = Strong opportunity
• **High Demand + High Competition** = Need strong differentiation
• **Low Demand + Low Competition** = Niche or unproven market
• **Low Demand + High Competition** = High risk — avoid

**Risk Questions:**
• What's the worst-case scenario if I launch?
• What's the opportunity cost of not trying?
• Do I have the resources to stand out?
• Could I pivot easily if needed?

**Optional AI Shortcut:** Based on this data, should I proceed with my business idea? Summarize key risks and opportunities.

## Free Tools and Resources

**Tool** | **Purpose**
---|---
Google Trends | Measure demand and spot trends
Google Keyword Planner | Gauge local search volume
Google Maps & Street View | Scout competitors and neighborhoods
Google Forms | Create surveys easily
Facebook Groups / Nextdoor | Gather local feedback
Reddit / Local Forums | Spot unmet needs
Google Alerts | Automate ongoing monitoring

**Pro Tips for Success:**
• Start broad, then narrow to your best-fit idea
• Confirm every insight with at least two sources
• Focus on problems, not your product
• Watch for seasonal or regional patterns
• Keep notes — your research becomes your marketing copy
• Validation is continuous, not one-time

**Final Takeaway**
You don't need fancy data tools or consultants to do smart market research. With a laptop, free online tools, and a little curiosity, you can prove your idea's potential — or pivot before wasting time and money. AI can help you summarize and analyze, but listening to your community will always be your most powerful validation tool.
`
          }
        },
        links: [
          {
            name: 'Google Trends',
            url: 'https://trends.google.com',
            description: 'Measure demand and spot trends',
            type: 'tool'
          },
          {
            name: 'Google Keyword Planner',
            url: 'https://ads.google.com/home/tools/keyword-planner',
            description: 'Gauge local search volume',
            type: 'tool'
          },
          {
            name: 'Google Maps',
            url: 'https://maps.google.com',
            description: 'Scout competitors and neighborhoods',
            type: 'tool'
          },
          {
            name: 'Google Forms',
            url: 'https://forms.google.com',
            description: 'Create surveys easily',
            type: 'tool'
          },
          {
            name: 'Google Alerts',
            url: 'https://alerts.google.com',
            description: 'Automate ongoing monitoring',
            type: 'tool'
          },
          {
            name: 'Nextdoor',
            url: 'https://nextdoor.com',
            description: 'Gather local feedback',
            type: 'platform'
          },
          {
            name: 'Facebook Groups',
            url: 'https://facebook.com/groups',
            description: 'Gather local feedback',
            type: 'platform'
          },
          {
            name: 'Reddit',
            url: 'https://reddit.com',
            description: 'Spot unmet needs',
            type: 'platform'
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
        ],
        tags: ['market validation', 'competitor analysis', 'business planning', 'demand validation', 'free tools', 'social listening', 'survey research', 'google trends', 'keyword research']
      },
      {
        id: 'basic-legal-business-ethics',
        title: 'Basic Legal and Business Ethics',
        description: 'Set up your business legally and establish ethical practices from day one.',
        content: {
          type: 'text',
          data: {
            text: `**Why legal setup matters**

Proper legal structure protects your personal assets and ensures you're operating within the law. Ethical practices build trust and long-term success.

**What you'll learn**

• Choose the right business structure
• Understand basic legal requirements
• Establish ethical business practices
• Protect your intellectual property

## Business Structure Options

**Sole Proprietorship**
• Simplest to set up
• You're personally liable
• Good for testing ideas

**LLC (Limited Liability Company)**
• Protects personal assets
• Flexible tax options
• Popular choice for small businesses

**Corporation**
• Maximum liability protection
• More complex setup
• Better for raising investment

**AI Prompt:**
"Help me choose the right business structure for a [your business type]. Consider liability, taxes, and future growth plans."

## Basic Legal Requirements

**Business Registration**
• Register with your state
• Get necessary licenses and permits
• Understand local regulations

**Tax Obligations**
• Get an EIN (Employer Identification Number)
• Understand sales tax requirements
• Keep proper records

**Insurance**
• General liability insurance
• Professional liability if applicable
• Workers' compensation if you have employees

**AI Prompt:**
"Create a checklist of legal requirements for starting a [your business type] in [your state]. Include licenses, permits, and insurance needs."

## Ethical Business Practices

**Customer Relations**
• Honest advertising and pricing
• Clear terms of service
• Responsive customer service

**Employee Relations**
• Fair compensation and treatment
• Clear job descriptions
• Safe working conditions

**Community Impact**
• Environmental responsibility
• Supporting local community
• Transparent business practices

**AI Prompt:**
"Help me create an ethical business practices policy for my [business type]. Focus on customer, employee, and community relations."
`
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
          },
          {
            name: 'IRS.gov',
            url: 'https://irs.gov',
            description: 'Get EIN and tax information',
            type: 'tool'
          },
          {
            name: 'SBA.gov',
            url: 'https://sba.gov',
            description: 'Small Business Administration resources',
            type: 'tool'
          }
        ],
        tags: ['business formation', 'legal compliance', 'startup ethics', 'business structure']
      },
      {
        id: 'finance-accounting',
        title: 'Finance and Accounting',
        description: 'Establish solid financial foundations and accounting practices for your startup.',
        content: {
          type: 'text',
          data: {
            text: `**Why financial management matters**

Proper financial management and accounting practices are essential for startup success, helping you track performance, make informed decisions, and maintain healthy cash flow.

**What you'll learn**

• Set up proper accounting systems
• Understand cash flow management
• Create financial projections
• Track key business metrics

## Setting Up Your Accounting System

**Choose Accounting Software**
• QuickBooks for comprehensive features
• Wave for free basic accounting
• FreshBooks for simple invoicing

**Chart of Accounts**
• Set up proper account categories
• Track income and expenses
• Monitor cash flow

**Record Keeping**
• Keep all receipts and invoices
• Separate business and personal expenses
• Regular bookkeeping schedule

**AI Prompt:**
"Help me set up a chart of accounts for my [business type]. Include all necessary income, expense, and asset categories."

## Cash Flow Management

**Understanding Cash Flow**
• Money coming in vs. going out
• Timing of payments and receipts
• Seasonal variations

**Cash Flow Forecasting**
• Project monthly income and expenses
• Plan for slow periods
• Maintain cash reserves

**Managing Expenses**
• Track all business expenses
• Look for cost-saving opportunities
• Plan for major purchases

**AI Prompt:**
"Create a cash flow forecast template for my [business type]. Include seasonal variations and growth projections."

## Financial Projections

**Sales Projections**
• Realistic growth assumptions
• Market size and penetration
• Pricing strategy

**Expense Projections**
• Fixed vs. variable costs
• Growth-related expenses
• Contingency planning

**Break-even Analysis**
• Calculate break-even point
• Understand profit margins
• Plan for profitability

**AI Prompt:**
"Help me create a 12-month financial projection for my [business type]. Include sales, expenses, and break-even analysis."
`
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
          },
          {
            name: 'Excel',
            url: 'https://office.com',
            description: 'Financial modeling and projections',
            type: 'tool'
          }
        ],
        tags: ['startup finance', 'accounting', 'cash flow', 'financial planning', 'bookkeeping']
      }
    ]
  },

  // Main Stage 2: Grow Visibility
  {
    id: 'stage-2-grow-visibility',
    title: 'Stage 2: Grow Visibility',
    description: 'Build your brand presence and attract customers to your business.',
    level: 1,
    journeyType: 'start',
    isMainStage: true,
    content: {
      type: 'text',
      data: {
        text: 'Once your foundation is solid, it\'s time to get your business noticed. This stage focuses on marketing, content creation, and building exceptional customer experiences that will drive growth.'
      }
    },
    tags: ['marketing', 'content', 'visibility', 'customers'],
    subTiles: [
      {
        id: 'marketing-outreach',
        title: 'Marketing and Outreach',
        description: 'Launch your brand, attract your first customers, and build initial market presence.',
        content: {
          type: 'text',
          data: {
            text: `**Why marketing matters**

Effective startup marketing focuses on building awareness, attracting early customers, and establishing credibility in your market with limited resources.

**What you'll learn**

• Develop your brand identity
• Create a marketing strategy
• Build your online presence
• Attract your first customers

## Brand Identity Development

**Define Your Brand**
• Mission, vision, and values
• Target audience identification
• Unique value proposition
• Brand personality and voice

**Visual Identity**
• Logo design and brand colors
• Consistent visual elements
• Professional photography
• Brand guidelines

**AI Prompt:**
"Help me develop a brand identity for my [business type]. Include mission statement, target audience, and unique value proposition."

## Marketing Strategy

**Marketing Channels**
• Social media platforms
• Email marketing
• Content marketing
• Local advertising

**Content Strategy**
• Blog posts and articles
• Social media content
• Video content
• Customer testimonials

**Budget Planning**
• Allocate marketing budget
• Track ROI on campaigns
• Focus on high-impact activities

**AI Prompt:**
"Create a 3-month marketing strategy for my [business type]. Include content calendar, social media plan, and budget allocation."

## Online Presence

**Website Development**
• Professional website design
• SEO optimization
• Mobile responsiveness
• Clear calls-to-action

**Social Media**
• Choose relevant platforms
• Consistent posting schedule
• Engage with your audience
• Build community

**Local SEO**
• Google My Business listing
• Local directory submissions
• Customer reviews
• Local content creation

**AI Prompt:**
"Help me optimize my online presence for local customers. Include website improvements, social media strategy, and local SEO tactics."
`
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
          },
          {
            name: 'Google My Business',
            url: 'https://business.google.com',
            description: 'Local business listing',
            type: 'tool'
          }
        ],
        tags: ['startup marketing', 'brand building', 'customer acquisition', 'online presence']
      },
      {
        id: 'content-creation',
        title: 'Content Creation',
        description: 'Create compelling content that attracts customers and builds your brand authority.',
        content: {
          type: 'text',
          data: {
            text: `**Why content creation matters**

Strategic content creation helps startups build brand awareness, demonstrate expertise, and attract customers through valuable, engaging content.

**What you'll learn**

• Develop a content strategy
• Create different types of content
• Use AI tools for content creation
• Measure content performance

## Content Strategy Development

**Content Goals**
• Brand awareness
• Lead generation
• Customer education
• SEO improvement

**Content Types**
• Blog posts and articles
• Social media content
• Video content
• Infographics and visuals

**Content Calendar**
• Plan content themes
• Schedule regular posting
• Align with business goals
• Seasonal content planning

**AI Prompt:**
"Help me create a content strategy for my [business type]. Include content themes, posting schedule, and performance metrics."

## Content Creation Process

**Research and Planning**
• Keyword research
• Competitor analysis
• Audience research
• Content ideation

**Content Production**
• Writing and editing
• Visual design
• Video production
• Quality assurance

**Content Distribution**
• Website publishing
• Social media sharing
• Email newsletters
• Cross-platform promotion

**AI Prompt:**
"Create a content production workflow for my [business type]. Include research, creation, and distribution steps."

## AI-Powered Content Creation

**Writing Assistance**
• Blog post generation
• Social media captions
• Email newsletters
• Product descriptions

**Visual Content**
• Image generation
• Graphic design
• Video editing
• Brand consistency

**Content Optimization**
• SEO optimization
• A/B testing
• Performance analysis
• Continuous improvement

**AI Prompt:**
"Show me how to use AI tools to create content for my [business type]. Include prompts and best practices."
`
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
          },
          {
            name: 'ChatGPT',
            url: 'https://chatgpt.com',
            description: 'AI writing assistant',
            type: 'tool'
          }
        ],
        tags: ['content marketing', 'brand building', 'thought leadership', 'AI content creation']
      },
      {
        id: 'ai-content-creation',
        title: 'AI for Content Creation',
        description: 'From blogs to graphics to video scripts — see how AI can boost your marketing reach.',
        content: {
          type: 'text',
          data: {
            text: `**Why AI content creation matters**

AI tools can dramatically speed up content creation while maintaining quality, allowing you to produce more content with less time and effort.

**What you'll learn**

• Use AI for writing and editing
• Create visual content with AI
• Develop content workflows
• Maintain brand consistency

## AI Writing Tools

**Blog Post Creation**
• Topic research and outlines
• Full article generation
• SEO optimization
• Editing and refinement

**Social Media Content**
• Caption generation
• Hashtag research
• Post scheduling
• Engagement optimization

**Email Marketing**
• Newsletter creation
• Subject line optimization
• Personalization
• A/B testing

**AI Prompt:**
"Help me create a blog post about [your topic] for my [business type]. Include SEO optimization and engaging content."

## AI Visual Content

**Image Generation**
• Product photography
• Social media graphics
• Website visuals
• Marketing materials

**Design Automation**
• Brand consistency
• Template creation
• Color scheme generation
• Layout optimization

**Video Content**
• Script writing
• Video editing
• Thumbnail creation
• Caption generation

**AI Prompt:**
"Generate visual content ideas for my [business type] social media. Include image concepts and design suggestions."

## AI Image Editor Guide

### 1. Enhance photos for online business

**Example:** Take a stock photo of your product and upload it to Gemini/Nano Banana

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Transform this into a high-quality, studio-style product image with a marble background. Use soft, balanced lighting, remove any background distractions, apply subtle color correction, and give it a clean, modern look suitable for an e-commerce catalog. Keep the product's shape, texture, and colors true to life. Ensure the shot is eye-level, highlighting the product directly. Zoom 20% out on the image and give it a slight side angle view, making sure it's centered.

**This prompt is great for:**
• A skincare brand enhancing photos for its Shopify store
• A boutique upgrading jewelry images for Etsy
• A small appliance company refining product shots for Amazon listings

### 2. Upgrade casual team photos

**Example:** Upload a group shot taken at your café

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Enhance this team photo to look professional. Replace the background with a clean office or neutral gradient, brighten the lighting, smooth colors, and make sure each face is evenly lit. Maintain authenticity while giving the shot a polished, corporate look.

**This prompt is great for:**
• A tech startup refreshing its "About Us" team section
• A fitness studio updating instructor photos for social media
• A real estate agency creating a cohesive team profile lineup

### 3. Showcase before-and-after transformations

**Example:** Use images of a messy vs. clean dining table

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Create a split-screen before-and-after graphic. Keep the "before" side slightly muted and the "after" side vibrant. Add a subtle diagonal divider between them. Emphasize cleanliness and order on the "after" side with brighter lighting and sharper details.

**This prompt is great for:**
• A home renovation company displaying project results
• A beauty salon showing client transformations
• A cleaning service promoting dramatic makeovers

### 4. Add subtle branding to images

**Example:** Use a stock croissant photo

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Add a small, semi-transparent logo watermark in the lower-right corner. Keep it crisp but not distracting. Ensure it works across light and dark backgrounds by adjusting opacity.

**This prompt is great for:**
• A freelance photographer branding social media posts
• A clothing boutique marking lookbook images
• A design agency maintaining consistent visual identity

### 5. Create event promo graphics

**Example:** A photo of brunch cocktails

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Overlay text announcing an event (e.g., "Sunday Brunch — 10am to 2pm") in bold, modern typography. Place text in the top third, use a soft gradient background overlay to make it readable. Add a branded accent color border.

**This prompt is great for:**
• A coworking space promoting networking nights
• A yoga studio announcing a wellness workshop
• A retail store advertising a seasonal sale event

### 6. Apply seasonal themes

**Example:** A latte photo for fall promotions

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Add scattered autumn leaves around the edges. Apply a warm orange filter to give the photo a cozy seasonal feel. Keep the product clear and central, with seasonal accents enhancing but not overpowering it.

**This prompt is great for:**
• A coffee shop launching seasonal drink promos
• A home décor store running fall collection ads
• An online clothing brand creating themed campaign visuals

### 7. Highlight testimonials visually

**Example:** Customer review about your bakery

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Blur the original product photo slightly, then overlay a white text box with the customer's testimonial. Use clean typography, add quotation marks, and highlight the customer's name in bold.

**This prompt is great for:**
• A marketing agency featuring client feedback
• A skincare brand showcasing real customer reviews
• A hotel or spa highlighting guest experiences

### 8. Turn photos into infographics

**Example:** A photo of your new bread

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Add small infographic-style callouts with icons and short text like "Freshly Baked," "Locally Sourced Flour," and "100% Organic." Use arrows pointing to the bread. Keep the layout clean and professional.

**This prompt is great for:**
• A fitness brand explaining product benefits (e.g., protein bars)
• A sustainable fashion company detailing material sources
• A tech company visualizing product features or data points

### 9. Make playful travel swaps

**Example:** Upload your logo

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Place the logo into a famous landmark scene, such as on a street sign in Paris or on a storefront in New York. Ensure the perspective matches the environment so it looks natural yet fun.

**This prompt is great for:**
• A travel agency adding personality to social posts
• A global brand teasing international expansion
• A content creator making fun "brand goes global" visuals

### 10. Adjust mood and tone for campaigns

**Example:** A photo of your dining space

[Link to Gemini Nano Banana](https://gemini.google.com)

Once image is uploaded on Gemini Nano Banana, copy and paste this prompt:

Apply a modern, cool tone with subtle blues and whites for a fresh look, or a warm, vintage filter with soft yellows for a nostalgic feel. Keep lines sharp and details clear while shifting the overall mood.

**This prompt is great for:**
• A fashion retailer setting campaign tone consistency
• A hospitality brand aligning imagery with a new brand mood
• A real estate company creating distinct seasonal listing visuals
`
          }
        },
        links: [
          {
            name: 'Gemini Nano Banana',
            url: 'https://gemini.google.com',
            description: 'Google\'s AI image editor with advanced editing capabilities',
            type: 'tool'
          },
          {
            name: 'Adobe Firefly',
            url: 'https://firefly.adobe.com',
            description: 'AI-powered image generation and editing',
            type: 'tool'
          },
          {
            name: 'Canva AI',
            url: 'https://canva.com',
            description: 'AI design tools for graphics and images',
            type: 'tool'
          },
          {
            name: 'Midjourney',
            url: 'https://midjourney.com',
            description: 'AI image generation from text prompts',
            type: 'tool'
          },
          {
            name: 'ChatGPT',
            url: 'https://chatgpt.com',
            description: 'AI writing and content generation',
            type: 'tool'
          }
        ],
        tags: ['image editing', 'visual content', 'design', 'AI content creation']
      },
      {
        id: 'customer-experience',
        title: 'Customer Experience',
        description: 'Design exceptional experiences that turn first-time customers into loyal advocates.',
        content: {
          type: 'text',
          data: {
            text: `**Why customer experience matters**

Creating outstanding customer experiences from day one helps startups build loyalty, generate referrals, and establish a strong reputation in the market.

**What you'll learn**

• Design customer journey maps
• Implement feedback systems
• Create loyalty programs
• Handle customer complaints

## Customer Journey Mapping

**Understanding Touchpoints**
• First contact and awareness
• Consideration and evaluation
• Purchase decision
• Post-purchase experience

**Pain Point Identification**
• Common customer frustrations
• Process bottlenecks
• Communication gaps
• Service delivery issues

**Experience Optimization**
• Streamline processes
• Improve communication
• Enhance service quality
• Create memorable moments

**AI Prompt:**
"Help me map the customer journey for my [business type]. Identify key touchpoints and potential pain points."

## Feedback Systems

**Collecting Feedback**
• Customer surveys
• Review monitoring
• Social media listening
• Direct customer conversations

**Feedback Analysis**
• Identify common themes
• Prioritize improvements
• Track satisfaction trends
• Measure impact of changes

**Action Planning**
• Address immediate issues
• Implement long-term improvements
• Communicate changes to customers
• Monitor results

**AI Prompt:**
"Create a customer feedback system for my [business type]. Include survey questions, analysis methods, and action planning."

## Loyalty and Retention

**Loyalty Programs**
• Points and rewards systems
• Exclusive offers and discounts
• VIP customer treatment
• Referral incentives

**Customer Communication**
• Regular newsletters
• Personalized offers
• Birthday and anniversary messages
• Educational content

**Relationship Building**
• Personal connections
• Community building
• Customer success stories
• Long-term value creation

**AI Prompt:**
"Design a customer loyalty program for my [business type]. Include rewards, communication strategy, and retention tactics."
`
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
          },
          {
            name: 'SurveyMonkey',
            url: 'https://surveymonkey.com',
            description: 'Customer feedback surveys',
            type: 'tool'
          },
          {
            name: 'Google Reviews',
            url: 'https://business.google.com',
            description: 'Monitor and respond to reviews',
            type: 'tool'
          }
        ],
        tags: ['customer service', 'user experience', 'customer retention', 'loyalty programs']
      }
    ]
  },

  // Main Stage 3: Scale & Sustain
  {
    id: 'stage-3-scale-sustain',
    title: 'Stage 3: Scale & Sustain',
    description: 'Optimize operations, build partnerships, and scale your business sustainably.',
    level: 1,
    journeyType: 'start',
    isMainStage: true,
    content: {
      type: 'text',
      data: {
        text: 'With a solid foundation and growing visibility, this stage focuses on scaling your operations, building strategic partnerships, and implementing systems that will support long-term sustainable growth.'
      }
    },
    tags: ['scaling', 'operations', 'partnerships', 'growth'],
    subTiles: [
      {
        id: 'sales-conversions-revenue',
        title: 'Sales, Conversions, and Revenue Optimization',
        description: 'Generate your first sales and build sustainable revenue streams for your startup.',
        content: {
          type: 'text',
          data: {
            text: `**Why sales optimization matters**

Effective sales processes and revenue optimization are critical for startup survival and growth, helping you convert prospects into paying customers and build sustainable income.

**What you'll learn**

• Develop sales processes
• Optimize conversion rates
• Build recurring revenue
• Scale sales operations

## Sales Process Development

**Lead Generation**
• Identify target customers
• Create lead magnets
• Implement lead capture
• Qualify prospects

**Sales Funnel**
• Awareness and interest
• Consideration and evaluation
• Decision and purchase
• Retention and referral

**Sales Techniques**
• Consultative selling
• Objection handling
• Closing techniques
• Follow-up strategies

**AI Prompt:**
"Help me create a sales process for my [business type]. Include lead generation, qualification, and closing strategies."

## Conversion Optimization

**Website Optimization**
• Clear value propositions
• Compelling calls-to-action
• Trust signals and testimonials
• Mobile optimization

**Pricing Strategy**
• Value-based pricing
• Competitive analysis
• Price testing
• Package optimization

**Sales Automation**
• CRM implementation
• Email sequences
• Lead scoring
• Follow-up automation

**AI Prompt:**
"Optimize my sales conversion process for [business type]. Include website improvements, pricing strategy, and automation recommendations."

## Revenue Streams

**Primary Revenue**
• Core product/service sales
• Pricing optimization
• Volume increases
• Market expansion

**Secondary Revenue**
• Upselling and cross-selling
• Subscription services
• Affiliate partnerships
• Licensing opportunities

**Recurring Revenue**
• Subscription models
• Retainer agreements
• Membership programs
• Maintenance contracts

**AI Prompt:**
"Diversify revenue streams for my [business type]. Include primary, secondary, and recurring revenue opportunities."
`
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
          },
          {
            name: 'Pipedrive',
            url: 'https://pipedrive.com',
            description: 'Sales pipeline management',
            type: 'tool'
          }
        ],
        tags: ['sales', 'revenue', 'conversions', 'customer acquisition', 'pricing strategy']
      },
      {
        id: 'operations-productivity',
        title: 'Operations and Productivity',
        description: 'Set up efficient systems and processes to maximize productivity from day one.',
        content: {
          type: 'text',
          data: {
            text: `**Why operations matter**

Establishing efficient operations and productivity systems early helps startups scale effectively and avoid operational chaos as they grow.

**What you'll learn**

• Design efficient workflows
• Implement productivity tools
• Automate repetitive tasks
• Scale operations effectively

## Workflow Design

**Process Mapping**
• Document current processes
• Identify inefficiencies
• Design improved workflows
• Implement standard operating procedures

**Task Management**
• Prioritize tasks effectively
• Delegate responsibilities
• Track progress and deadlines
• Manage team coordination

**Quality Control**
• Establish quality standards
• Implement checkpoints
• Monitor performance metrics
• Continuous improvement

**AI Prompt:**
"Help me design efficient workflows for my [business type]. Include process mapping, task management, and quality control."

## Productivity Tools

**Project Management**
• Task tracking and assignment
• Timeline and milestone management
• Team collaboration
• Progress monitoring

**Communication Tools**
• Team messaging
• Video conferencing
• Document sharing
• Meeting management

**Automation Tools**
• Workflow automation
• Data integration
• Repetitive task automation
• System integrations

**AI Prompt:**
"Recommend productivity tools for my [business type]. Include project management, communication, and automation solutions."

## Scaling Operations

**System Standardization**
• Document all processes
• Create training materials
• Implement quality standards
• Establish performance metrics

**Team Building**
• Hire the right people
• Provide proper training
• Create growth opportunities
• Build company culture

**Technology Integration**
• Choose scalable software
• Implement data systems
• Automate where possible
• Plan for growth

**AI Prompt:**
"Create a scaling plan for my [business type] operations. Include system standardization, team building, and technology integration."
`
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
          },
          {
            name: 'Slack',
            url: 'https://slack.com',
            description: 'Team communication',
            type: 'tool'
          }
        ],
        tags: ['operations', 'productivity', 'systems', 'automation', 'workflow design']
      },
      {
        id: 'networking-partnerships',
        title: 'Networking and Partnerships',
        description: 'Build strategic relationships that accelerate your startup\'s growth and success.',
        content: {
          type: 'text',
          data: {
            text: `**Why networking matters**

Strategic networking and partnerships are crucial for startups to access resources, customers, mentorship, and growth opportunities that would be difficult to achieve alone.

**What you'll learn**

• Build professional networks
• Develop strategic partnerships
• Leverage mentorship opportunities
• Create business development relationships

## Professional Networking

**Networking Strategy**
• Identify key contacts
• Attend relevant events
• Join professional organizations
• Build online presence

**Relationship Building**
• Follow up consistently
• Provide value to others
• Maintain long-term connections
• Leverage mutual interests

**Online Networking**
• LinkedIn optimization
• Industry forums and groups
• Social media engagement
• Content sharing and interaction

**AI Prompt:**
"Create a networking strategy for my [business type]. Include in-person and online networking tactics."

## Strategic Partnerships

**Partnership Types**
• Supplier partnerships
• Distribution partnerships
• Marketing partnerships
• Technology partnerships

**Partnership Development**
• Identify potential partners
• Evaluate partnership fit
• Negotiate terms and agreements
• Manage partnership relationships

**Partnership Benefits**
• Access to new markets
• Shared resources and costs
• Increased credibility
• Accelerated growth

**AI Prompt:**
"Identify strategic partnership opportunities for my [business type]. Include partnership types, evaluation criteria, and negotiation strategies."

## Mentorship and Advisory

**Finding Mentors**
• Industry experts
• Successful entrepreneurs
• Professional advisors
• Peer networks

**Mentorship Benefits**
• Guidance and advice
• Industry insights
• Network access
• Accountability and support

**Advisory Boards**
• Formal advisory structure
• Regular meetings and updates
• Strategic guidance
• Network expansion

**AI Prompt:**
"Help me build a mentorship and advisory network for my [business type]. Include finding mentors, structuring relationships, and maximizing value."
`
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
          },
          {
            name: 'Eventbrite',
            url: 'https://eventbrite.com',
            description: 'Find and create networking events',
            type: 'tool'
          }
        ],
        tags: ['networking', 'partnerships', 'mentorship', 'business development', 'relationship building']
      },
      {
        id: 'growth-scaling',
        title: 'Growth and Scaling (Including Testing and Experimentation)',
        description: 'Plan and execute sustainable growth strategies with systematic testing and validation.',
        content: {
          type: 'text',
          data: {
            text: `**Why growth planning matters**

Strategic growth and scaling require careful planning, systematic testing, and data-driven decision making to ensure your startup can expand sustainably without losing quality or focus.

**What you'll learn**

• Develop growth strategies
• Implement testing frameworks
• Measure and analyze performance
• Scale operations effectively

## Growth Strategy Development

**Growth Planning**
• Set growth objectives
• Identify growth levers
• Plan resource allocation
• Create growth timelines

**Market Expansion**
• New market opportunities
• Geographic expansion
• Product line extensions
• Customer segment expansion

**Growth Metrics**
• Key performance indicators
• Growth rate tracking
• Customer acquisition costs
• Lifetime value analysis

**AI Prompt:**
"Create a growth strategy for my [business type]. Include growth objectives, market expansion plans, and key metrics."

## Testing and Experimentation

**A/B Testing**
• Test different approaches
• Measure results objectively
• Make data-driven decisions
• Iterate and improve

**Growth Experiments**
• Test new features
• Experiment with pricing
• Try different marketing channels
• Validate new ideas

**Data Analysis**
• Collect relevant data
• Analyze performance trends
• Identify opportunities
• Make informed decisions

**AI Prompt:**
"Design a testing framework for my [business type]. Include A/B testing, growth experiments, and data analysis methods."

## Scaling Operations

**System Scaling**
• Automate processes
• Implement scalable technology
• Standardize operations
• Build efficient systems

**Team Scaling**
• Hire strategically
• Develop team capabilities
• Create scalable culture
• Manage growth challenges

**Financial Scaling**
• Manage cash flow during growth
• Plan for increased expenses
• Secure growth funding
• Optimize financial performance

**AI Prompt:**
"Create a scaling plan for my [business type]. Include system scaling, team growth, and financial management strategies."
`
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
          },
          {
            name: 'Hotjar',
            url: 'https://hotjar.com',
            description: 'User behavior analysis',
            type: 'tool'
          }
        ],
        tags: ['growth hacking', 'scaling', 'experimentation', 'metrics', 'A/B testing']
      }
    ]
  }
];