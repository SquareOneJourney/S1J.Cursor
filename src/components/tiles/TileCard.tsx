import { Search, Brain, Calendar, PenTool, MessageCircle, TrendingUp, HelpCircle, Building2, Play, Rocket, Image, Scale, Heart, Cog, Handshake, DollarSign, BarChart3, Calculator } from 'lucide-react';
import type { Tile } from '../../types/tiles';

interface TileCardProps {
  tile: Tile;
  onNavigate: (tileId: string) => void;
  onSaveToWorksheet: (tile: Tile, notes: string) => void;
}

export function TileCard({ tile, onNavigate }: TileCardProps) {

  const getTileIcon = (tileId: string) => {
    const iconColor = tile.isMainStage ? 'text-purple-600' : 'text-green-600';
    
    switch (tileId) {
      // Main Stage Tiles
      case 'stage-1-build-foundation':
        return <Building2 className={`w-8 h-8 ${iconColor}`} />;
      case 'stage-2-grow-visibility':
        return <TrendingUp className={`w-8 h-8 ${iconColor}`} />;
      case 'stage-3-scale-sustain':
        return <Rocket className={`w-8 h-8 ${iconColor}`} />;
      
      // Sub-tiles
      case 'market-research-validation':
      case 'start-market-research':
        return <Search className={`w-8 h-8 ${iconColor}`} />;
      case 'marketing-outreach':
      case 'start-marketing-outreach':
        return <TrendingUp className={`w-8 h-8 ${iconColor}`} />;
      case 'basic-legal-business-ethics':
      case 'start-legal-business-ethics':
        return <Scale className={`w-8 h-8 ${iconColor}`} />;
      case 'customer-experience':
      case 'start-customer-experience':
        return <Heart className={`w-8 h-8 ${iconColor}`} />;
      case 'content-creation':
      case 'start-content-creation':
        return <PenTool className={`w-8 h-8 ${iconColor}`} />;
      case 'ai-content-creation':
        return <Brain className={`w-8 h-8 ${iconColor}`} />;
      case 'operations-productivity':
      case 'start-operations-productivity':
        return <Cog className={`w-8 h-8 ${iconColor}`} />;
      case 'networking-partnerships':
      case 'start-networking-partnerships':
        return <Handshake className={`w-8 h-8 ${iconColor}`} />;
      case 'sales-conversions-revenue':
      case 'start-sales-conversions-revenue':
        return <DollarSign className={`w-8 h-8 ${iconColor}`} />;
      case 'growth-scaling':
      case 'start-growth-scaling':
        return <BarChart3 className={`w-8 h-8 ${iconColor}`} />;
      case 'finance-accounting':
      case 'start-finance-accounting':
        return <Calculator className={`w-8 h-8 ${iconColor}`} />;
      
      // Legacy tiles
      case 'marketing-research-without-ai':
      case 'marketing-research-with-ai':
        return <Search className={`w-8 h-8 ${iconColor}`} />;
      case 'ai-everyday-business-tasks':
        return <Calendar className={`w-8 h-8 ${iconColor}`} />;
      case 'ai-customer-service':
        return <MessageCircle className={`w-8 h-8 ${iconColor}`} />;
      case 'ai-market-insights-trends':
        return <TrendingUp className={`w-8 h-8 ${iconColor}`} />;
      case 'common-myths-about-ai':
        return <HelpCircle className={`w-8 h-8 ${iconColor}`} />;
      case 'ai-local-small-businesses':
        return <Building2 className={`w-8 h-8 ${iconColor}`} />;
      case 'getting-comfortable-ai-tools':
        return <Play className={`w-8 h-8 ${iconColor}`} />;
      case 'future-business-ai':
        return <Brain className={`w-8 h-8 ${iconColor}`} />;
      case 'start-business-ideas':
        return <Rocket className={`w-8 h-8 ${iconColor}`} />;
      case 'start-branding':
        return <PenTool className={`w-8 h-8 ${iconColor}`} />;
      case 'start-marketing-setup':
        return <TrendingUp className={`w-8 h-8 ${iconColor}`} />;
      case 'start-ai-image-editor':
        return <Image className={`w-8 h-8 ${iconColor}`} />;
      default:
        return <Brain className="w-8 h-8 text-gray-600" />;
    }
  };

  return (
    <div 
      className="group relative cursor-pointer max-w-4xl"
      onClick={() => onNavigate(tile.id)}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-105"></div>
      
      {/* Main Card */}
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 border border-gray-100/50 transition-all duration-500 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-start justify-between">
          <div className="flex-1 pr-6">
            {/* Title with Enhanced Typography */}
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition-colors duration-500 mb-3 font-heading">
              {tile.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-base font-light group-hover:text-gray-700 transition-colors duration-500">
              {tile.description}
            </p>
            
            {/* Sub-tiles indicator with Enhanced Styling */}
            {tile.subTiles && tile.subTiles.length > 0 && (
              <div className="mt-4 flex items-center">
                <div className="inline-flex items-center bg-blue-50/80 backdrop-blur-sm px-3 py-2 rounded-full border border-blue-200/50 group-hover:bg-blue-100 group-hover:border-blue-300 transition-all duration-500">
                  <span className="text-blue-700 font-medium text-sm">{tile.subTiles.length} sections</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Icon with Enhanced Styling */}
          <div className="flex-shrink-0 ml-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-110"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm group-hover:bg-white group-hover:shadow-lg transition-all duration-500 border border-gray-100/50">
                {getTileIcon(tile.id)}
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
}