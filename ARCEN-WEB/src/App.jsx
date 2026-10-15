import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import PipelineSection from './components/PipelineSection';
import InteractiveDemo from './components/InteractiveDemo';
import ConnectedProductSection from './components/ConnectedProductSection';
import ManufacturerSection from './components/ManufacturerSection';
import AccessModal from './components/AccessModal';
import Footer from './components/Footer';

export default function App() {
  const [accessModalOpen, setAccessModalOpen] = useState(false);

  const handleOpenAccessModal = () => {
    setAccessModalOpen(true);
  };

  const handleCloseAccessModal = () => {
    setAccessModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F0EA] text-[#222222]">
      {/* Top Navigation */}
      <Navbar onRequestAccess={handleOpenAccessModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 2: Hero Section matching reference image */}
        <HeroSection onRequestAccess={handleOpenAccessModal} />

        {/* Section 3: The Problem / Creative-to-Manufacturing Gap */}
        <ProblemSection />

        {/* Section 4: 8-Stage Interactive Pipeline */}
        <PipelineSection />

        {/* Section 5: Interactive Front-End Demo Simulator */}
        <InteractiveDemo />

        {/* Section 6: Architecture - One Connected Product */}
        <ConnectedProductSection />

        {/* Section 7: Built For Manufacturers (B2B) & ROI Calculator */}
        <ManufacturerSection onRequestAccess={handleOpenAccessModal} />
      </main>

      {/* Footer */}
      <Footer onRequestAccess={handleOpenAccessModal} />

      {/* Request Access VIP Pilot Modal */}
      <AccessModal 
        isOpen={accessModalOpen} 
        onClose={handleCloseAccessModal} 
      />
    </div>
  );
}
