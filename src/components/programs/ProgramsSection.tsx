import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BEHANCE_PROGRAMS } from '../../data/gymData';
import { ProgramItem } from '../../types';

interface ProgramsSectionProps {
  onSelectProgram: (program: ProgramItem) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  return (
    <section id="programs" className="w-full bg-black py-20 md:py-28 m-0">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
            OUR PROGRAMS
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto">
            Discover the perfect programs to match your goals and fitness level.
          </p>
        </div>

        {/* 2x2 Grid on desktop, 1x4 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BEHANCE_PROGRAMS.map((program) => (
            <div
              key={program.id}
              onClick={() => onSelectProgram(program)}
              className="group relative rounded-2xl overflow-hidden bg-[#0e0f13] border border-neutral-800/80 hover:border-[#ff5000]/60 transition-all duration-300 cursor-pointer aspect-[16/9] flex flex-col justify-end p-5 sm:p-6 shadow-xl"
            >
              {/* Background Cover Image filling the entire card area */}
              <img
                src={program.image}
                onError={(e) => {
                  if (program.fallbackImage) {
                    e.currentTarget.src = program.fallbackImage;
                  }
                }}
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-90 contrast-110 select-none"
              />

              {/* Dark Gradient Overlay: transparent at the top, dark black/translucent at the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

              {/* Content overlay */}
              <div className="relative z-10 flex items-end justify-between gap-4">
                <div className="space-y-1.5 max-w-[82%]">
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wider text-white group-hover:text-[#ff5000] transition-colors drop-shadow-sm">
                    {program.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed drop-shadow">
                    {program.description}
                  </p>
                </div>

                {/* Orange circle arrow button */}
                <div className="w-8 h-8 rounded-full bg-[#ff5000] text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#e04600] group-hover:scale-110 transition-all">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
