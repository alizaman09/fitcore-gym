import React, { useState } from 'react';

interface GiveShapeSectionProps {
  onExploreMore: () => void;
}

export const GiveShapeSection: React.FC<GiveShapeSectionProps> = ({ onExploreMore }) => {
  const [imgSrc, setImgSrc] = useState('https://i.postimg.cc/JhMnB24t/gym-6.jpg');

  return (
    <section id="about" className="w-full bg-black py-20 md:py-28 overflow-hidden m-0">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Left Column: Custom Workout Image */}
          <div className="md:col-span-6 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden max-w-md md:max-w-lg w-full aspect-[4/5] sm:aspect-square border border-neutral-800/80 shadow-2xl bg-[#0e0f13] group">
              <img
                src={imgSrc}
                onError={() => setImgSrc('/assets/fitcore/gym-6.jpg')}
                alt="Give Shape to Your Body"
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out select-none"
              />
              {/* Subtle inner dark gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Headline, Copy, and Bright Orange Pill Button */}
          <div className="md:col-span-6 space-y-6 text-left">
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              GIVE SHAPE TO <br />
              YOUR BODY
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-md">
              At <strong className="text-white font-semibold">FITCORE</strong>, we help you build strength, confidence, and lasting habits. With expert coaches and proven programs, we guide you toward your best shape.
            </p>

            <div>
              <button
                onClick={onExploreMore}
                className="px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#ff5000] hover:bg-[#e04600] rounded-full transition-all duration-150 active:scale-95 shadow-lg shadow-[#ff5000]/25 cursor-pointer"
              >
                EXPLORE MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
