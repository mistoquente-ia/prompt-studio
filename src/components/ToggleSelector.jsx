export default function ToggleSelector({ label, options, selected, onSelect, compact }) {
  if (compact) {
    return (
      <div className="flex items-center gap-1">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`
              px-2 py-0.5 rounded text-[9px] font-semibold transition-all duration-150 cursor-pointer
              ${selected === opt
                ? 'bg-white text-black'
                : 'text-gray-500 hover:text-white'
              }
            `}
          >
            {opt}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div>
      {label && (
        <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-[0.1em] mb-1.5">
          {label}
        </label>
      )}
      <div className="flex flex-wrap gap-1">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`
              px-3 py-1 rounded-lg text-[10px] font-semibold transition-all duration-150 cursor-pointer
              ${selected === opt
                ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-lg'
                : 'bg-[#1A1A1E] text-gray-400 border border-[#2A2A30] hover:text-white hover:border-gray-500'
              }
            `}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
