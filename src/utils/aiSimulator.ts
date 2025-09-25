import type { ExploreData, StartData, JourneyResult } from '../types/journeys';

export function generateExploreResult(data: ExploreData): JourneyResult {
  const helpAreaDemos = {
    'Marketing copy': [
      'AI-generated headlines that convert 40% better',
      'Email subject lines with 25% higher open rates',
      'Social media captions that drive engagement'
    ],
    'Customer messages': [
      'Smart chatbot responses for common questions',
      'Personalized follow-up email sequences',
      'Customer service templates that build trust'
    ],
    'Pricing': [
      'Dynamic pricing based on demand patterns',
      'Competitor price monitoring and alerts',
      'Value-based pricing calculators for services'
    ],
    'Scheduling': [
      'Automated appointment booking and reminders',
      'Smart calendar optimization for productivity',
      'Resource allocation based on demand forecasting'
    ]
  };

  const demos = helpAreaDemos[data.helpArea as keyof typeof helpAreaDemos] || [];
  
  return {
    title: `AI Exploration for ${data.industry}`,
    summary: `Discovered 3 quick AI wins for your ${data.industry} business focused on ${data.helpArea.toLowerCase()}.`,
    keyTakeaways: demos,
    nextSteps: [
      'Try one AI demo this week',
      'Document what works best for your audience',
      'Gradually expand to other areas'
    ],
    resources: [
      { name: 'Canva AI', url: 'https://canva.com', description: 'AI-powered design tools' },
      { name: 'ChatGPT', url: 'https://chat.openai.com', description: 'AI writing assistant' },
      { name: 'Calendly', url: 'https://calendly.com', description: 'Smart scheduling tool' }
    ]
  };
}

export function generateStartResult(data: StartData): JourneyResult {
  const businessIdeas = {
    'Physical': `Local service business in ${data.location}`,
    'Digital': `Online consulting or digital service`,
    'Both': `Hybrid business with local and online presence`
  };

  const idea = businessIdeas[data.businessType as keyof typeof businessIdeas];
  
  return {
    title: 'Your Business Launch Plan',
    summary: `Generated a tailored business idea for ${data.location} with ${data.hoursPerWeek} hours/week commitment.`,
    keyTakeaways: [
      `Business Idea: ${idea}`,
      `USP: Leverage your ${data.skills} skills with AI automation`,
      `Test Offer: Start with a simple service to validate demand`
    ],
    nextSteps: [
      'Research 3 competitors in your area',
      'Create a simple landing page or social media presence',
      'Offer your service to 5 potential customers for feedback',
      'Set up basic bookkeeping and legal structure'
    ],
    resources: [
      { name: 'Wix', url: 'https://wix.com', description: 'Quick website builder' },
      { name: 'Square', url: 'https://square.com', description: 'Payment processing' },
      { name: 'QuickBooks', url: 'https://quickbooks.com', description: 'Simple bookkeeping' }
    ]
  };
}
