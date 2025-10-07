export interface ContentData {
  text?: string;
  title?: string;
  url?: string;
  description?: string;
}

export interface SubTile {
  id: string;
  title: string;
  description: string;
  content: {
    type: 'text' | 'video' | 'interactive';
    data: ContentData;
  };
  links?: Array<{
    name: string;
    url: string;
    description: string;
    type: 'article' | 'video' | 'tool' | 'guide';
  }>;
  tags?: string[];
}

export interface Tile {
  id: string;
  title: string;
  description: string;
  level: number;
  journeyType: 'start'; // Removed 'explore' since we're removing that section
  isMainStage?: boolean; // Indicates if this is a main stage tile
  parentId?: string; // For nested tiles
  children?: string[]; // IDs of child tiles
  subTiles?: SubTile[]; // New sub-tiles structure
  content: {
    type: 'text' | 'video' | 'interactive';
    data: ContentData;
  };
  links?: Array<{
    name: string;
    url: string;
    description: string;
    type: 'article' | 'video' | 'tool' | 'guide';
  }>;
  relatedTiles?: string[]; // IDs of related tiles
  tags: string[];
}

export interface TileCategory {
  id: string;
  name: string;
  description: string;
  tiles: Tile[];
  level: number;
  journeyType: 'start'; // Removed 'explore' since we're removing that section
}
