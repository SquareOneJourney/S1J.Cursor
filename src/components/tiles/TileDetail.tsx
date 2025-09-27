import { useState } from 'react';
import { ArrowLeft, Bookmark, ExternalLink, Play, FileText, ArrowRight } from 'lucide-react';
import { SaveToWorksheetModal } from '../worksheet/SaveToWorksheetModal';
import { MarketingResearchWithoutAI } from '../pages/ArticlePage';
import { tiles } from '../../data/tiles';
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
        const renderMarkdownContent = (text: string) => {
          // Split by double newlines to get sections
          const sections = text.split('\n\n');
          
          return sections.map((section, index) => {
            // Handle main title
            if (section.startsWith('# ')) {
              return (
                <h1 key={index} className="text-3xl font-bold text-gray-900 mb-8 text-center font-heading">
                  {section.replace('# ', '')}
                </h1>
              );
            }
            
            // Handle section headers (numbered examples)
            if (section.startsWith('## ')) {
              return (
                <div key={index} className="mt-8 mb-6 first:mt-0">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2 font-heading">
                    {section.replace('## ', '')}
                  </h2>
                </div>
              );
            }
            
            // Handle links
            if (section.includes('[Link to') && section.includes('](https://')) {
              const linkMatch = section.match(/\[([^\]]+)\]\(([^)]+)\)/);
              if (linkMatch) {
                return (
                  <div key={index} className="mb-4">
                    <a 
                      href={linkMatch[2]} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-heading"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      {linkMatch[1]}
                    </a>
                  </div>
                );
              }
            }
            
            // Handle "Once image is uploaded..." instruction
            if (section.startsWith('Once image is uploaded')) {
              return (
                <div key={index} className="mb-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <p className="text-blue-800 font-semibold font-heading">
                    {section}
                  </p>
                </div>
              );
            }
            
            // Handle bold text (Example: labels)
            if (section.includes('**Example:**')) {
              const parts = section.split(/(\*\*.*?\*\*)/g);
              return (
                <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-300">
                  <div className="text-gray-800 leading-relaxed font-serif">
                    {parts.map((part, partIndex) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return (
                          <span key={partIndex} className="font-bold text-blue-700 text-lg font-heading">
                            {part.slice(2, -2)}
                          </span>
                        );
                      }
                      return <span key={partIndex}>{part}</span>;
                    })}
                  </div>
                </div>
              );
            }
            
            // Handle long prompt text (copy-paste prompts)
            if (section.length > 100 && !section.startsWith('#') && !section.startsWith('[') && !section.startsWith('Once')) {
              return (
                <div key={index} className="mb-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <p className="text-green-800 font-serif text-sm leading-relaxed">
                    <strong className="font-heading">Copy and paste this prompt:</strong><br/><br/>
                    {section}
                  </p>
                </div>
              );
            }
            
            // Regular paragraphs
            return (
              <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg font-serif">
                {section}
              </p>
            );
          });
        };

        return (
          <div className="prose max-w-none">
            {renderMarkdownContent(tile.content.data?.text || 'Detailed content and instructions would be displayed here.')}
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
              </div>
              <p className="text-xl text-gray-600 mb-4">{tile.description}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
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

        {/* Child Tiles */}
        {tile.children && tile.children.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Explore More</h2>
            <div className="grid gap-3">
              {tile.children.map((childTileId) => {
                const childTile = tiles.find(t => t.id === childTileId);
                if (!childTile) return null;
                return (
                  <div key={childTileId} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{childTile.title}</h3>
                      <p className="text-sm text-gray-600">{childTile.description}</p>
                    </div>
                    <button
                      onClick={() => onNavigateToTile(childTileId)}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Explore
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                );
              })}
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
          journeyType: tile.journeyType
        }}
      />
    </>
  );
}
