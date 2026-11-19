"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Playback = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
  progressMs?: number;
  durationMs?: number;
};

type LanyardResponse = {
  data?: {
    listening_to_spotify?: boolean;
    spotify?: {
      song: string;
      artist: string;
      album: string;
      album_art_url: string;
      track_id: string;
      timestamps: {
        start: number;
        end: number;
      };
    } | null;
  };
};

const lanyardUrl = "https://api.lanyard.rest/v1/users/998460294458265672";
const pollIntervalMs = 10_000;

function formatTime(milliseconds: number) {
  const totalSeconds = Math.floor(Math.max(0, milliseconds) / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function NowPlayingPill() {
  const [playback, setPlayback] = useState<Playback | null>(null);
  const [progressMs, setProgressMs] = useState(0);

  useEffect(() => {
    let mounted = true;
    let controller: AbortController | undefined;

    const loadPlayback = async () => {
      controller?.abort();
      controller = new AbortController();

      try {
        const response = await fetch(lanyardUrl, {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Lanyard status unavailable");

        const payload: LanyardResponse = await response.json();
        const spotify = payload?.data?.spotify;
        const isPlaying = Boolean(payload?.data?.listening_to_spotify && spotify);

        if (!mounted) return;

        if (!isPlaying || !spotify) {
          setPlayback({ isPlaying: false });
          setProgressMs(0);
          return;
        }

        const durationMs = spotify.timestamps.end - spotify.timestamps.start;
        const nextPlayback: Playback = {
          isPlaying: true,
          title: spotify.song,
          artist: spotify.artist.replace(/;\s*/g, ", "),
          album: spotify.album,
          albumImageUrl: spotify.album_art_url,
          songUrl: `https://open.spotify.com/track/${spotify.track_id}`,
          progressMs: Math.max(0, Date.now() - spotify.timestamps.start),
          durationMs,
        };

        setPlayback(nextPlayback);
        setProgressMs(nextPlayback.progressMs ?? 0);
      } catch {
        if (mounted) {
          setPlayback({ isPlaying: false });
          setProgressMs(0);
        }
      }
    };

    void loadPlayback();
    const pollId = window.setInterval(() => void loadPlayback(), pollIntervalMs);

    return () => {
      mounted = false;
      controller?.abort();
      window.clearInterval(pollId);
    };
  }, []);

  useEffect(() => {
    if (!playback?.isPlaying) return;

    const timerId = window.setInterval(() => {
      setProgressMs((current) =>
        Math.min(current + 1000, playback.durationMs ?? current + 1000)
      );
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [playback?.isPlaying, playback?.durationMs]);

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
              {formatTime(progressMs)} / {formatTime(activePlayback.durationMs ?? 0)}
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
