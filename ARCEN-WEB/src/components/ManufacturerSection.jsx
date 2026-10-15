import React, { useState } from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Coins, 
  Sliders, 
  Check, 
  ArrowRight,
  Factory,
  Layers,
  FileSpreadsheet
} from 'lucide-react';

export default function ManufacturerSection({ onRequestAccess }) {
  const [skuVolume, setSkuVolume] = useState(150);
  const [laborRate, setLaborRate] = useState(45);

  // ROI calculations
  // Traditional CAD: ~4 hours per model @ $45/hr = $180 per SKU.
  // ARCEN: ~10 minutes review per SKU = ~$7.50 labor.
  const traditionalCost = skuVolume * 4 * laborRate;
  const arcenCost = skuVolume * (0.16) * laborRate;
  const monthlySavings = Math.round(traditionalCost - arcenCost);
  const hoursSaved = Math.round(skuVolume * 3.8);

  const pillars = [
    {
      title: "Zero Defect Casting Guarantee",
      subtitle: "Automated Pre-Flight Audits",
      desc: "Every generated model is audited against strict metallurgical parameters: wall thickness (≥1.2mm), sprue attachment draft angles, and prong seat geometry to eliminate porosity and investment collapse.",
      metric: "99.4%",
      metricLabel: "First-Pass Casting Yield"
    },
    {
      title: "Multi-Alloy Shrinkage Comp",
      subtitle: "Physics-Informed Parametrics",
      desc: "Different precious alloys cool and contract uniquely. ARCEN automatically applies calibrated volumetric compensation curves for 14K/18K yellow, white, and rose gold, 950 platinum, and 925 silver.",
      metric: "±0.01mm",
      metricLabel: "Finished Casting Accuracy"
    },
    {
      title: "Turnaround in Minutes, Not Weeks",
      subtitle: "Eliminate CAD Backlog",
      desc: "Stop waiting 4 to 7 business days for external CAD modelers to interpret bench notes. Convert stone photographs and customer sketches into CAM-ready files while the client is still in your showroom.",
      metric: "94%",
      metricLabel: "Reduction in Cycle Time"
    },
    {
      title: "Direct ERP & CAM Interoperability",
      subtitle: "Rhino & MatrixGold Native",
      desc: "ARCEN exports fully layered, parametric .3DM files with editable curves, alongside watertight .STL meshes sliced for resin 3D printers and automated bill-of-materials for your ERP.",
      metric: "100%",
      metricLabel: "Native Rhino/STEP Compatibility"
    }
  ];

  return (
    <section id="manufacturers" className="py-24 md:py-32 bg-[#FAF8F5] border-b border-[#D8D2C4] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#D8D2C4] text-[11px] font-mono tracking-widest text-[#8A5A2B] uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-[#8A5A2B] rounded-full"></span>
            BUILT FOR MANUFACTURERS
          </div>
          
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] leading-tight mb-4">
            Stop losing weeks in back-and-forth CAD revisions.
          </h2>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            Engineered specifically for high-volume jewelry manufacturers, casting facilities, and private-label ateliers looking to scale custom production without linearly hiring CAD technicians.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#D8D2C4] p-8 transition-all duration-300 hover:shadow-luxury hover:border-[#8A5A2B]/60 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D8D2C4]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A5A2B]">
                    {pillar.subtitle}
                  </span>
                  <span className="text-[10px] font-mono text-[#7D776F]">
                    MODULE 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-bold text-[#141413] group-hover:text-[#8A5A2B] transition-colors mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#555555] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom Metric Callout */}
              <div className="mt-8 pt-4 border-t border-[#D8D2C4]/70 flex items-baseline justify-between">
                <span className="text-xs font-mono text-[#7D776F] uppercase">
                  {pillar.metricLabel}
                </span>
                <span className="font-mono text-2xl font-bold text-[#141413]">
                  {pillar.metric}
                </span>
              </div>

              {/* Corner datum lines */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#8A5A2B]/40 group-hover:border-[#8A5A2B]"></div>
            </div>
          ))}
        </div>

        {/* Interactive B2B ROI Calculator */}
        <div className="bg-[#141413] text-[#F4F0EA] p-8 md:p-12 border border-[#8A5A2B]/40 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Calculator Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[10px] font-mono tracking-widest text-[#CCA77C] uppercase">
                <span>ANNUAL CAD & PRODUCTION EFFICIENCY CALCULATOR</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#F4F0EA]">
                Calculate your manufacturing margin recovery
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                Estimate the direct labor hours and drafting costs saved by automating reference-to-CAD conversion with ARCEN.
              </p>

              <div className="space-y-6 pt-2">
                {/* SKU Volume Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-white/80">Monthly Custom / Bespoke SKUs:</span>
                    <span className="text-[#CCA77C] font-bold text-sm">{skuVolume} designs / mo</span>
                  </div>
                  <input 
                    type="range" 
                    min="20" 
                    max="600" 
                    step="10"
                    value={skuVolume}
                    onChange={(e) => setSkuVolume(Number(e.target.value))}
                    className="w-full accent-[#8A5A2B] bg-white/20 h-2 rounded cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-white/40 mt-1">
                    <span>20 SKUs (Boutique)</span>
                    <span>300 SKUs (Mid-Scale)</span>
                    <span>600+ SKUs (Industrial)</span>
                  </div>
                </div>

                {/* CAD Labor Rate Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-white/80">Average CAD Modeler Cost ($/hr):</span>
                    <span className="text-[#CCA77C] font-bold text-sm">${laborRate} / hour</span>
                  </div>
                  <input 
                    type="range" 
                    min="25" 
                    max="100" 
                    step="5"
                    value={laborRate}
                    onChange={(e) => setLaborRate(Number(e.target.value))}
                    className="w-full accent-[#8A5A2B] bg-white/20 h-2 rounded cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-white/40 mt-1">
                    <span>$25/hr</span>
                    <span>$50/hr</span>
                    <span>$100/hr</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Calculator Output Stats */}
            <div className="lg:col-span-5 bg-white/5 border border-white/15 p-6 md:p-8 space-y-6 backdrop-blur-sm">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#CCA77C] pb-2 border-b border-white/10">
                PROJECTED RECOVERY SUMMARY
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs text-white/60 font-mono">ESTIMATED MONTHLY SAVINGS</div>
                  <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#CCA77C] mt-1">
                    ${monthlySavings.toLocaleString()}
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400 mt-0.5">
                    ≈ ${(monthlySavings * 12).toLocaleString()} saved annually
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="text-xs text-white/60 font-mono">DEDICATED TIME SAVED</div>
                  <div className="font-mono text-2xl font-bold text-white mt-1">
                    {hoursSaved.toLocaleString()} hours / month
                  </div>
                  <div className="text-[11px] text-white/60 mt-0.5">
                    Equivalent to ~{Math.round(hoursSaved / 160)} full-time CAD technicians redirected to design strategy.
                  </div>
                </div>
              </div>

              <button
                onClick={onRequestAccess}
                className="w-full py-3.5 bg-[#8A5A2B] hover:bg-[#A36D36] text-[#F4F0EA] text-xs font-semibold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 mt-4"
              >
                <span>Schedule B2B Factory Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
