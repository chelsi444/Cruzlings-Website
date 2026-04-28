"use client"

import { Leaf, Target, Heart, Sprout } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-3 bg-white/95 backdrop-blur-sm shadow-sm">
        <Link href="/" className="flex items-center">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-20%20at%2011.26.39%E2%80%AFPM-CNBbBSusiyIM10AQfzjRkw0EBirCfZ.png" 
            alt="Cruzlings Logo" 
            className="h-16 w-16 object-contain rounded-full"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/#about-us" className="text-[#2d5a2d] hover:text-[#1a3a1a] font-medium transition-colors">
            About
          </Link>
          <Link href="/#fundraising-goal" className="text-[#2d5a2d] hover:text-[#1a3a1a] font-medium transition-colors">
            Fundraising
          </Link>
          <Link href="/#fotw" className="text-[#2d5a2d] hover:text-[#1a3a1a] font-medium transition-colors">
            Plant of The Week
          </Link>
          <Link href="/#meet-the-team" className="text-[#2d5a2d] hover:text-[#1a3a1a] font-medium transition-colors">
            Team
          </Link>
        </div>

        <button className="md:hidden p-2 text-[#2d5a2d]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2d5a2d] mb-6">
            We&apos;re On A Mission
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            To connect our community with nature through gardening
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Because we believe that everyone deserves access to green spaces, fresh produce, and the joy of watching something grow. Gardening shouldn&apos;t be a luxury—it should be a part of everyday campus life.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg ring-1 ring-[#2d5a2d]/10 p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#2d5a2d] flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">What We Do</h3>
            </div>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Cruzlings is a student-led gardening initiative at UC Santa Cruz. We design, build, and maintain planter boxes across campus, transforming unused spaces into thriving gardens where students can grow vegetables, herbs, and flowers.
              </p>
              <p>
                Our projects bring together students from all backgrounds—whether you&apos;re a seasoned gardener or have never touched soil before. We provide the tools, knowledge, and community support to help everyone develop a green thumb.
              </p>
              <p>
                Beyond just planting, we host workshops on sustainable gardening practices, composting, and environmental stewardship. We believe in hands-on learning that connects classroom concepts to real-world action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg ring-1 ring-[#2d5a2d]/10 p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#2d5a2d] flex items-center justify-center flex-shrink-0">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Values</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-[#f5f5f0] rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-[#2d5a2d]/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-[#2d5a2d]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Sustainability</h4>
                <p className="text-gray-600 text-sm">We practice and teach environmentally responsible gardening methods.</p>
              </div>
              <div className="text-center p-6 bg-[#f5f5f0] rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-[#f4d03f]/20 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-[#2d5a2d]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-gray-600 text-sm">Learning happens best with hands in the soil and curiosity in the heart.</p>
              </div>
              <div className="text-center p-6 bg-[#f5f5f0] rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-[#2d5a2d]/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#2d5a2d]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Community</h4>
                <p className="text-gray-600 text-sm">We grow together, building connections that extend beyond the garden.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2d5a2d] text-white font-medium rounded-lg hover:bg-[#1a3a1a] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 8H3M7 4l-4 4 4 4" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d5a2d] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/80">
            &copy; {new Date().getFullYear()} Cruzlings. University of California, Santa Cruz.
          </p>
        </div>
      </footer>
    </div>
  )
}
