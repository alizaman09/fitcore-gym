import React, { useState } from 'react';
import { X, CheckCircle, Flame, ArrowRight, ShieldCheck, Download } from 'lucide-react';

interface FreePassModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlan?: string;
}

export const FreePassModal: React.FC<FreePassModalProps> = ({
  isOpen,
  onClose,
  preselectedPlan,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(preselectedPlan || 'Regular Plan ($399/mo)');
  const [error, setError] = useState('');
  const [passId, setPassId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Please provide your full athlete name.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid athlete email address.');
      return;
    }
    if (phone.trim().length < 8) {
      setError('Please enter a valid phone number.');
      return;
    }

    const randomId = 'FIT-' + Math.floor(1000 + Math.random() * 9000);
    setPassId(randomId);
    setError('');
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    setFullName('');
    setEmail('');
    setPhone('');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
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
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#ff5000] mb-1">
                <Flame className="w-4 h-4 fill-[#ff5000]" />
                <span>START YOUR MEMBERSHIP</span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide">
                JOIN FITCORE TODAY
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Complete your athlete registration to receive your instant digital gym access pass.
              </p>
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-400">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Full Athlete Name *
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
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jordan@fitcore.com"
                  className="w-full px-4 py-2.5 bg-[#14161f] border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#ff5000]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Phone (SMS Pass) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 019-2834"
                  className="w-full px-4 py-2.5 bg-[#14161f] border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#ff5000]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Selected Package
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#14161f] border border-neutral-800 rounded-xl text-white text-xs focus:outline-none focus:border-[#ff5000]"
                >
                  <option value="Basic Plan ($299/mo)">Basic Plan ($299/mo)</option>
                  <option value="Regular Plan ($399/mo)">Regular Plan ($399/mo) — Most Popular</option>
                  <option value="Premium Plan ($599/mo)">Premium Plan ($599/mo) — VIP</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#ff5000] hover:bg-[#e04600] text-white font-display text-sm font-bold uppercase tracking-wider rounded-full transition-all shadow-lg shadow-[#ff5000]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Activate Membership Pass</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[11px] text-neutral-400 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ff5000]" />
                <span>Zero lock-in contract · Cancel or pause anytime</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#ff5000]/20 border border-[#ff5000] flex items-center justify-center text-[#ff5000]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff5000]">
                MEMBERSHIP CONFIRMED
              </span>
              <h3 className="font-display text-2xl font-bold uppercase text-white mt-1">
                WELCOME TO FITCORE
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Present this barcode at the club front desk for instant biometric enrollment.
              </p>
            </div>

            <div className="rounded-2xl bg-[#14161f] border border-[#ff5000]/50 p-5 text-left text-xs space-y-3 shadow-xl">
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Pass Code:</span>
                <span className="font-mono font-bold text-[#ff5000]">{passId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Athlete:</span>
                <span className="font-bold text-white">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Package:</span>
                <span className="font-bold text-white">{selectedPlan}</span>
              </div>

              {/* Barcode Mock Visual */}
              <div className="pt-3 border-t border-neutral-800 flex flex-col items-center">
                <div className="w-full h-10 bg-white rounded flex items-center justify-around px-3 overflow-hidden">
                  {[3, 2, 5, 2, 4, 6, 2, 3, 5, 2, 7, 3, 2, 4, 2, 5, 2, 6, 3, 2].map(
                    (w, idx) => (
                      <div
                        key={idx}
                        className="h-full bg-black"
                        style={{ width: `${w * 1.5}px` }}
                      />
                    )
                  )}
                </div>
                <span className="text-[10px] font-mono text-neutral-400 mt-1 tracking-widest">
                  *{passId}*
                </span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  alert(`Membership Pass #${passId} saved to your device!`);
                }}
                className="flex-1 py-3 px-4 bg-[#ff5000] hover:bg-[#e04600] text-white font-display text-xs font-bold uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Save Pass</span>
              </button>
              <button
                onClick={handleReset}
                className="py-3 px-6 bg-[#161822] hover:bg-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-wider rounded-full border border-neutral-800 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
