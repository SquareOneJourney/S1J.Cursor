import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Grid, List, Filter } from 'lucide-react';
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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  // Get journey type from the current pathname
  const journeyType = location.pathname.replace('/', '') as 'explore' | 'start' | 'integrate';

  if (!['explore', 'start', 'integrate'].includes(journeyType)) {
    navigate('/');
    return null;
  }

  const journeyTiles = tiles.filter(tile => tile.journeyType === journeyType);
  const journeyCategories = tileCategories.filter(cat => cat.journeyType === journeyType);
  const levels = Array.from(new Set(journeyTiles.map(tile => tile.level))).sort();

  const filteredTiles = selectedLevel 
    ? journeyTiles.filter(tile => tile.level === selectedLevel)
    : journeyTiles;

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
      case 'integrate': return 'Integrate AI';
      default: return 'Journey';
    }
  };

  const getJourneyColor = (type: string) => {
    switch (type) {
      case 'explore': return 'blue';
      case 'start': return 'green';
      case 'integrate': return 'orange';
      default: return 'gray';
    }
  };

  const color = getJourneyColor(journeyType);

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
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {getJourneyTitle(journeyType)}
              </h1>
              <p className="text-xl text-gray-600">
                {journeyCategories[0]?.description || 'Explore interactive tiles and build your AI knowledge.'}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-white rounded-lg border border-gray-200 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Level Filter */}
        <div className="mb-8">
          <div className="flex items-center space-x-4">
            <Filter size={20} className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filter by level:</span>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedLevel(null)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedLevel === null
                    ? `bg-${color}-100 text-${color}-800`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Levels
              </button>
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedLevel === level
                      ? `bg-${color}-100 text-${color}-800`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Level {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h2>
          <div className="grid grid-cols-3 gap-4">
            {levels.map((level) => {
              const levelTiles = journeyTiles.filter(tile => tile.level === level);
              return (
                <div key={level} className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    level === 1 ? 'bg-green-100 text-green-600' :
                    level === 2 ? 'bg-yellow-100 text-yellow-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    <span className="text-xl font-bold">{level}</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900">Level {level}</div>
                  <div className="text-xs text-gray-500">{levelTiles.length} tiles</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tiles Grid/List */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
        }`}>
          {filteredTiles.map((tile) => (
            <TileCard
              key={tile.id}
              tile={tile}
              onNavigate={handleNavigateToTile}
              onSaveToWorksheet={handleSaveToWorksheet}
            />
          ))}
        </div>

        {filteredTiles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500">
              No tiles found for the selected level. Try selecting a different level.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
