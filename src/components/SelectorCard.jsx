import { useState } from 'react';
import { IconCheck } from './SvgIcons';

export default function SelectorCard({ option, isSelected, onClick, icon: IconComponent }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        padding: '16px 8px 12px',
        background: isSelected ? '#1a1a1a' : hovered ? '#1f1f1f' : '#171717',
        border: isSelected ? '2px solid #ffffff' : `1px solid ${hovered ? '#333' : '#262626'}`,
        borderRadius: 12,
        cursor: 'pointer',
        transition: 'all 0.2s',
        outline: 'none',
        minHeight: 90,
        fontFamily: 'inherit',
      }}
    >
      {/* Check icon when selected */}
      {isSelected && (
        <div style={{
          position: 'absolute',
          top: 8,
          right: 8,
          width: 18,
          height: 18,
          background: '#fff',
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <IconCheck style={{ width: 12, height: 12, color: '#000' }} />
        </div>
      )}

      {/* SVG Icon */}
      <div style={{
        width: 32,
        height: 32,
        color: isSelected ? '#fff' : hovered ? '#a1a1aa' : '#52525b',
        transition: 'color 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {IconComponent ? (
          <IconComponent style={{ width: 28, height: 28 }} />
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 28, height: 28 }}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l3 3" />
          </svg>
        )}
      </div>

      {/* Label */}
      <span style={{
        fontSize: 11,
        fontWeight: isSelected ? 600 : 400,
        color: isSelected ? '#fff' : '#a1a1aa',
        letterSpacing: '0.01em',
        textAlign: 'center',
        lineHeight: 1.3,
        transition: 'color 0.2s',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        width: '100%',
        fontFamily: 'inherit',
      }}>
        {option.displayName || option.label}
      </span>
    </button>
  );
}
