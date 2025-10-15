import React, { useState } from 'react';
import { Copy } from 'lucide-react'; // ← You already use lucide-react icons elsewhere

interface PromptBoxProps {
  text: string;
}

export const PromptBox: React.FC<PromptBoxProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className="relative my-8 mx-auto rounded-lg border border-gray-200 shadow-sm"
      style={{
        backgroundColor: '#fff', // pure white frame
        padding: '1.5rem',
        maxWidth: '95%',
      }}
    >
      <button
        onClick={handleCopy}
        className="absolute top-2 right-3 flex items-center gap-1 text-gray-500 hover:text-gray-800 transition-colors text-sm"
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <Copy size={14} />
        {copied ? 'Copied!' : 'Copy prompt'}
      </button>

      <pre
        style={{
          margin: 0,
          padding: '0.5rem 0.5rem',
          backgroundColor: '#fff',
          color: '#222',
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          fontSize: '1.25rem',
          lineHeight: '1.6',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}
      >
        <code>{text}</code>
      </pre>
    </div>
  );
};
