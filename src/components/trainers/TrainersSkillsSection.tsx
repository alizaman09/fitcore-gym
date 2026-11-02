import React, { useState } from 'react';
import { TRAINER_SKILLS } from '../../data/gymData';

export const TrainersSkillsSection: React.FC = () => {
  const [imgSrc, setImgSrc] = useState('https://i.postimg.cc/52xyXrtW/gym-7.jpg');

  return (
    <section className="w-full bg-black py-20 md:py-28 m-0">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column: Custom Gym-7 Image with Orange Parallelogram Accent */}
          <div className="md:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800/80 shadow-2xl bg-[#0e0f13] aspect-[16/10] sm:aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/10] group">
              {/* Preserved Orange Graphic Badge / Parallelogram Tag in top left */}
              <div className="absolute top-4 left-4 z-10 w-12 h-4 bg-[#ff5000] -skew-x-12 shadow-md" />

              <img
                src={imgSrc}
                onError={() => setImgSrc('/assets/fitcore/gym-7.jpg')}
                alt="Fitter With Our Experienced Trainers"
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out select-none"
              />
            </div>
          </div>

          {/* Right Column: Heading, Copy, and Orange Progress Skill Bars */}
          <div className="md:col-span-6 space-y-6 text-left">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
              FITTER WITH OUR <br />
              EXPERIENCED TRAINERS
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md">
              Build strength and confidence with support from our expert trainers, dedicated to your success.
            </p>

            {/* Progress Bars */}
            <div className="space-y-4 pt-2">
              {TRAINER_SKILLS.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-neutral-300">
                    <span>{skill.name}</span>
                    <span className="font-mono text-neutral-400">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#181920] rounded-full overflow-hidden border border-neutral-800">
                    <div
                      className="h-full bg-[#ff5000] rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(255,80,0,0.5)]"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
