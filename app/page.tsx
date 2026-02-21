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
      <h1 className="font-bold text-lg mb-4">The SamCast</h1>
      <ul className="ml-[30px] list-none text-left">
        {episodes.map((ep) => (
          <li key={ep.slug} className="flex gap-4 items-start pb-5">
            <Link href={`/${ep.slug}/`} aria-label={ep.title}>
              <Image
                src={ep.thumb}
                alt={`${ep.title} thumbnail`}
                width={100}
                height={100}
                className="rounded"
                unoptimized
              />
            </Link>
            <div>
              <p>
                <Link
                  href={`/${ep.slug}/`}
                  className="text-blue-700 hover:underline"
                >
                  {ep.title}
                </Link>
              </p>
              <p className="italic text-gray-500">{ep.date}</p>
              <p>{ep.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
