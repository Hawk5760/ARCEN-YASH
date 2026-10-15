import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AccessModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    role: 'Jewelry Manufacturer',
    monthlyVolume: '50 - 200 SKUs',
    primaryAlloy: '18K Gold & Platinum',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8A5A2B', '#141413', '#F4F0EA']
      });
    } catch (err) {}
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      
      <div 
        className="relative w-full max-w-xl bg-[#F4F0EA] border border-[#D8D2C4] shadow-2xl p-8 md:p-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 text-[#7D776F] hover:text-[#141413] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#8A5A2B] text-white flex items-center justify-center mx-auto shadow-luxury">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-[#8A5A2B] block">
              ACCESS INVITATION QUEUED
            </span>

            <h3 className="font-editorial text-3xl font-bold text-[#141413]">
              Thank you, {formData.name || 'Partner'}.
            </h3>

            <p className="text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
              Our engineering partnership team is onboarding manufacturing facilities in private tranches. We have received your parameters for <span className="font-semibold text-[#141413]">{formData.company || 'your studio'}</span> and will reach out with pilot API credentials within 24 business hours.
            </p>

            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-8 py-3 bg-[#8A5A2B] text-[#F4F0EA] text-xs font-semibold uppercase tracking-widest hover:bg-[#6E441E] transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white/70 border border-[#D8D2C4] text-[10px] font-mono tracking-widest text-[#8A5A2B] uppercase mb-3">
                <span className="w-1.5 h-1.5 bg-[#8A5A2B] rounded-full"></span>
                B2B PILOT PROGRAM
              </div>

              <h3 className="font-editorial text-3xl font-bold text-[#141413]">
                Request Private Access
              </h3>

              <p className="text-xs sm:text-sm text-[#555555] mt-2">
                Deploy ARCEN's automated physical-to-CAD pipeline into your factory workflow. Connect directly with our engineering team for custom casting calibration.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-wider text-[#7D776F] mb-1">
                    Your Full Name *
                  </label>
                  <input 
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Marcello Rossi"
                    className="w-full p-2.5 bg-white border border-[#D8D2C4] focus:border-[#8A5A2B] focus:outline-none text-[#222]"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-[#7D776F] mb-1">
                    Company / Atelier *
                  </label>
                  <input 
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Valenza Casting Works Ltd"
                    className="w-full p-2.5 bg-white border border-[#D8D2C4] focus:border-[#8A5A2B] focus:outline-none text-[#222]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-wider text-[#7D776F] mb-1">
                    Work Email *
                  </label>
                  <input 
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="marcello@valenzacasting.com"
                    className="w-full p-2.5 bg-white border border-[#D8D2C4] focus:border-[#8A5A2B] focus:outline-none text-[#222]"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-[#7D776F] mb-1">
                    Business Model
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full p-2.5 bg-white border border-[#D8D2C4] focus:border-[#8A5A2B] focus:outline-none text-[#222]"
                  >
                    <option>Jewelry Manufacturer (OEM/ODM)</option>
                    <option>Bespoke / High Jewelry Atelier</option>
                    <option>Private Label Brand</option>
                    <option>Contract Casting & 3D Print House</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-wider text-[#7D776F] mb-1">
                    Monthly SKU Volume
                  </label>
                  <select
                    value={formData.monthlyVolume}
                    onChange={(e) => setFormData({...formData, monthlyVolume: e.target.value})}
                    className="w-full p-2.5 bg-white border border-[#D8D2C4] focus:border-[#8A5A2B] focus:outline-none text-[#222]"
                  >
                    <option>&lt; 50 SKUs / month</option>
                    <option>50 - 200 SKUs / month</option>
                    <option>200 - 500 SKUs / month</option>
                    <option>500+ SKUs / month (Enterprise)</option>
                  </select>
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-[#7D776F] mb-1">
                    Primary Casting Alloys
                  </label>
                  <select
                    value={formData.primaryAlloy}
                    onChange={(e) => setFormData({...formData, primaryAlloy: e.target.value})}
                    className="w-full p-2.5 bg-white border border-[#D8D2C4] focus:border-[#8A5A2B] focus:outline-none text-[#222]"
                  >
                    <option>18K Gold & 950 Platinum</option>
                    <option>14K / 18K Yellow, White, Rose Gold</option>
                    <option>925 Sterling Silver</option>
                    <option>Multi-Alloy High Jewelry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[#7D776F] mb-1">
                  Specific Factory Requirements or CAD Software in Use
                </label>
                <textarea 
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="e.g. Currently running Rhino 8 and EnvisionTEC resin printers. Interested in automated stone seat tolerances."
                  className="w-full p-2.5 bg-white border border-[#D8D2C4] focus:border-[#8A5A2B] focus:outline-none text-[#222]"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#8A5A2B] hover:bg-[#6E441E] text-[#F4F0EA] text-xs font-semibold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Submit Pilot Application</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[10px] text-center text-[#7D776F] pt-2">
                Enterprise NDA & proprietary CAD geometry IP protection guaranteed.
              </div>
            </form>
          </div>
        )}

      </div>

    </div>
  );
}
