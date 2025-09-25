import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { TileCard } from '../tiles/TileCard';
import { TileDetail } from '../tiles/TileDetail';
import { useWorksheet } from '../../contexts/WorksheetContext';
import { tiles, tileCategories } from '../../data/tiles';
import type { Tile } from '../../types/tiles';

export function TileJourney() {
  const navigate = useNavigate();
  const location = useLocation();
  const { addItem } = useWorksheet();
  const [selectedTile, setSelectedTile] = useState<Tile | null>(null);

  // Get journey type from the current pathname
  const journeyType = location.pathname.replace('/', '') as 'explore' | 'start';

  if (!['explore', 'start'].includes(journeyType)) {
    navigate('/');
    return null;
  }

  const journeyTiles = tiles.filter(tile => tile.journeyType === journeyType);
  const journeyCategories = tileCategories.filter(cat => cat.journeyType === journeyType);

  const handleSaveToWorksheet = (tile: Tile, notes: string) => {
    addItem({
      title: tile.title,
      description: tile.description,
      type: 'tile',
      journeyType: tile.journeyType,
      level: tile.level,
      notes,
      links: tile.links
    });
  };

  const handleNavigateToTile = (tileId: string) => {
    const tile = tiles.find(t => t.id === tileId);
    if (tile) {
      setSelectedTile(tile);
    }
  };

  const getJourneyTitle = (type: string) => {
    switch (type) {
      case 'explore': return 'Explore AI';
      case 'start': return 'Start Your Business';
      default: return 'Journey';
    }
  };

  if (selectedTile) {
    return (
      <TileDetail
        tile={selectedTile}
        onBack={() => setSelectedTile(null)}
        onNavigateToTile={handleNavigateToTile}
        onSaveToWorksheet={handleSaveToWorksheet}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </button>
          
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {getJourneyTitle(journeyType)}
            </h1>
            <p className="text-xl text-gray-600">
              {journeyCategories[0]?.description || 'Explore interactive tiles and build your AI knowledge.'}
            </p>
          </div>
        </div>

        {/* Tiles List */}
        <div className="space-y-4">
          {journeyTiles.map((tile) => (
            <TileCard
              key={tile.id}
              tile={tile}
              onNavigate={handleNavigateToTile}
              onSaveToWorksheet={handleSaveToWorksheet}
            />
          ))}
        </div>
      </div>
    </div>
  );
}