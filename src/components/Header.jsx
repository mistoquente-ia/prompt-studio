import PresetManager from './PresetManager';

export default function Header({ currentState, onLoadPreset, mode, onModeChange }) {
  return (
    <header className="sticky top-0 z-40 bg-[#0E0E10]/95 backdrop-blur-sm">
      <div className="px-4 h-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-[11px] font-black tracking-[0.12em] text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
            PROMPT STUDIO
          </span>
        </div>

        {/* Mode Pill */}
        <div className="flex items-center bg-[#1A1A1E] rounded-full p-0.5">
          <button
            onClick={() => onModeChange('image')}
            className={`
              px-3.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-200 cursor-pointer
              ${mode === 'image'
                ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-lg'
                : 'text-gray-500 hover:text-gray-300'
              }
            `}
          >
            Image
          </button>
          <button
            onClick={() => onModeChange('video')}
            className={`
              px-3.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-200 cursor-pointer
              ${mode === 'video'
                ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-lg'
                : 'text-gray-500 hover:text-gray-300'
              }
            `}
          >
            Video
          </button>
        </div>

        {/* Presets */}
        <PresetManager
          currentState={currentState}
          onLoadPreset={onLoadPreset}
        />
      </div>
    </header>
  );
}
