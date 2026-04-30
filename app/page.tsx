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
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UiRRCHJO0VGPExsa69M5PSn7irPoG5.png')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-3 bg-white/95 backdrop-blur-sm shadow-sm">
          {/* Logo - Top Left */}
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-20%20at%2011.26.39%E2%80%AFPM-CNBbBSusiyIM10AQfzjRkw0EBirCfZ.png"
              alt="Cruzlings Logo"
              className="h-16 w-16 object-contain rounded-full"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "About", href: "#about-us" },
              { label: "Fundraising", href: "#fundraising-goal" },
              { label: "Plant of The Week", href: "#fotw" },
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

        {/* Hero Content - Centered */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 lg:px-20 text-center pt-20">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
            CRUZLINGS
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl drop-shadow-md">
            Where Education Takes Root. We are a gardening club dedicated to connecting our community with nature through planter boxes, educating them on environmental sustainability.
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about-us" className="relative z-10 py-24 px-6 scroll-mt-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Group Photo - Left Side */}
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9961_004-4IQOg3NuQeUzqe1A8X3igque1Xs0GP.jpg"
                alt="Cruzlings team group photo"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            {/* Mission Content - Right Side */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#2d5a2d]">
                About Cruzlings
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We are a student-run gardening club dedicated to connecting our community with nature. Through fundraising efforts, we plan to build planter boxes for students at UCSC and the greater Santa Cruz community, fostering environmental education and promoting sustainable living.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our mission is to develop lasting initiatives that empower and educate others to incorporate sustainability into their daily lives at UCSC through our club&apos;s efforts.
              </p>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2d5a2d] text-white font-medium rounded-lg hover:bg-[#1a3a1a] transition-colors w-fit"
              >
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Social Media Buttons */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">Follow us on social media to stay updated!</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://www.tiktok.com/@cruzlings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#000000] text-white font-medium rounded-full hover:bg-[#1a1a1a] transition-colors shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                TikTok
              </a>
              <a
                href="https://www.instagram.com/cruzlings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-medium rounded-full hover:opacity-90 transition-opacity shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
              <a
                href="https://linktr.ee/cruzlings.ucsc?utm_source=linktree_profile_share&ltsid=dcbdf735-b880-426f-8e1f-0c7a4b78a348"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#43e660] text-black font-medium rounded-full hover:bg-[#3bd456] transition-colors shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.316.97.712 1.345.317.243.633.324 1.029.324.554 0 1.029-.243 1.345-.649.23-.405.23-.81.08-1.296-.08-.243-.237-.405-.396-.567-.237-.163-.396-.324-.634-.405l-.554-.243c-.158-.081-.316-.162-.395-.324-.08-.162-.08-.405 0-.567.079-.163.237-.324.475-.324.316 0 .554.161.633.567h1.108c-.079-.486-.237-.891-.554-1.135-.316-.243-.712-.405-1.187-.405-.475 0-.87.162-1.187.405-.316.243-.554.73-.554 1.216 0 .405.08.729.317 1.053.158.243.396.486.712.648l.87.405c.158.081.316.162.475.324.158.162.237.324.237.567s-.079.486-.316.648c-.158.163-.396.244-.633.244-.237 0-.554-.081-.712-.325-.08-.162-.158-.405-.158-.648l-1.187.081zm-3.478-5.676L6.448 7.02l1.108 1.107.87-.891L7.24 6.048l1.265-1.107-.87-.81L6.368 5.32 5.34 4.212l-.87.81 1.108 1.188L4.395 7.34l.87.891.87-.891.08.08-.87 1.78h1.187l.395-1.053 1.345 1.053v-1.377l-1.029-.81.632-1.053.158-.243c.08-.081.08-.162.08-.243 0-.162-.08-.243-.158-.324-.08-.082-.237-.163-.396-.163-.316 0-.633.163-.87.405l-.158.162c-.08.162-.158.324-.237.486v.081l-.08.162-.871 1.377-1.503-1.377-.554.567 1.978 1.862v2.269h1.029v-1.62l.949.729h1.266l-1.345-1.053.633-1.053.158-.243c.08-.081.08-.162.08-.243 0-.162-.08-.243-.158-.324-.08-.082-.237-.163-.396-.163-.158 0-.316.081-.475.162l-1.424 2.269H4.554l-.08.081zm11.139.081l1.029-1.62V6.534l1.503 1.377.554-.567-1.978-1.862v-.729h-1.03v1.135l-.79-.73h-1.424l1.503 1.135-.633 1.053-.158.243c-.08.081-.08.162-.08.324 0 .081.08.243.158.324.08.081.237.162.396.162.158 0 .316-.081.475-.162l.395-.567.316.243v.891h-3.557v1.135h1.424l-.712 1.944h1.187l.712-1.944h1.503v.648c0 .162-.08.324-.237.405-.08.081-.316.162-.475.162H14.73v1.053h.87c.396 0 .792-.081 1.108-.324.316-.243.554-.567.633-.972l.08-.162v-.81h1.503v-1.135h-3.636l.396-1.134z" />
                </svg>
                Linktree
              </a>
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

      {/* Fundraising Events Section */}
      <div id="fundraising-goal" className="mb-12 scroll-mt-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3">Fundraising Events</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join us at our events to support Cruzlings and connect with our community.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-between mb-3">
              <span className="text-base font-medium text-muted-foreground">Fundraising Progress</span>
              <span className="text-base font-semibold text-primary">$1,700 / $6,125</span>
            </div>
            <div className="h-6 bg-secondary ring-1 ring-border rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#2d5a2d] to-[#4a8a4a] rounded-full transition-all duration-500"
                style={{ width: '27.76%' }}
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-sm text-muted-foreground">27.76% of goal reached</span>
              <div className="flex items-center gap-1 text-sm text-primary">
                <Wallet className="w-4 h-4" />
                <span>$4,425 to go</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5136-EzJuLKiYylQ9zVpwakShPFkIxJMETc.jpg",
                title: "Banh Mi Fundraiser",
                description: "Our first banh mi sale of the quarter! We served delicious Vietnamese sandwiches with pork, chicken, and veggie options. Half sandwiches for $7 and full for $13 — all proceeds go toward building planter boxes for the UCSC community.",
                location: "Science and Engineering Library",
                date: "April 14th, 2026",
              },
              {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jose_btw-h1XttMcbpYQ7Zbr09qPtkWMBXQu1TZ.jpg",
                title: "Banh Mi Fundraiser Day 2",
                description: "Back by popular demand! Our second day of banh mi sales brought out even more hungry Slugs. The team came together to serve fresh sandwiches and spread the word about our gardening mission on campus.",
                location: "Science and Engineering Library",
                date: "April 15th, 2026",
              },
              {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5141-M5hBBz0Wsse1css4VMCo6IkBJhLlum.jpg",
                title: "Boba Fundraiser",
                description: "We switched it up with a refreshing boba sale! Students enjoyed a variety of flavors while learning about Cruzlings and our environmental initiatives. A sweet way to support sustainability on campus.",
                location: "McHenry Library",
                date: "April 16th, 2026",
              },
              {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5140-ecC2gn4n5ylb4dbJP3fTWjJrgTyGtg.jpg",
                title: "Banh Mi Fundraiser",
                description: "Another successful banh mi fundraiser! Our dedicated team served up fresh sandwiches to hungry students and faculty. Every purchase helps us get closer to our goal of providing planter boxes across campus.",
                location: "Science and Engineering Library",
                date: "April 23rd, 2026",
              },
              {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5139-F3azx7vhFeBtaICdbrjI08lKTeYpeu.jpg",
                title: "Spam Musubi Fundraiser",
                description: "Aloha vibes at our spam musubi sale! The team prepared homemade musubi for the UCSC community. This Hawaiian-inspired treat was a hit with students looking for a quick, tasty snack between classes.",
                location: "Science and Engineering Library",
                date: "April 27th, 2026",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="rounded-2xl bg-secondary ring-1 ring-border overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Event Image */}
                <div className="aspect-video bg-primary/5 ring-b ring-border flex items-center justify-center overflow-hidden">
                  {event.image ? (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-muted-foreground p-6">
                      <Leaf className="w-10 h-10 mb-2 text-primary/40" />
                      <span className="text-sm font-medium">Add event image</span>
                    </div>
                  )}
                </div>

                {/* Event Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-semibold text-foreground mb-3">{event.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-5 flex-1">
                    {event.description}
                  </p>

                  {/* Event Meta - Date & Location */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 ring-1 ring-primary/30 flex-shrink-0">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Date</p>
                        <p className="text-sm text-foreground font-medium">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 ring-1 ring-primary/30 flex-shrink-0">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Location</p>
                        <p className="text-sm text-foreground font-medium">{event.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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

      {/* Plant of The Week Section */}
      <section id="fotw" className="relative z-10 py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-card ring-1 ring-border shadow-xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-primary">Plant of The Week</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Discover a new plant every week — learn its story, care tips, and why we love it.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden ring-1 ring-border shadow-lg aspect-square max-w-md mx-auto w-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/16/Banksia_victoriae_-_UC_Santa_Cruz_Arboretum_-_DSC07517.JPG"
                  //src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Banksia_victoriae_gnangarra.jpg/800px-Banksia_victoriae_gnangarra.jpg"
                  alt="Banksia Victoriae"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Info */}
              <div className="flex flex-col gap-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">This Week's Pick</span>
                  <h3 className="text-3xl font-bold text-foreground mb-1">Banksia Victoriae</h3>
                  <p className="text-muted-foreground italic text-lg">Woolly Orange Banksia</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The Banksia Victoriae is a striking large shrub — sometimes considered a small tree — native to Western Australia.
                  It's known for its dramatic orange-yellow plant spikes wrapped in woolly grey foliage, making it a standout in any garden.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-secondary ring-1 ring-border p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Native To</p>
                    <p className="text-foreground font-medium">Western Australia</p>
                  </div>
                  <div className="rounded-xl bg-secondary ring-1 ring-border p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Bloom Season</p>
                    <p className="text-foreground font-medium">Late Summer (Autumn)</p>
                  </div>
                  <div className="rounded-xl bg-secondary ring-1 ring-border p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Population Status</p>
                    <p className="text-foreground font-medium">Not Endangered</p>
                  </div>
                  <div className="rounded-xl bg-secondary ring-1 ring-border p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Water Needs</p>
                    <p className="text-foreground font-medium">Low (Drought Tolerant)</p>
                  </div>
                </div>
                <div className="rounded-xl bg-primary/5 ring-1 ring-primary/20 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">🌿 Fun Fact</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Banksias are named after botanist Sir Joseph Banks, who sailed with Captain Cook on the <em>Endeavour</em> in 1770. Their large cones can hold seeds for years and only release them after fire — a survival strategy called serotiny.
                  </p>
                </div>
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
                {[
                  { name: "Surabhi Kuchibhotla", role: "CEO", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QetsM8Ww8WFw1Pe7QNYdI9rtKShpVN.png", bio: "Surabhi is a third-year Technology and Information Management student. She enjoys going to the gym, hiking, and swimming at the beach.", rotate: false },
                  { name: "Kyle Bradford", role: "CFO", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-dEp8NIxlxWA1I4sJBB7zTi77KXVfC8.jpeg", bio: "Kyle is a first-year Business Management and Economics student. He enjoys tennis, video games, and soccer.", rotate: true },
                  { name: "Chelsi Vaghela", role: "CTO", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7QaKbRjfEvyUKgCXPKzCN08ejkUCcp.png", bio: "Chelsi is a first-year Computer Science and Game Design student. She enjoys soccer, running, and hiking." },
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
                          className={`w-full h-full object-cover ${member.rotate ? 'rotate-90 scale-150' : ''}`}
                        />
                      ) : (
                        <div className="w-full h-full bg-secondary flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">Photo</span>
                        </div>
                      )}
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium text-sm">View Bio</span>
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
                {[
                  { name: "Sahasra Chada", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-i3x4jch72QxWk8iSBvMLPCM0ALqDrH.png", bio: "Sahasra is a first-year Bioengineering and Bioinformatics student. She enjoys badminton, henna, music, going to the beach, and exploring downtown." },
                  { name: "Haatim Ali", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1Wx6bqjxa0WHMso3cqmHwIcCbYAbXO.png", bio: "Haatim is a first-year Computer Science student. He enjoys soccer, hiking, and watching anime." },
                  { name: "Eobii Brown", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MN8Ct7WKXWYD6iLVfK4GdN597wcTGr.png", bio: "Eobii is a second-year Business Management and Economics student. He enjoys tennis, basketball, and gaming." },
                  { name: "Jose Nunez", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Cmakfn9BSyL8wvMFnOHMWzxsendIlz.png", bio: "Jose is a second-year Business Management and Economics student. He enjoys ping pong, going to the gym, and playing mahjong." },
                  { name: "Adam Lee", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CmpDb42N1s9J5zTct9u8LG98n4uJQX.png", bio: "Adam is a second-year Business Management and Economics student. He enjoys going to the gym, playing basketball, gaming, and hiking." },
                  { name: "Chintan Patwardhan", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TwWOvcPMprlkf9qpizrPpyMGClJ8Ar.png", bio: "Chintan is a first-year Robotics Engineering student. He enjoys soccer, skiing, and skateboarding." },
                  { name: "Sanika Yadav", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yIlFYbaN1nVv78P3JoT5jkL37kaAnc.png", bio: "Sanika is a first-year Business Management and Economics student. She enjoys dancing, listening to music, going to the beach, and anything adventurous." },
                  { name: "Iryna Monastyrska", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dhCGQcZR9VMPX9u9JLX2m8UBOzSimj.png", bio: "Iryna is a second-year Business Management and Economics student with a concentration in Accounting. She enjoys sewing." },
                  { name: "Jason Ma", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-72ArCHKbeJxPTs7VWuy7mKlSEkKQn7.png", bio: "Jason is a second-year Business Economic Major with a concentration in Accounting. He enjoys Climbing, hiking, and camping." },
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
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium text-sm">View Bio</span>
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
              <div className="mb-6 overflow-hidden rounded-2xl ring-1 ring-border">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className={`w-full aspect-square object-cover ${selectedMember.rotate ? 'rotate-90 scale-150' : ''}`}
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
