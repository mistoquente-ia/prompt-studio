import { Sparkles } from 'lucide-react';

export default function MoodInput({ value, onChange }) {
  return (
    <div className="px-4 py-4">
      <div className="relative">
        <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00E5FF]/60" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Describe your subject or scene..."
          className="w-full pl-12 pr-4 py-3.5 bg-[#141416] border border-[#2A2A30] rounded-2xl
                     text-sm text-white placeholder-gray-500
                     focus:outline-none focus:border-[#00E5FF]/40 focus:ring-2 focus:ring-[#00E5FF]/10
                     transition-all"
        />
      </div>
    </div>
  );
}
