import { useState } from 'react';
import { ArrowLeft, Bookmark, ExternalLink, Play, FileText, ArrowRight, ChevronDown, ChevronRight, Copy, Check } from 'lucide-react';
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
  const [expandedSubTiles, setExpandedSubTiles] = useState<Set<string>>(new Set());
  const [copiedPrompts, setCopiedPrompts] = useState<Set<string>>(new Set());

  // Special handling for Marketing Research Without AI tile
  if (tile.id === 'marketing-research-without-ai') {
    return <MarketingResearchWithoutAI onBack={onBack} />;
  }



  const handleSaveToWorksheet = (notes: string) => {
    onSaveToWorksheet(tile, notes);
  };

  const toggleSubTile = (subTileId: string) => {
    const newExpanded = new Set(expandedSubTiles);
    if (newExpanded.has(subTileId)) {
      newExpanded.delete(subTileId);
    } else {
      newExpanded.add(subTileId);
    }
    setExpandedSubTiles(newExpanded);
  };

  const copyToClipboard = async (text: string, promptId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPrompts(prev => new Set(prev).add(promptId));
      setTimeout(() => {
        setCopiedPrompts(prev => {
          const newSet = new Set(prev);
          newSet.delete(promptId);
          return newSet;
        });
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const renderSubTileMarkdownContent = (text: string, subTileId: string) => {
    // Split by double newlines to get sections
    const sections = text.split('\n\n');
    
    return sections.map((section, index) => {
      const sectionKey = `${subTileId}-section-${index}`;
      
      // Handle bold headings (like **Why it matters**)
      if (section.match(/^\*\*[^*]+\*\*$/)) {
        const headingText = section.replace(/^\*\*|\*\*$/g, '');
        return (
          <h3 key={sectionKey} className="text-xl font-bold text-gray-900 mb-4 mt-6 first:mt-0 border-b-2 border-blue-200 pb-2">
            {headingText}
          </h3>
        );
      }
      
      // Handle Next sections (👉 **Next:**)
      if (section.includes('👉 **Next:**')) {
        const parts = section.split(/(\*\*.*?\*\*)/g);
        return (
          <div key={sectionKey} className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-lg">
            <div className="flex items-start space-x-2">
              <span className="text-2xl">👉</span>
              <div className="text-blue-800 font-medium">
                {parts.map((part, partIndex) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return (
                      <span key={partIndex} className="font-bold text-blue-900">
                        {part.slice(2, -2)}
                      </span>
                    );
                  }
                  return <span key={partIndex}>{part}</span>;
                })}
              </div>
            </div>
          </div>
        );
      }
      
      // Handle AI prompts in italics (like *"Summarize what this Google Trends chart means..."*)
      if (section.match(/\*"[^"]*"\*/)) {
        const promptMatch = section.match(/\*"([^"]*)"\*/);
        if (promptMatch) {
          const promptText = promptMatch[1];
          const promptId = `${subTileId}-prompt-${index}`;
          const isCopied = copiedPrompts.has(promptId);
          
          return (
            <div key={sectionKey} className="mt-4 mb-4">
              <div className="bg-gray-900 rounded-lg p-4 relative">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">AI Prompt</span>
                  <button
                    onClick={() => copyToClipboard(promptText, promptId)}
                    className="flex items-center space-x-1 px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs text-gray-300 hover:text-white transition-colors"
                  >
                    {isCopied ? (
                      <>
                        <Check size={12} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <code className="text-sm text-green-300 font-mono leading-relaxed block">
                  "{promptText}"
                </code>
              </div>
            </div>
          );
        }
      }
      
      // Handle numbered lists (1. 2. 3.)
      if (section.match(/^\d+\./m)) {
        const lines = section.split('\n');
        const listItems = [];
        let currentItem = '';
        
        for (const line of lines) {
          if (line.match(/^\d+\./)) {
            if (currentItem) {
              listItems.push(currentItem.trim());
            }
            currentItem = line.replace(/^\d+\.\s*/, '');
          } else if (currentItem) {
            currentItem += ' ' + line;
          }
        }
        if (currentItem) {
          listItems.push(currentItem.trim());
        }
        
        return (
          <ol key={sectionKey} className="list-decimal list-inside space-y-2 mb-4 ml-4">
            {listItems.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-700 leading-relaxed">
                {item}
              </li>
            ))}
          </ol>
        );
      }
      
      // Handle bullet points (•)
      if (section.includes('•')) {
        const lines = section.split('\n').filter(line => line.trim());
        const bulletItems = lines.filter(line => line.includes('•'));
        
        if (bulletItems.length > 0) {
          return (
            <ul key={sectionKey} className="list-none space-y-2 mb-4 ml-4">
              {bulletItems.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start space-x-2 text-gray-700 leading-relaxed">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>{item.replace('•', '').trim()}</span>
                </li>
              ))}
            </ul>
          );
        }
      }
      
      // Handle examples (indented sections with subtle background)
      if (section.toLowerCase().includes('example:') || section.match(/^[A-Z][^.]*\s(example|Example)/)) {
        return (
          <div key={sectionKey} className="mb-4 p-4 bg-gray-50 border-l-4 border-gray-300 rounded-r-lg">
            <div className="text-gray-800 leading-relaxed">
              <span className="font-semibold text-gray-900">Example:</span>{' '}
              {section.replace(/^.*?example:\s*/i, '')}
            </div>
          </div>
        );
      }
      
      // Handle bold text within regular paragraphs
      if (section.includes('**') && !section.match(/^\*\*[^*]+\*\*$/)) {
        const parts = section.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={sectionKey} className="text-gray-700 leading-relaxed mb-4">
            {parts.map((part, partIndex) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <span key={partIndex} className="font-bold text-gray-900">
                    {part.slice(2, -2)}
                  </span>
                );
              }
              return <span key={partIndex}>{part}</span>;
            })}
          </p>
        );
      }
      
      // Regular paragraphs
      if (section.trim()) {
        return (
          <p key={sectionKey} className="text-gray-700 leading-relaxed mb-4">
            {section}
          </p>
        );
      }
      
      return null;
    }).filter(Boolean);
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
            
            // Handle long prompt text (copy-paste prompts) - only if it contains specific prompt indicators
            if (section.length > 100 && !section.startsWith('#') && !section.startsWith('[') && !section.startsWith('Once') && 
                (section.includes('prompt:') || section.includes('ChatGPT') || section.includes('Claude') || 
                 section.includes('Copy and paste this prompt:') ||
                 (section.match(/^(Generate|Create|Write|Analyze|Summarize|Tell me|What|How|Why|Can you)/i) && 
                  (section.includes('AI') || section.includes('prompt') || section.includes('ChatGPT') || section.includes('Claude'))))) {
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

        {/* Sub-Tiles Section */}
        {tile.subTiles && tile.subTiles.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Explore This Topic</h2>
            <div className="space-y-4">
              {tile.subTiles.map((subTile, index) => (
                <div key={subTile.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Sub-tile header */}
                  <button
                    onClick={() => toggleSubTile(subTile.id)}
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-150 transition-colors flex items-center justify-between text-left"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded-full min-w-[2rem] text-center">
                          {index + 1}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900">{subTile.title}</h3>
                      </div>
                      <p className="text-gray-600 mt-2 ml-11">{subTile.description}</p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {expandedSubTiles.has(subTile.id) ? (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </button>
                  
                  {/* Sub-tile content */}
                  {expandedSubTiles.has(subTile.id) && (
                    <div className="px-6 py-6 bg-white border-t border-gray-200">
                      <div className="prose max-w-none">
                        <div className="text-gray-700 leading-relaxed">
                          {renderSubTileMarkdownContent(subTile.content.data?.text || 'Content for this section.', subTile.id)}
                        </div>
                      </div>
                      
                      {/* Sub-tile links */}
                      {subTile.links && subTile.links.length > 0 && (
                        <div className="mt-6">
                          <h4 className="text-sm font-semibold text-gray-900 mb-3">Resources</h4>
                          <div className="grid gap-3">
                            {subTile.links.map((link, linkIndex) => (
                              <div key={linkIndex} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                                <div className="flex-shrink-0">
                                  {link.type === 'video' && <Play size={16} className="text-red-500" />}
                                  {link.type === 'article' && <FileText size={16} className="text-blue-500" />}
                                  {link.type === 'tool' && <ExternalLink size={16} className="text-green-500" />}
                                  {link.type === 'guide' && <FileText size={16} className="text-purple-500" />}
                                </div>
                                <div className="flex-1">
                                  <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                                  >
                                    {link.name}
                                  </a>
                                  <p className="text-xs text-gray-600 mt-1">{link.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Sub-tile tags */}
                      {subTile.tags && subTile.tags.length > 0 && (
                        <div className="mt-4">
                          <div className="flex flex-wrap gap-2">
                            {subTile.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

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
