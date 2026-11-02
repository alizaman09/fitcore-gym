import React, { useState } from 'react';
import { Flame } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
  onExploreMore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onGetStarted,
  onExploreMore,
}) => {
  const [imgSrc, setImgSrc] = useState('https://i.postimg.cc/28Dx3zRJ/gym-1.jpg');

  return (
    <section
      id="home"
      className="relative w-full min-h-[640px] md:min-h-[740px] flex items-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black m-0 p-0"
    >
      {/* Edge-to-edge Background Hero Gym Facility Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src={imgSrc}
          onError={() => setImgSrc('/assets/fitcore/gym-1.jpg')}
          alt="Fitcore Gym Facility"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105 select-none"
        />

        {/* Linear gradient overlay to pure black on the left side for high-contrast text */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black via-black/90 md:via-black/75 to-black/30" />

        {/* Top gradient for transparent navbar readability */}
        <div className="absolute inset-x-0 top-0 w-full h-40 bg-gradient-to-b from-black via-black/70 to-transparent" />

        {/* Bottom gradient to seamlessly blend into subsequent sections */}
        <div className="absolute inset-x-0 bottom-0 w-full h-36 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Foreground Content with balanced inner padding */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl space-y-6 text-left">
          {/* Top Tag with Flame */}
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-neutral-300">
            <Flame className="w-4 h-4 fill-[#ff5000] text-[#ff5000]" />
            <span>SHAPE YOUR BODY</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[0.95] drop-shadow-md">
            UNLEASH YOUR <br />
            <span className="text-[#ff5000]">POTENTIAL</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-neutral-300 max-w-lg font-normal leading-relaxed drop-shadow">
            Join a community where goals are crushed, strength is built, and potential becomes power.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={onGetStarted}
              className="px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#ff5000] hover:bg-[#e04600] rounded-full transition-all duration-150 active:scale-95 shadow-lg shadow-[#ff5000]/25 cursor-pointer"
            >
              Get Started
            </button>

            <button
              onClick={onExploreMore}
              className="px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-black/40 hover:bg-neutral-900/80 border border-neutral-600 hover:border-neutral-300 rounded-full transition-all duration-150 active:scale-95 backdrop-blur-sm cursor-pointer"
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
