export interface WorksheetItem {
  id: string;
  title: string;
  description: string;
  type: 'tile' | 'guide' | 'resource';
  journeyType?: 'start';
  level?: number;
  notes?: string;
  savedAt: Date;
  links?: Array<{
    name: string;
    url: string;
    description: string;
  }>;
}

export interface Worksheet {
  id: string;
  userId?: string; // For logged-in users
  items: WorksheetItem[];
  createdAt: Date;
  updatedAt: Date;
}
