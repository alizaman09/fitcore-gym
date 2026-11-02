import React from 'react';
import { X, Clock, Flame, ArrowRight, Check } from 'lucide-react';
import { ProgramItem } from '../../types';

interface ProgramDetailModalProps {
  program: ProgramItem | null;
  onClose: () => void;
  onJoinProgram: () => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onJoinProgram,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-[#0c0d11] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
          <img
            src={program.image}
            onError={(e) => {
              if (program.fallbackImage) {
                e.currentTarget.src = program.fallbackImage;
              }
            }}
            alt={program.title}
            className="w-full h-full object-cover filter contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d11] via-black/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff5000] block mb-1">
              {program.category}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
              {program.title}
            </h3>
          </div>
        </div>

        <div className="p-6 sm:p-7 space-y-5">
          <div className="flex items-center gap-4 text-xs font-mono text-neutral-300">
            <span className="flex items-center gap-1.5 bg-[#141620] px-3 py-1 rounded-md border border-neutral-800">
              <Clock className="w-3.5 h-3.5 text-[#ff5000]" />
              {program.duration}
            </span>
            <span className="flex items-center gap-1.5 bg-[#141620] px-3 py-1 rounded-md border border-neutral-800">
              <Flame className="w-3.5 h-3.5 text-[#ff5000]" />
              {program.intensity}
            </span>
          </div>

          <p className="text-sm text-neutral-300 leading-relaxed">
            {program.description}
          </p>

          <div className="space-y-2 pt-1">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Key Focus Areas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#141620] border border-neutral-800/80">
                <Check className="w-3.5 h-3.5 text-[#ff5000] shrink-0" />
                <span>Targeted Progressive Overload</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#141620] border border-neutral-800/80">
                <Check className="w-3.5 h-3.5 text-[#ff5000] shrink-0" />
                <span>Coach Form Assessment</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#141620] border border-neutral-800/80">
                <Check className="w-3.5 h-3.5 text-[#ff5000] shrink-0" />
                <span>Metabolic Work Capacity</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#141620] border border-neutral-800/80">
                <Check className="w-3.5 h-3.5 text-[#ff5000] shrink-0" />
                <span>Recovery Protocols</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-400">
              Included in Regular & Premium Plans
            </span>
            <button
              onClick={() => {
                onClose();
                onJoinProgram();
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#ff5000] hover:bg-[#e04600] text-white font-display text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Join This Program</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
