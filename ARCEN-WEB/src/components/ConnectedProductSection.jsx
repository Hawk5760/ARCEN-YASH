import React, { useState } from 'react';
import { Eye, Cpu, Box, Server, Smartphone, Layout, CheckCircle } from 'lucide-react';

export default function ConnectedProductSection() {
  const [activeNode, setActiveNode] = useState(0);

  const disciplines = [
    {
      id: 0,
      name: "Computer Vision",
      short: "Optical Matrix",
      angle: 0, // Top
      icon: Eye,
      description: "Sub-pixel edge detection, lens distortion correction, and automated fiducial scale calibration down to ±0.01mm.",
      stack: ["OpenCV Custom Kernels", "PyTorch B-Spline Estimators", "Homography Matrix Solver"]
    },
    {
      id: 1,
      name: "Generative Design",
      short: "Design Engine",
      angle: 60, // Top Right
      icon: Cpu,
      description: "Organic gemstone seating algorithms, prong deformation modeling, and balanced weight distribution.",
      stack: ["Grasshopper Algorithmic Scripts", "Topology Optimization", "Comfort-Fit Arc Solvers"]
    },
    {
      id: 2,
      name: "CAD / 3D Solid",
      short: "Parametric Kernel",
      angle: 120, // Bottom Right
      icon: Box,
      description: "Production of water-tight manifold boundary representation (B-Rep) solids compatible with Rhino, MatrixGold, and resin CAM.",
      stack: ["OpenCASCADE B-Rep Kernel", "NURBS Surface Stitching", "STEP / STL Export Pipeline"]
    },
    {
      id: 3,
      name: "Cloud Backend",
      short: "Factory Engine",
      angle: 180, // Bottom
      icon: Server,
      description: "Distributed queuing of parametric model builds, automated casting shrinkage calculation, and factory ERP webhooks.",
      stack: ["Rust Geometry Microservices", "PostgreSQL Spec Ledger", "AWS High-Compute Workers"]
    },
    {
      id: 4,
      name: "Mobile Capture",
      short: "Sensor Input",
      angle: 240, // Bottom Left
      icon: Smartphone,
      description: "Intuitive gemstone and jewelry photography guide for bench jewelers with real-time focus peaking and lighting guidance.",
      stack: ["iOS Metal Photogrammetry", "Android CameraX Pipeline", "Fiducial Dot Target Detection"]
    },
    {
      id: 5,
      name: "Studio UI / UX",
      short: "Technician Hub",
      angle: 300, // Top Left
      icon: Layout,
      description: "Minimalist, high-contrast editorial workbench designed for fast B2B review, dimensional adjustment, and batch exports.",
      stack: ["WebGL Real-Time Shading", "Sub-Millimeter Ortho Viewers", "Private-Label Customizer"]
    }
  ];

  const currentNode = disciplines[activeNode];

  return (
    <section id="architecture" className="py-24 md:py-32 bg-[#F4F0EA] border-b border-[#D8D2C4] relative overflow-hidden bg-grid-drafting">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/70 border border-[#D8D2C4] text-[11px] font-mono tracking-widest text-[#8A5A2B] uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-[#8A5A2B] rounded-full"></span>
            NOT DISCONNECTED TOOLS
          </div>
          
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] leading-tight mb-4">
            One connected product.
          </h2>

          <p className="font-serif text-lg text-[#8A5A2B] tracking-wide mb-2 italic">
            Not disconnected tools. One connected journey.
          </p>

          <p className="text-base text-[#555555] leading-relaxed">
            Most jewelry workshops cobble together consumer scanning apps, generic CAD plugins, manual spreadsheets, and phone photos. ARCEN harmonizes the entire stack into a singular, precision-engineered platform.
          </p>
        </div>

        {/* Hub Diagram & Discipline Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left / Center: Interactive Radial Hub Diagram */}
          <div className="lg:col-span-7 flex items-center justify-center p-4">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              
              {/* Outer boundary ring with architectural dashes */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#D8D2C4] animate-[spin_120s_linear_infinite] pointer-events-none"></div>
              
              {/* Mid connector ring */}
              <div className="absolute inset-8 rounded-full border border-[#D8D2C4]/70 pointer-events-none"></div>
              
              {/* Central Core: ARCEN */}
              <div className="relative z-20 w-32 h-32 md:w-36 md:h-36 rounded-full bg-white border-2 border-[#8A5A2B] shadow-luxury flex flex-col items-center justify-center text-center p-3">
                <span className="font-editorial text-xl md:text-2xl font-bold text-[#141413]">
                  ARCEN
                </span>
                <div className="w-8 h-[2px] bg-[#8A5A2B] my-1"></div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#8A5A2B]">
                  CORE ENGINE
                </span>
                <span className="text-[8px] font-mono text-[#7D776F] mt-0.5">
                  SHARED TELEMETRY
                </span>
              </div>

              {/* 6 Radial Nodes */}
              {disciplines.map((d, index) => {
                // Calculate position on a circle with radius 40% (approx 160-190px)
                // -90 degrees offset so 0 is top
                const rad = ((d.angle - 90) * Math.PI) / 180;
                // Responsive radius based on percent: ~38% from center
                const radiusPercent = 38;
                const x = 50 + radiusPercent * Math.cos(rad);
                const y = 50 + radiusPercent * Math.sin(rad);

                const Icon = d.icon;
                const isSelected = activeNode === d.id;

                return (
                  <button
                    key={d.id}
                    onClick={() => setActiveNode(d.id)}
                    onMouseEnter={() => setActiveNode(d.id)}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 group p-2 transition-all duration-300 focus:outline-none`}
                  >
                    {/* Circle Button */}
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full border flex flex-col items-center justify-center transition-all duration-300 ${
                      isSelected 
                        ? 'border-[#8A5A2B] bg-[#8A5A2B] text-[#F4F0EA] scale-110 shadow-luxury-hover' 
                        : 'border-[#D8D2C4] bg-[#F4F0EA] hover:bg-white text-[#555] hover:border-[#8A5A2B]'
                    }`}>
                      <Icon className="w-5 h-5 mb-0.5" />
                      <span className="text-[8px] font-mono uppercase font-bold tracking-tight">
                        {d.short}
                      </span>
                    </div>

                    {/* Connecting line to center */}
                    <div className="hidden"></div>
                  </button>
                );
              })}

            </div>
          </div>

          {/* Right: Active Discipline Inspector Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#D8D2C4] p-8 shadow-luxury relative">
              <div className="flex items-center justify-between pb-3 border-b border-[#D8D2C4] text-[10px] font-mono uppercase tracking-widest text-[#7D776F]">
                <span>SUBSYSTEM 0{currentNode.id + 1} ARCHITECTURE</span>
                <span className="text-emerald-700 font-semibold">SYNCHRONIZED</span>
              </div>

              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#8A5A2B] flex items-center justify-center text-[#8A5A2B]">
                    <currentNode.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-2xl font-bold text-[#141413]">
                      {currentNode.name}
                    </h3>
                    <div className="text-xs font-mono text-[#8A5A2B] uppercase">
                      Integrated Module
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#444444] leading-relaxed">
                  {currentNode.description}
                </p>

                {/* Subsystem Tech Stack Chips */}
                <div className="pt-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#7D776F] mb-2">
                    Core Engineering Foundations:
                  </div>
                  <div className="space-y-2">
                    {currentNode.stack.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-[#FAF8F5] border border-[#D8D2C4] text-xs font-mono text-[#222]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8A5A2B]"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation hint */}
                <div className="pt-4 border-t border-[#D8D2C4] flex items-center justify-between text-xs font-mono text-[#7D776F]">
                  <span>CLICK NODES TO INSPECT</span>
                  <span className="text-[#8A5A2B]">NODE {currentNode.id + 1} OF 6</span>
                </div>

              </div>

              {/* Decorative CAD corner markings */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#8A5A2B]"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#8A5A2B]"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
