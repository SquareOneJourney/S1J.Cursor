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
      default: {
        const renderMarkdownContent = (text: string) => {
          // Split by double newlines to get sections
          const sections = text.split('\n\n');
          
          return sections.map((section, index) => {
            // Handle main title
            if (section.startsWith('# ')) {
              return (
                <div key={index} className="relative mb-12 text-center">
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-purple-50/30 opacity-50 rounded-2xl"></div>
                  
                  <div className="relative">
                    <h1 className="text-5xl font-light text-gray-900 mb-6 font-heading leading-tight bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                      {section.replace('# ', '')}
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                  </div>
                </div>
              );
            }
            
            // Handle section headers (numbered examples) - Premium Apple style
            if (section.startsWith('## ')) {
              return (
                <div key={index} className="mt-20 mb-16 first:mt-0">
                  <div className="relative group">
                    {/* Subtle Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm scale-105"></div>
                    
                    <div className="relative">
                      {/* Premium Accent Line */}
                      <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 rounded-full"></div>
                      
                      <h2 className="text-4xl font-light text-gray-900 mb-6 font-heading leading-tight pl-8 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                        {section.replace('## ', '')}
                      </h2>
                      
                      {/* Sophisticated Underline */}
                      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 ml-8 mb-8 rounded-full"></div>
                    </div>
                  </div>
                </div>
              );
            }
            
            // Handle links
            if (section.includes('[Link to') && section.includes('](https://')) {
              const linkMatch = section.match(/\[([^\]]+)\]\(([^)]+)\)/);
              if (linkMatch) {
                return (
                  <div key={index} className="mb-8">
                    <a 
                      href={linkMatch[2]} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center px-8 py-4 bg-black text-white rounded-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-500 font-medium"
                    >
                      <ExternalLink size={18} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                      {linkMatch[1]}
                    </a>
                  </div>
                );
              }
            }
            
            // Handle "Once image is uploaded..." instruction
            if (section.startsWith('Once image is uploaded')) {
              return (
                <div key={index} className="mb-8 relative">
                  <div className="relative bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 shadow-sm overflow-hidden">
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-indigo-100/20 opacity-50"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">!</span>
                        </div>
                        <p className="text-blue-900 font-medium font-heading text-base leading-relaxed">
                          {section}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            
            // Handle bold text (Example: labels)
            if (section.includes('**Example:**')) {
              const parts = section.split(/(\*\*.*?\*\*)/g);
              return (
                <div key={index} className="mb-8 relative">
                  <div className="relative bg-gradient-to-r from-gray-50/80 to-slate-50/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm overflow-hidden">
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 via-transparent to-slate-100/20 opacity-50"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">💡</span>
                        </div>
                        <div className="text-gray-800 leading-relaxed">
                          {parts.map((part, partIndex) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return (
                                <span key={partIndex} className="font-semibold text-gray-900 text-base font-heading">
                                  {part.slice(2, -2)}
                                </span>
                              );
                            }
                            return <span key={partIndex}>{part}</span>;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            
            // Handle AI Prompts with premium Apple-style design
            if (section.includes('**AI Prompt:**') || section.includes('**AI Prompt**')) {
              const promptText = section.replace(/\*\*AI Prompt:\*\*|\*\*AI Prompt\*\*/, '').trim();
              return (
                <div key={index} className="mb-10 relative">
                  <div className="relative bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-sm rounded-2xl p-8 border border-green-200/50 shadow-lg overflow-hidden">
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 via-transparent to-emerald-100/20 opacity-50"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0 relative">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">AI</span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm scale-110"></div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-green-800 font-heading text-lg mb-6 uppercase tracking-wide">AI Prompt</h4>
                          <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-green-200/50 shadow-sm">
                            <blockquote className="text-green-900 font-light text-lg leading-relaxed italic border-l-4 border-green-400 pl-6 m-0">
                              "{promptText}"
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            
            // Handle "Why it matters" sections - Premium Apple style
            if (section.includes('**Why it matters**') || section.includes('**Why validation matters**') || section.includes('**Why') && section.includes('matters**')) {
              const content = section.replace(/\*\*Why.*?matters\*\*/g, '').trim();
              return (
                <div key={index} className="mb-10 relative">
                  <div className="relative bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 shadow-lg overflow-hidden">
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-indigo-100/20 opacity-50"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0 relative">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">!</span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm scale-110"></div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-blue-900 font-heading text-lg mb-6 uppercase tracking-wide">Why It Matters</h4>
                          <p className="text-blue-800 leading-relaxed text-lg font-light">{content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            
            // Handle "What you'll learn" sections - Article style
            if (section.includes('**What you\'ll learn**') || section.includes('**What you will learn**')) {
              const content = section.replace(/\*\*What you.*?learn\*\*/g, '').trim();
              
              // Check if this is just the header without numbered content
              // If it's just the header, we'll skip it since the numbered list will be handled separately
              if (!content.includes('1.') && !content.includes('2.') && !content.includes('3.')) {
                // This is just the header section, skip it
                return null;
              }
              
              // Check if content contains numbered steps (either inline or on separate lines)
              if (content.includes('1.') && content.includes('2.') && content.includes('3.')) {
                // Split by newlines first to handle multi-line content
                const lines = content.split('\n').filter(line => line.trim());
                const steps = [];
                let introText = '';
                
                for (const line of lines) {
                  const trimmedLine = line.trim();
                  if (trimmedLine.match(/^\d+\./)) {
                    // This is a numbered step
                    const match = trimmedLine.match(/^(\d+)\.\s*(.+)$/);
                    if (match) {
                      steps.push({
                        number: match[1],
                        text: match[2]
                      });
                    }
                  } else if (trimmedLine && !trimmedLine.includes(':')) {
                    // This is intro text (not a step)
                    introText += (introText ? ' ' : '') + trimmedLine;
                  }
                }
                
                return (
                  <div key={index} className="mb-10 relative">
                    <div className="relative bg-gradient-to-r from-purple-50/80 to-violet-50/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-lg overflow-hidden">
                      {/* Subtle Background Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-transparent to-violet-100/20 opacity-50"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start space-x-6 mb-8">
                          <div className="flex-shrink-0 relative">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-lg">📚</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm scale-110"></div>
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="font-semibold text-purple-900 font-heading text-lg mb-6 uppercase tracking-wide">What You'll Learn</h4>
                            
                            {introText && (
                              <p className="text-purple-800 leading-relaxed text-lg font-light mb-6">{introText}</p>
                            )}
                            
                            {steps.length > 0 ? (
                              <div className="space-y-4">
                                {steps.map((step, stepIndex) => (
                                  <div key={stepIndex} className="flex items-start space-x-4 group">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                                      {step.number}
                                    </div>
                                    <span className="text-purple-800 leading-relaxed text-lg font-light pt-1">{step.text}</span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-purple-800 leading-relaxed text-lg font-light">{content}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              
              // Regular content without numbered steps
              return (
                <div key={index} className="mb-10 relative">
                  <div className="relative bg-gradient-to-r from-purple-50/80 to-violet-50/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-lg overflow-hidden">
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-transparent to-violet-100/20 opacity-50"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0 relative">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">📚</span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm scale-110"></div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-purple-900 font-heading text-lg mb-6 uppercase tracking-wide">What You'll Learn</h4>
                          <p className="text-purple-800 leading-relaxed text-lg font-light">{content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            
            // Handle sections that contain numbered lists (like the content after "What you'll learn")
            if (section.includes('A 4-step system') && section.includes('1.') && section.includes('2.') && section.includes('3.')) {
              const lines = section.split('\n').filter(line => line.trim());
              const steps = [];
              let introText = '';
              
              for (const line of lines) {
                const trimmedLine = line.trim();
                if (trimmedLine.match(/^\d+\./)) {
                  // This is a numbered step
                  const match = trimmedLine.match(/^(\d+)\.\s*(.+)$/);
                  if (match) {
                    steps.push({
                      number: match[1],
                      text: match[2]
                    });
                  }
                } else if (trimmedLine && !trimmedLine.includes(':')) {
                  // This is intro text (not a step)
                  introText += (introText ? ' ' : '') + trimmedLine;
                }
              }
              
              return (
                <div key={index} className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">📚</span>
                    </div>
                    <h4 className="font-bold text-purple-900 font-heading text-base uppercase tracking-wide">What You'll Learn</h4>
                  </div>
                  <div className="pl-11">
                    {introText && (
                      <p className="text-purple-800 leading-relaxed text-base font-serif mb-4">{introText}</p>
                    )}
                    {steps.length > 0 ? (
                      <ol className="space-y-3">
                        {steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start space-x-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center text-sm font-bold text-purple-800 mt-0.5">
                              {step.number}
                            </span>
                            <span className="text-purple-800 leading-relaxed text-base font-serif">{step.text}</span>
                          </li>
                        ))}
                      </ol>
                    ) : (
                      <p className="text-purple-800 leading-relaxed text-base font-serif">{section}</p>
                    )}
                  </div>
                </div>
              );
            }
            
            // Handle "How to do it" sections - Premium Apple style
            if (section.includes('**How to do it:**')) {
              const content = section.replace('**How to do it:**', '').trim();
              const lines = content.split('\n').filter(line => line.trim());
              return (
                <div key={index} className="mb-10 relative">
                  <div className="relative bg-gradient-to-r from-gray-50/80 to-slate-50/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg overflow-hidden">
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 via-transparent to-slate-100/20 opacity-50"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start space-x-6 mb-8">
                        <div className="flex-shrink-0 relative">
                          <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-slate-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">✓</span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-slate-400 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm scale-110"></div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 font-heading text-lg mb-6 uppercase tracking-wide">How to Do It</h4>
                          
                          <div className="space-y-4">
                            {lines.map((line, lineIndex) => (
                              <div key={lineIndex} className="flex items-start space-x-4 group">
                                <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-gray-500 to-slate-500 rounded-full mt-3 group-hover:scale-125 transition-transform duration-300"></div>
                                <span className="text-gray-800 leading-relaxed text-lg font-light pt-1">{line.replace('•', '').trim()}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            
            // Handle bullet point lists
            if (section.includes('•') && section.split('\n').length > 1) {
              const lines = section.split('\n').filter(line => line.trim());
              return (
                <div key={index} className="mb-6">
                  <ul className="space-y-3">
                    {lines.map((line, lineIndex) => (
                      <li key={lineIndex} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-2 h-2 bg-gray-400 rounded-full mt-2"></span>
                        <span className="text-gray-800 leading-relaxed">{line.replace('•', '').trim()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            
            // Handle numbered lists
            if (section.match(/^\d+\./)) {
              const lines = section.split('\n').filter(line => line.trim());
              return (
                <div key={index} className="mb-6">
                  <ol className="space-y-3">
                    {lines.map((line, lineIndex) => (
                      <li key={lineIndex} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700 mt-0.5">
                          {lineIndex + 1}
                        </span>
                        <span className="text-gray-800 leading-relaxed">{line.replace(/^\d+\.\s*/, '').trim()}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            }
            
            // Handle bold headers within content
            if (section.includes('**') && section.length < 100) {
              const parts = section.split(/(\*\*.*?\*\*)/g);
              return (
                <div key={index} className="mb-4">
                  {parts.map((part, partIndex) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return (
                        <h4 key={partIndex} className="font-bold text-gray-900 text-lg font-heading mb-2">
                          {part.slice(2, -2)}
                        </h4>
                      );
                    }
                    return <span key={partIndex} className="text-gray-800 leading-relaxed">{part}</span>;
                  })}
                </div>
              );
            }
            
            // Regular paragraphs with premium Apple-style typography
            if (section.trim()) {
              return (
                <p key={index} className="text-gray-800 leading-relaxed mb-8 text-lg font-light">
                  {section}
                </p>
              );
            }
            
            return null;
          }).filter(Boolean);
        };

        return (
          <div className="prose max-w-none">
            {renderMarkdownContent(tile.content.data?.text || 'Detailed content and instructions would be displayed here.')}
          </div>
        );
      }
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="group flex items-center text-gray-600 hover:text-black mb-6 transition-all duration-300 px-4 py-2 rounded-xl hover:bg-gray-50"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Journey
          </button>
          
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="relative mb-8">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20 opacity-50 rounded-2xl"></div>
                
                <div className="relative">
                  <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4 font-heading bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                    {tile.title}
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6 rounded-full"></div>
                  <p className="text-xl text-gray-700 leading-relaxed font-light">{tile.description}</p>
                </div>
              </div>
              
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
              className="group flex items-center px-6 py-3 bg-black text-white rounded-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-500 ml-4"
            >
              <Bookmark size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              Save to Worksheet
            </button>
          </div>
        </div>

        {/* Tags */}
        {tile.tags.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              {tile.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200/50 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 p-8 mb-8 overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/20 to-transparent opacity-50"></div>
          <div className="relative z-10">
            {renderContent()}
          </div>
        </div>

        {/* Sub-Tiles Section */}
        {tile.subTiles && tile.subTiles.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Explore This Topic</h2>
            <div className="space-y-4">
              {tile.subTiles.map((subTile) => {
                return (
                <div key={subTile.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Sub-tile header */}
                  <button
                    onClick={() => toggleSubTile(subTile.id)}
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-150 transition-colors flex items-center justify-between text-left"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-semibold text-gray-900">{subTile.title}</h3>
                      </div>
                      <p className="text-gray-600 mt-2">{subTile.description}</p>
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
                );
              })}
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
