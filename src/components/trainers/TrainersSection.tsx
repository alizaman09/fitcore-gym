import React from 'react';
import { TRAINERS_PROFILES } from '../../data/gymData';
import { TrainerProfile } from '../../types';

interface TrainersSectionProps {
  onBookTrainer: (trainer: TrainerProfile) => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onBookTrainer }) => {
  return (
    <section id="trainers" className="w-full bg-black py-20 md:py-28 m-0">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
            OUR TRAINERS
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto">
            Expert trainers to guide, motivate, and support you on every step of your fitness journey.
          </p>
        </div>

        {/* 3-Column Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {TRAINERS_PROFILES.map((trainer) => (
            <div
              key={trainer.id}
              className="rounded-2xl overflow-hidden bg-[#0e0f13] border border-neutral-800 hover:border-[#ff5000]/50 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              {/* Image Container with vertical proportions, object-fit: cover and background-position: center */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#15161c]">
                <img
                  src={trainer.image}
                  onError={(e) => {
                    if (trainer.fallbackImage) {
                      e.currentTarget.src = trainer.fallbackImage;
                    }
                  }}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-95 contrast-105 select-none"
                />
                {/* Gradient Scrim for crisp text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-[#ff5000] font-semibold">
                    {trainer.role}
                  </p>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {trainer.specialty} · {trainer.experience}
                </p>

                <button
                  onClick={() => onBookTrainer(trainer)}
                  className="w-full py-2.5 px-3 bg-[#151720] hover:bg-[#ff5000] text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all border border-neutral-800 hover:border-[#ff5000] cursor-pointer"
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
