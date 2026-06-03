"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#121212] text-zinc-400 font-sans border-t border-zinc-800 selection:bg-purple-500/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        
        {/* Top Section: Logo + 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-zinc-800/60">
          
          {/* Logo & Info Block */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none w-max">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-200">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold tracking-tight text-white text-base">Hire Loop</span>
                <span className="font-semibold text-zinc-400 text-sm">Jp</span>
              </div>
            </Link>
            <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* Links Columns Container */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Product */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[#4f46e5] uppercase tracking-wider">Product</h3>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/jobs" className="hover:text-white transition-colors">Job discovery</Link></li>
                <li><Link href="/worker-ai" className="hover:text-white transition-colors">Worker AI</Link></li>
                <li><Link href="/companies" className="hover:text-white transition-colors">Companies</Link></li>
                <li><Link href="/salary" className="hover:text-white transition-colors">Salary data</Link></li>
              </ul>
            </div>

            {/* Column 2: Navigations */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[#4f46e5] uppercase tracking-wider">Navigations</h3>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/help" className="hover:text-white transition-colors">Help center</Link></li>
                <li><Link href="/library" className="hover:text-white transition-colors">Career library</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[#4f46e5] uppercase tracking-wider">Resources</h3>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/brand" className="hover:text-white transition-colors">Brand Guideline</Link></li>
                <li><Link href="/news" className="hover:text-white transition-colors">Newsroom</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: Socials + Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Social Icons Blocks */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-white font-bold text-sm hover:bg-blue-600 hover:border-blue-600 transition-colors">
              f
            </Link>
            {/* Pinterest */}
            <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-500 bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 transition-colors">
              H/P
            </Link>
            {/* LinkedIn */}
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-white font-bold text-sm hover:bg-blue-500 hover:border-blue-500 transition-colors">
              in
            </Link>
          </div>

          {/* Legal Text & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-x-6 gap-y-2 text-xs text-zinc-500 text-center sm:text-left">
            <span>Copyright © 2026 — Programming Hero</span>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms & Policy</Link>
              <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Guideline</Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;