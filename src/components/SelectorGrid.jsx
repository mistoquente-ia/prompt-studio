import { useState, useMemo } from 'react';
import { IconSearch } from './SvgIcons';
import SelectorCard from './SelectorCard';

export default function SelectorGrid({
  options,
  selectedValue,
  onSelect,
  multiSelect = false,
  categoryKey,
  getIcon,
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Search bar — shown when 12+ options */}
      {options.length > 12 && (
        <div style={{ position: 'relative' }}>
          <IconSearch style={{
            position: 'absolute',
            left: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
            color: '#52525b',
          }} />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input"
            style={{
              paddingLeft: 38,
              fontSize: 14,
            }}
          />
        </div>
      )}

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: 8,
      }}>
        {filtered.map((option) => (
          <SelectorCard
            key={option.id}
            option={option}
            isSelected={isSelected(option)}
            onClick={() => onSelect(option.label)}
            icon={getIcon ? getIcon(option) : null}
          />
        ))}
      </div>

      {/* No results */}
      {filtered.length === 0 && (
        <p style={{
          textAlign: 'center',
          color: '#52525b',
          fontSize: 14,
          padding: '32px 0',
        }}>
          No results for "{search}"
        </p>
      )}
    </div>
  );
}
