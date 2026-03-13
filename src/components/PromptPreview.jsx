import { useState, useCallback } from 'react';
import { Copy, Check } from 'lucide-react';

export default function PromptPreview({ prompt, onReset }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    if (!prompt) return;
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [prompt]);

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-[600px] mx-auto">
      <div className="bg-[#1A1A1E]/85 backdrop-blur-xl border border-[#2A2A30] rounded-2xl shadow-2xl shadow-black/80 px-4 py-3 flex items-center gap-3">
        {/* Prompt text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#00E5FF]">
              Prompt
            </span>
            {prompt && (
              <span className="text-[8px] text-gray-600 font-mono">
                {prompt.length}
              </span>
            )}
          </div>
          <p className="text-[11px] text-gray-300 leading-snug break-words line-clamp-2">
            {prompt || (
              <span className="text-gray-600 italic text-[10px]">
                Select to build prompt…
              </span>
            )}
          </p>
        </div>

        {/* Reset */}
        <button
          onClick={onReset}
          className="text-[9px] text-gray-500 hover:text-white uppercase tracking-wider font-semibold cursor-pointer transition-colors flex-shrink-0"
        >
          Reset
        </button>

        {/* Copy button — circular floating */}
        <button
          onClick={handleCopy}
          disabled={!prompt}
          className={`
            w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
            transition-all duration-200 cursor-pointer active:scale-90
            ${prompt
              ? copied
                ? 'bg-emerald-400 text-black shadow-[0_0_20px_rgba(52,211,153,0.4)]'
                : 'bg-[#00E5FF] text-black hover:bg-[#00c8e6] shadow-[0_0_20px_rgba(0,229,255,0.3)]'
              : 'bg-[#2A2A30] text-gray-600 cursor-not-allowed'
            }
          `}
        >
          {copied
            ? <Check className="w-4 h-4" strokeWidth={3} />
            : <Copy className="w-4 h-4" strokeWidth={2.5} />
          }
        </button>
      </div>
    </div>
  );
}
