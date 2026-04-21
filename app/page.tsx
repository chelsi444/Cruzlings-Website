"use client"

// Cruzlings - UCSC Gardening Club Website
import { ShieldCheck, Wallet, Leaf, Plus, Minus, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How do I join Cruzlings?",
      answer:
        "Joining is easy! Attend one of our weekly meetings or reach out through our contact form. All UCSC students are welcome regardless of gardening experience. We provide all the guidance and tools you need to get started.",
    },
    {
      question: "Do I need gardening experience?",
      answer:
        "Not at all! We welcome complete beginners and experienced gardeners alike. Our workshops cover everything from basic plant care to advanced sustainable gardening techniques. Learning together is what makes our community special.",
    },
    {
      question: "What kind of plants do you grow?",
      answer:
        "We grow a variety of vegetables, herbs, and flowers suited to the Santa Cruz climate. Popular choices include tomatoes, lettuce, basil, succulents, and native California plants. Members can suggest new plants to try each season.",
    },
    {
      question: "How are the funds used?",
      answer:
        "Your donations go directly toward building planter boxes, purchasing seeds and soil, acquiring gardening tools, and hosting educational workshops. We provide full transparency on how every dollar supports our community garden initiatives.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Soft Green Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f0e8] via-[#dceadc] to-[#c5d8c5]" />
        
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

        {/* Grass at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <rect x="0" y="40" width="1440" height="80" fill="#5a8a5a" />
            <path d="M0,40 Q20,20 40,40 Q60,60 80,40 Q100,20 120,40 Q140,60 160,40 Q180,20 200,40 Q220,60 240,40 Q260,20 280,40 Q300,60 320,40 Q340,20 360,40 Q380,60 400,40 Q420,20 440,40 Q460,60 480,40 Q500,20 520,40 Q540,60 560,40 Q580,20 600,40 Q620,60 640,40 Q660,20 680,40 Q700,60 720,40 Q740,20 760,40 Q780,60 800,40 Q820,20 840,40 Q860,60 880,40 Q900,20 920,40 Q940,60 960,40 Q980,20 1000,40 Q1020,60 1040,40 Q1060,20 1080,40 Q1100,60 1120,40 Q1140,20 1160,40 Q1180,60 1200,40 Q1220,20 1240,40 Q1260,60 1280,40 Q1300,20 1320,40 Q1340,60 1360,40 Q1380,20 1400,40 Q1420,60 1440,40 L1440,120 L0,120 Z" fill="#6b9a6b" />
          </svg>
        </div>

        {/* Gardening Scene - Right side, sitting on grass */}
        <div className="absolute bottom-20 md:bottom-24 right-0 md:right-8 lg:right-16 w-[70%] md:w-[55%] lg:w-[50%] z-10">
          <img 
            src="/images/gardening-scene.png" 
            alt="Person planting in garden"
            className="w-full h-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
          {/* Logo - Top Left */}
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 50 50" className="w-12 h-12 md:w-14 md:h-14">
              {/* Hands */}
              <path d="M10,38 Q5,30 10,22 Q15,16 22,18 Q25,20 25,26 Q22,34 15,38 Q12,39 10,38" fill="#5a7a3a" />
              <path d="M40,38 Q45,30 40,22 Q35,16 28,18 Q25,20 25,26 Q28,34 35,38 Q38,39 40,38" fill="#5a7a3a" />
              {/* Soil */}
              <ellipse cx="25" cy="35" rx="10" ry="5" fill="#4a6a2a" />
              {/* Stem */}
              <path d="M25,32 L25,14" fill="none" stroke="#5a7a3a" strokeWidth="2" />
              {/* Flower petals */}
              <ellipse cx="25" cy="8" rx="4" ry="6" fill="#6b8f45" />
              <ellipse cx="20" cy="11" rx="4" ry="6" fill="#6b8f45" transform="rotate(-45, 20, 11)" />
              <ellipse cx="30" cy="11" rx="4" ry="6" fill="#6b8f45" transform="rotate(45, 30, 11)" />
              <ellipse cx="18" cy="16" rx="4" ry="6" fill="#6b8f45" transform="rotate(-90, 18, 16)" />
              <ellipse cx="32" cy="16" rx="4" ry="6" fill="#6b8f45" transform="rotate(90, 32, 16)" />
              {/* Center */}
              <circle cx="25" cy="13" r="4" fill="#4a6a2a" />
            </svg>
            <div>
              <span className="text-xl md:text-2xl font-bold text-[#2d5a2d]">Cruzlings</span>
              <p className="text-xs text-[#4a7c4a]">UCSC Gardening Club</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { label: "About", href: "#about-us" },
              { label: "Fundraising", href: "#fundraising-goal" },
              { label: "Team", href: "#meet-the-team" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#contact" },
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-2 text-[#2d5a2d]">
            GROW WITH US
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-[#2d5a2d]">
            BEAUTIFUL GARDENS
          </h2>
          <p className="text-lg md:text-xl font-semibold text-[#4a7c4a] mb-6 uppercase tracking-wide">
            A Community Initiative
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
            {/* Gardening Scene Illustration */}
            <div className="absolute -right-4 md:right-8 top-8 w-48 md:w-64 lg:w-80 opacity-90 hidden lg:block">
              <img 
                src="/images/gardening-scene.png" 
                alt="Gardening illustration"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="text-center mb-12 lg:pr-72">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-primary">About Us</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                We are a gardening club dedicated to connecting our community with nature. We&apos;re building planter boxes so UCSC students and the greater Santa Cruz community can plant, grow, and learn about environmental sustainability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl bg-secondary ring-1 ring-border p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 ring-1 ring-primary/30 mb-6">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">We aim to foster a love for gardening and environmental stewardship by providing hands-on opportunities for students and community members to engage with nature.</p>
              </div>
              <div className="rounded-2xl bg-secondary ring-1 ring-border p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 ring-1 ring-primary/30 mb-6">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">Sustainability, education, and community are at the heart of everything we do. We believe in nurturing both plants and people through meaningful environmental experiences.</p>
              </div>
            </div>

            {/* Mobile gardening scene */}
            <div className="mt-8 flex justify-center lg:hidden">
              <img 
                src="/images/gardening-scene.png" 
                alt="Gardening illustration"
                className="w-full max-w-md h-auto rounded-2xl opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

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
                  <span className="text-3xl font-bold text-primary">$800</span>
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
                  style={{ width: '13.06%', minWidth: '20px' }}
                />
              </div>
              <p className="text-center text-muted-foreground mt-3 text-sm">13% of our goal reached</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </div>
        </div>
      </section>

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
                  { name: "Surabhi Kuchibhotla", role: "CEO", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QetsM8Ww8WFw1Pe7QNYdI9rtKShpVN.png", bio: "Leading Cruzlings with passion for environmental education." },
                  { name: "Jorge Flores", role: "CFO", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-16%20at%201.40.58%E2%80%AFAM-SNYkuQIQxW4qWUyo7sDUreaKRszcmi.png", bio: "Managing finances and resources for Cruzlings." },
                  { name: "Chelsi Vaghela", role: "CTO", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SAM_0346-dUGNKhySHTtqBLiS1ynuv00rZwkcVg.jpg", bio: "Leading technology initiatives for Cruzlings." },
                  { name: "Sarah Wei", role: "CMO", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2W98sr6iwmDFoXog3XkOr7TlwXJupJ.png", bio: "Bio coming soon." },
                  { name: "Jayden", role: "PR", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-16%20at%204.12.07%E2%80%AFPM-JfiOct7BJkPCuAiGb6CQAeIUJLZ4XW.png", bio: "Bio coming soon." },
                  { name: "Rebecca", role: "Secretary", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HNo9A5RtbF42GIGPo9atJeWrM0mFWe.png", bio: "Bio coming soon." },
                ].map((member, index) => (
                  <div key={index} className="group relative text-center">
                    <div className="relative overflow-hidden rounded-2xl ring-1 ring-border mb-4 aspect-square">
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
                      {/* Hover overlay with bio */}
                      <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <p className="text-sm text-primary-foreground text-center">{member.bio}</p>
                      </div>
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                {[
                  { name: "Sahasra Chada", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-i3x4jch72QxWk8iSBvMLPCM0ALqDrH.png", bio: "Bio coming soon." },
                  { name: "Haatim Ali", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1Wx6bqjxa0WHMso3cqmHwIcCbYAbXO.png", bio: "Bio coming soon." },
                  { name: "Eobii Brow", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MN8Ct7WKXWYD6iLVfK4GdN597wcTGr.png", bio: "Bio coming soon." },
                  { name: "Kyle Bradford", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bxQMOuHVseWpvXVUfU1ILNyCGdq3zA.png", bio: "Bio coming soon." },
                  { name: "Jose Nunez", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Cmakfn9BSyL8wvMFnOHMWzxsendIlz.png", bio: "Bio coming soon." },
                  { name: "Adam Lee", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CmpDb42N1s9J5zTct9u8LG98n4uJQX.png", bio: "Bio coming soon." },
                  { name: "Chintan Patwardhan", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TwWOvcPMprlkf9qpizrPpyMGClJ8Ar.png", bio: "Bio coming soon." },
                  { name: "Sanika Yadav", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yIlFYbaN1nVv78P3JoT5jkL37kaAnc.png", bio: "Bio coming soon." },
                  { name: "Iryna Monastyrska", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dhCGQcZR9VMPX9u9JLX2m8UBOzSimj.png", bio: "Bio coming soon." },
                ].map((member, index) => (
                  <div key={index} className="group relative text-center">
                    <div className="relative overflow-hidden rounded-2xl ring-1 ring-border mb-4 aspect-square">
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
                      {/* Hover overlay with bio */}
                      <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <p className="text-sm text-primary-foreground text-center">{member.bio}</p>
                      </div>
                    </div>
                    <p className="font-bold text-lg text-foreground mt-2">{member.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-card ring-1 ring-border shadow-xl p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-primary">Your Gardening Journey</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                From seedling to harvest, here&apos;s how you can grow with us.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Phase 1: Join Us */}
              <div className="rounded-2xl bg-secondary ring-1 ring-border p-8 h-80 flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-primary mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Join Us</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Your journey begins by joining Cruzlings. Attend our meetings and connect with fellow plant enthusiasts on campus.
                  </p>
                </div>
              </div>

              {/* Phase 2: Learn */}
              <div className="rounded-2xl bg-secondary ring-1 ring-border p-8 h-80 flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-primary mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Learn</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Participate in workshops about sustainable gardening, composting, and plant care from experienced members.
                  </p>
                </div>
              </div>

              {/* Phase 3: Grow */}
              <div className="rounded-2xl bg-secondary ring-1 ring-border p-8 h-80 flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-primary mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Grow</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Get hands-on experience planting seeds, nurturing plants, and watching your garden come to life in our planter boxes.
                  </p>
                </div>
              </div>

              {/* Phase 4: Share */}
              <div className="rounded-2xl bg-secondary ring-1 ring-border p-8 h-80 flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-primary mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Share</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Harvest your produce, share with the community, and spread the joy of gardening to others on campus.
                  </p>
                </div>
              </div>
            </div>

            {/* Get Involved Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-card ring-1 ring-border shadow-xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-primary">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Everything you need to know about joining Cruzlings, from meetings to getting involved with our gardening initiatives.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-secondary ring-1 ring-border overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/10 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4 text-foreground">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0 text-primary" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0 text-primary" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-card ring-1 ring-border shadow-xl p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-primary">Contact Our Team</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-secondary ring-1 ring-border p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Send an Inquiry</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-secondary ring-1 ring-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-secondary ring-1 ring-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-secondary ring-1 ring-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                      placeholder="Tell us about your expedition interests..."
                    />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg py-3 font-normal text-base">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                    For questions about private tours, partnerships, or media inquiries, please get in touch. We reply
                    within one business day.
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-secondary ring-1 ring-border p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://www.elledecoration.vn/wp-content/uploads/2025/03/edam-garden.jpg"
                      alt="David Luong"
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/50"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">David Luong</h4>
                      <p className="text-muted-foreground">Lead Expedition Guide</p>
                    </div>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-primary/5 ring-1 ring-primary/20 shadow-xl p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Leaf className="w-6 h-6 text-primary" />
                  <span className="text-xl font-semibold text-foreground">Cruzlings</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  A UCSC gardening club dedicated to connecting the community with nature through planter boxes and environmental education.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-primary">QUICK LINKS</h3>
                <ul className="space-y-3">
                  {["About Us", "Our Goal", "Meet the Team", "Contact"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get Involved */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-primary">GET INVOLVED</h3>
                <ul className="space-y-3">
                  {["Donate", "Volunteer", "Join Us", "Events"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-primary">RESOURCES</h3>
                <ul className="space-y-3">
                  {["Help Center", "Contact Us", "FAQ", "Terms & Conditions"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-border pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Get Cruzlings Updates</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-secondary ring-1 ring-border backdrop-blur border-0 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 h-[50px]">Subscribe</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground text-sm text-center">© 2025 Cruzlings</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
