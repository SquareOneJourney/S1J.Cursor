export interface SubTile {
  id: string;
  title: string;
  description: string;
  content: {
    type: 'text' | 'video' | 'interactive';
    data: any;
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
  journeyType: 'explore' | 'start';
  parentId?: string; // For nested tiles
  children?: string[]; // IDs of child tiles
  subTiles?: SubTile[]; // New sub-tiles structure
  content: {
    type: 'text' | 'video' | 'interactive';
    data: any;
  };
  links: Array<{
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
  journeyType: 'explore' | 'start';
}
