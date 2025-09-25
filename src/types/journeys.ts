export interface ExploreData {
  industry: string;
  helpArea: string;
}

export interface StartData {
  location: string;
  skills: string;
  hoursPerWeek: string;
  businessType: string;
}


export interface JourneyResult {
  title: string;
  summary: string;
  keyTakeaways: string[];
  nextSteps: string[];
  resources: Array<{
    name: string;
    url: string;
    description: string;
  }>;
}