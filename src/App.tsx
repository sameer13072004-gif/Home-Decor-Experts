import React, { useState, useRef } from "react";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Check, 
  Menu, 
  X, 
  Award, 
  Scale, 
  Calendar, 
  Play, 
  VolumeX, 
  Volume2, 
  Star, 
  ShieldCheck, 
  ArrowRight,
  Armchair,
  ChefHat,
  Layers,
  Wrench,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { 
  PORTFOLIO, 
  SERVICES, 
  TRUST_PILLARS, 
  BUSINESS_INFO, 
  CUSTOMER_REVIEWS, 
  PortfolioItem, 
  ServiceItem 
} from "./data";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeMedia, setActiveMedia] = useState<PortfolioItem | null>(null);
  const [videoMuted, setVideoMuted] = useState(true);

  // Categories extraction for filtering
  const categories = ["All", ...Array.from(new Set(PORTFOLIO.map(item => item.category)))];

  const filteredPortfolio = selectedCategory === "All" 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === selectedCategory);

  // Helper to map string icon name to Lucide Component
  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    switch (iconName) {
      case "Armchair": return <Armchair className={className} />;
      case "ChefHat": return <ChefHat className={className} />;
      case "Layers": return <Layers className={className} />;
      case "Wrench": return <Wrench className={className} />;
      case "Scale": return <Scale className={className} />;
      case "Award": return <Award className={className} />;
      case "Calendar": return <Calendar className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  // Pre-filled WhatsApp message for a specific design item
  const getWhatsAppMessageForPortfolio = (title: string) => {
    const text = encodeURIComponent(`Hi Home Decor Experts! I saw your portfolio work "${title}" on your website and would like to get a quotation for a similar woodwork design.`);
    return `https://wa.me/917466939076?text=${text}`;
  };

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#F3EFE0] font-sans selection:bg-[#C5A059] selection:text-[#121212] overflow-x-hidden">
      
      {/* 1. NAVIGATION BAR (Sticky/Fixed) */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#121212]/90 backdrop-blur-md border-b border-[#C5A059]/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <a href="#hero" className="flex items-center gap-3" onClick={() => handleScrollTo("hero")}>
                <img 
                  src={BUSINESS_INFO.logoUrl} 
                  alt={`${BUSINESS_INFO.name} Logo`} 
                  className="h-12 w-auto object-contain border border-[#C5A059]/30 rounded p-1 bg-[#1A1A1A]"
                  onError={(e) => {
                    // Fallback in case of image load error
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold tracking-tight text-white leading-none">
                    HOME DECOR
                  </span>
                  <span className="text-[10px] text-[#C5A059] font-mono tracking-widest uppercase font-semibold">
                    EXPERTS
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
              <button 
                onClick={() => handleScrollTo("services")} 
                className="text-gray-300 hover:text-[#C5A059] transition-colors cursor-pointer"
              >
                Services
              </button>
              <button 
                onClick={() => handleScrollTo("portfolio")} 
                className="text-gray-300 hover:text-[#C5A059] transition-colors cursor-pointer"
              >
                Our Work
              </button>
              <button 
                onClick={() => handleScrollTo("why-choose-us")} 
                className="text-gray-300 hover:text-[#C5A059] transition-colors cursor-pointer"
              >
                Why Us
              </button>
              <button 
                onClick={() => handleScrollTo("reviews")} 
                className="text-gray-300 hover:text-[#C5A059] transition-colors cursor-pointer"
              >
                Reviews
              </button>
              <button 
                onClick={() => handleScrollTo("contact")} 
                className="text-gray-300 hover:text-[#C5A059] transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>

            {/* Direct Call CTA Button */}
            <div className="hidden sm:block">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C5A059] text-[#121212] font-semibold text-sm hover:bg-[#DBC18C] transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/10 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now: {BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-400 hover:text-white p-2"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu details */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#1A1A1A] border-t border-[#C5A059]/10"
            >
              <div className="px-4 pt-2 pb-6 space-y-3 font-medium">
                <button
                  onClick={() => handleScrollTo("services")}
                  className="block w-full text-left py-2 px-3 rounded hover:bg-[#2A2A2A] text-gray-300 hover:text-[#C5A059]"
                >
                  Services
                </button>
                <button
                  onClick={() => handleScrollTo("portfolio")}
                  className="block w-full text-left py-2 px-3 rounded hover:bg-[#2A2A2A] text-gray-300 hover:text-[#C5A059]"
                >
                  Our Work
                </button>
                <button
                  onClick={() => handleScrollTo("why-choose-us")}
                  className="block w-full text-left py-2 px-3 rounded hover:bg-[#2A2A2A] text-gray-300 hover:text-[#C5A059]"
                >
                  Why Us
                </button>
                <button
                  onClick={() => handleScrollTo("reviews")}
                  className="block w-full text-left py-2 px-3 rounded hover:bg-[#2A2A2A] text-gray-300 hover:text-[#C5A059]"
                >
                  Reviews
                </button>
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="block w-full text-left py-2 px-3 rounded hover:bg-[#2A2A2A] text-gray-300 hover:text-[#C5A059]"
                >
                  Contact
                </button>
                <div className="pt-4 border-t border-[#C5A059]/10 flex flex-col gap-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#C5A059] text-[#121212] font-semibold"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Call Now: {BUSINESS_INFO.phone}</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#25D366] text-white font-semibold"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO SECTION */}
      <header id="hero" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
        {/* Background Image / Woodcraft styling overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://renowix.in/wp-content/uploads/2026/06/IMG-20260623-WA0027.jpg" 
            alt="Luxury Woodwork Background"
            className="w-full h-full object-cover object-center opacity-25 scale-105 filter brightness-75 contrast-125"
          />
          {/* Walnut / Charcoal rich visual gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-[#1A110D]/90 to-[#121212]"></div>
          {/* Fine subtle lines mirroring precision grids */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A05908_1px,transparent_1px),linear-gradient(to_bottom,#C5A05908_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          
          {/* Tagline Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Premium Handcrafted Woodwork</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 max-w-4xl"
          >
            Premium Carpentry & <br className="hidden sm:inline" />
            <span className="text-[#C5A059] font-serif italic font-normal">Bespoke Woodwork</span> in Delhi NCR
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-10 font-sans font-light leading-relaxed"
          >
            Transforming luxury homes and commercial spaces across{" "}
            <span className="text-white font-medium">Noida, Greater Noida, and Ghaziabad</span> with expert architectural craftsmanship.
          </motion.p>

          {/* Dual CTAs (Side-by-Side) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA (WhatsApp) */}
            <a 
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-base shadow-lg shadow-[#25D366]/10 hover:bg-[#20ba59] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              <MessageCircle className="w-5.5 h-5.5 fill-current" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA (Direct Call) */}
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-transparent border-2 border-[#C5A059] text-white font-semibold text-base hover:bg-[#C5A059]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 fill-current text-[#C5A059]" />
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>
          </motion.div>

          {/* Target Location Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs font-mono text-gray-400 uppercase tracking-wider"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> Noida
            </span>
            <span className="w-1 h-1 rounded-full bg-[#C5A059]/40 hidden sm:inline-block"></span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> Greater Noida
            </span>
            <span className="w-1 h-1 rounded-full bg-[#C5A059]/40 hidden sm:inline-block"></span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> Ghaziabad
            </span>
          </motion.div>

          {/* Mouse scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => handleScrollTo("services")}>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059]">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-1.5">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 rounded-full bg-[#C5A059]"
              ></motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. SERVICES GRID */}
      <section id="services" className="py-24 bg-[#161616] relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#121212] to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest font-semibold block mb-2">Our Offerings</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Premium Woodworking Solutions
            </h2>
            <div className="h-1 w-20 bg-[#C5A059] mx-auto mb-6"></div>
            <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
              Every detail is mapped meticulously. From selecting high-grade seasoned hardwood to installing flawless premium architectural fittings, we define timeless style.
            </p>
          </div>

          {/* Services Grid (4 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#211B18] border border-[#C5A059]/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#C5A059]/40 transition-all duration-300 group hover:shadow-2xl hover:shadow-[#121212] hover:-translate-y-1"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] mb-6 group-hover:bg-[#C5A059] group-hover:text-[#121212] transition-all duration-300">
                    {renderIcon(service.icon, "w-6 h-6")}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#C5A059] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Quote WhatsApp CTA */}
                <a 
                  href={`https://wa.me/917466939076?text=${encodeURIComponent(`Hi Home Decor Experts! I'm interested in your "${service.title}" services.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] font-mono uppercase tracking-wider group-hover:text-white transition-colors mt-auto font-semibold"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PORTFOLIO GALLERY / SOCIAL PROOF */}
      <section id="portfolio" className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest font-semibold block mb-2">Social Proof & Masterworks</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Recent Work
            </h2>
            <div className="h-1 w-20 bg-[#C5A059] mx-auto mb-6"></div>
            <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
              Real project captures and client walkthroughs directly from our luxury sites in Noida and Ghaziabad. Filter through our catalogue below.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === category 
                    ? "bg-[#C5A059] text-[#121212] font-semibold shadow-md shadow-[#C5A059]/20" 
                    : "bg-[#1A1A1A] text-gray-400 hover:text-white hover:bg-[#252525]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry / Grid Portfolio (Staggered-like design) */}
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-[#1E1917] border border-[#C5A059]/10 rounded-xl overflow-hidden shadow-lg hover:border-[#C5A059]/30 transition-all duration-300 cursor-pointer relative"
                  onClick={() => setActiveMedia(item)}
                >
                  {/* Media Frame */}
                  <div className="relative aspect-[4/3] w-full bg-[#2A2421] overflow-hidden">
                    {item.type === 'video' ? (
                      <div className="w-full h-full relative">
                        {/* Video thumbnail / player with muted loop */}
                        <video 
                          src={item.url} 
                          className="w-full h-full object-cover pointer-events-none"
                          muted
                          loop
                          playsInline
                          autoPlay
                        />
                        <div className="absolute inset-0 bg-[#121212]/40 group-hover:bg-[#121212]/20 transition-all flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-[#C5A059]/80 text-[#121212] flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          </div>
                        </div>
                        <span className="absolute top-3 left-3 bg-[#C5A059] text-[#121212] text-[10px] font-mono tracking-widest font-semibold uppercase px-2.5 py-1 rounded">
                          Video Walkthrough
                        </span>
                      </div>
                    ) : (
                      <div className="w-full h-full">
                        <img 
                          src={item.url} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        <span className="absolute top-3 left-3 bg-[#121212]/85 text-[#C5A059] border border-[#C5A059]/30 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded">
                          High-Res Image
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Item Info Footer */}
                  <div className="p-5 border-t border-[#C5A059]/5 bg-gradient-to-b from-[#1E1917] to-[#14100E]">
                    <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1.5 font-light line-clamp-2">
                      {item.description}
                    </p>
                    <div className="mt-4 pt-3 border-t border-[#C5A059]/10 flex items-center justify-between text-xs font-mono text-gray-300">
                      <span className="text-gray-400 group-hover:text-white transition-colors">Tap to enlarge & play</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 5. TRUST & QUALITY INDICATORS (Why Choose Us) */}
      <section id="why-choose-us" className="py-24 bg-[#1B1512] relative overflow-hidden">
        {/* Background visual details representing premium cuts/grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A05904_1px,transparent_1px),linear-gradient(to_bottom,#C5A05904_1px,transparent_1px)] bg-[size:6rem_6rem]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest font-semibold block mb-2">Our Signature Standards</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.15]">
                Why Discerning Clients Choose Us
              </h2>
              <div className="h-1 w-20 bg-[#C5A059] mb-6"></div>
              <p className="text-gray-300 font-light leading-relaxed text-sm sm:text-base mb-8">
                Carpentry isn&apos;t just cutting wood—it is an art of high accuracy, lifetime durability, and beautiful spaces. We respect your home like ours.
              </p>

              {/* Quick Call Out Card */}
              <div className="bg-[#121212]/80 border border-[#C5A059]/20 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white mb-1">Our Lifetime Warranty Promise</h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">
                    We cover hardware replacements and plywood integrity on wardrobes and kitchens for complete peace of mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Pillars Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TRUST_PILLARS.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="bg-[#241D1A] border border-[#C5A059]/10 rounded-2xl p-6 shadow-xl hover:border-[#C5A059]/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] mb-5 group-hover:bg-[#C5A059] group-hover:text-[#121212] transition-colors">
                    {renderIcon(pillar.icon, "w-6 h-6")}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#C5A059] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}

              {/* Highlight Service Location Column Card */}
              <div className="bg-gradient-to-br from-[#2E241E] to-[#121212] border border-[#C5A059]/20 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-widest font-bold">Local Operations</span>
                  <h3 className="font-serif text-xl font-bold text-white mt-1 mb-3">Delhi NCR Covered</h3>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">
                    Our specialized woodcutting workshop and on-site carpenters are located closely to serve you within hours.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {BUSINESS_INFO.areas.map(area => (
                    <span key={area} className="px-2.5 py-1 rounded bg-[#121212]/60 border border-[#C5A059]/15 text-[10px] font-mono text-gray-300 uppercase">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5.5 CLIENT REVIEWS SECTION */}
      <section id="reviews" className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest font-semibold block mb-2">Word of Mouth</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <div className="h-1 w-20 bg-[#C5A059] mx-auto mb-6"></div>
            <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
              Customer satisfaction is our ultimate brand asset. Here are real Google & WhatsApp reviews shared by premium property owners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CUSTOMER_REVIEWS.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#1D1714] border border-[#C5A059]/10 rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4 text-[#C5A059]">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 text-sm font-light leading-relaxed italic mb-6">
                    &ldquo;{review.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#C5A059]/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm">{review.name}</h4>
                    <span className="text-[10px] text-[#C5A059] font-mono">{review.location}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#C5A059]/10 text-[#C5A059] text-[10px] font-mono uppercase tracking-wider">
                    {review.project}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. BOTTOM CONTACT SECTION (Replaces the Form) */}
      <section id="contact" className="py-24 bg-[#1B1512] relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#121212] to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A05902_1px,transparent_1px),linear-gradient(to_bottom,#C5A05902_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mx-auto mb-6">
            <MessageCircle className="w-8 h-8 fill-none" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Need a Quick Quote or Site Visit?
          </h2>
          <div className="h-1 w-20 bg-[#C5A059] mx-auto mb-6"></div>
          
          <p className="text-gray-300 font-light leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-10">
            Skip filling out complex email forms. Tap one of our high-contrast direct links below to connect with the owner instantly on WhatsApp or make a standard direct phone call.
          </p>

          {/* Large prominent CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-xl mx-auto">
            {/* Click to WhatsApp */}
            <a 
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4.5 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-lg shadow-[#25D366]/20 hover:bg-[#20ba59] transition-all duration-300 hover:-translate-y-1 group"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>Click to WhatsApp Us</span>
            </a>

            {/* Direct Call */}
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4.5 rounded-xl bg-transparent border-2 border-[#C5A059] text-white font-bold text-base hover:bg-[#C5A059]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <Phone className="w-5.5 h-5.5 fill-current text-[#C5A059]" />
              <span>Call Direct: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>

          {/* Quick timing metrics */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-mono text-gray-400">
            <span className="flex items-center gap-1.5 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping"></span>
              <span>Online Now: Replies in under 10 mins</span>
            </span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span>Site Visits Scheduled Daily</span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span>No Form Hassle</span>
          </div>

        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#121212] border-t border-[#C5A059]/10 py-12 relative z-10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Footer Logo & Brand */}
          <div className="flex flex-col items-center gap-2 mb-6">
            <img 
              src={BUSINESS_INFO.logoUrl} 
              alt="Home Decor Experts Logo" 
              className="h-10 w-auto object-contain bg-[#1A1A1A] p-0.5 border border-[#C5A059]/15 rounded"
            />
            <h3 className="font-serif text-lg font-bold text-white tracking-tight uppercase leading-none mt-2">
              Home Decor Experts
            </h3>
            <span className="text-[10px] font-mono text-[#C5A059] tracking-widest uppercase">
              Bespoke Carpentry & Woodwork
            </span>
          </div>

          {/* SEO Service Areas */}
          <div className="max-w-xl mx-auto mb-6 text-xs text-gray-400 leading-relaxed font-light">
            Providing high-end custom carpentry, false ceilings, modular kitchens, wooden flooring, and wardrobe solutions across: <br />
            <span className="text-white font-medium">Noida, Greater Noida, Ghaziabad, and neighboring Delhi NCR sectors</span>.
          </div>

          {/* Divider line */}
          <div className="h-[1px] w-1/4 bg-[#C5A059]/20 mx-auto mb-6"></div>

          {/* Copyright details */}
          <div className="text-gray-500 text-[11px] font-mono">
            &copy; {new Date().getFullYear()} Home Decor Experts. All Rights Reserved. <br />
            Designed for premium local conversion with zero email friction.
          </div>
        </div>
      </footer>

      {/* 7. PERSISTENT FLOATING ACTION BUTTON (WhatsApp widget bottom right) */}
      <div className="fixed bottom-6 right-6 z-45 flex flex-col items-end">
        {/* Animated help tooltip */}
        <div className="hidden md:block bg-[#1E1917] border border-[#C5A059]/30 text-white text-xs px-3 py-1.5 rounded-lg shadow-xl mb-2.5 mr-1 font-sans font-light">
          Get Instant Quote on <span className="text-[#25D366] font-semibold">WhatsApp</span>
        </div>
        
        <a 
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 relative group"
        >
          {/* Animated pulse rings */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping group-hover:animate-none"></span>
          <MessageCircle className="w-7 h-7 fill-current relative z-10" />
        </a>
      </div>

      {/* PORTFOLIO LIGHTBOX / DETAILED VIEW MODAL */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#121212]/95 backdrop-blur-md"
            onClick={() => setActiveMedia(null)}
          >
            {/* Close Button top right */}
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-[#1A1A1A]/80 border border-[#C5A059]/20 text-gray-400 hover:text-white"
              onClick={() => setActiveMedia(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Body Container */}
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-[#1E1917] border border-[#C5A059]/30 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Media Section */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-[#121212] flex items-center justify-center">
                {activeMedia.type === 'video' ? (
                  <div className="w-full h-full relative">
                    <video 
                      src={activeMedia.url} 
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                      playsInline
                    />
                  </div>
                ) : (
                  <img 
                    src={activeMedia.url} 
                    alt={activeMedia.title} 
                    className="w-full h-full object-contain"
                  />
                )}
                
                {/* Lightbox Badge */}
                <span className="absolute top-4 left-4 bg-[#C5A059] text-[#121212] text-[10px] font-mono tracking-widest uppercase font-bold px-3 py-1 rounded">
                  {activeMedia.category}
                </span>
              </div>

              {/* Info & Conversion Action Section */}
              <div className="p-6 sm:p-8 border-t border-[#C5A059]/20 bg-gradient-to-b from-[#1E1917] to-[#121212]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  
                  {/* Left Metadata */}
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                      {activeMedia.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-light leading-relaxed">
                      {activeMedia.description}
                    </p>
                  </div>

                  {/* Right WhatsApp Conversion Trigger */}
                  <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                    <a 
                      href={getWhatsAppMessageForPortfolio(activeMedia.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20ba59] transition-all"
                    >
                      <MessageCircle className="w-4.5 h-4.5 fill-current" />
                      <span>Get Free Quote for This</span>
                    </a>
                    
                    <a 
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent border border-[#C5A059] text-white font-semibold text-sm hover:bg-[#C5A059]/15 transition-all"
                    >
                      <Phone className="w-4 h-4 fill-current text-[#C5A059]" />
                      <span>Call Now</span>
                    </a>
                  </div>

                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
