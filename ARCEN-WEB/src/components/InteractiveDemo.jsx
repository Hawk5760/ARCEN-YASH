import React, { useState, useEffect, useRef } from 'react';
import { 
  UploadCloud, 
  RefreshCw, 
  Check, 
  FileCode, 
  Sliders, 
  ShieldCheck, 
  Download, 
  Sparkles, 
  Layers, 
  Maximize2,
  FileCheck2,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

const PRESETS = [
  {
    id: 'pendant',
    title: 'Infinity Heart Blue Topaz Pendant',
    type: 'Photographed Jewelry Reference',
    thumb: '/jewelry-pendant.png',
    stoneShape: 'Heart Brilliant Cut',
    dimensions: { length: '8.20 mm', width: '7.90 mm', depth: '4.85 mm' },
    ratio: '1.04 : 1.00',
    confidence: '99.92%',
    prongRecommendation: '3-Prong Low Profile Heart Seat + 14x Micro-Pavé Beads',
    cadOutput: {
      style: 'Interlocking Infinity Ribbon with Cathedral Bail',
      alloy: '18K Yellow Gold (Au 750)',
      weight: '5.24 grams (Gold) + 0.18ct Diamonds',
      ringSize: 'Pendant: 32.40mm × 14.80mm',
      wallThickness: '1.45 mm (Passed)',
      shrinkageOffset: '+2.1% (Lost-Wax)',
      leadTime: '48 Hours to Cast',
      costEstimate: '$560 - $630 (B2B Casting)'
    }
  },
  {
    id: 'sapphire',
    title: 'Ceylon Oval Sapphire',
    type: 'Loose Gemstone Photo',
    thumb: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    stoneShape: 'Oval Brilliant Cut',
    dimensions: { length: '9.42 mm', width: '7.15 mm', depth: '4.88 mm' },
    ratio: '1.32 : 1.00',
    confidence: '99.84%',
    prongRecommendation: '4-Prong Double Claw (0.85mm wire)',
    cadOutput: {
      style: 'Modern Architectural Solitaire',
      alloy: '18K Yellow Gold (750)',
      weight: '4.68 grams',
      ringSize: 'US 6.5 / EU 53',
      wallThickness: '1.45 mm (Passed)',
      shrinkageOffset: '+2.1%',
      leadTime: '48 Hours to Cast',
      costEstimate: '$485 - $540 (B2B Casting)'
    }
  },
  {
    id: 'sketch',
    title: 'Bespoke Art Deco Ring Sketch',
    type: 'Pencil Concept Drafting',
    thumb: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80',
    stoneShape: 'Octagonal Emerald Step Cut',
    dimensions: { length: '8.10 mm', width: '6.05 mm', depth: '4.20 mm' },
    ratio: '1.34 : 1.00',
    confidence: '98.92%',
    prongRecommendation: 'Corner Chevron Bezel Claws',
    cadOutput: {
      style: 'Architectural Geometric Cathedral',
      alloy: '950 Platinum / Ruthenium',
      weight: '6.92 grams',
      ringSize: 'US 7.0 / EU 54.5',
      wallThickness: '1.50 mm (Passed)',
      shrinkageOffset: '+1.9%',
      leadTime: '72 Hours to Cast',
      costEstimate: '$820 - $910 (B2B Casting)'
    }
  },
  {
    id: 'diamond',
    title: 'Round Brilliant Solitaire Master',
    type: 'Macro Camera Scan',
    thumb: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
    stoneShape: 'Round Ideal Hearts & Arrows',
    dimensions: { length: '6.52 mm', width: '6.50 mm', depth: '4.02 mm' },
    ratio: '1.00 : 1.00',
    confidence: '99.96%',
    prongRecommendation: '6-Prong Low Profile Tulip Setting',
    cadOutput: {
      style: 'Tapered Comfort-Fit Knife-Edge',
      alloy: '18K Rose Gold',
      weight: '3.95 grams',
      ringSize: 'US 6.0 / EU 52',
      wallThickness: '1.38 mm (Passed)',
      shrinkageOffset: '+2.0%',
      leadTime: '24 Hours to Cast',
      costEstimate: '$390 - $440 (B2B Casting)'
    }
  }
];

export default function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPreset, setSelectedPreset] = useState(PRESETS[0]);
  const [customImage, setCustomImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processProgress, setProcessProgress] = useState(0);
  const [processLog, setProcessLog] = useState('');
  const fileInputRef = useRef(null);

  const startAnalysis = () => {
    setCurrentStep(2);
    setIsProcessing(true);
    setProcessProgress(0);
    setProcessLog('Initializing sub-pixel photogrammetry matrix...');

    const logs = [
      { at: 15, text: 'Detecting fiducial scale & lighting temperature...' },
      { at: 35, text: 'Reconstructing stone facet contours & girdle profile...' },
      { at: 60, text: 'Calibrating pixel-to-millimeter ratio (±0.008mm accuracy)...' },
      { at: 85, text: 'Generating structured JSON dimension telemetry...' },
      { at: 100, text: 'Calibration complete. Manufacturing constraints locked.' }
    ];

    let currentProg = 0;
    const interval = setInterval(() => {
      currentProg += 5;
      setProcessProgress(currentProg);

      const matchingLog = logs.find(l => l.at === currentProg);
      if (matchingLog) {
        setProcessLog(matchingLog.text);
      }

      if (currentProg >= 100) {
        clearInterval(interval);
        setIsProcessing(false);
      }
    }, 90);
  };

  const generateCAD = () => {
    setIsProcessing(true);
    setProcessProgress(0);
    setProcessLog('Solving NURBS parametric equations & casting shrinkage...');

    const logs = [
      { at: 20, text: 'Applying alloy shrinkage coefficient (+2.1%)...' },
      { at: 50, text: 'Conducting automated wall-thickness check (min 1.20mm)...' },
      { at: 80, text: 'Generating native Rhino .3DM B-Rep solids & STL mesh...' },
      { at: 100, text: 'Production package validated for direct wax 3D print.' }
    ];

    let currentProg = 0;
    const interval = setInterval(() => {
      currentProg += 5;
      setProcessProgress(currentProg);

      const matchingLog = logs.find(l => l.at === currentProg);
      if (matchingLog) {
        setProcessLog(matchingLog.text);
      }

      if (currentProg >= 100) {
        clearInterval(interval);
        setIsProcessing(false);
        setCurrentStep(3);
        
        // Trigger celebratory confetti for the user
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#8A5A2B', '#B88B58', '#222222', '#F4F0EA']
          });
        } catch (e) {
          // ignore if canvas blocked
        }
      }
    }, 85);
  };

  const resetDemo = () => {
    setCurrentStep(1);
    setIsProcessing(false);
    setProcessProgress(0);
    setProcessLog('');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImage(url);
    }
  };

  const activeThumb = customImage || selectedPreset.thumb;

  return (
    <section id="demo" className="py-24 md:py-32 bg-[#FAF8F5] border-b border-[#D8D2C4] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#D8D2C4] text-[11px] font-mono tracking-widest text-[#8A5A2B] uppercase mb-4">
              <span className="w-1.5 h-1.5 bg-[#8A5A2B] rounded-full"></span>
              SEE IT IN ACTION
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413]">
              From a photo to a production file.
            </h2>
            <p className="mt-3 text-base text-[#555555]">
              Experience how ARCEN's automated pipeline validates stone geometry, generates parametric CAD, and builds a complete manufacturing package in real-time.
            </p>
          </div>

          <button
            onClick={resetDemo}
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#D8D2C4] bg-white text-xs font-mono uppercase tracking-wider text-[#555] hover:text-[#8A5A2B] hover:border-[#8A5A2B] transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Demo Simulator</span>
          </button>
        </div>

        {/* Demo Box Container */}
        <div className="bg-white border border-[#D8D2C4] shadow-luxury overflow-hidden">
          
          {/* Step Bar Header */}
          <div className="grid grid-cols-3 border-b border-[#D8D2C4] bg-[#F4F0EA]/60 text-xs font-mono">
            <button 
              onClick={() => setCurrentStep(1)}
              className={`p-4 text-left border-r border-[#D8D2C4] flex items-center gap-3 transition-colors ${
                currentStep === 1 ? 'bg-white font-bold text-[#8A5A2B]' : 'text-[#666666]'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                currentStep >= 1 ? 'bg-[#8A5A2B] text-white' : 'bg-[#D8D2C4] text-[#666]'
              }`}>1</span>
              <span className="hidden sm:inline">STEP 01: REFERENCE INPUT</span>
              <span className="sm:hidden">01: INPUT</span>
            </button>

            <button 
              onClick={() => currentStep >= 2 && setCurrentStep(2)}
              disabled={currentStep < 2}
              className={`p-4 text-left border-r border-[#D8D2C4] flex items-center gap-3 transition-colors ${
                currentStep === 2 ? 'bg-white font-bold text-[#8A5A2B]' : 'text-[#666666]'
              } ${currentStep < 2 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                currentStep >= 2 ? 'bg-[#8A5A2B] text-white' : 'bg-[#D8D2C4] text-[#666]'
              }`}>2</span>
              <span className="hidden sm:inline">STEP 02: CALIBRATE & MEASURE</span>
              <span className="sm:hidden">02: MEASURE</span>
            </button>

            <button 
              onClick={() => currentStep >= 3 && setCurrentStep(3)}
              disabled={currentStep < 3}
              className={`p-4 text-left flex items-center gap-3 transition-colors ${
                currentStep === 3 ? 'bg-white font-bold text-[#8A5A2B]' : 'text-[#666666]'
              } ${currentStep < 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                currentStep === 3 ? 'bg-[#8A5A2B] text-white' : 'bg-[#D8D2C4] text-[#666]'
              }`}>3</span>
              <span className="hidden sm:inline">STEP 03: CAD & CASTING SPEC</span>
              <span className="sm:hidden">03: CAD SPEC</span>
            </button>
          </div>

          {/* Step 1: Upload / Choose Reference Photo */}
          {currentStep === 1 && (
            <div className="p-8 md:p-12 space-y-8">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#8A5A2B]">
                  STEP 01 OF 03
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#141413] font-bold mt-1">
                  Upload a reference photo, sketch, or physical gemstone
                </h3>
                <p className="text-sm text-[#666666] mt-2">
                  Select one of our curated high-resolution jewelry references below or drop your own image to test the computer vision pipeline.
                </p>
              </div>

              {/* Presets Selector */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#7D776F] mb-3">
                  Select Preset Reference Sample:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {PRESETS.map((preset) => (
                    <div
                      key={preset.id}
                      onClick={() => {
                        setSelectedPreset(preset);
                        setCustomImage(null);
                      }}
                      className={`cursor-pointer p-3 border text-left transition-all ${
                        selectedPreset.id === preset.id && !customImage
                          ? 'border-[#8A5A2B] bg-[#F7EFE4] ring-1 ring-[#8A5A2B]'
                          : 'border-[#D8D2C4] bg-[#FAF8F5] hover:border-[#8A5A2B]/60'
                      }`}
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden mb-3 bg-[#EAE4D8]">
                        <img 
                          src={preset.thumb} 
                          alt={preset.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-xs font-mono text-[#8A5A2B] uppercase">{preset.type}</div>
                      <div className="text-sm font-semibold text-[#222222] mt-0.5">{preset.title}</div>
                      <div className="text-[11px] text-[#777] font-mono mt-1">
                        Est: {preset.dimensions.length} × {preset.dimensions.width}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom Upload Dropzone */}
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-[#D8D2C4] hover:border-[#8A5A2B] bg-[#FAF8F5] p-8 text-center cursor-pointer transition-colors"
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
                <UploadCloud className="w-8 h-8 text-[#8A5A2B] mx-auto mb-2" />
                <div className="text-sm font-semibold text-[#222222]">
                  {customImage ? "Custom image uploaded! Click to change" : "Or drag and drop your own photo/sketch here"}
                </div>
                <div className="text-xs text-[#777] font-mono mt-1">
                  Supports JPG, PNG, HEIC, TIFF up to 50MB with EXIF lens metadata
                </div>
              </div>

              {/* Action Button */}
              <div className="flex justify-end pt-4 border-t border-[#D8D2C4]">
                <button
                  onClick={startAnalysis}
                  className="px-8 py-3.5 bg-[#8A5A2B] hover:bg-[#6E441E] text-[#F4F0EA] text-xs font-semibold uppercase tracking-widest transition-all shadow-md flex items-center gap-2"
                >
                  <span>Begin Computer Vision Calibration</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Calibrating & Measuring */}
          {currentStep === 2 && (
            <div className="p-8 md:p-12 space-y-8">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#8A5A2B]">
                  STEP 02 OF 03
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#141413] font-bold mt-1">
                  Calibrating Geometry & Extracting Telemetry
                </h3>
                <p className="text-sm text-[#666666] mt-2">
                  Computer vision maps the stone edges, detects facet angles, and generates a structured manufacturing telemetry matrix.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Scanned Image with laser animation */}
                <div className="lg:col-span-6 relative rounded border border-[#D8D2C4] overflow-hidden bg-[#EAE4D8] aspect-square flex items-center justify-center">
                  <img 
                    src={activeThumb} 
                    alt="Active Reference"
                    className="w-full h-full object-cover filter contrast-105"
                  />

                  {/* Scanning Laser Beam overlay */}
                  {isProcessing && (
                    <>
                      <div className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#8A5A2B] to-transparent shadow-[0_0_12px_#8A5A2B] animate-laser z-20"></div>
                      <div className="absolute inset-0 bg-[#8A5A2B]/10 mix-blend-overlay z-10"></div>
                    </>
                  )}

                  {/* Technical overlay HUD */}
                  <div className="absolute top-3 left-3 bg-[#141413]/85 text-[#F4F0EA] px-2.5 py-1 text-[10px] font-mono border border-white/20">
                    CV_ALGO: CANNY-BSPLINE-v4
                  </div>

                  <div className="absolute bottom-3 right-3 bg-[#141413]/85 text-[#8A5A2B] px-2.5 py-1 text-[10px] font-mono border border-white/20">
                    SCALE: 1px = 0.0124mm
                  </div>
                </div>

                {/* Right: Telemetry & Progress / Output Card */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* Progress Status Bar */}
                  <div className="p-4 bg-[#FAF8F5] border border-[#D8D2C4]">
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-[#8A5A2B] font-semibold">
                        {isProcessing ? "PROCESSING OPTICAL TELEMETRY..." : "CALIBRATION COMPLETE"}
                      </span>
                      <span className="font-bold text-[#141413]">{processProgress}%</span>
                    </div>

                    <div className="w-full h-2 bg-[#EAE4D8] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#8A5A2B] transition-all duration-150"
                        style={{ width: `${processProgress}%` }}
                      ></div>
                    </div>

                    <div className="text-[11px] font-mono text-[#7D776F] mt-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8A5A2B] animate-ping"></span>
                      {processLog}
                    </div>
                  </div>

                  {/* Extracted JSON Output Card */}
                  <div className="bg-[#141413] text-[#F4F0EA] p-5 rounded font-mono text-xs border border-white/10 shadow-lg">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/15 text-[10px] text-[#A36D36]">
                      <span>SCHEMA: ARCEN_GEM_SPEC_v1.0</span>
                      <span className="text-emerald-400">STATUS: VALIDATED</span>
                    </div>

                    <div className="space-y-2 text-[#DDD]">
                      <div className="flex justify-between">
                        <span className="text-[#888]">"detected_stone_shape":</span>
                        <span className="text-[#CCA77C] font-semibold">"{selectedPreset.stoneShape}"</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#888]">"length_dimension_x":</span>
                        <span className="text-emerald-400">"{selectedPreset.dimensions.length}"</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#888]">"width_dimension_y":</span>
                        <span className="text-emerald-400">"{selectedPreset.dimensions.width}"</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#888]">"depth_pavilion_z":</span>
                        <span className="text-emerald-400">"{selectedPreset.dimensions.depth}"</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#888]">"length_to_width_ratio":</span>
                        <span className="text-[#CCA77C]">"{selectedPreset.ratio}"</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#888]">"optical_confidence_score":</span>
                        <span className="text-emerald-400 font-bold">{selectedPreset.confidence}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-white/10">
                        <span className="text-[#888]">"prong_seating_profile":</span>
                        <span className="text-[#EEDFCC]">{selectedPreset.prongRecommendation}</span>
                      </div>
                    </div>
                  </div>

                  {/* Advance to Step 3 Button */}
                  <div className="pt-2">
                    <button
                      disabled={isProcessing}
                      onClick={generateCAD}
                      className="w-full py-4 bg-[#8A5A2B] hover:bg-[#6E441E] text-[#F4F0EA] text-xs font-semibold uppercase tracking-widest transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Proceed to Parametric CAD Generation</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* Step 3: Generating Design + CAD & Spec Sheet */}
          {currentStep === 3 && (
            <div className="p-8 md:p-12 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#8A5A2B]">
                    STEP 03 OF 03 — COMPLETE
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#141413] font-bold mt-1">
                    Production-Ready CAD & Manufacturing Spec
                  </h3>
                  <p className="text-sm text-[#666666] mt-1">
                    Manufacturing checks passed. B-rep solids and CAM slicing files are locked and ready for direct casting.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>CASTING INTEGRITY: 100% PASSED</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Render / 3D CAD Preview */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="relative rounded border border-[#D8D2C4] overflow-hidden bg-[#F4F0EA] aspect-[4/3] flex items-center justify-center p-4 shadow-inner">
                    <img 
                      src={selectedPreset.id === 'pendant' ? '/jewelry-pendant.png' : '/arcen-hero-ref.png'} 
                      alt="Rendered Jewelry Piece CAD"
                      className="max-h-full max-w-full object-contain filter drop-shadow-lg"
                    />

                    {/* Technical HUD stamp */}
                    <div className="absolute top-3 left-3 bg-[#141413]/90 text-white font-mono text-[10px] px-2.5 py-1 border border-white/20">
                      FILE: ARC-PROD-{selectedPreset.id.toUpperCase()}.3DM
                    </div>

                    <div className="absolute bottom-3 left-3 bg-white/90 text-[#141413] font-mono text-[10px] px-2.5 py-1 border border-[#D8D2C4]">
                      NURBS TOLERANCE: ±0.005mm
                    </div>
                  </div>

                  {/* Download Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    <button 
                      onClick={() => alert(`Simulating package download: ARC-PROD-${selectedPreset.id.toUpperCase()}.STEP with full parametric history`)}
                      className="p-3 border border-[#8A5A2B] bg-[#F7EFE4] text-[#8A5A2B] hover:bg-[#8A5A2B] hover:text-white transition-all flex items-center justify-center gap-2 font-medium"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download .STEP</span>
                    </button>

                    <button 
                      onClick={() => alert(`Simulating package download: ARC-PROD-${selectedPreset.id.toUpperCase()}.3DM (Native Rhino 7/8 Layered)`)}
                      className="p-3 border border-[#D8D2C4] bg-white text-[#222] hover:border-[#8A5A2B] transition-all flex items-center justify-center gap-2 font-medium"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download .3DM</span>
                    </button>
                  </div>
                </div>

                {/* Right: Technical Spec Sheet */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="p-6 bg-[#FAF8F5] border border-[#D8D2C4] space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#D8D2C4] text-xs font-mono uppercase tracking-wider text-[#7D776F]">
                      <span>TECHNICAL SPECIFICATION SHEET</span>
                      <span className="text-[#8A5A2B] font-bold">REV 1.0</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                      <div>
                        <div className="text-[10px] text-[#7D776F] uppercase">Setting Architecture</div>
                        <div className="font-semibold text-[#141413] mt-0.5">{selectedPreset.cadOutput.style}</div>
                      </div>

                      <div>
                        <div className="text-[10px] text-[#7D776F] uppercase">Primary Alloy</div>
                        <div className="font-semibold text-[#141413] mt-0.5">{selectedPreset.cadOutput.alloy}</div>
                      </div>

                      <div>
                        <div className="text-[10px] text-[#7D776F] uppercase">Estimated Metal Weight</div>
                        <div className="font-semibold text-[#8A5A2B] mt-0.5">{selectedPreset.cadOutput.weight}</div>
                      </div>

                      <div>
                        <div className="text-[10px] text-[#7D776F] uppercase">Target Finger Size</div>
                        <div className="font-semibold text-[#141413] mt-0.5">{selectedPreset.cadOutput.ringSize}</div>
                      </div>

                      <div>
                        <div className="text-[10px] text-[#7D776F] uppercase">Min Wall Thickness</div>
                        <div className="font-semibold text-emerald-700 mt-0.5">{selectedPreset.cadOutput.wallThickness}</div>
                      </div>

                      <div>
                        <div className="text-[10px] text-[#7D776F] uppercase">Casting Shrinkage Comp</div>
                        <div className="font-semibold text-[#141413] mt-0.5">{selectedPreset.cadOutput.shrinkageOffset}</div>
                      </div>

                      <div>
                        <div className="text-[10px] text-[#7D776F] uppercase">Estimated Cast Turnaround</div>
                        <div className="font-semibold text-[#141413] mt-0.5">{selectedPreset.cadOutput.leadTime}</div>
                      </div>

                      <div>
                        <div className="text-[10px] text-[#7D776F] uppercase">B2B Manufacturing Cost</div>
                        <div className="font-semibold text-[#8A5A2B] mt-0.5">{selectedPreset.cadOutput.costEstimate}</div>
                      </div>
                    </div>

                    {/* Pre-flight Casting Checklist */}
                    <div className="pt-4 border-t border-[#D8D2C4] space-y-2">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#7D776F]">
                        Pre-Flight Casting Checklist
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                        <span className="flex items-center gap-1.5 text-emerald-800">
                          <Check className="w-3.5 h-3.5 text-emerald-600" /> Manifold Mesh Sealed
                        </span>
                        <span className="flex items-center gap-1.5 text-emerald-800">
                          <Check className="w-3.5 h-3.5 text-emerald-600" /> Seat Clearance: 0.15mm
                        </span>
                        <span className="flex items-center gap-1.5 text-emerald-800">
                          <Check className="w-3.5 h-3.5 text-emerald-600" /> Sprue Feeder Anchored
                        </span>
                        <span className="flex items-center gap-1.5 text-emerald-800">
                          <Check className="w-3.5 h-3.5 text-emerald-600" /> Zero Negative Draft
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono pt-2">
                    <button
                      onClick={resetDemo}
                      className="text-[#666] hover:text-[#8A5A2B] underline cursor-pointer"
                    >
                      ← Run another reference test
                    </button>
                    <span className="text-[11px] text-[#7D776F]">
                      AUTOMATED CAM PIPELINE READY
                    </span>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
