import { useState } from 'react';
import { X, Save, FileText } from 'lucide-react';

interface SaveToWorksheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (notes: string) => void;
  item: {
    title: string;
    description: string;
    type: 'tile' | 'guide' | 'resource';
    journeyType?: 'explore' | 'start';
    level?: number;
  };
}

export const SaveToWorksheetModal = ({ 
  isOpen, 
  onClose, 
  onSave, 
  item 
}: SaveToWorksheetModalProps) => {
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(notes);
    setNotes('');
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto"
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="save-modal-title"
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={handleClose}
        />

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <FileText className="h-6 w-6 text-blue-600" />
              <h3 id="save-modal-title" className="text-lg font-medium text-gray-900">
                Save to Worksheet
              </h3>
              </div>
              <button
                onClick={handleClose}
                onKeyDown={(e) => e.key === 'Enter' && handleClose()}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close save modal"
                tabIndex={0}
              >
                <X size={24} />
              </button>
            </div>

            {/* Item preview */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                {item.level && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Level {item.level}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
              {item.journeyType && (
                <div className="mt-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.journeyType === 'explore' ? 'bg-blue-100 text-blue-800' :
                    item.journeyType === 'start' ? 'bg-green-100 text-green-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {item.journeyType.charAt(0).toUpperCase() + item.journeyType.slice(1)}
                  </span>
                </div>
              )}
            </div>

            {/* Notes input */}
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                Add your notes (optional)
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add your thoughts, questions, or action items..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                aria-describedby="notes-help"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={handleSave}
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              aria-label="Save item to worksheet"
            >
              <Save size={16} className="mr-2" />
              Save to Worksheet
            </button>
            <button
              onClick={handleClose}
              onKeyDown={(e) => e.key === 'Enter' && handleClose()}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              aria-label="Cancel saving to worksheet"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
