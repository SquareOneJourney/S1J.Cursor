import { Search, Brain, Calendar, PenTool, MessageCircle, TrendingUp, HelpCircle, Building2, Play, Rocket, Image, Scale, Users, Shield, Heart, Cog, Handshake, DollarSign, BarChart3, Calculator } from 'lucide-react';
import type { Tile } from '../../types/tiles';

interface TileCardProps {
  tile: Tile;
  onNavigate: (tileId: string) => void;
  onSaveToWorksheet: (tile: Tile, notes: string) => void;
}

export function TileCard({ tile, onNavigate }: TileCardProps) {
  const getJourneyTypeColor = (journeyType: string) => {
    switch (journeyType) {
      case 'explore': return 'from-blue-50 to-blue-100 border-blue-200';
      case 'start': return 'from-green-50 to-green-100 border-green-200';
      default: return 'from-gray-50 to-gray-100 border-gray-200';
    }
  };

  const getJourneyTypeAccent = (journeyType: string) => {
    switch (journeyType) {
      case 'explore': return 'bg-blue-500';
      case 'start': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getTileIcon = (tileId: string) => {
    const iconColor = tile.journeyType === 'explore' ? 'text-blue-600' : 'text-green-600';
    
    switch (tileId) {
      // New comprehensive explore tiles
      case 'market-research':
      case 'start-market-research':
        return <Search className={`w-8 h-8 ${iconColor}`} />;
      case 'marketing-outreach':
        return <TrendingUp className={`w-8 h-8 ${iconColor}`} />;
      case 'legal-business-ethics':
        return <Scale className={`w-8 h-8 ${iconColor}`} />;
      case 'customer-experience':
        return <Heart className={`w-8 h-8 ${iconColor}`} />;
      case 'content-creation':
        return <PenTool className={`w-8 h-8 ${iconColor}`} />;
      case 'operations-productivity':
        return <Cog className={`w-8 h-8 ${iconColor}`} />;
      case 'networking-partnerships':
        return <Handshake className={`w-8 h-8 ${iconColor}`} />;
      case 'sales-conversions-revenue':
        return <DollarSign className={`w-8 h-8 ${iconColor}`} />;
      case 'growth-scaling':
        return <BarChart3 className={`w-8 h-8 ${iconColor}`} />;
      case 'finance-accounting':
        return <Calculator className={`w-8 h-8 ${iconColor}`} />;
      
      // New comprehensive start tiles
      case 'start-market-research':
        return <Search className={`w-8 h-8 ${iconColor}`} />;
      case 'start-marketing-outreach':
        return <TrendingUp className={`w-8 h-8 ${iconColor}`} />;
      case 'start-legal-business-ethics':
        return <Scale className={`w-8 h-8 ${iconColor}`} />;
      case 'start-customer-experience':
        return <Heart className={`w-8 h-8 ${iconColor}`} />;
      case 'start-content-creation':
        return <PenTool className={`w-8 h-8 ${iconColor}`} />;
      case 'start-operations-productivity':
        return <Cog className={`w-8 h-8 ${iconColor}`} />;
      case 'start-networking-partnerships':
        return <Handshake className={`w-8 h-8 ${iconColor}`} />;
      case 'start-sales-conversions-revenue':
        return <DollarSign className={`w-8 h-8 ${iconColor}`} />;
      case 'start-growth-scaling':
        return <BarChart3 className={`w-8 h-8 ${iconColor}`} />;
      case 'start-finance-accounting':
        return <Calculator className={`w-8 h-8 ${iconColor}`} />;
      
      // Legacy tiles
      case 'marketing-research-without-ai':
      case 'marketing-research-with-ai':
        return <Search className={`w-8 h-8 ${iconColor}`} />;
      case 'ai-everyday-business-tasks':
        return <Calendar className={`w-8 h-8 ${iconColor}`} />;
      case 'ai-content-creation':
        return <PenTool className={`w-8 h-8 ${iconColor}`} />;
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
      className={`relative bg-gradient-to-br ${getJourneyTypeColor(tile.journeyType)} rounded-xl border-2 p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer group overflow-hidden max-w-4xl`}
      onClick={() => onNavigate(tile.id)}
    >
      {/* Accent bar */}
      <div className={`absolute top-0 left-0 w-1 h-full ${getJourneyTypeAccent(tile.journeyType)}`} />
      
      {/* Content */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex-1 pr-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
              {tile.title}
            </h3>
          </div>
          
          <p className="text-gray-700 leading-relaxed text-base">
            {tile.description}
          </p>
          
          {/* Sub-tiles indicator */}
          {tile.subTiles && tile.subTiles.length > 0 && (
            <div className="mt-3 flex items-center text-sm text-gray-600">
              <div className="flex items-center bg-blue-50 px-2 py-1 rounded-full">
                <span className="text-blue-600 font-medium">{tile.subTiles.length} sections</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Icon on the right */}
        <div className="flex-shrink-0 ml-4">
          <div className="bg-white/80 rounded-lg p-3 shadow-sm group-hover:bg-white group-hover:shadow-md transition-all duration-300">
            {getTileIcon(tile.id)}
          </div>
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
    </div>
  );
}