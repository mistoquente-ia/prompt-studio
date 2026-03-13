import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import SelectorCard from './SelectorCard';

export default function SelectorGrid({
  options,
  selectedValue,
  onSelect,
  multiSelect = false,
  categoryKey,
}) {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search.trim()) return options;
    const q = search.toLowerCase();
    return options.filter((o) => o.label.toLowerCase().includes(q));
  }, [options, search]);

  const isSelected = (option) => {
    if (multiSelect) {
      return Array.isArray(selectedValue) && selectedValue.includes(option.label);
    }
    return selectedValue === option.label;
  };

  const isGif = categoryKey === 'videoMovement';

  return (
    <div className="space-y-4">
      {options.length > 12 && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-[#171717] border border-[#262626] rounded-xl
                       text-sm text-white placeholder-zinc-600
                       focus:outline-none focus:border-zinc-500
                       transition-colors"
          />
        </div>
      )}

      <div className={`
        grid gap-2.5
        ${isGif
          ? 'grid-cols-2 sm:grid-cols-3'
          : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'
        }
      `}>
        {filtered.map((option) => (
          <SelectorCard
            key={option.id}
            option={option}
            isSelected={isSelected(option)}
            onClick={() => onSelect(option.label)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-zinc-600 text-sm py-8">
          No results for "{search}"
        </p>
      )}
    </div>
  );
}
