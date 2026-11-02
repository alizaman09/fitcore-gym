import React, { useState } from 'react';
import { SCHEDULE_TABS, WEEKLY_SCHEDULE } from '../../data/gymData';
import { ScheduleSlot } from '../../types';

interface ScheduleSectionProps {
  onBookSlot: (day: string, slot: ScheduleSlot) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onBookSlot }) => {
  const [activeTab, setActiveTab] = useState('Classes');

  return (
    <section id="schedule" className="w-full bg-black py-20 md:py-28 m-0 p-0 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-16">
        {/* Section Title */}
        <div className="text-center space-y-2 mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
            OUR SCHEDULE
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10 px-2">
          {SCHEDULE_TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#ff5000] text-white shadow-md shadow-[#ff5000]/20'
                    : 'bg-[#121318] text-neutral-400 hover:text-white hover:bg-[#1a1c24] border border-neutral-800/80'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Timetable Grid Container: Full width edge-to-edge on mobile, scrollable */}
      <div className="w-full overflow-x-auto pb-4 pt-2 scrollbar-thin px-0 sm:px-6 lg:px-16">
        <div className="w-full min-w-[850px] border-y sm:border sm:border-neutral-800/90 sm:rounded-2xl bg-[#090a0d] p-3 sm:p-6 space-y-3">
          {WEEKLY_SCHEDULE.map((dayRow) => (
            <div
              key={dayRow.day}
              className="grid grid-cols-6 gap-2 sm:gap-3 items-center w-full"
            >
              {/* Day Label Cell */}
              <div className="py-3 px-2 sm:px-3 bg-[#121318] border border-neutral-800 rounded-xl text-center min-w-[100px] sm:min-w-[120px]">
                <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  {dayRow.day}
                </span>
              </div>

              {/* 5 Time Slot Cells with min-width to prevent breaking text */}
              {dayRow.slots.map((slot, idx) => {
                if (!slot) {
                  return (
                    <div
                      key={idx}
                      className="h-12 sm:h-14 rounded-xl bg-[#0d0e12] border border-neutral-900/60 min-w-[130px] sm:min-w-[150px]"
                    />
                  );
                }

                return (
                  <button
                    key={idx}
                    onClick={() => onBookSlot(dayRow.day, slot)}
                    title={`Click to book ${slot.className} on ${dayRow.day}`}
                    className="h-12 sm:h-14 px-3 rounded-xl bg-[#14161e] border border-neutral-800 hover:border-[#ff5000] text-center flex flex-col justify-center items-center transition-all cursor-pointer group min-w-[130px] sm:min-w-[150px]"
                  >
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-neutral-200 group-hover:text-[#ff5000] transition-colors whitespace-nowrap leading-tight">
                      {slot.time}
                    </span>
                    <span className="text-[10px] text-neutral-400 truncate w-full mt-0.5">
                      {slot.className}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-16">
        <p className="text-center text-[11px] text-neutral-500 mt-4">
          Swipe horizontally to view full weekly schedule. Click any time slot to reserve your spot.
        </p>
      </div>
    </section>
  );
};
