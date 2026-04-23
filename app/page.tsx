"use client"

// Cruzlings - UCSC Gardening Club Website
import { Wallet, Leaf, X } from "lucide-react"
import { useState } from "react"

type TeamMember = {
  name: string
  role?: string
  image: string
  bio: string
}

export default function HomePage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden pt-20">
        {/* Soft Green Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f0e8] via-[#dceadc] to-[#c5d8c5]" />
        
        {/* Sun */}
        <div className="absolute top-8 right-12 md:right-20 lg:right-28">
          <svg width="160" height="160" viewBox="0 0 160 160" className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52">
            {/* Sun rays - 16 rays around the sun */}
            <line x1="80" y1="5" x2="80" y2="28" stroke="#f4d03f" strokeWidth="4" strokeLinecap="round" />
            <line x1="80" y1="132" x2="80" y2="155" stroke="#f4d03f" strokeWidth="4" strokeLinecap="round" />
            <line x1="5" y1="80" x2="28" y2="80" stroke="#f4d03f" strokeWidth="4" strokeLinecap="round" />
            <line x1="132" y1="80" x2="155" y2="80" stroke="#f4d03f" strokeWidth="4" strokeLinecap="round" />
            {/* Diagonal rays at 45 degrees */}
            <line x1="22" y1="22" x2="40" y2="40" stroke="#f4d03f" strokeWidth="4" strokeLinecap="round" />
            <line x1="120" y1="120" x2="138" y2="138" stroke="#f4d03f" strokeWidth="4" strokeLinecap="round" />
            <line x1="22" y1="138" x2="40" y2="120" stroke="#f4d03f" strokeWidth="4" strokeLinecap="round" />
            <line x1="120" y1="40" x2="138" y2="22" stroke="#f4d03f" strokeWidth="4" strokeLinecap="round" />
            {/* Additional rays at 22.5 degree angles */}
            <line x1="42" y1="10" x2="52" y2="30" stroke="#f4d03f" strokeWidth="3" strokeLinecap="round" />
            <line x1="118" y1="10" x2="108" y2="30" stroke="#f4d03f" strokeWidth="3" strokeLinecap="round" />
            <line x1="10" y1="42" x2="30" y2="52" stroke="#f4d03f" strokeWidth="3" strokeLinecap="round" />
            <line x1="150" y1="42" x2="130" y2="52" stroke="#f4d03f" strokeWidth="3" strokeLinecap="round" />
            <line x1="10" y1="118" x2="30" y2="108" stroke="#f4d03f" strokeWidth="3" strokeLinecap="round" />
            <line x1="150" y1="118" x2="130" y2="108" stroke="#f4d03f" strokeWidth="3" strokeLinecap="round" />
            <line x1="42" y1="150" x2="52" y2="130" stroke="#f4d03f" strokeWidth="3" strokeLinecap="round" />
            <line x1="118" y1="150" x2="108" y2="130" stroke="#f4d03f" strokeWidth="3" strokeLinecap="round" />
            {/* Sun circle */}
            <circle cx="80" cy="80" r="42" fill="#f9e076" />
            <circle cx="80" cy="80" r="34" fill="#f4d03f" />
          </svg>
        </div>

        {/* Decorative clouds */}
        <div className="absolute top-20 left-1/4 opacity-40">
          <svg width="120" height="50" viewBox="0 0 120 50">
            <ellipse cx="30" cy="30" rx="25" ry="15" fill="#b8d4b8" />
            <ellipse cx="55" cy="25" rx="30" ry="18" fill="#b8d4b8" />
            <ellipse cx="85" cy="30" rx="25" ry="15" fill="#b8d4b8" />
          </svg>
        </div>
        <div className="absolute top-32 right-1/3 opacity-30">
          <svg width="100" height="40" viewBox="0 0 100 40">
            <ellipse cx="25" cy="25" rx="20" ry="12" fill="#c8dcc8" />
            <ellipse cx="50" cy="20" rx="25" ry="15" fill="#c8dcc8" />
            <ellipse cx="75" cy="25" rx="20" ry="12" fill="#c8dcc8" />
          </svg>
        </div>

        {/* SVG Planter Boxes with Plants - Right side */}
        <div className="absolute bottom-0 right-4 md:right-12 lg:right-20 w-[60%] md:w-[50%] lg:w-[45%] z-10">
          <svg viewBox="0 0 500 350" className="w-full h-auto">
            {/* Ground/grass area */}
            <ellipse cx="250" cy="340" rx="240" ry="15" fill="#7a9a6a" opacity="0.4" />
            
            {/* Planter box 1 - left */}
            <rect x="40" y="260" width="100" height="70" fill="#8B7355" rx="4" />
            <rect x="35" y="250" width="110" height="15" fill="#A08060" rx="3" />
            {/* Plants in box 1 - tall leafy plants */}
            <path d="M70,250 Q65,200 70,150" stroke="#5a8a5a" strokeWidth="3" fill="none" />
            <ellipse cx="50" cy="200" rx="20" ry="10" fill="#6b9a6b" opacity="0.9" transform="rotate(-25, 50, 200)" />
            <ellipse cx="90" cy="180" rx="18" ry="9" fill="#7aa87a" opacity="0.85" transform="rotate(20, 90, 180)" />
            <ellipse cx="55" cy="160" rx="16" ry="8" fill="#8ab88a" opacity="0.8" transform="rotate(-20, 55, 160)" />
            <path d="M110,250 Q115,210 110,170" stroke="#5a8a5a" strokeWidth="2.5" fill="none" />
            <ellipse cx="125" cy="200" rx="15" ry="8" fill="#6b9a6b" opacity="0.85" transform="rotate(25, 125, 200)" />
            <ellipse cx="100" cy="185" rx="14" ry="7" fill="#7aa87a" opacity="0.8" transform="rotate(-15, 100, 185)" />
            
            {/* Planter box 2 - center */}
            <rect x="180" y="270" width="90" height="60" fill="#8B7355" rx="4" />
            <rect x="175" y="260" width="100" height="15" fill="#A08060" rx="3" />
            {/* Flowers in box 2 */}
            <path d="M210,260 L210,210" stroke="#5a8a5a" strokeWidth="2.5" />
            <circle cx="210" cy="200" r="12" fill="#e8a0a0" />
            <circle cx="210" cy="200" r="5" fill="#d4d86a" />
            <path d="M245,260 L245,220" stroke="#5a8a5a" strokeWidth="2.5" />
            <circle cx="245" cy="210" r="10" fill="#a0c8e8" />
            <circle cx="245" cy="210" r="4" fill="#d4d86a" />
            <path d="M225,260 L225,230" stroke="#5a8a5a" strokeWidth="2" />
            <circle cx="225" cy="222" r="8" fill="#c8a0e8" />
            <circle cx="225" cy="222" r="3" fill="#d4d86a" />
            
            {/* Planter box 3 - right, larger */}
            <rect x="320" y="250" width="130" height="80" fill="#8B7355" rx="4" />
            <rect x="315" y="240" width="140" height="15" fill="#A08060" rx="3" />
            {/* Tall plants in box 3 */}
            <path d="M350,240 Q345,180 350,120" stroke="#5a8a5a" strokeWidth="3" fill="none" />
            <ellipse cx="330" cy="180" rx="22" ry="11" fill="#6b9a6b" opacity="0.9" transform="rotate(-30, 330, 180)" />
            <ellipse cx="370" cy="160" rx="20" ry="10" fill="#7aa87a" opacity="0.85" transform="rotate(25, 370, 160)" />
            <ellipse cx="340" cy="140" rx="18" ry="9" fill="#8ab88a" opacity="0.8" transform="rotate(-20, 340, 140)" />
            <ellipse cx="365" cy="125" rx="15" ry="7" fill="#9ac89a" opacity="0.75" transform="rotate(15, 365, 125)" />
            <path d="M410,240 Q415,190 410,140" stroke="#5a8a5a" strokeWidth="3" fill="none" />
            <ellipse cx="430" cy="190" rx="20" ry="10" fill="#6b9a6b" opacity="0.85" transform="rotate(30, 430, 190)" />
            <ellipse cx="395" cy="170" rx="18" ry="9" fill="#7aa87a" opacity="0.8" transform="rotate(-25, 395, 170)" />
            <ellipse cx="420" cy="155" rx="16" ry="8" fill="#8ab88a" opacity="0.75" transform="rotate(20, 420, 155)" />
            
            {/* Small pot on ground */}
            <ellipse cx="290" cy="330" rx="20" ry="8" fill="#c4846a" />
            <ellipse cx="290" cy="320" rx="18" ry="12" fill="#d49a7a" />
            <path d="M290,320 L290,295" stroke="#5a8a5a" strokeWidth="2" />
            <ellipse cx="290" cy="292" rx="10" ry="6" fill="#7aa87a" />
            
            {/* Watering can */}
            <ellipse cx="160" cy="325" rx="20" ry="10" fill="#a8c8a8" />
            <rect x="145" y="305" width="30" height="20" fill="#b8d8b8" rx="3" />
            <path d="M175,310 Q190,305 200,315" stroke="#a8c8a8" strokeWidth="3" fill="none" />
          </svg>
        </div>

        {/* Decorative plants - bottom left */}
        <div className="absolute bottom-0 left-0 w-40 md:w-56 lg:w-64">
          <svg viewBox="0 0 200 250" className="w-full h-auto">
            {/* Tall plant with alternating leaves */}
            <path d="M100,250 L100,50" stroke="#5a8a5a" strokeWidth="3" fill="none" />
            <ellipse cx="70" cy="200" rx="25" ry="12" fill="#7aa87a" opacity="0.9" transform="rotate(-20, 70, 200)" />
            <ellipse cx="130" cy="170" rx="22" ry="10" fill="#6b9a6b" opacity="0.85" transform="rotate(20, 130, 170)" />
            <ellipse cx="65" cy="140" rx="22" ry="10" fill="#7aa87a" opacity="0.8" transform="rotate(-25, 65, 140)" />
            <ellipse cx="135" cy="110" rx="20" ry="9" fill="#8ab88a" opacity="0.75" transform="rotate(25, 135, 110)" />
            <ellipse cx="70" cy="80" rx="18" ry="8" fill="#7aa87a" opacity="0.7" transform="rotate(-20, 70, 80)" />
            <ellipse cx="125" cy="55" rx="15" ry="7" fill="#9ac89a" opacity="0.65" transform="rotate(20, 125, 55)" />
          </svg>
        </div>

        {/* Decorative plants - bottom right corner */}
        <div className="absolute bottom-0 right-0 w-24 md:w-32">
          <svg viewBox="0 0 100 150" className="w-full h-auto">
            <path d="M50,150 L50,60" stroke="#5a8a5a" strokeWidth="2.5" fill="none" />
            <ellipse cx="30" cy="120" rx="18" ry="9" fill="#6b9a6b" opacity="0.8" transform="rotate(-30, 30, 120)" />
            <ellipse cx="70" cy="100" rx="16" ry="8" fill="#7aa87a" opacity="0.75" transform="rotate(30, 70, 100)" />
            <ellipse cx="35" cy="80" rx="14" ry="7" fill="#8ab88a" opacity="0.7" transform="rotate(-25, 35, 80)" />
            <ellipse cx="65" cy="65" rx="12" ry="6" fill="#9ac89a" opacity="0.65" transform="rotate(25, 65, 65)" />
          </svg>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#e8f0e8]/95 backdrop-blur-sm shadow-sm">
          {/* Logo - Top Left */}
          <div className="flex items-center">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-20%20at%2011.26.39%E2%80%AFPM-CNBbBSusiyIM10AQfzjRkw0EBirCfZ.png" 
              alt="Cruzlings Logo" 
              className="h-12 w-auto bg-white rounded-lg p-1"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { label: "About", href: "#about-us" },
              { label: "Fundraising", href: "#fundraising-goal" },
              { label: "Team", href: "#meet-the-team" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#2d5a2d] hover:text-[#1a3a1a] font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-[#2d5a2d]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </nav>

        {/* Hero Content - Left aligned */}
        <div className="relative z-10 flex flex-col items-start justify-center min-h-[calc(100vh-200px)] px-6 md:px-12 lg:px-20 max-w-2xl">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-[#2d5a2d]">
            Cruzlings
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#4a7c4a] mb-6 italic">
            Where Education Takes Root
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-[#3d6b3d] mb-8 leading-relaxed max-w-md">
            We are a gardening club dedicated to connecting our community with nature. Building planter boxes for UCSC students and the greater Santa Cruz community.
          </p>

          {/* CTA Button */}
          <a
            href="#about-us"
            className="inline-flex items-center px-8 py-3 bg-[#2d5a2d] text-white font-medium rounded-full hover:bg-[#1a3a1a] transition-colors shadow-lg"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Decorative Divider - Leaf Pattern */}
      <div className="relative z-10 py-8 px-6 bg-gradient-to-b from-[#c5d8c5] to-background">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30"></div>
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-primary/50">
            <path d="M20,5 Q30,15 35,25 Q25,20 20,35 Q15,20 5,25 Q10,15 20,5" fill="currentColor" />
          </svg>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30"></div>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about-us" className="relative z-10 py-24 px-6 scroll-mt-20 overflow-hidden">
        {/* Subtle leaf accent - top left */}
        <div className="absolute top-8 left-8 opacity-20">
          <svg width="120" height="80" viewBox="0 0 120 80" className="text-primary">
            <path d="M60,70 Q30,50 20,20 Q50,35 60,70" fill="currentColor" />
            <path d="M60,70 Q40,45 20,20" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Subtle leaf accent - top right */}
        <div className="absolute top-8 right-8 opacity-20">
          <svg width="120" height="80" viewBox="0 0 120 80" className="text-primary">
            <path d="M60,70 Q90,50 100,20 Q70,35 60,70" fill="currentColor" />
            <path d="M60,70 Q80,45 100,20" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-card ring-1 ring-border shadow-xl p-12 relative">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-primary">About Us</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                We are a gardening club dedicated to connecting our community with nature. We&apos;re building planter boxes so UCSC students and the greater Santa Cruz community can plant, grow, and learn about environmental sustainability.
              </p>
            </div>

            {/* Team Group Photo */}
            <div className="mb-12 flex justify-center">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7671-te9yiieJ65qmJRfUmzHydKQgryC7gp.jpeg" 
                alt="Cruzlings team group photo"
                className="w-full max-w-4xl h-auto rounded-2xl ring-1 ring-border shadow-lg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl bg-secondary ring-1 ring-border p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">We aim to foster a love for gardening and environmental stewardship by providing hands-on opportunities for students and community members to engage with nature.</p>
              </div>
              <div className="rounded-2xl bg-secondary ring-1 ring-border p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">Sustainability, education, and community are at the heart of everything we do. We believe in nurturing both plants and people through meaningful environmental experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider - Flower Pattern */}
      <div className="relative z-10 py-12 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-primary/30"></div>
          <div className="flex gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary/40">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <circle cx="12" cy="4" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="12" cy="20" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="4" cy="12" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="20" cy="12" r="3" fill="currentColor" opacity="0.6" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-accent/40">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <circle cx="12" cy="4" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="12" cy="20" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="4" cy="12" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="20" cy="12" r="3" fill="currentColor" opacity="0.6" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary/40">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <circle cx="12" cy="4" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="12" cy="20" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="4" cy="12" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="20" cy="12" r="3" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/20 to-primary/30"></div>
        </div>
      </div>

      {/* Our Fundraising Goal Section */}
      <section id="fundraising-goal" className="relative z-10 py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-card ring-1 ring-border shadow-xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-primary">Our Fundraising Goal</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Support our efforts to protect and study this natural wonder for generations to come.
              </p>
            </div>

            {/* Fundraising Progress Bar */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <span className="text-3xl font-bold text-primary">$1,402</span>
                  <span className="text-muted-foreground ml-2">raised</span>
                </div>
                <div className="text-right">
                  <span className="text-muted-foreground">Goal: </span>
                  <span className="text-xl font-semibold text-foreground">$6,125</span>
                </div>
              </div>
              <div className="h-6 bg-secondary rounded-full ring-1 ring-border overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                  style={{ width: '22.9%', minWidth: '20px' }}
                />
              </div>
              <p className="text-center text-muted-foreground mt-3 text-sm">23% of our goal reached</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-2xl bg-secondary ring-1 ring-border p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 ring-1 ring-primary/30 mb-6">
                  <Wallet className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Help Us Fundraise</h3>
                <p className="text-muted-foreground leading-relaxed">Your contributions directly support our gardening initiatives, planter box construction, and educational programs that teach students about sustainable growing.</p>
              </div>
              <div className="rounded-2xl bg-secondary ring-1 ring-border p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 ring-1 ring-primary/30 mb-6">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Where Your Funds Go</h3>
                <p className="text-muted-foreground leading-relaxed">Every donation helps fund supplies, tools, seeds, soil, and community workshops that bring gardening to more UCSC students.</p>
              </div>
            </div>

            {/* Social Media Buttons */}
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">Follow us on social media to stay updated!</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.tiktok.com/@cruzlings.ucsc?_r=1&_t=ZT-95m3Kw0hcVB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#000000] text-white font-medium rounded-full hover:bg-[#1a1a1a] transition-colors shadow-lg"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  TikTok
                </a>
                <a
                  href="https://www.instagram.com/cruzlings.ucsc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-medium rounded-full hover:opacity-90 transition-opacity shadow-lg"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://linktr.ee/cruzlings.ucsc?utm_source=linktree_profile_share&ltsid=63462361-ab0d-428c-9901-c8e0d7039a70"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#43e660] text-black font-medium rounded-full hover:bg-[#3bd456] transition-colors shadow-lg"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.316.97.712 1.345.317.243.633.324 1.029.324.554 0 1.029-.243 1.345-.649.23-.405.23-.81.08-1.296-.08-.243-.237-.405-.396-.567-.237-.163-.396-.324-.634-.405l-.554-.243c-.158-.081-.316-.162-.395-.324-.08-.162-.08-.405 0-.567.079-.163.237-.324.475-.324.316 0 .554.161.633.567h1.108c-.079-.486-.237-.891-.554-1.135-.316-.243-.712-.405-1.187-.405-.475 0-.87.162-1.187.405-.316.243-.554.73-.554 1.216 0 .405.08.729.317 1.053.158.243.396.486.712.648l.87.405c.158.081.316.162.475.324.158.162.237.324.237.567s-.079.486-.316.648c-.158.163-.396.244-.633.244-.237 0-.554-.081-.712-.325-.08-.162-.158-.405-.158-.648l-1.187.081zm-3.478-5.676L6.448 7.02l1.108 1.107.87-.891L7.24 6.048l1.265-1.107-.87-.81L6.368 5.32 5.34 4.212l-.87.81 1.108 1.188L4.395 7.34l.87.891.87-.891.08.08-.87 1.78h1.187l.395-1.053 1.345 1.053v-1.377l-1.029-.81.632-1.053.158-.243c.08-.081.08-.162.08-.243 0-.162-.08-.243-.158-.324-.08-.082-.237-.163-.396-.163-.316 0-.633.163-.87.405l-.158.162c-.08.162-.158.324-.237.486v.081l-.08.162-.871 1.377-1.503-1.377-.554.567 1.978 1.862v2.269h1.029v-1.62l.949.729h1.266l-1.345-1.053.633-1.053.158-.243c.08-.081.08-.162.08-.243 0-.162-.08-.243-.158-.324-.08-.082-.237-.163-.396-.163-.158 0-.316.081-.475.162l-1.424 2.269H4.554l-.08.081zm11.139.081l1.029-1.62V6.534l1.503 1.377.554-.567-1.978-1.862v-.729h-1.03v1.135l-.79-.73h-1.424l1.503 1.135-.633 1.053-.158.243c-.08.081-.08.162-.08.324 0 .081.08.243.158.324.08.081.237.162.396.162.158 0 .316-.081.475-.162l.395-.567.316.243v.891h-3.557v1.135h1.424l-.712 1.944h1.187l.712-1.944h1.503v.648c0 .162-.08.324-.237.405-.08.081-.316.162-.475.162H14.73v1.053h.87c.396 0 .792-.081 1.108-.324.316-.243.554-.567.633-.972l.08-.162v-.81h1.503v-1.135h-3.636l.396-1.134z"/>
                  </svg>
                  Linktree
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider - Vine Pattern */}
      <div className="relative z-10 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <svg viewBox="0 0 400 40" className="w-full h-10 text-primary/30">
            <path d="M0,20 Q50,5 100,20 T200,20 T300,20 T400,20" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="15" r="4" fill="currentColor" opacity="0.5" />
            <circle cx="150" cy="25" r="4" fill="currentColor" opacity="0.5" />
            <circle cx="250" cy="15" r="4" fill="currentColor" opacity="0.5" />
            <circle cx="350" cy="25" r="4" fill="currentColor" opacity="0.5" />
            <path d="M50,15 Q40,10 45,5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M150,25 Q160,30 155,35" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M250,15 Q240,10 245,5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M350,25 Q360,30 355,35" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <section id="meet-the-team" className="relative z-10 py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-card ring-1 ring-border shadow-xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-primary">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Get to know the passionate people behind Cruzlings.
              </p>
            </div>

            {/* Executive Board */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">Executive Board</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {[
                  { name: "Surabhi Kuchibhotla", role: "CEO", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QetsM8Ww8WFw1Pe7QNYdI9rtKShpVN.png", bio: "Surabhi is a third-year Technology and Information Management student. She enjoys going to the gym, hiking, and swimming at the beach." },
                  { name: "Kyle Bradford", role: "CFO", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bxQMOuHVseWpvXVUfU1ILNyCGdq3zA.png", bio: "Kyle is a first-year Business Management and Economics student. He enjoys tennis, video games, and soccer." },
                  { name: "Chelsi Vaghela", role: "CTO", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SAM_0346-dUGNKhySHTtqBLiS1ynuv00rZwkcVg.jpg", bio: "Chelsi is a first-year Computer Science and Game Design student. She enjoys soccer, running, and hiking." },
                  { name: "Sarah Wei", role: "CMO", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2W98sr6iwmDFoXog3XkOr7TlwXJupJ.png", bio: "Sarah is a first-year Business Management and Economics student with a concentration in Accounting. She enjoys playing basketball and volleyball, going to the beach, going on drives, and working out." },
                  { name: "Jayden Luu", role: "PR", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-16%20at%204.12.07%E2%80%AFPM-JfiOct7BJkPCuAiGb6CQAeIUJLZ4XW.png", bio: "Jayden is a first-year Technology and Information Management student. He enjoys tennis, football, basketball, and spikeball." },
                  { name: "Rebecca Abraham", role: "Secretary", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HNo9A5RtbF42GIGPo9atJeWrM0mFWe.png", bio: "Rebecca is a second-year Bioengineering and Bioinformatics student. She enjoys soccer, going to the beach, and going on drives." },
                ].map((member, index) => (
                  <div 
                    key={index} 
                    className="group relative text-center cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                  >
                    <div className="relative overflow-hidden rounded-2xl ring-1 ring-border mb-4 aspect-square hover:ring-2 hover:ring-primary transition-all">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-secondary flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">Photo</span>
                        </div>
                      )}
                    </div>
                    <p className="font-semibold text-lg text-foreground">{member.name}</p>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Members */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Members</h3>
              <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                {[
                  { name: "Sahasra Chada", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-i3x4jch72QxWk8iSBvMLPCM0ALqDrH.png", bio: "Sahasra is a first-year Bioengineering and Bioinformatics student. She enjoys badminton, henna, music, going to the beach, and exploring downtown." },
                  { name: "Haatim Ali", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1Wx6bqjxa0WHMso3cqmHwIcCbYAbXO.png", bio: "Haatim is a first-year Computer Science student. He enjoys soccer, hiking, and watching anime." },
                  { name: "Eobii Brown", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MN8Ct7WKXWYD6iLVfK4GdN597wcTGr.png", bio: "Eobii is a second-year Business Management and Economics student. He enjoys tennis, basketball, and gaming." },
                  { name: "Jose Nunez", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Cmakfn9BSyL8wvMFnOHMWzxsendIlz.png", bio: "Jose is a second-year Business Management and Economics student. He enjoys ping pong, going to the gym, and playing mahjong." },
                  { name: "Adam Lee", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CmpDb42N1s9J5zTct9u8LG98n4uJQX.png", bio: "Adam is a second-year Business Management and Economics student. He enjoys going to the gym, playing basketball, gaming, and hiking." },
                  { name: "Chintan Patwardhan", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TwWOvcPMprlkf9qpizrPpyMGClJ8Ar.png", bio: "Chintan is a first-year Robotics Engineering student. He enjoys soccer, skiing, and skateboarding." },
                  { name: "Sanika Yadav", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yIlFYbaN1nVv78P3JoT5jkL37kaAnc.png", bio: "Sanika is a first-year Business Management and Economics student. She enjoys dancing, listening to music, going to the beach, and anything adventurous." },
                  { name: "Iryna Monastyrska", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dhCGQcZR9VMPX9u9JLX2m8UBOzSimj.png", bio: "Iryna is a second-year Business Management and Economics student with a concentration in Accounting. She enjoys sewing." },
                ].map((member, index) => (
                  <div 
                    key={index} 
                    className="group relative text-center w-36 md:w-40 cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                  >
                    <div className="relative overflow-hidden rounded-2xl ring-1 ring-border mb-4 aspect-square hover:ring-2 hover:ring-primary transition-all">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-secondary flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">Photo</span>
                        </div>
                      )}
                    </div>
                    <p className="font-bold text-lg text-foreground mt-2">{member.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-muted-foreground">
            Help Cruzlings educate people about the environment.
          </p>
        </div>
      </footer>

      {/* Team Member Sidebar Panel */}
      {selectedMember && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-50 transition-opacity"
            onClick={() => setSelectedMember(null)}
          />
          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-full max-w-md bg-card z-50 shadow-2xl transform transition-transform duration-300 overflow-y-auto">
            {/* Close button */}
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>

            {/* Content */}
            <div className="p-8 pt-16">
              {/* Member Image */}
              <div className="mb-6">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  className="w-full aspect-square object-cover rounded-2xl ring-1 ring-border"
                />
              </div>

              {/* Member Info */}
              <h3 className="text-2xl font-bold text-foreground mb-2">{selectedMember.name}</h3>
              {selectedMember.role && (
                <p className="text-lg font-medium text-primary mb-6">{selectedMember.role}</p>
              )}

              {/* Bio */}
              <div className="border-t border-border pt-6">
                <p className="text-muted-foreground leading-relaxed">{selectedMember.bio}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
