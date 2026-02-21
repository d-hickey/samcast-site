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
      {/* ── Episode heading ─────────────────────────────────────── */}
      <div className="w-full text-center">
        {/* Episode number pill */}
        <span className="inline-block bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide">
          Episode {ep.number}
        </span>
        <h1 className="text-2xl font-bold text-gray-900">{ep.title}</h1>
        <p className="text-sm italic text-gray-500 mt-1">{ep.date}</p>
        <p className="text-gray-700 mt-2">{ep.description}</p>
      </div>

      {/* ── Audio player – styled dark "Listen" card ────────────── */}
      {ep.audioFiles && (
        <div className="w-full bg-slate-900 rounded-2xl p-5 flex flex-col items-center gap-3">
          {/* "Listen" label with microphone icon */}
          <div className="flex items-center gap-2 text-slate-400">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {/* Microphone icon (Lucide) */}
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
            <span className="text-xs uppercase tracking-widest font-semibold">
              Listen
            </span>
          </div>

          {ep.soundcloudUrl && (
            <a
              href={ep.soundcloudUrl}
              className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
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

      {/* ── YouTube embed (responsive 16:9) with ring ───────────── */}
      {ep.youtubeId && (
        <div className="video-wrapper w-full rounded-xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
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
                    className="text-indigo-600 hover:text-indigo-800 hover:underline text-sm transition-colors"
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
