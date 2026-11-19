"use client";

import Image from "next/image";
import { useLanyardSpotify } from "@/hooks/useLanyardSpotify";

function formatTime(milliseconds: number) {
  const totalSeconds = Math.floor(Math.max(0, milliseconds) / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function NowPlayingPill() {
  const playback = useLanyardSpotify();

  const shellClassName =
    "group flex w-full items-center justify-between gap-4 rounded-3xl border border-white/15 bg-zinc-950/45 px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-300 hover:border-white/30";

  const activePlayback =
    playback?.isPlaying && playback.title && playback.artist && playback.songUrl
      ? playback
      : null;
  const trackTextLength = activePlayback
    ? Math.max(
        Array.from(`${activePlayback.artist} - ${activePlayback.title}`).length,
        Array.from(activePlayback.album ?? "").length
      )
    : 0;
  const pillWidth = activePlayback
    ? Math.min(900, 540 + Math.max(0, trackTextLength - 34) * 7)
    : 540;

  return (
    <aside
      className="fixed inset-x-0 bottom-0 z-40 flex justify-center pb-[max(16px,env(safe-area-inset-bottom))]"
      aria-label="Spotify now playing"
    >
      {activePlayback ? (
        <a
          href={activePlayback.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={shellClassName}
          style={{ width: `min(calc(100vw - 32px), ${pillWidth}px)` }}
          aria-label={`Open ${activePlayback.title} by ${activePlayback.artist} on Spotify`}
        >
          <div className="w-[104px] shrink-0">
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"
                aria-hidden="true"
              />
              <span className="text-xs font-medium tracking-wide text-zinc-300">
                now playing
              </span>
            </div>
            <p className="mt-1 font-mono text-[11px] tabular-nums text-zinc-400">
      {formatTime(playback.progressMs)} / {formatTime(activePlayback.durationMs)}
            </p>
          </div>

          <div className="min-w-0 flex-1 px-1 text-center">
            <p className="truncate text-sm font-semibold text-white">
              {activePlayback.artist} - {activePlayback.title}
            </p>
            <p className="mt-0.5 truncate text-xs text-zinc-400">
              {activePlayback.album}
            </p>
          </div>

          {activePlayback.albumImageUrl ? (
            <Image
              src={activePlayback.albumImageUrl}
              alt={`${activePlayback.album ?? "Album"} cover`}
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-xl border border-white/10 object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <span
              className="h-12 w-12 shrink-0 rounded-xl border border-white/10 bg-white/5"
              aria-hidden="true"
            />
          )}
        </a>
      ) : (
        <div
          className={`${shellClassName} cursor-default`}
          style={{ width: `min(calc(100vw - 32px), ${pillWidth}px)` }}
          role="status"
          aria-live="polite"
        >
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500"
            aria-hidden="true"
          />
          <span className="min-w-0 flex-1 truncate text-xs text-zinc-400">
            not playing anything rn
          </span>
          <span
            className="h-12 w-12 shrink-0 rounded-xl border border-white/10 bg-white/[0.03]"
            aria-hidden="true"
          />
        </div>
      )}
    </aside>
  );
}
