import React from 'react';
import { ArrowRight, AlertCircle, CheckCircle, Sparkles, Scale, Cpu } from 'lucide-react';

export default function ProblemSection() {
  const transitions = [
    {
      left: "Beautiful",
      leftSub: "Artistic sketches, organic stone cuts, conceptual curves that charm clients",
      right: "Manufacturable",
      rightSub: "Wall thickness ≥1.2mm, sprue placement, shrinkage compensation & stone seat tolerances",
      icon: Sparkles
    },
    {
      left: "Technically Correct",
      leftSub: "Rigid CAD engineering meshes, raw dimensions, mechanical geometry",
      right: "Good Design",
      rightSub: "Graceful proportions, balanced metal weight, ergonomic finger & wrist drape",
      icon: Scale
    },
    {
      left: "Visually Right",
      leftSub: "Polished marketing renders that hide internal cavities and structural weak points",
      right: "Production Ready",
      rightSub: "Direct CAM toolpaths, water-tight STEP solids, zero pore porosity during casting",
      icon: Cpu
    }
  ];

  return (
    <section id="problem" className="py-24 md:py-32 bg-[#F4F0EA] border-b border-[#D8D2C4] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/60 border border-[#D8D2C4] text-[11px] font-mono tracking-widest text-[#8A5A2B] uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-[#8A5A2B] rounded-full"></span>
            THE REAL PROBLEM
          </div>
          
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] leading-tight mb-6">
            The difficult part isn't one step. It's the transition between the steps.
          </h2>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            In fine jewelry manufacturing, 80% of production delays and costly casting failures occur during translation: when a freehand sketch or photographed gemstone is manually re-drawn into CAD by technicians who must balance creative intent against metal casting physics.
          </p>
        </div>

        {/* Two-Column Comparison Transformation Rows */}
        <div className="space-y-6">
          {transitions.map((item, idx) => (
            <div 
              key={idx}
              className="group relative bg-white/60 hover:bg-white/90 border border-[#D8D2C4] p-6 md:p-8 transition-all duration-300 shadow-sm hover:shadow-luxury"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Left: Creative Intent */}
                <div className="md:col-span-5 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#7D776F]">
                    CREATIVE INPUT [PHASE A]
                  </div>
                  <div className="font-editorial text-2xl sm:text-3xl text-[#222222] font-semibold group-hover:text-[#8A5A2B] transition-colors">
                    {item.left}
                  </div>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {item.leftSub}
                  </p>
                </div>

                {/* Center Transition Connector */}
                <div className="md:col-span-2 flex items-center justify-center py-2 md:py-0">
                  <div className="w-12 h-12 rounded-full border border-[#D8D2C4] bg-[#F4F0EA] flex items-center justify-center text-[#8A5A2B] shadow-inner group-hover:border-[#8A5A2B] group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Right: Engineering Reality */}
                <div className="md:col-span-5 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#8A5A2B]">
                    MANUFACTURING REALITY [PHASE B]
                  </div>
                  <div className="font-editorial text-2xl sm:text-3xl text-[#141413] font-semibold">
                    {item.right}
                  </div>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {item.rightSub}
                  </p>
                </div>

              </div>

              {/* Bottom engineering datum marker */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#8A5A2B]/60"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#8A5A2B]/60"></div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-16 pt-12 border-t border-[#D8D2C4] flex flex-col md:flex-row items-baseline justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8A5A2B] block mb-2">
              THE ARCEN RESOLUTION
            </span>
            <div className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#141413] font-bold">
              Connecting creativity with precision.
            </div>
          </div>

          <div className="text-sm text-[#555555] max-w-md font-normal leading-relaxed">
            ARCEN replaces subjective guesswork with automated computer vision geometry reconstruction, physical metallurgy constraints, and parametric validation in a unified pipeline.
          </div>
        </div>

      </div>
    </section>
  );
}
