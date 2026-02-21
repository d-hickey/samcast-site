"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#1e293b] text-white shadow-lg border-t-2 border-t-indigo-500">
      <div className="max-w-4xl mx-auto px-4">
        {/* ── Top bar: logo + title + bars + hamburger ────────────── */}
        <div className="flex items-center justify-between py-3">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setOpen(false)}
          >
            <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-white/50 transition-all flex-shrink-0">
              <Image
                src="/media/samlogo.jpg"
                alt="The SamCast logo"
                width={56}
                height={56}
                className="object-cover w-full h-full"
                unoptimized
                priority
              />
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block">
              The SamCast
            </span>
            {/* Animated sound bars — decorative, desktop only */}
            <div
              className="hidden sm:flex items-end gap-0.5 h-5 self-center"
              aria-hidden="true"
            >
              <span className="soundbar" />
              <span className="soundbar" />
              <span className="soundbar" />
              <span className="soundbar" />
              <span className="soundbar" />
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav
            aria-label="Main navigation"
            className="hidden sm:flex items-center gap-6"
          >
            <Link
              href="/"
              className="text-slate-300 hover:text-white font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-slate-300 hover:text-white font-medium transition-colors"
            >
              About Us
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              /* X */
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              /* ☰ */
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* ── Mobile dropdown ─────────────────────────────────────── */}
        {open && (
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="sm:hidden border-t border-white/10 py-4 flex flex-col gap-4"
          >
            <Link
              href="/"
              className="text-slate-300 hover:text-white font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-slate-300 hover:text-white font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
