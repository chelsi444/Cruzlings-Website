"use client"

import { Sparkles, ShieldCheck, Wallet, Leaf, Plus, Minus, Mail } from "lucide-react"
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
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://www.elledecoration.vn/wp-content/uploads/2025/03/1-son-doong.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-center p-6">
          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {[
              { label: "About Us", href: "#about-us" },
              { label: "Our Fundraising Goal", href: "#fundraising-goal" },
              { label: "Meet Our Team", href: "#meet-the-team" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 bg-white/90 text-foreground ring-1 ring-primary/20 backdrop-blur-md rounded-full hover:bg-primary hover:text-primary-foreground hover:ring-primary transition-all duration-200 shadow-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance text-white drop-shadow-lg">Cruzlings</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white max-w-4xl mb-12 leading-relaxed text-pretty drop-shadow-md">
            Where Education Takes Root
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about-us" className="relative z-10 py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-card ring-1 ring-border shadow-xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-primary">About Us</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                We are a gardening club dedicated to connecting our community with nature. We&apos;re building planter boxes so UCSC students and the greater Santa Cruz community can plant, grow, and learn about environmental sustainability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl bg-secondary ring-1 ring-border p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 ring-1 ring-primary/30 mb-6">
                  <Sparkles className="w-6 h-6 text-primary" />
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
