/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { HeroSection } from './components/hero/HeroSection';
import { ProgramsSection } from './components/programs/ProgramsSection';
import { GiveShapeSection } from './components/features/GiveShapeSection';
import { ScheduleSection } from './components/schedule/ScheduleSection';
import { TrainersSkillsSection } from './components/trainers/TrainersSkillsSection';
import { PricingSection } from './components/pricing/PricingSection';
import { TrainersSection } from './components/trainers/TrainersSection';
import { FreePassModal } from './components/modals/FreePassModal';
import { BookingModal } from './components/modals/BookingModal';
import { ProgramDetailModal } from './components/modals/ProgramDetailModal';
import { ProgramItem, ScheduleSlot, TrainerProfile, PricingTier } from './types';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [preselectedPlan, setPreselectedPlan] = useState<string | undefined>(undefined);

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [selectedSlot, setSelectedSlot] = useState<ScheduleSlot | null>(null);
  const [selectedTrainer, setSelectedTrainer] = useState<TrainerProfile | null>(null);

  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  const handleOpenJoinNow = (planName?: string) => {
    setPreselectedPlan(planName);
    setIsJoinModalOpen(true);
  };

  const handleExploreMore = () => {
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSchedule = () => {
    const el = document.getElementById('schedule');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookSlot = (day: string, slot: ScheduleSlot) => {
    setSelectedDay(day);
    setSelectedSlot(slot);
    setSelectedTrainer(null);
    setIsBookingModalOpen(true);
  };

  const handleBookTrainer = (trainer: TrainerProfile) => {
    setSelectedTrainer(trainer);
    setSelectedSlot(null);
    setIsBookingModalOpen(true);
  };

  const handleSelectPlan = (plan: PricingTier) => {
    handleOpenJoinNow(`${plan.name} ($${plan.price}/mo)`);
  };

  return (
    <div className="w-full min-h-screen bg-black text-[#f3f4f6] flex flex-col m-0 p-0 overflow-x-hidden selection:bg-[#ff5000] selection:text-white">
      {/* Top Navbar */}
      <Navbar onJoinNow={() => handleOpenJoinNow()} />

      <main className="w-full flex-1 m-0 p-0 overflow-x-hidden">
        {/* 1. Hero Section: "UNLEASH YOUR POTENTIAL" + 2 buttons + Athlete Photography */}
        <HeroSection
          onGetStarted={() => handleOpenJoinNow()}
          onExploreMore={handleExploreMore}
        />

        {/* 2. OUR PROGRAMS: 2x2 grid with exact Behance images and orange arrow buttons */}
        <ProgramsSection
          onSelectProgram={(program) => setSelectedProgram(program)}
        />

        {/* 3. GIVE SHAPE TO YOUR BODY: B&W Athletic Woman Photo + Copy + Orange Button */}
        <GiveShapeSection
          onExploreMore={handleExploreMore}
        />

        {/* 4. OUR SCHEDULE: Filter tabs (Classes, Flexibility, Cardio, etc.) + Timetable Grid */}
        <ScheduleSection
          onBookSlot={handleBookSlot}
        />

        {/* 5. GET STRONGER AND FITTER WITH OUR EXPERIENCED TRAINERS: Battle ropes photo + Progress bars */}
        <TrainersSkillsSection />

        {/* 6. START YOUR BODY GOAL FROM CHOOSING OUR PACKAGE: Basic $299, Regular $399 (Highlighted), Premium $599 */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
        />

        {/* 7. OUR TRAINERS: Coach cards with maroon shirt coach photo */}
        <TrainersSection
          onBookTrainer={handleBookTrainer}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bar (<15% mobile viewport cap) */}
      <MobileStickyBar
        onJoinNow={() => handleOpenJoinNow()}
        onOpenSchedule={handleOpenSchedule}
      />

      {/* Modals */}
      <FreePassModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        preselectedPlan={preselectedPlan}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        day={selectedDay}
        slot={selectedSlot}
        trainer={selectedTrainer}
      />

      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onJoinProgram={() => {
          setSelectedProgram(null);
          handleOpenJoinNow(selectedProgram?.title);
        }}
      />
    </div>
  );
}
