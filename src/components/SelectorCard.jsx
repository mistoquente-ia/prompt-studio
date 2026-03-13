import { useState } from 'react';
import { Check } from 'lucide-react';

export default function SelectorCard({ option, isSelected, onClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      onClick={onClick}
      className={`
        group relative rounded-xl overflow-hidden cursor-pointer
        transition-all duration-150 active:scale-[0.97]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50
        ${isSelected
          ? 'ring-2 ring-white'
          : 'ring-1 ring-[#262626] hover:ring-[#404040]'
        }
      `}
    >
      <div className="relative w-full aspect-[4/5] bg-[#171717]">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-[#1a1a1a]" />
        )}
        <img
          src={option.image}
          alt={option.label}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`
            absolute inset-0 w-full h-full object-cover transition-all duration-200
            ${loaded ? '' : 'opacity-0'}
            ${isSelected ? 'opacity-100' : 'opacity-60 group-hover:opacity-80'}
          `}
        />

        {/* Label at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-1.5 py-1.5 bg-gradient-to-t from-black/80 to-transparent">
          <span className={`
            text-[10px] font-medium leading-tight block text-center truncate
            ${isSelected ? 'text-white' : 'text-zinc-300'}
          `}>
            {option.displayName || option.label}
          </span>
        </div>

        {/* Check */}
        {isSelected && (
          <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-white flex items-center justify-center">
            <Check className="w-2.5 h-2.5 text-black" strokeWidth={3} />
          </div>
        )}
      </div>
    </button>
  );
}
