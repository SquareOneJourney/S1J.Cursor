import type { ExploreData, StartData, IntegrateData, JourneyResult } from '../types/journeys';

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

export function generateIntegrateResult(data: IntegrateData): JourneyResult {
  const interventions = {
    'Customer messages': [
      { name: 'AI Chatbot Integration', impact: 'High', effort: 'Medium' },
      { name: 'Email Auto-responses', impact: 'Medium', effort: 'Low' },
      { name: 'Sentiment Analysis Dashboard', impact: 'Medium', effort: 'High' }
    ],
    'Marketing': [
      { name: 'Content Generation AI', impact: 'High', effort: 'Low' },
      { name: 'Social Media Scheduler', impact: 'Medium', effort: 'Low' },
      { name: 'Ad Performance Optimization', impact: 'High', effort: 'Medium' }
    ],
    'Bookkeeping': [
      { name: 'Receipt Scanning & Categorization', impact: 'High', effort: 'Low' },
      { name: 'Expense Prediction & Budgeting', impact: 'Medium', effort: 'Medium' },
      { name: 'Tax Preparation Automation', impact: 'High', effort: 'High' }
    ],
    'Scheduling': [
      { name: 'Smart Calendar Booking', impact: 'High', effort: 'Low' },
      { name: 'Resource Optimization', impact: 'Medium', effort: 'Medium' },
      { name: 'Demand Forecasting', impact: 'Medium', effort: 'High' }
    ],
    'Inventory': [
      { name: 'Stock Level Prediction', impact: 'High', effort: 'Medium' },
      { name: 'Automated Reordering', impact: 'Medium', effort: 'Low' },
      { name: 'Demand Pattern Analysis', impact: 'Medium', effort: 'High' }
    ]
  };

  const areaInterventions = interventions[data.improvementArea as keyof typeof interventions] || [];
  
  return {
    title: `AI Integration Plan for ${data.improvementArea}`,
    summary: `Identified 3 high-impact AI interventions to solve your ${data.painPoint} challenge.`,
    keyTakeaways: areaInterventions.map(i => `${i.name} (Impact: ${i.impact}, Effort: ${i.effort})`),
    nextSteps: [
      `Start with ${areaInterventions[0]?.name || 'the highest impact, lowest effort solution'}`,
      'Test with a small subset of your operations',
      'Measure results for 2 weeks before expanding',
      'Train your team on the new AI tools'
    ],
    resources: [
      { name: 'Zapier', url: 'https://zapier.com', description: 'Automation workflows' },
      { name: 'HubSpot', url: 'https://hubspot.com', description: 'CRM with AI features' },
      { name: 'Monday.com', url: 'https://monday.com', description: 'Project management with AI' }
    ]
  };
}