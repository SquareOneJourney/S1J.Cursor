import { useState } from 'react';
import { ArrowLeft, Clock, Bookmark, ExternalLink, Play, FileText, ArrowRight } from 'lucide-react';
import { SaveToWorksheetModal } from '../worksheet/SaveToWorksheetModal';
import { MarketingResearchWithoutAI } from '../pages/ArticlePage';
import type { Tile } from '../../types/tiles';

interface TileDetailProps {
  tile: Tile;
  onBack: () => void;
  onNavigateToTile: (tileId: string) => void;
  onSaveToWorksheet: (tile: Tile, notes: string) => void;
}

export function TileDetail({ tile, onBack, onNavigateToTile, onSaveToWorksheet }: TileDetailProps) {
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  // Special handling for Marketing Research Without AI tile
  if (tile.id === 'marketing-research-without-ai') {
    return <MarketingResearchWithoutAI onBack={onBack} />;
  }

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
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSaveToWorksheet = (notes: string) => {
    onSaveToWorksheet(tile, notes);
  };

  const renderContent = () => {
    switch (tile.content.type) {
      case 'video':
        return (
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <Play size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600">Video content would be embedded here</p>
            <p className="text-sm text-gray-500 mt-2">
              Video: {tile.content.data?.title || 'Walkthrough Guide'}
            </p>
          </div>
        );
      case 'interactive':
        return (
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <FileText size={48} className="mx-auto text-blue-400 mb-4" />
            <p className="text-blue-700">Interactive content would be embedded here</p>
            <p className="text-sm text-blue-600 mt-2">
              Interactive: {tile.content.data?.title || 'Hands-on Exercise'}
            </p>
          </div>
        );
      default:
        return (
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {tile.content.data?.text || 'Detailed content and instructions would be displayed here.'}
            </p>
          </div>
        );
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Journey
          </button>
          
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <h1 className="text-3xl font-bold text-gray-900">{tile.title}</h1>
                <span className={`text-sm px-3 py-1 rounded-full ${getJourneyTypeColor(tile.journeyType)}`}>
                  Level {tile.level}
                </span>
              </div>
              <p className="text-xl text-gray-600 mb-4">{tile.description}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {tile.estimatedTime}
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(tile.difficulty)}`}>
                  {tile.difficulty}
                </span>
                {tile.content.type === 'video' && (
                  <div className="flex items-center">
                    <Play size={16} className="mr-1" />
                    Video Guide
                  </div>
                )}
                {tile.content.type === 'interactive' && (
                  <div className="flex items-center">
                    <FileText size={16} className="mr-1" />
                    Interactive
                  </div>
                )}
              </div>
            </div>
            
            <button
              onClick={() => setIsSaveModalOpen(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ml-4"
            >
              <Bookmark size={16} className="mr-2" />
              Save to Worksheet
            </button>
          </div>
        </div>

        {/* Tags */}
        {tile.tags.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {tile.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
          {renderContent()}
        </div>

        {/* Resources */}
        {tile.links.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Resources & Links</h2>
            <div className="grid gap-4">
              {tile.links.map((link, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    {link.type === 'video' && <Play size={20} className="text-red-500" />}
                    {link.type === 'article' && <FileText size={20} className="text-blue-500" />}
                    {link.type === 'tool' && <ExternalLink size={20} className="text-green-500" />}
                    {link.type === 'guide' && <FileText size={20} className="text-purple-500" />}
                  </div>
                  <div className="flex-1">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {link.name}
                    </a>
                    <p className="text-gray-600 mt-1">{link.description}</p>
                    <div className="flex items-center mt-2">
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                        {link.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Tiles */}
        {tile.relatedTiles && tile.relatedTiles.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Tiles</h2>
            <div className="grid gap-3">
              {tile.relatedTiles.map((relatedTileId, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">Related Tile {index + 1}</h3>
                    <p className="text-sm text-gray-600">Explore this related content</p>
                  </div>
                  <button
                    onClick={() => onNavigateToTile(relatedTileId)}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Explore
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
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
