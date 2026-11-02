import React from 'react';
import { Calendar, Flame } from 'lucide-react';

interface MobileStickyBarProps {
  onJoinNow: () => void;
  onOpenSchedule: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onJoinNow, onOpenSchedule }) => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-black/95 backdrop-blur-md border-t border-neutral-800 px-3 py-2"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <button
          onClick={onOpenSchedule}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#13151c] hover:bg-[#1a1d26] border border-neutral-800 text-neutral-200 text-xs font-semibold rounded-full active:scale-95 transition-transform cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-[#ff5000]" />
          <span className="truncate">Schedule</span>
        </button>

        <button
          onClick={onJoinNow}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#ff5000] hover:bg-[#e04600] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md shadow-[#ff5000]/20 active:scale-95 transition-transform cursor-pointer"
        >
          <Flame className="w-3.5 h-3.5 fill-white" />
          <span className="truncate">Join Now</span>
        </button>
      </div>
    </aside>
  );
};
