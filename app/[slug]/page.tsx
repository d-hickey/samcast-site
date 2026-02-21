import type { Metadata } from "next";
import Image from "next/image";
import { episodes, getEpisode } from "@/lib/episodes";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

/** Tell Next.js which slugs to pre-render at build time. */
export function generateStaticParams() {
  return episodes.map((ep) => ({ slug: ep.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ep = getEpisode(slug);
  if (!ep) return {};
  return {
    title: ep.title,
    description: ep.description,
    openGraph: {
      title: `${ep.title} | The SamCast`,
      description: ep.description,
      url: `/${ep.slug}/`,
      images: [{ url: ep.thumb }],
    },
    alternates: { canonical: `/${ep.slug}/` },
  };
}

export default async function EpisodePage({ params }: Props) {
  const { slug } = await params;
  const ep = getEpisode(slug);
  if (!ep) notFound();

  return (
    <div className="py-12 flex flex-col items-center gap-6">
      {/* ── Audio player ──────────────────────────────────────── */}
      {ep.audioFiles && (
        <div>
          {ep.soundcloudUrl && (
            <p className="mb-2">
              <a
                href={ep.soundcloudUrl}
                className="text-blue-700 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                SoundCloud Link
              </a>
            </p>
          )}
          {/* Audio clips have no captions. */}
          <audio controls>
            {ep.audioFiles.map((f) => (
              <source key={f.src} src={f.src} type={f.type} />
            ))}
            No support for this browser sorry. Try using Chrome, Firefox or
            Edge.
          </audio>
        </div>
      )}

      {/* ── YouTube embed ─────────────────────────────────────── */}
      {ep.youtubeId && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${ep.youtubeId}`}
          title="YouTube video player"
          frameBorder="0"
          allow={
            ep.youtubeAllow ??
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          }
          allowFullScreen
        />
      )}

      {/* ── Participant portraits ──────────────────────────────── */}
      <div className="flex flex-wrap justify-center gap-2">
        {ep.participants.map((name) => (
          <Image
            key={name}
            src={`/media/peeps/${name}.jpg`}
            alt={name}
            width={78}
            height={78}
            className="rounded"
            unoptimized
          />
        ))}
      </div>

      {/* ── Link dump ─────────────────────────────────────────── */}
      {ep.linkDump && ep.linkDump.length > 0 && (
        <div>
          <p className="font-semibold mb-1">Link Dump:</p>
          <ul className="list-none space-y-1">
            {ep.linkDump.map((link, i) =>
              link.href ? (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-blue-700 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={i}>{link.label}</li>
              ),
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
