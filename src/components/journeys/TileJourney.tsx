import { useState, useEffect } from 'react';
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
  const [currentStage, setCurrentStage] = useState<string | null>(null);

  // Get journey type from the current pathname
  const journeyType = location.pathname.replace('/', '') as 'start';

  if (journeyType !== 'start') {
    navigate('/');
    return null;
  }

  // Handle stage and tile parameters from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const stageParam = urlParams.get('stage');
    const tileParam = urlParams.get('tile');
    
    if (stageParam) {
      // Map the stage parameter to the actual tile ID
      const stageMapping: { [key: string]: string } = {
        'stage-1': 'stage-1-build-foundation',
        'stage-2': 'stage-2-grow-visibility', 
        'stage-3': 'stage-3-scale-sustain'
      };
      
      const tileId = stageMapping[stageParam];
      if (tileId) {
        setCurrentStage(tileId);
        
        // If there's also a tile parameter, navigate directly to that sub-tile
        if (tileParam) {
          const currentStageTile = tiles.find(t => t.id === tileId);
          if (currentStageTile && currentStageTile.subTiles) {
            const subTile = currentStageTile.subTiles.find(st => st.id === tileParam);
            if (subTile) {
              // Convert sub-tile to Tile format and show its detail
              const tileToShow: Tile = {
                ...subTile,
                level: 2,
                journeyType: 'start',
                isMainStage: false,
                tags: subTile.tags || []
              };
              setSelectedTile(tileToShow);
              return;
            }
          }
        }
        
        setSelectedTile(null);
      }
    }
  }, [location.search]);

  // Get main stage tiles (isMainStage: true)
  const mainStageTiles = tiles.filter(tile => tile.journeyType === journeyType && tile.isMainStage);
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
    // First check if it's a main stage tile
    const mainStageTile = tiles.find(t => t.id === tileId);
    if (mainStageTile && mainStageTile.isMainStage) {
      // If it's a main stage tile, show its sub-tiles
      setCurrentStage(tileId);
      setSelectedTile(null);
      return;
    }

    // If we're in a stage view, check if it's a sub-tile
    if (currentStage) {
      const currentStageTile = tiles.find(t => t.id === currentStage);
      if (currentStageTile && currentStageTile.subTiles) {
        const subTile = currentStageTile.subTiles.find(st => st.id === tileId);
        if (subTile) {
          // Convert sub-tile to Tile format and show its detail
          const tileToShow: Tile = {
            ...subTile,
            level: 2,
            journeyType: 'start',
            isMainStage: false,
            tags: subTile.tags || []
          };
          setSelectedTile(tileToShow);
          return;
        }
      }
    }

    // Fallback: try to find in main tiles array
    const tile = tiles.find(t => t.id === tileId);
    if (tile) {
      setSelectedTile(tile);
    }
  };

  const handleBackToStages = () => {
    setCurrentStage(null);
    setSelectedTile(null);
  };

  const getJourneyTitle = (type: string) => {
    switch (type) {
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

  // Get current stage tiles if we're viewing a specific stage
  const currentStageTile = currentStage ? tiles.find(t => t.id === currentStage) : null;
  const displayTiles = currentStageTile ? (currentStageTile.subTiles || []).map(subTile => ({
    ...subTile,
    level: 2,
    journeyType: 'start' as const,
    isMainStage: false,
    tags: subTile.tags || []
  })) : mainStageTiles;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="mb-8">
          <button
            onClick={currentStage ? handleBackToStages : () => navigate('/')}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            {currentStage ? 'Back to Stages' : 'Back to Home'}
          </button>
          
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {currentStageTile ? currentStageTile.title : getJourneyTitle(journeyType)}
            </h1>
            <p className="text-xl text-gray-600">
              {currentStageTile ? currentStageTile.description : (journeyCategories[0]?.description || 'Follow our structured 3-stage approach to build, grow, and scale your business.')}
            </p>
          </div>
        </div>

        {/* Tiles List */}
        <div className="space-y-4">
          {displayTiles.map((tile) => (
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