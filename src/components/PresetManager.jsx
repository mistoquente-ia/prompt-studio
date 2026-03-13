import { useState, useEffect, useRef } from 'react';

const STORAGE_KEY = 'prompt-builder-presets';

function loadPresets() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function savePresets(presets) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
}

export default function PresetManager({ currentState, onLoadPreset }) {
  const [presets, setPresets] = useState(() => loadPresets());
  const [isOpen, setIsOpen] = useState(false);
  const [saveName, setSaveName] = useState('');
  const [showSave, setShowSave] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
        setShowSave(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSave = () => {
    if (!saveName.trim()) return;
    const preset = {
      id: Date.now().toString(),
      name: saveName.trim(),
      timestamp: Date.now(),
      data: currentState,
    };
    const updated = [preset, ...presets];
    setPresets(updated);
    savePresets(updated);
    setSaveName('');
    setShowSave(false);
  };

  const handleLoad = (preset) => {
    onLoadPreset(preset.data);
    setIsOpen(false);
  };

  const handleDelete = (id) => {
    const updated = presets.filter((p) => p.id !== id);
    setPresets(updated);
    savePresets(updated);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => { setIsOpen(!isOpen); setShowSave(false); }}
        className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-semibold
                   text-gray-400 border border-[#2A2A30] rounded-lg
                   hover:text-white hover:border-gray-500 transition-all cursor-pointer
                   uppercase tracking-wider"
      >
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
        Presets
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1.5 w-64 bg-[#1A1A1E] border border-[#2A2A30] rounded-xl shadow-2xl shadow-black/60 z-50 overflow-hidden">
          <div className="p-2 border-b border-[#2A2A30]">
            {showSave ? (
              <div className="flex gap-1.5">
                <input
                  autoFocus
                  value={saveName}
                  onChange={(e) => setSaveName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                  placeholder="Preset name..."
                  className="flex-1 px-2 py-1 bg-[#141416] border border-[#2A2A30] rounded text-[10px] text-white placeholder-gray-600 focus:outline-none focus:border-[#00E5FF]/40"
                />
                <button onClick={handleSave} className="px-2 py-1 bg-[#00E5FF] text-black text-[10px] font-bold rounded hover:bg-[#00c8e6] cursor-pointer uppercase tracking-wider">
                  Save
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSave(true)}
                className="w-full text-left px-2 py-1 text-[10px] text-[#00E5FF] hover:text-[#00c8e6] transition-colors cursor-pointer uppercase tracking-wider font-semibold"
              >
                + Save Current
              </button>
            )}
          </div>

          <div className="max-h-56 overflow-y-auto">
            {presets.length === 0 ? (
              <div className="px-3 py-4 text-center text-[10px] text-gray-600">
                No saved presets
              </div>
            ) : (
              presets.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between px-3 py-1.5 hover:bg-[#222226] group"
                >
                  <button
                    onClick={() => handleLoad(p)}
                    className="flex-1 text-left text-[11px] text-gray-300 hover:text-white transition-colors truncate cursor-pointer"
                  >
                    {p.name}
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="ml-2 p-0.5 text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
