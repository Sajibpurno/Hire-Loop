"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";
import { Avatar } from "@heroui/react";
import { motion } from "motion/react"

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  return (
    <header className="w-full bg-[#121212] border-b border-zinc-800 text-white font-sans selection:bg-purple-500/30 relative">
      <nav className="mx-auto flex h-20 container items-center justify-between px-6 lg:px-8" aria-label="Main Navigation">

        {/* Left Side: Logo Block */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group focus:outline-none" aria-label="Hire Loop Home">
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
        </div>

        {/* Right Side Desktop */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-6 rounded-full bg-zinc-900/80 border border-zinc-800/60 pl-6 pr-2 py-1.5 backdrop-blur-md shadow-inner">
            <ul className="flex items-center gap-8 text-sm font-medium text-zinc-300">

              {/* Browse Jobs, Company, Pricing */}
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}

              <span className="h-4 w-[1px] bg-zinc-700" aria-hidden="true"></span>

              {/* Session check */}
              {isPending ? (
                <li className="w-20 h-6 rounded-full bg-zinc-800 animate-pulse" />
              ) : session ? (
                // ✅ Logged in
                <li className="flex items-center gap-3">
                  <Avatar>
                    <Avatar.Image
                      alt={session.user.name}
                      src={session.user.image || ""}
                    />
                    <Avatar.Fallback>
                      {session.user.name?.charAt(0).toUpperCase()}
                    </Avatar.Fallback>
                  </Avatar>
                  <span className="text-sm text-white font-medium">{session.user.name}</span>
                  <button
                    onClick={() =>
                      authClient.signOut({
                        fetchOptions: { onSuccess: () => router.push("/") },
                      })
                    }
                    className="rounded-full bg-zinc-800 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700 transition-all duration-200"
                  >
                    Sign Out
                  </button>
                </li>
              ) : (
                // ❌ Not logged in
                <>
                  <li>
                    <Link href="/signin" className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors duration-200">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link href="/signup" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-zinc-200 transition-all duration-200 shadow-md inline-block">
                      Get Started
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white focus:outline-none z-50 relative"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[76px] right-6 w-64 bg-zinc-950/95 border border-zinc-800 rounded-2xl shadow-xl backdrop-blur-xl z-50 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-4 space-y-4">

            {/* Core Nav Links */}
            <ul className="space-y-3">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-sm font-medium text-zinc-300 hover:text-white transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <hr className="border-zinc-800" />

            {/* Auth Section */}
            <div className="flex flex-col gap-2.5">
              {isPending ? (
                <div className="w-full h-9 rounded-xl bg-zinc-800 animate-pulse" />
              ) : session ? (
                // ✅ Logged in
                <>
                  <div className="flex items-center gap-3 px-1">
                    <Avatar>
                      <Avatar.Image
                        alt={session.user.name}
                        src={session.user.image || ""}
                      />
                      <Avatar.Fallback>
                        {session.user.name?.charAt(0).toUpperCase()}
                      </Avatar.Fallback>
                    </Avatar>
                    <span className="text-sm text-white font-medium">{session.user.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      authClient.signOut({
                        fetchOptions: { onSuccess: () => router.push("/") },
                      });
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-center py-2 text-sm font-medium border border-zinc-800 rounded-xl text-rose-400 hover:bg-zinc-900 transition-colors block"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                // ❌ Not logged in
                <>
                  <Link
                    href="/signin"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full text-center py-2 text-sm font-medium border border-zinc-800 rounded-xl text-indigo-400 hover:bg-zinc-900 transition-colors block"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full text-center py-2 text-sm font-semibold bg-white text-black rounded-xl hover:bg-zinc-200 transition-colors block"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/companies" },
  { label: "Pricing", href: "/plans" },
  { label: "Sign In", href: "/signin" },
  { label: "Get Started", href: "/signup" },
];