import { useState } from 'react';
import SelectorGrid from './SelectorGrid';

export default function CategorySection({
  category,
  selectedValue,
  onToggleSingle,
  onToggleMulti,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedCount = category.multiSelect
    ? (Array.isArray(selectedValue) ? selectedValue.length : 0)
    : (selectedValue ? 1 : 0);

  const handleSelect = (label) => {
    if (category.multiSelect) {
      onToggleMulti(category.key, label);
    } else {
      onToggleSingle(category.key, label);
    }
  };

  return (
    <div className="border-b border-[#2A2A30] last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-2.5 hover:bg-[#141416] transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-2.5">
          <h3 className="text-[11px] font-semibold text-white uppercase tracking-[0.08em]">
            {category.label}
          </h3>
          {selectedCount > 0 && (
            <span className="inline-flex items-center justify-center min-w-[16px] h-4 px-1 rounded-full bg-[#00E5FF] text-black text-[9px] font-bold">
              {selectedCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {selectedCount > 0 && !category.multiSelect && (
            <span className="text-[10px] text-[#00E5FF]/70 truncate max-w-[180px] font-medium">
              {selectedValue}
            </span>
          )}
          <svg
            className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div className={`
        overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="px-5 pb-4 pt-1">
          <SelectorGrid
            options={category.options}
            selectedValue={selectedValue}
            onSelect={handleSelect}
            multiSelect={category.multiSelect}
            categoryKey={category.key}
          />
        </div>
      </div>
    </div>
  );
}
