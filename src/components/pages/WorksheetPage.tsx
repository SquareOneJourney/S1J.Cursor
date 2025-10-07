import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Trash2 } from 'lucide-react';
import { WorksheetView } from '../worksheet/WorksheetView';
import { useWorksheet } from '../../contexts/WorksheetContext';

export function WorksheetPage() {
  const navigate = useNavigate();
  const { worksheet, removeItem, updateNotes, clearWorksheet } = useWorksheet();

  const handleDownloadAll = async () => {
    // PDF generation functionality removed - can be re-implemented later if needed
    alert('PDF download feature is temporarily unavailable. You can copy your worksheet content manually.');
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all items from your worksheet? This action cannot be undone.')) {
      clearWorksheet();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
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
              <h1 className="text-4xl font-bold text-gray-900 mb-2">My Worksheet</h1>
              <p className="text-xl text-gray-600">
                Your personalized collection of insights, notes, and action items
              </p>
            </div>
            
            {worksheet.items.length > 0 && (
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleDownloadAll}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Download size={16} className="mr-2" />
                  Download All
                </button>
                <button
                  onClick={handleClearAll}
                  className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  <Trash2 size={16} className="mr-2" />
                  Clear All
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Worksheet Stats */}
        {worksheet.items.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{worksheet.items.length}</div>
                <div className="text-sm text-gray-500">Total Items</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {worksheet.items.filter(item => item.journeyType === 'start').length}
                </div>
                <div className="text-sm text-gray-500">Start Items</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {worksheet.items.filter(item => item.type === 'guide').length}
                </div>
                <div className="text-sm text-gray-500">Guides</div>
              </div>
            </div>
          </div>
        )}

        {/* Worksheet Content */}
        <WorksheetView
          items={worksheet.items}
          onRemoveItem={removeItem}
          onUpdateNotes={updateNotes}
        />

        {/* Empty State CTA */}
        {worksheet.items.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Start Building Your Worksheet
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Explore our journey tiles and save the ones that interest you. 
              Add your own notes and build a personalized action plan.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => navigate('/start')}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Start Journey
              </button>
              <button
                onClick={() => navigate('/start')}
                className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Start Business
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
