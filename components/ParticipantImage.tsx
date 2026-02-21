"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  /** Primary participant name (matches filename in /media/peeps/) */
  name: string;
  /** Alternate participant shown on hover, e.g. "austin" replacing "glenn" in ep8 */
  hoverName?: string;
}

const SIZE = 80; // px — all portraits the same square size

/**
 * Shows a participant portrait with an optional hover-swap effect.
 * When `hoverName` is provided the image src switches on mouseenter/mouseleave.
 */
export default function ParticipantImage({ name, hoverName }: Props) {
  const [hovered, setHovered] = useState(false);
  const displayName = hovered && hoverName ? hoverName : name;

  return (
    <div
      className={[
        "rounded-lg overflow-hidden flex-shrink-0",
        /* Every portrait gets a subtle ring so it's visible against the white card */
        hoverName
          ? "ring-2 ring-amber-400 cursor-pointer"
          : "ring-1 ring-gray-200",
      ].join(" ")}
      style={{ width: SIZE, height: SIZE }}
      onMouseEnter={() => hoverName && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={
        hoverName
          ? `${name} (Austin stood in – hover to reveal!)`
          : name
      }
    >
      <Image
        src={`/media/peeps/${displayName}.jpg`}
        alt={displayName}
        width={SIZE}
        height={SIZE}
        className="object-cover w-full h-full transition-opacity duration-200"
        unoptimized
      />
    </div>
  );
}
