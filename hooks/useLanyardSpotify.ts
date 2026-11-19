"use client";

import { useSyncExternalStore } from "react";

export type LanyardPlayback = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
  progressMs: number;
  durationMs: number;
  discordUser?: DiscordUser;
  discordStatus?: "online" | "idle" | "dnd" | "offline";
};

export type DiscordUser = {
  id: string;
  avatar: string | null;
  avatar_decoration_data?: { asset: string } | null;
  username?: string;
  global_name?: string | null;
  public_flags?: number;
  primary_guild?: {
    identity_guild_id: string;
    badge: string;
    tag: string;
  } | null;
};

type LanyardResponse = {
  data?: {
    listening_to_spotify?: boolean;
    discord_user?: DiscordUser;
    discord_status?: "online" | "idle" | "dnd" | "offline";
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
const initialPlayback: LanyardPlayback = {
  isPlaying: false,
  progressMs: 0,
  durationMs: 0,
};
const initialProfile = {
  discordUser: undefined,
  discordStatus: "offline" as const,
};

let playback = initialPlayback;
const listeners = new Set<() => void>();
let pollId: number | undefined;
let timerId: number | undefined;
let controller: AbortController | undefined;

function publish(nextPlayback: LanyardPlayback) {
  playback = nextPlayback;
  listeners.forEach((listener) => listener());
  syncProgressTimer();
}

function syncProgressTimer() {
  if (playback.isPlaying && timerId === undefined) {
    timerId = window.setInterval(() => {
      if (!playback.isPlaying) return;

      const nextProgress = Math.min(playback.progressMs + 1000, playback.durationMs);
      playback = { ...playback, progressMs: nextProgress };
      listeners.forEach((listener) => listener());

      if (nextProgress >= playback.durationMs && timerId !== undefined) {
        window.clearInterval(timerId);
        timerId = undefined;
      }
    }, 1000);
  } else if (!playback.isPlaying && timerId !== undefined) {
    window.clearInterval(timerId);
    timerId = undefined;
  }
}

async function pollLanyard() {
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
    const profile = {
      discordUser: payload?.data?.discord_user,
      discordStatus: payload?.data?.discord_status ?? "offline",
    };
    if (!payload?.data?.listening_to_spotify || !spotify) {
      publish({ ...initialPlayback, ...profile });
      return;
    }

    const durationMs = Math.max(0, spotify.timestamps.end - spotify.timestamps.start);
    publish({
      isPlaying: true,
      title: spotify.song,
      artist: spotify.artist.replace(/;\s*/g, ", "),
      album: spotify.album,
      albumImageUrl: spotify.album_art_url,
      songUrl: `https://open.spotify.com/track/${spotify.track_id}`,
      progressMs: Math.min(
        Math.max(0, Date.now() - spotify.timestamps.start),
        durationMs
      ),
      durationMs,
      ...profile,
    });
  } catch {
    if (!controller?.signal.aborted) {
      publish({ ...initialPlayback, ...initialProfile });
    }
  }
}

function start() {
  void pollLanyard();
  pollId = window.setInterval(() => void pollLanyard(), pollIntervalMs);
}

function stop() {
  if (pollId !== undefined) window.clearInterval(pollId);
  if (timerId !== undefined) window.clearInterval(timerId);
  pollId = undefined;
  timerId = undefined;
  controller?.abort();
  controller = undefined;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) start();

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) stop();
  };
}

function getSnapshot() {
  return playback;
}

function getServerSnapshot() {
  return initialPlayback;
}

export function useLanyardSpotify() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
