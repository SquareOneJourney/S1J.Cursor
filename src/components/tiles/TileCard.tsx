import { useState } from 'react';
import { ArrowRight, Clock, Bookmark, ExternalLink, Play, FileText } from 'lucide-react';
import { SaveToWorksheetModal } from '../worksheet/SaveToWorksheetModal';
import type { Tile } from '../../types/tiles';

interface TileCardProps {
  tile: Tile;
  onNavigate: (tileId: string) => void;
  onSaveToWorksheet: (tile: Tile, notes: string) => void;
}

export function TileCard({ tile, onNavigate, onSaveToWorksheet }: TileCardProps) {
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getJourneyTypeColor = (journeyType: string) => {
    switch (journeyType) {
      case 'explore': return 'bg-blue-100 text-blue-800';
      case 'start': return 'bg-green-100 text-green-800';
      case 'integrate': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSaveToWorksheet = (notes: string) => {
    onSaveToWorksheet(tile, notes);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{tile.title}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${getJourneyTypeColor(tile.journeyType)}`}>
                Level {tile.level}
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{tile.description}</p>
          </div>
        </div>

        {/* Tags and Metadata */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(tile.difficulty)}`}>
            {tile.difficulty}
          </span>
          <div className="flex items-center text-xs text-gray-500">
            <Clock size={12} className="mr-1" />
            {tile.estimatedTime}
          </div>
          {tile.content.type === 'video' && (
            <div className="flex items-center text-xs text-gray-500">
              <Play size={12} className="mr-1" />
              Video
            </div>
          )}
          {tile.content.type === 'interactive' && (
            <div className="flex items-center text-xs text-gray-500">
              <FileText size={12} className="mr-1" />
              Interactive
            </div>
          )}
        </div>

        {/* Tags */}
        {tile.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {tile.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
            {tile.tags.length > 3 && (
              <span className="text-xs text-gray-500">+{tile.tags.length - 3} more</span>
            )}
          </div>
        )}

        {/* Links Preview */}
        {tile.links.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Resources:</h4>
            <div className="space-y-1">
              {tile.links.slice(0, 2).map((link, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <ExternalLink size={12} className="mr-2 text-gray-400" />
                  <span>{link.name}</span>
                </div>
              ))}
              {tile.links.length > 2 && (
                <div className="text-xs text-gray-500">
                  +{tile.links.length - 2} more resources
                </div>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <button
            onClick={() => setIsSaveModalOpen(true)}
            className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Bookmark size={16} className="mr-1" />
            Save to Worksheet
          </button>
          
          <button
            onClick={() => onNavigate(tile.id)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Explore
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>

      <SaveToWorksheetModal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        onSave={handleSaveToWorksheet}
        item={{
          title: tile.title,
          description: tile.description,
          type: 'tile',
          journeyType: tile.journeyType,
          level: tile.level
        }}
      />
    </>
  );
}
