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
      <h1 className="text-2xl font-bold text-gray-900 mb-5">Episodes</h1>

      <ul className="space-y-3">
        {episodes.map((ep) => (
          <li key={ep.slug}>
            <Link
              href={`/${ep.slug}/`}
              className="flex gap-4 items-center bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl p-3 transition-colors group"
            >
              {/* Thumbnail – fixed 96×96, object-cover so all cards have consistent height */}
              <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={ep.thumb}
                  alt={`${ep.title} thumbnail`}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0 text-left">
                <p className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {ep.title}
                </p>
                <p className="text-sm italic text-gray-500 mt-0.5">{ep.date}</p>
                <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                  {ep.description}
                </p>
              </div>

              {/* Chevron */}
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-blue-500 flex-shrink-0 transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
