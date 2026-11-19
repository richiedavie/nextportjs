"use client";

import Image from "next/image";
import { useLanyardSpotify } from "@/hooks/useLanyardSpotify";

function formatTime(milliseconds: number) {
  const totalSeconds = Math.floor(Math.max(0, milliseconds) / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function ListeningSection() {
  const playback = useLanyardSpotify();
  const activePlayback =
    playback.isPlaying && playback.title && playback.artist && playback.songUrl
      ? playback
      : null;

  return (
    <section
      id="listening"
      className="border-t border-white/[0.06] px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-32"
      aria-labelledby="listening-heading"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <h2
          id="listening-heading"
          className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          What&apos;s he listens to:
        </h2>

        {activePlayback ? (
          <a
            href={activePlayback.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full rounded-3xl border border-white/15 bg-zinc-950/45 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-300 hover:border-white/30 sm:p-10"
            aria-label={`Open ${activePlayback.title} by ${activePlayback.artist} on Spotify`}
          >
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-12">
              {activePlayback.albumImageUrl ? (
                <Image
                  src={activePlayback.albumImageUrl}
                  alt={`${activePlayback.album ?? "Album"} cover`}
                  width={192}
                  height={192}
                  className="h-40 w-40 shrink-0 rounded-2xl border border-white/10 object-cover shadow-xl transition-transform duration-300 group-hover:scale-[1.02] sm:h-48 sm:w-48"
                />
              ) : (
                <div
                  className="flex h-40 w-40 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-500 shadow-xl sm:h-48 sm:w-48"
                  aria-hidden="true"
                >
                  <MusicIcon className="h-12 w-12" />
                </div>
              )}

              <div className="flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center">
                <div className="mb-4 flex items-center gap-2 text-lg font-semibold tracking-wide text-zinc-200 sm:text-xl">
                  <span
                    className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />
                  <span>now playing</span>
                </div>
                <p className="line-clamp-2 text-xl font-bold text-white sm:text-2xl">
                  {activePlayback.artist} - {activePlayback.title}
                </p>
                <p className="mt-1.5 line-clamp-1 text-sm font-medium text-zinc-400 sm:text-base">
                  {activePlayback.album}
                </p>
                <p className="mt-4 font-mono text-xs tabular-nums text-zinc-400">
                  {formatTime(activePlayback.progressMs)} / {formatTime(activePlayback.durationMs)}
                </p>
              </div>
            </div>
          </a>
        ) : (
          <div
            className="flex min-h-64 w-full flex-col items-center justify-center gap-4 rounded-3xl border border-white/15 bg-zinc-950/45 p-6 text-center shadow-[0_8px_32px_rgba(0,0,0,0.65)] backdrop-blur-md sm:min-h-72 sm:p-10"
            role="status"
            aria-live="polite"
          >
            <MusicIcon className="h-10 w-10 text-zinc-500" />
            <p className="text-sm text-zinc-400">
              He&apos;s not listening to anything right now
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function MusicIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}
