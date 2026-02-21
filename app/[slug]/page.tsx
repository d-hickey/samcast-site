import type { Metadata } from "next";
import { episodes, getEpisode } from "@/lib/episodes";
import { notFound } from "next/navigation";
import ParticipantImage from "@/components/ParticipantImage";

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
    <div className="flex flex-col items-center gap-8">
      {/* ── Episode heading ────────────────────────────────────── */}
      <div className="w-full text-center">
        <h1 className="text-2xl font-bold text-gray-900">{ep.title}</h1>
        <p className="text-sm italic text-gray-500 mt-1">{ep.date}</p>
        <p className="text-gray-700 mt-2">{ep.description}</p>
      </div>

      {/* ── Audio player ────────────────────────────────────────── */}
      {ep.audioFiles && (
        <div className="w-full flex flex-col items-center gap-2">
          {ep.soundcloudUrl && (
            <a
              href={ep.soundcloudUrl}
              className="text-blue-700 hover:underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              SoundCloud Link
            </a>
          )}
          {/* Audio clips have no captions. */}
          <audio controls className="w-full max-w-lg">
            {ep.audioFiles.map((f) => (
              <source key={f.src} src={f.src} type={f.type} />
            ))}
            No support for this browser sorry. Try using Chrome, Firefox or
            Edge.
          </audio>
        </div>
      )}

      {/* ── YouTube embed (responsive 16:9) ─────────────────────── */}
      {ep.youtubeId && (
        <div className="video-wrapper w-full">
          <iframe
            src={`https://www.youtube.com/embed/${ep.youtubeId}`}
            title="YouTube video player"
            allow={
              ep.youtubeAllow ??
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            }
            allowFullScreen
          />
        </div>
      )}

      {/* ── Participant portraits ────────────────────────────────── */}
      <div className="flex flex-wrap justify-center gap-3">
        {ep.participants.map((name) => (
          <ParticipantImage
            key={name}
            name={name}
            hoverName={ep.participantHoverSwaps?.[name]}
          />
        ))}
      </div>

      {/* ── Link dump ───────────────────────────────────────────── */}
      {ep.linkDump && ep.linkDump.length > 0 && (
        <div className="w-full max-w-lg">
          <p className="font-semibold text-gray-800 mb-2">Link Dump</p>
          <ul className="space-y-1">
            {ep.linkDump.map((link, i) =>
              link.href ? (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-blue-700 hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={i} className="text-sm text-gray-600">
                  {link.label}
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
