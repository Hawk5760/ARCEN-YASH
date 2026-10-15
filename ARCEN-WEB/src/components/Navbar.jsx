import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

export default function Navbar({ onRequestAccess }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#F4F0EA]/90 backdrop-blur-md border-b border-[#D8D2C4]/70 shadow-sm' 
        : 'bg-transparent border-b border-[#D8D2C4]/40'
    }`}>
      {/* Top micro engineering bar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-1.5 border-b border-[#D8D2C4]/30 text-[10px] font-mono tracking-widest text-[#7D776F]">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            PRECISION ENGINE: ACTIVE (±0.01mm)
          </span>
          <span className="text-[#D8D2C4]">|</span>
          <span>DIRECT CASTING TOLERANCE: VALIDATED</span>
        </div>
        <div className="flex items-center gap-6">
          <span>PARIS • MILAN • NEW YORK • SURAT</span>
          <span className="text-[#D8D2C4]">|</span>
          <span className="text-[#8A5A2B]">SYSTEM BUILD: v2.4.8-PROD</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-editorial text-3xl md:text-4xl tracking-tight text-[#141413] font-bold group-hover:text-[#8A5A2B] transition-colors">
              ARCEN
            </span>
            <div className="w-full h-[2px] bg-[#8A5A2B] scale-x-100 group-hover:scale-x-110 transition-transform origin-left"></div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <a 
            href="#problem" 
            className="text-xs font-medium uppercase tracking-widest text-[#555555] hover:text-[#8A5A2B] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8A5A2B] hover:after:w-full after:transition-all"
          >
            The Transition
          </a>
          <a 
            href="#pipeline" 
            className="text-xs font-medium uppercase tracking-widest text-[#555555] hover:text-[#8A5A2B] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8A5A2B] hover:after:w-full after:transition-all"
          >
            8-Stage Pipeline
          </a>
          <a 
            href="#demo" 
            className="text-xs font-medium uppercase tracking-widest text-[#555555] hover:text-[#8A5A2B] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8A5A2B] hover:after:w-full after:transition-all"
          >
            Live Demo
          </a>
          <a 
            href="#architecture" 
            className="text-xs font-medium uppercase tracking-widest text-[#555555] hover:text-[#8A5A2B] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8A5A2B] hover:after:w-full after:transition-all"
          >
            Architecture
          </a>
          <a 
            href="#manufacturers" 
            className="text-xs font-medium uppercase tracking-widest text-[#555555] hover:text-[#8A5A2B] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8A5A2B] hover:after:w-full after:transition-all"
          >
            For Manufacturers
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={onRequestAccess}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 bg-[#8A5A2B] text-[#F4F0EA] text-xs font-semibold uppercase tracking-widest hover:bg-[#6E441E] transition-all duration-200 shadow-sm hover:shadow active:scale-95"
          >
            <span>Request Access</span>
            <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 text-[#F4F0EA]/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onRequestAccess}
            className="px-3.5 py-1.5 bg-[#8A5A2B] text-[#F4F0EA] text-[11px] font-semibold uppercase tracking-wider"
          >
            Access
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#222222] hover:text-[#8A5A2B] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4F0EA] border-b border-[#D8D2C4] px-6 py-6 space-y-4">
          <a 
            href="#problem" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium uppercase tracking-widest text-[#333333] hover:text-[#8A5A2B]"
          >
            The Transition
          </a>
          <a 
            href="#pipeline" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium uppercase tracking-widest text-[#333333] hover:text-[#8A5A2B]"
          >
            8-Stage Pipeline
          </a>
          <a 
            href="#demo" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium uppercase tracking-widest text-[#333333] hover:text-[#8A5A2B]"
          >
            Live Demo
          </a>
          <a 
            href="#architecture" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium uppercase tracking-widest text-[#333333] hover:text-[#8A5A2B]"
          >
            Architecture
          </a>
          <a 
            href="#manufacturers" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium uppercase tracking-widest text-[#333333] hover:text-[#8A5A2B]"
          >
            For Manufacturers
          </a>
          <div className="pt-4 border-t border-[#D8D2C4]">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestAccess();
              }}
              className="w-full py-3 bg-[#8A5A2B] text-[#F4F0EA] text-xs font-semibold uppercase tracking-widest text-center"
            >
              Request Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
