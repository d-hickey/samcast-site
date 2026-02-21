import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { episodes } from "@/lib/episodes";

export const metadata: Metadata = {
  title: "The SamCast",
  description: "All episodes of The SamCast podcast.",
  openGraph: {
    title: "The SamCast",
    description: "All episodes of The SamCast podcast.",
    url: "/",
  },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* ── Page heading with headphones icon ─────────────────── */}
      <div className="flex items-center gap-2 mb-6">
        <svg
          className="w-7 h-7 text-slate-700 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Headphones icon (Lucide) */}
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
          <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
        <h1 className="text-2xl font-bold text-gray-900">Episodes</h1>
      </div>

      {/* ── Episode grid: 1 col on mobile, 2 cols on sm+ ─────────── */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {episodes.map((ep) => (
          <li key={ep.slug}>
            <Link
              href={`/${ep.slug}/`}
              className="flex gap-4 items-center bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-300 rounded-xl p-3 transition-colors group h-full"
            >
              {/* Thumbnail with EP badge overlay */}
              <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={ep.thumb}
                  alt={`${ep.title} thumbnail`}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                  unoptimized
                />
                {/* Episode number badge – decorative, title text provides the same info */}
                <span
                  className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-xs font-bold text-center py-0.5 leading-tight"
                  aria-hidden="true"
                >
                  EP {ep.number}
                </span>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0 text-left">
                <p className="font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">
                  {ep.title}
                </p>
                <p className="text-sm italic text-gray-500 mt-0.5">{ep.date}</p>
                <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                  {ep.description}
                </p>
              </div>

              {/* Podcast play button icon – decorative; link text already describes destination */}
              <svg
                className="w-8 h-8 flex-shrink-0 text-gray-300 group-hover:text-indigo-500 transition-colors"
                viewBox="0 0 32 32"
                aria-hidden="true"
                focusable="false"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="15"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <polygon points="13,10 22,16 13,22" fill="currentColor" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
