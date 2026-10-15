import React, { useState } from 'react';
import { 
  Camera, 
  Scan, 
  Ruler, 
  PencilRuler, 
  Box, 
  CheckCircle2, 
  Receipt, 
  PackageCheck,
  ChevronRight,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export default function PipelineSection() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      id: 1,
      name: "Physical Input",
      short: "Capture references",
      tagline: "Capture real-world references, multiple angles, consistent lighting",
      icon: Camera,
      specs: [
        { label: "Supported Inputs", val: "Loose stones, wax masters, sketches, vintage pieces" },
        { label: "Capture Mode", val: "Multi-angle photogrammetry or mobile sensor" },
        { label: "Fiducial Scale", val: "Calibration dot-card included" }
      ],
      deliverable: "Raw multi-view imagery & lighting reference map"
    },
    {
      id: 2,
      name: "Computer Vision",
      short: "CV Reconstruction",
      tagline: "Reference detection, pixel-to-mm calibration, geometry reconstruction",
      icon: Scan,
      specs: [
        { label: "Edge Detection", val: "Sub-pixel Canny & Neural B-splines" },
        { label: "Resolution", val: "±0.008mm optical calibration" },
        { label: "Point Cloud", val: "Dense 3D point cloud generation" }
      ],
      deliverable: "Calibrated 3D point cloud and feature contours"
    },
    {
      id: 3,
      name: "Measurement + Data",
      short: "Extract telemetry",
      tagline: "Accurate dimensions, tolerances and features, structured data",
      icon: Ruler,
      specs: [
        { label: "Stone Profiling", val: "Table, crown, pavilion depth, girdle thickness" },
        { label: "Output Schema", val: "Structured ISO 10303 STEP / JSON telemetry" },
        { label: "Tolerances", val: "Prong seat gap: 0.15mm default" }
      ],
      deliverable: "Standardized parametric dimension dataset"
    },
    {
      id: 4,
      name: "Design",
      short: "Refine intent",
      tagline: "Concept refinement, functional intent, material considerations",
      icon: PencilRuler,
      specs: [
        { label: "Design Styles", val: "Solitaire, Pavé, Halo, Bezel, Tension, Filigree" },
        { label: "Alloy Density", val: "14K/18K Gold, 950 Platinum, 925 Silver" },
        { label: "Ergonomics", val: "Inner shank comfort-fit curvature auto-profile" }
      ],
      deliverable: "Aesthetic B-spline curves with ergonomic constraints"
    },
    {
      id: 5,
      name: "3D / CAD",
      short: "Parametric solid",
      tagline: "Parametric modelling, engineering details, manufacturing readiness",
      icon: Box,
      specs: [
        { label: "Geometry Engine", val: "Parasolid / OpenCASCADE NURBS solid modeler" },
        { label: "Native Rhino", val: ".3DM layer hierarchy & grasshopper definition" },
        { label: "Water-Tight Mesh", val: "Zero non-manifold edges for resin 3D printing" }
      ],
      deliverable: "Production-ready .3DM, .STEP, and .STL files"
    },
    {
      id: 6,
      name: "Validation",
      short: "Casting checks",
      tagline: "Technical checks, fit/function/integrity, compliance verification",
      icon: CheckCircle2,
      specs: [
        { label: "Wall Thickness", val: "Automated heat-map scan (min 1.20mm)" },
        { label: "Shrinkage Comp", val: "+1.8% to +2.4% alloy-dependent offset" },
        { label: "Stone Seating", val: "Automated prong snap & clearance audit" }
      ],
      deliverable: "Pre-flight Manufacturing Integrity Audit (PASS/FLAG)"
    },
    {
      id: 7,
      name: "Quote",
      short: "Accurate BOM",
      tagline: "Costing accuracy, lead time estimation, commercial transparency",
      icon: Receipt,
      specs: [
        { label: "Metal Weight", val: "Calculated displacement volume × metal density" },
        { label: "Stone Count", val: "Automated sieve size & carat weight BOM" },
        { label: "Labor & Cast", val: "Algorithmic cycle time and polishing loss" }
      ],
      deliverable: "Instant transparent BOM & production quote"
    },
    {
      id: 8,
      name: "Production-Ready Handoff",
      short: "Casting package",
      tagline: "Approved specifications, manufacturing package, seamless transition",
      icon: PackageCheck,
      specs: [
        { label: "Package Contents", val: "CAM file, laser engraving vector, QC drawings" },
        { label: "ERP Integration", val: "Direct webhook into factory MES & inventory" },
        { label: "Audit Trail", val: "Cryptographic hash of approved revision" }
      ],
      deliverable: "Full factory package ready for 3D print tree & lost-wax casting"
    }
  ];

  const currentStageData = stages.find(s => s.id === activeStage) || stages[0];

  return (
    <section id="pipeline" className="py-24 md:py-32 bg-[#F4F0EA] border-b border-[#D8D2C4] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/70 border border-[#D8D2C4] text-[11px] font-mono tracking-widest text-[#8A5A2B] uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-[#8A5A2B] rounded-full"></span>
            A SEAMLESS JOURNEY
          </div>
          
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] leading-tight mb-4">
            A simple experience. A complex system.
          </h2>

          <p className="font-serif text-lg text-[#8A5A2B] tracking-wide mb-2 italic">
            A clear path, powered by precision.
          </p>

          <p className="text-base text-[#555555] leading-relaxed">
            Eight synchronized engineering stages transform ambiguous raw physical references into zero-defect casting files. Click any stage below to inspect the underlying pipeline specifications.
          </p>
        </div>

        {/* Desktop Interactive Stepper (Horizontal) */}
        <div className="hidden lg:block relative mb-12">
          
          {/* Connecting line */}
          <div className="absolute top-7 left-8 right-8 h-[2px] bg-[#D8D2C4] -z-0">
            {/* Active progress highlight */}
            <div 
              className="h-full bg-[#8A5A2B] transition-all duration-500 ease-out"
              style={{ width: `${((activeStage - 1) / (stages.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* Stepper Nodes */}
          <div className="relative z-10 grid grid-cols-8 gap-2">
            {stages.map((stage) => {
              const Icon = stage.icon;
              const isActive = activeStage === stage.id;
              const isPast = activeStage > stage.id;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  onMouseEnter={() => setActiveStage(stage.id)}
                  className="group flex flex-col items-center text-center focus:outline-none"
                >
                  {/* Circular Node */}
                  <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 relative ${
                    isActive 
                      ? 'border-[#8A5A2B] bg-[#8A5A2B] text-[#F4F0EA] scale-110 shadow-luxury' 
                      : isPast
                        ? 'border-[#8A5A2B] bg-white text-[#8A5A2B]'
                        : 'border-[#D8D2C4] bg-white/80 text-[#6B6B6B] hover:border-[#8A5A2B]/60 hover:text-[#222]'
                  }`}>
                    <Icon className="w-5 h-5" />

                    {/* Step Number Badge */}
                    <span className={`absolute -top-2 -right-1 text-[10px] font-mono px-1.5 py-0.2 rounded border ${
                      isActive 
                        ? 'bg-[#141413] text-[#F4F0EA] border-white/20' 
                        : 'bg-[#F4F0EA] text-[#6B6B6B] border-[#D8D2C4]'
                    }`}>
                      0{stage.id}
                    </span>
                  </div>

                  {/* Stage Name */}
                  <span className={`mt-3 text-xs font-semibold uppercase tracking-wider transition-colors max-w-[100px] leading-snug ${
                    isActive ? 'text-[#8A5A2B]' : 'text-[#555555] group-hover:text-[#222222]'
                  }`}>
                    {stage.name}
                  </span>

                  {/* Micro indicator arrow */}
                  <div className={`mt-1 transition-opacity ${isActive ? 'opacity-100 text-[#8A5A2B]' : 'opacity-0'}`}>
                    ▲
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Stepper Navigation */}
        <div className="lg:hidden flex overflow-x-auto pb-4 mb-6 gap-2 no-scrollbar">
          {stages.map((stage) => {
            const Icon = stage.icon;
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`flex-shrink-0 px-3 py-2 border text-xs font-mono flex items-center gap-2 transition-colors ${
                  isActive 
                    ? 'border-[#8A5A2B] bg-[#8A5A2B] text-[#F4F0EA]' 
                    : 'border-[#D8D2C4] bg-white/70 text-[#555555]'
                }`}
              >
                <span>0{stage.id}.</span>
                <span>{stage.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Card (Expands beneath the stepper) */}
        <div className="relative bg-white/80 backdrop-blur-sm border border-[#D8D2C4] p-8 md:p-10 shadow-luxury transition-all duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Stage Summary */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#8A5A2B] font-bold tracking-widest uppercase">
                  STAGE 0{currentStageData.id} OF 08
                </span>
                <span className="w-12 h-[1px] bg-[#8A5A2B]"></span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl text-[#141413] font-bold">
                {currentStageData.name}
              </h3>

              <p className="text-base sm:text-lg text-[#444444] font-medium leading-relaxed">
                "{currentStageData.tagline}"
              </p>

              <div className="pt-3">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#7D776F] mb-1">
                  Validated Deliverable:
                </div>
                <div className="p-3 bg-[#F4F0EA] border border-[#D8D2C4] text-xs font-mono text-[#222222] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  {currentStageData.deliverable}
                </div>
              </div>
            </div>

            {/* Engineering Specifications Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {currentStageData.specs.map((spec, i) => (
                <div key={i} className="p-5 bg-[#FAF8F5] border border-[#D8D2C4]/80 flex flex-col justify-between">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#8A5A2B] mb-3">
                    {spec.label}
                  </div>
                  <div className="text-sm font-semibold text-[#222222] leading-snug">
                    {spec.val}
                  </div>
                </div>
              ))}

              {/* Navigation buttons inside the detail card */}
              <div className="sm:col-span-3 pt-4 border-t border-[#D8D2C4] flex items-center justify-between text-xs font-mono">
                <button
                  disabled={activeStage === 1}
                  onClick={() => setActiveStage(prev => Math.max(1, prev - 1))}
                  className="px-4 py-2 border border-[#D8D2C4] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white transition-colors"
                >
                  ← PREVIOUS STAGE
                </button>

                <div className="text-[#7D776F]">
                  STEP {activeStage} / {stages.length}
                </div>

                <button
                  disabled={activeStage === stages.length}
                  onClick={() => setActiveStage(prev => Math.min(stages.length, prev + 1))}
                  className="px-4 py-2 bg-[#8A5A2B] text-[#F4F0EA] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#6E441E] transition-colors flex items-center gap-1.5"
                >
                  <span>NEXT STAGE</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

          {/* Decorative architectural datum pins */}
          <div className="absolute top-2 left-2 text-[8px] font-mono text-[#8A5A2B] opacity-60">+ PIPELINE_AUDIT_STG_0{currentStageData.id}</div>
          <div className="absolute bottom-2 right-2 text-[8px] font-mono text-[#8A5A2B] opacity-60">ARCEN_CAD_OS_ENG</div>
        </div>

      </div>
    </section>
  );
}
