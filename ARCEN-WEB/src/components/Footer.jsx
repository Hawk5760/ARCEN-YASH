import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Footer({ onRequestAccess }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#141413] text-[#F4F0EA] border-t border-[#8A5A2B]/40 pt-20 pb-12 relative overflow-hidden">
      
      {/* Decorative architectural grid on footer */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(216,210,196,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Wordmark and Manifesto */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-3">
              <span className="font-editorial text-4xl font-bold tracking-tight text-[#F4F0EA]">
                ARCEN
              </span>
              <div className="w-16 h-[2px] bg-[#8A5A2B]"></div>
              <p className="font-serif text-sm text-[#CCA77C] tracking-widest uppercase">
                FROM IMAGINATION TO REALITY
              </p>
            </div>

            <p className="text-xs text-white/60 leading-relaxed font-normal max-w-sm">
              The AI-powered geometry and metallurgy engine transforming physical jewelry references into production-ready, manufacturing-validated CAD models for fine jewelry manufacturers worldwide.
            </p>

            <div className="pt-2">
              <button
                onClick={onRequestAccess}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8A5A2B] hover:bg-[#A36D36] text-[#F4F0EA] text-xs font-semibold uppercase tracking-widest transition-colors shadow-sm"
              >
                <span>Request Access</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Platform Links */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#CCA77C]">
              PLATFORM
            </div>
            <ul className="space-y-2.5 text-xs text-white/70 font-mono">
              <li><a href="#pipeline" className="hover:text-white transition-colors">8-Stage Pipeline</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Live Demo Scanner</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Architecture Engine</a></li>
              <li><a href="#manufacturers" className="hover:text-white transition-colors">B2B Manufacturing</a></li>
              <li><a href="#manufacturers" className="hover:text-white transition-colors">ROI Calculator</a></li>
            </ul>
          </div>

          {/* Col 3: Formats & Technical Compliance */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#CCA77C]">
              CAD & CAM INTEROP
            </div>
            <ul className="space-y-2.5 text-xs text-white/70 font-mono">
              <li><span>Rhino 7 / 8 (.3DM B-Rep)</span></li>
              <li><span>Standard STEP (ISO 10303)</span></li>
              <li><span>Watertight STL for 3D Wax</span></li>
              <li><span>Automated Shrinkage Solvers</span></li>
              <li><span>Direct Factory MES Webhooks</span></li>
            </ul>
          </div>

          {/* Col 4: Studio Presence & Dispatch */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#CCA77C]">
              DISPATCH & UPDATES
            </div>
            <p className="text-xs text-white/60 leading-relaxed font-normal">
              Receive quarterly technical briefs on computational metallurgy and automated jewelry manufacturing.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 p-2.5 bg-white/5 border border-emerald-500/30">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed to Engineering Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <input 
                    type="email" 
                    required
                    placeholder="atelier@domain.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full p-2.5 bg-white/10 border border-white/20 text-xs font-mono text-white placeholder:text-white/40 focus:border-[#8A5A2B] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 bg-[#8A5A2B] hover:bg-[#A36D36] text-[#F4F0EA] text-xs font-mono transition-colors"
                  >
                    JOIN
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 text-[10px] font-mono text-white/40 space-y-1">
              <div>STUDIOS: PARIS • MILAN • NEW YORK • SURAT</div>
              <div>COORDINATES: 48.8566° N, 2.3522° E</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-white/50">
          <div>
            © {new Date().getFullYear()} ARCEN PRECISION CAD INC. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">PRIVACY PROTOCOL</span>
            <span className="text-white/20">•</span>
            <span className="hover:text-white cursor-pointer">TERMS OF SERVICE</span>
            <span className="text-white/20">•</span>
            <span className="hover:text-white cursor-pointer">ISO 10303 CERTIFIED</span>
          </div>

          <div className="flex items-center gap-2 text-[#CCA77C]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SYSTEM v2.4 OPERATIONAL</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
