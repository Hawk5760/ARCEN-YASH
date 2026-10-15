import React, { useState } from 'react';
import { ArrowRight, Compass, Maximize2, Layers, CheckCircle2, Sliders } from 'lucide-react';

export default function HeroSection({ onRequestAccess }) {
  const [activeVisual, setActiveVisual] = useState('pendant');
  const [activeInspector, setActiveInspector] = useState(true);
  const [wireframeMode, setWireframeMode] = useState(false);
  const [mouseCoords, setMouseCoords] = useState({ x: 14.80, y: 32.40 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (((e.clientX - rect.left) / rect.width) * 80).toFixed(2);
    const y = ((1 - (e.clientY - rect.top) / rect.height) * 120).toFixed(2);
    setMouseCoords({ x, y });
  };

  return (
    <section className="relative min-h-[92vh] pt-28 md:pt-36 pb-20 flex items-center bg-[#F4F0EA] border-b border-[#D8D2C4] overflow-hidden bg-grid-drafting">
      {/* Decorative architectural datum lines */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-[#D8D2C4]/50 pointer-events-none hidden lg:block"></div>
      <div className="absolute top-0 right-12 w-[1px] h-full bg-[#D8D2C4]/50 pointer-events-none hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Typography & Editorial Statement */}
          <div className="lg:col-span-6 space-y-8 z-10">
            
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/70 backdrop-blur-sm border border-[#D8D2C4] text-[11px] font-mono tracking-widest text-[#8A5A2B] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#8A5A2B]"></span>
              B2B JEWELRY CAD & CASTING ENGINE
            </div>

            {/* Monumental Serif Wordmark & Subtitle - matching reference image */}
            <div className="space-y-4">
              <h1 className="font-editorial text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#141413] leading-[0.95]">
                ARCEN
              </h1>
              
              {/* Bronze horizontal accent line matching reference image */}
              <div className="w-24 h-[3px] bg-[#8A5A2B]"></div>

              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#8A5A2B] font-semibold tracking-widest uppercase">
                FROM IMAGINATION TO REALITY
              </h2>
            </div>

            {/* Editorial Lead Paragraph */}
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-xl font-normal">
              Every product begins with an idea. ARCEN turns a photographed stone, sketch, or physical reference piece into a manufacturing-validated, production-ready CAD file — automatically.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button 
                onClick={onRequestAccess}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#8A5A2B] text-[#F4F0EA] text-xs font-semibold uppercase tracking-widest hover:bg-[#6E441E] transition-all duration-200 shadow-luxury hover:shadow-luxury-hover active:scale-[0.98] group"
              >
                <span>Request Access</span>
                <ArrowRight className="ml-2 w-4 h-4 text-[#F4F0EA] group-hover:translate-x-1 transition-transform" />
              </button>

              <a 
                href="#pipeline"
                className="inline-flex items-center justify-center px-7 py-4 border border-[#8A5A2B]/60 text-[#222222] text-xs font-semibold uppercase tracking-widest hover:bg-[#8A5A2B]/10 transition-all duration-200"
              >
                <span>See How It Works</span>
              </a>
            </div>

            {/* Technical Verification Badges */}
            <div className="pt-6 border-t border-[#D8D2C4] grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="font-mono text-lg sm:text-xl font-bold text-[#141413]">±0.01<span className="text-xs text-[#8A5A2B]">mm</span></div>
                <div className="text-[10px] font-mono text-[#7D776F] uppercase tracking-wider mt-0.5">CV Calibration</div>
              </div>
              <div>
                <div className="font-mono text-lg sm:text-xl font-bold text-[#141413]">100<span className="text-xs text-[#8A5A2B]">%</span></div>
                <div className="text-[10px] font-mono text-[#7D776F] uppercase tracking-wider mt-0.5">Castability Check</div>
              </div>
              <div>
                <div className="font-mono text-lg sm:text-xl font-bold text-[#141413]">STEP<span className="text-xs text-[#8A5A2B]">/3DM</span></div>
                <div className="text-[10px] font-mono text-[#7D776F] uppercase tracking-wider mt-0.5">Direct Rhino Output</div>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural 3D Reference Visual & Interactive Telemetry Overlay */}
          <div className="lg:col-span-6 relative">
            <div 
              onMouseMove={handleMouseMove}
              className="relative group rounded-sm border border-[#D8D2C4] bg-white/40 backdrop-blur-sm p-3 shadow-luxury overflow-hidden cursor-crosshair transition-all duration-300"
            >
              {/* Technical framing header bar */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#D8D2C4]/70 text-[10px] font-mono text-[#7D776F]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8A5A2B]"></span>
                  <span>REFERENCE INPUT: [JEWELRY PENDANT #ARC-772]</span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setActiveVisual('pendant')}
                    className={`px-2 py-0.5 border text-[9px] uppercase tracking-wider transition-colors ${
                      activeVisual === 'pendant' ? 'bg-[#8A5A2B] text-[#F4F0EA] border-[#8A5A2B]' : 'bg-transparent text-[#666] border-[#D8D2C4]'
                    }`}
                  >
                    Jewelry Piece
                  </button>
                  <button 
                    onClick={() => setActiveVisual('cad')}
                    className={`px-2 py-0.5 border text-[9px] uppercase tracking-wider transition-colors ${
                      activeVisual === 'cad' ? 'bg-[#8A5A2B] text-[#F4F0EA] border-[#8A5A2B]' : 'bg-transparent text-[#666] border-[#D8D2C4]'
                    }`}
                  >
                    CAD Monolith
                  </button>
                  <button 
                    onClick={() => setWireframeMode(!wireframeMode)}
                    className={`px-2 py-0.5 border text-[9px] uppercase tracking-wider transition-colors ${
                      wireframeMode ? 'bg-[#141413] text-white border-[#141413]' : 'bg-transparent text-[#666] border-[#D8D2C4]'
                    }`}
                  >
                    Grid
                  </button>
                </div>
              </div>

              {/* Main Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full bg-[#ECE7DE] overflow-hidden flex items-center justify-center p-4">
                
                {/* Visual 1: Jewelry Piece (Heart Blue Topaz Infinity Pendant) */}
                {activeVisual === 'pendant' ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src="/jewelry-pendant.png" 
                      alt="Fine Jewelry Reference - Infinity Heart London Blue Topaz Pendant"
                      className={`max-h-full max-w-full object-contain filter drop-shadow-xl transition-all duration-300 ${
                        wireframeMode ? 'contrast-125 saturate-50' : ''
                      }`}
                    />

                    {/* Technical dimension line overlay for Pendant */}
                    {/* Vertical dimension line right */}
                    <div className="absolute right-4 top-8 bottom-8 flex items-center pointer-events-none">
                      <div className="h-full w-[1px] bg-[#8A5A2B]/80 relative flex items-center">
                        <div className="absolute top-0 -left-1.5 w-3 h-[1px] bg-[#8A5A2B]"></div>
                        <div className="absolute bottom-0 -left-1.5 w-3 h-[1px] bg-[#8A5A2B]"></div>
                        <span className="absolute -left-14 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#8A5A2B] font-bold bg-[#F4F0EA]/90 px-1 py-0.5">
                          32.40mm
                        </span>
                      </div>
                    </div>

                    {/* Horizontal dimension line bottom */}
                    <div className="absolute bottom-3 left-12 right-12 flex justify-center pointer-events-none">
                      <div className="w-1/2 h-[1px] bg-[#8A5A2B]/80 relative flex justify-center">
                        <div className="absolute left-0 -top-1.5 w-[1px] h-3 bg-[#8A5A2B]"></div>
                        <div className="absolute right-0 -top-1.5 w-[1px] h-3 bg-[#8A5A2B]"></div>
                        <span className="absolute -top-5 text-[10px] font-mono text-[#8A5A2B] font-bold bg-[#F4F0EA]/90 px-1">
                          14.80mm
                        </span>
                      </div>
                    </div>

                    {/* Interactive Dimension Pins & Tooltips on Pendant */}
                    {activeInspector && (
                      <>
                        {/* Heart Stone Pin */}
                        <div className="absolute bottom-[28%] left-[49%] group/pin">
                          <div className="w-4 h-4 rounded-full border border-[#8A5A2B] bg-[#8A5A2B]/30 flex items-center justify-center animate-ping"></div>
                          <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#8A5A2B] flex items-center justify-center cursor-pointer shadow-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                          </div>
                          <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover/pin:flex flex-col bg-[#141413] text-[#F4F0EA] text-[10px] font-mono px-3 py-1.5 whitespace-nowrap shadow-xl z-30 border border-[#8A5A2B]/40">
                            <span className="text-[#CCA77C] font-bold">HEART-CUT BLUE TOPAZ</span>
                            <span className="text-white/80">Dimensions: 8.20 × 7.90 × 4.85mm</span>
                            <span className="text-emerald-400">Seat Gap Tolerance: 0.15mm</span>
                          </div>
                        </div>

                        {/* Infinity Pavé Curve Pin */}
                        <div className="absolute top-[48%] left-[48%] group/pin">
                          <div className="w-4 h-4 rounded-full border border-[#8A5A2B] bg-[#8A5A2B]/30 flex items-center justify-center animate-ping"></div>
                          <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#8A5A2B] flex items-center justify-center cursor-pointer shadow-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                          </div>
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden group-hover/pin:flex flex-col bg-[#141413] text-[#F4F0EA] text-[10px] font-mono px-3 py-1.5 whitespace-nowrap shadow-xl z-30 border border-[#8A5A2B]/40">
                            <span className="text-[#CCA77C] font-bold">PAVÉ ACCENT RIBBON</span>
                            <span className="text-white/80">14x Melee Diamonds (1.10mm)</span>
                            <span className="text-emerald-400">Bead Setting: Auto-Generated</span>
                          </div>
                        </div>

                        {/* Bail Top Pin */}
                        <div className="absolute top-[28%] left-[48%] group/pin">
                          <div className="w-4 h-4 rounded-full border border-[#8A5A2B] bg-[#8A5A2B]/30 flex items-center justify-center animate-ping"></div>
                          <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#8A5A2B] flex items-center justify-center cursor-pointer shadow-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                          </div>
                          <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover/pin:flex flex-col bg-[#141413] text-[#F4F0EA] text-[10px] font-mono px-3 py-1.5 whitespace-nowrap shadow-xl z-30 border border-[#8A5A2B]/40">
                            <span className="text-[#CCA77C] font-bold">18K YELLOW GOLD BAIL</span>
                            <span className="text-white/80">Wall Thickness: 1.45mm (PASS)</span>
                            <span className="text-emerald-400">Castability: Verified</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  /* Visual 2: The Architectural Monolith from reference image 1 */
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src="/arcen-hero-ref.png" 
                      alt="ARCEN Architectural CAD Reference Model"
                      className={`w-full h-full object-cover object-center transition-all duration-500 ${
                        wireframeMode ? 'contrast-125 filter grayscale' : 'filter brightness-[1.01]'
                      }`}
                    />
                    
                    {/* Datum Pins for Monolith */}
                    <div className="absolute top-[28%] right-[10%] group/pin">
                      <div className="w-4 h-4 rounded-full border border-[#8A5A2B] bg-[#8A5A2B]/20 flex items-center justify-center animate-ping"></div>
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#8A5A2B] flex items-center justify-center cursor-pointer shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                      </div>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden group-hover/pin:flex items-center bg-[#141413] text-[#F4F0EA] text-[10px] font-mono px-2.5 py-1 whitespace-nowrap shadow-md z-30">
                        Z-HEIGHT: 120.00mm (±0.02)
                      </div>
                    </div>
                  </div>
                )}

                {/* Simulated live wireframe grid overlay when enabled */}
                {wireframeMode && (
                  <div className="absolute inset-0 bg-[#8A5A2B]/10 pointer-events-none mix-blend-multiply bg-grid-dense"></div>
                )}

                {/* Dynamic Coordinate Crosshair Display in Corner */}
                <div className="absolute bottom-3 left-3 bg-[#141413]/85 backdrop-blur-sm text-[#F4F0EA] px-3 py-1.5 rounded-sm font-mono text-[10px] flex items-center gap-3 border border-white/10 pointer-events-none">
                  <span className="text-[#CCA77C]">POS_X: {mouseCoords.x}mm</span>
                  <span className="text-white/30">|</span>
                  <span className="text-[#CCA77C]">POS_Z: {mouseCoords.y}mm</span>
                  <span className="text-emerald-400 text-[9px] uppercase tracking-wider">● CALIBRATED</span>
                </div>
              </div>

              {/* Technical footer metadata */}
              <div className="mt-2.5 pt-2 border-t border-[#D8D2C4]/70 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[#7D776F]">
                <div className="flex items-center gap-4">
                  <span>REF-ID: ARC-JEW-772</span>
                  <span>ALLOY: 18K GOLD + TOPAZ</span>
                </div>
                <div className="text-[#8A5A2B] font-medium">
                  READY FOR DIRECT LOST-WAX CASTING
                </div>
              </div>
            </div>

            {/* Technical corner dimension tags */}
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#8A5A2B] pointer-events-none"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#8A5A2B] pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
