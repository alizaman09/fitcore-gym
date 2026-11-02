import React from 'react';
import { PRICING_PACKAGES } from '../../data/gymData';
import { PricingTier } from '../../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingTier) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="w-full bg-black py-20 md:py-28 m-0">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-14">
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
              START YOUR BODY GOAL FROM <br />
              CHOOSING OUR PACKAGE
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Kickstart your fitness journey with a package tailored to your needs. Whether you are aiming to build strength, lose weight, improve overall wellness, or simply feel more confident in your skin.
            </p>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRICING_PACKAGES.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl flex flex-col justify-between p-6 sm:p-7 transition-all duration-200 bg-[#0d0e12] ${
                plan.popular
                  ? 'border-2 border-[#ff5000] shadow-2xl shadow-[#ff5000]/15'
                  : 'border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {/* Popular Badge on Top */}
              {plan.popular && (
                <div className="absolute -top-3 left-6 bg-[#ff5000] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded shadow-md">
                  POPULAR
                </div>
              )}

              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed min-h-[32px] mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-neutral-800/80">
                  <span className="font-display text-4xl sm:text-5xl font-black text-white font-mono">
                    ${plan.price}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">/ month</span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 text-xs text-neutral-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5000] shrink-0 mt-1.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                    plan.popular
                      ? 'bg-[#ff5000] hover:bg-[#e04600] text-white shadow-lg shadow-[#ff5000]/25'
                      : 'bg-[#171922] hover:bg-[#202330] text-neutral-200 hover:text-white border border-neutral-800'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
