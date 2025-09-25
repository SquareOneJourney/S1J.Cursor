import { useState } from 'react';
import { Download, Mail, Trash2, Edit3, FileText, ExternalLink } from 'lucide-react';
import { generatePDF } from '../../utils/pdfGenerator';
import type { WorksheetItem } from '../../types/worksheet';

interface WorksheetViewProps {
  items: WorksheetItem[];
  onRemoveItem: (id: string) => void;
  onUpdateNotes: (id: string, notes: string) => void;
}

export function WorksheetView({ items, onRemoveItem, onUpdateNotes }: WorksheetViewProps) {
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [editNotes, setEditNotes] = useState('');

  const handleDownloadPDF = async () => {
    try {
      await generatePDF(items, 'my-worksheet.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  const handleEmailWorksheet = () => {
    const subject = encodeURIComponent('My SquareOneJourney Worksheet');
    const body = encodeURIComponent(
      `Here's my personalized AI journey worksheet from SquareOneJourney:\n\n` +
      items.map(item => 
        `• ${item.title}\n  ${item.description}\n  ${item.notes ? `Notes: ${item.notes}\n` : ''}`
      ).join('\n')
    );
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  const startEditing = (item: WorksheetItem) => {
    setEditingItem(item.id);
    setEditNotes(item.notes || '');
  };

  const saveEdit = () => {
    if (editingItem) {
      onUpdateNotes(editingItem, editNotes);
      setEditingItem(null);
      setEditNotes('');
    }
  };

  const cancelEdit = () => {
    setEditingItem(null);
    setEditNotes('');
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No items saved</h3>
        <p className="mt-1 text-sm text-gray-500">
          Start exploring tiles and save them to build your personalized worksheet.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Worksheet</h1>
            <p className="text-gray-600 mt-1">
              {items.length} {items.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={handleEmailWorksheet}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Mail size={16} className="mr-2" />
              Email
            </button>
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Download size={16} className="mr-2" />
              Download PDF
            </button>
          </div>
        </div>
      </div>

      {/* Items List */}
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  {item.level && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      Level {item.level}
                    </span>
                  )}
                  {item.journeyType && (
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.journeyType === 'explore' ? 'bg-blue-100 text-blue-800' :
                      item.journeyType === 'start' ? 'bg-green-100 text-green-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {item.journeyType.charAt(0).toUpperCase() + item.journeyType.slice(1)}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-3">{item.description}</p>
                
                {item.links && item.links.length > 0 && (
                  <div className="mb-3">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Related Links:</h4>
                    <div className="space-y-1">
                      {item.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                        >
                          {link.name}
                          <ExternalLink size={12} className="ml-1" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Notes Section */}
                <div className="mt-4">
                  {editingItem === item.id ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Notes:
                      </label>
                      <textarea
                        value={editNotes}
                        onChange={(e) => setEditNotes(e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                      <div className="mt-2 flex space-x-2">
                        <button
                          onClick={saveEdit}
                          className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="px-3 py-1 bg-gray-300 text-gray-700 text-sm rounded hover:bg-gray-400"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium text-gray-900">Your Notes:</h4>
                        <button
                          onClick={() => startEditing(item)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit3 size={16} />
                        </button>
                      </div>
                      {item.notes ? (
                        <p className="text-gray-700 bg-gray-50 p-3 rounded-md">{item.notes}</p>
                      ) : (
                        <p className="text-gray-500 italic">No notes added yet</p>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-3 text-xs text-gray-500">
                  Saved on {new Date(item.savedAt).toLocaleDateString()}
                </div>
              </div>

              <button
                onClick={() => onRemoveItem(item.id)}
                className="ml-4 text-red-600 hover:text-red-800"
                title="Remove from worksheet"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
