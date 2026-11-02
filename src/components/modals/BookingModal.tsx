import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { ScheduleSlot, TrainerProfile } from '../../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  day?: string;
  slot?: ScheduleSlot | null;
  trainer?: TrainerProfile | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  day,
  slot,
  trainer,
}) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [ticketId, setTicketId] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Please provide your athlete name.');
      return;
    }
    if (!phone.trim() || phone.length < 8) {
      setError('Please provide a valid phone number.');
      return;
    }

    const resId = 'RES-' + Math.floor(10000 + Math.random() * 90000);
    setTicketId(resId);
    setError('');
    setStep('confirmed');
  };

  const handleReset = () => {
    setStep('form');
    setFullName('');
    setPhone('');
    setError('');
    onClose();
  };

  const title = slot ? `${slot.className} (${slot.time})` : trainer ? `Personal Training: ${trainer.name}` : 'Reserve Class Spot';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={handleReset}
      />

      <div className="relative w-full max-w-md bg-[#0c0d11] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="p-6 sm:p-7 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff5000]">
                {slot ? 'SCHEDULE RESERVATION' : 'TRAINER SESSION'}
              </span>
              <h3 className="font-display text-2xl font-bold uppercase text-white mt-1">
                {title}
              </h3>
              {slot && day && (
                <div className="text-xs text-neutral-400 mt-1">
                  {day} · {slot.room} · Coach: {slot.trainer}
                </div>
              )}
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-400">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Athlete Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Jordan Miller"
                  className="w-full px-4 py-2.5 bg-[#14161f] border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#ff5000]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Mobile Phone (SMS Confirmation) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 482-1920"
                  className="w-full px-4 py-2.5 bg-[#14161f] border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#ff5000]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#ff5000] hover:bg-[#e04600] text-white font-display text-sm font-bold uppercase tracking-wider rounded-full transition-all shadow-md shadow-[#ff5000]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Confirm Reservation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[11px] text-neutral-500 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ff5000]" />
                <span>Reserved spot held up to 10 minutes prior to session</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-6 sm:p-7 space-y-5 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#ff5000]/20 border border-[#ff5000] flex items-center justify-center text-[#ff5000]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff5000]">
                RESERVATION CONFIRMED
              </span>
              <h3 className="font-display text-2xl font-bold uppercase text-white mt-1">
                SEE YOU ON THE FLOOR
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                A confirmation SMS with QR check-in has been sent to your number.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#14161f] border border-neutral-800 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Reservation Code:</span>
                <span className="font-mono font-bold text-[#ff5000]">{ticketId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Session:</span>
                <span className="font-bold text-white truncate max-w-[200px]">{title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Athlete:</span>
                <span className="font-bold text-white">{fullName}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 bg-[#ff5000] hover:bg-[#e04600] text-white font-display text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
