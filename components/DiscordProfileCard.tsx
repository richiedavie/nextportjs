"use client";

import { useLanyardSpotify } from "@/hooks/useLanyardSpotify";
import Image from "next/image";
import type { ReactNode } from "react";

const connections = [
    { platform: "GitHub", username: "richiedavie", href: "https://github.com/richiedavie" },
    {
        platform: "Roblox",
        username: "RICHIETAX",
        href: "https://www.roblox.com/users/profile?username=RICHIETAX",
    },
    {
        platform: "Spotify",
        username: "ritzdave",
        href: "https://open.spotify.com/user/ritzdave",
    },
    {
        platform: "Steam",
        username: "richiedavie",
        subtitle: "Member since Apr 17, 2022",
        href: "https://steamcommunity.com/id/richiedavie",
    },
    { platform: "YouTube", username: "Richiee", href: "https://www.youtube.com/@RitzDavie" },
];

export function DiscordProfileCard() {
    const { discordUser, discordStatus } = useLanyardSpotify();
    const userId = discordUser?.id ?? "998460294458265672";
    const avatarHash = discordUser?.avatar;
    const avatarUrl = avatarHash
        ? `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.${avatarHash.startsWith("a_") ? "gif" : "png"}?size=256`
        : null;
    const decorationAsset = discordUser?.avatar_decoration_data?.asset;
    const guild = discordUser?.primary_guild;

    return (
        <section className="px-4 pb-24 sm:px-6 sm:pb-32" aria-labelledby="discord-profile-heading">
            <div className="mx-auto w-full max-w-[1200px]">
                <h2
                    id="discord-profile-heading"
                    className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                    My Discord Profile
                </h2>
                <article className="discord-profile-card group relative w-full overflow-hidden rounded-3xl border border-white/15 bg-zinc-950/50 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-300 hover:border-white/25 sm:p-8">
                    <Image
                        src="/images/MyWaifu.png"
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 1200px"
                        className="pointer-events-none z-0 select-none object-cover object-center opacity-55 transition-transform duration-500 group-hover:scale-[1.02]"
                        aria-hidden="true"
                    />
                    <div
                        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-zinc-950/85 via-zinc-950/65 to-zinc-950/50"
                        aria-hidden="true"
                    />
                    <div
                        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.08),transparent_60%)]"
                        aria-hidden="true"
                    />

                    <div className="relative z-10 flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-stretch lg:gap-8">
                        <div className="flex shrink-0 items-center justify-center">
                            <div className="relative h-24 w-24 sm:h-28 sm:w-28">
                                {avatarUrl ? (
                                    <Image
                                        src={avatarUrl}
                                        alt={`${discordUser?.global_name ?? "Richie"}'s Discord avatar`}
                                        width={112}
                                        height={112}
                                        className="h-full w-full rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white/[0.06] text-3xl font-bold text-white">
                                        {(discordUser?.global_name ?? "R").slice(0, 1)}
                                    </div>
                                )}

                                {decorationAsset ? (
                                    <Image
                                        src={`https://cdn.discordapp.com/avatar-decoration-presets/${decorationAsset}.png`}
                                        alt=""
                                        width={140}
                                        height={140}
                                        className="pointer-events-none absolute inset-[-14%] h-[128%] w-[128%] scale-115 object-contain"
                                    />
                                ) : (
                                    <span
                                        className="pointer-events-none absolute -inset-1 rounded-full border-2 border-dashed border-purple-500/60 shadow-[0_0_24px_rgba(168,85,247,0.28)]"
                                        aria-hidden="true"
                                    />
                                )}

                                <StatusBadge status={discordStatus ?? "offline"} />
                            </div>
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col items-center justify-center text-center lg:items-start lg:text-left">
                            <h2 className="text-2xl font-bold tracking-tight text-white">
                                {discordUser?.global_name || "richie"}
                            </h2>

                            <div className="mt-1.5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                                <span className="text-sm text-zinc-400">@{discordUser?.username || "ritzdave"}</span>
                                <div className="discord-profile-badges inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-zinc-200">
                                    <MiniBadge kind="nitro" label="Discord Nitro" />
                                    <MiniBadge kind="boost" label="Server Booster" />
                                    <MiniBadge kind="brilliance" label="HypeSquad Brilliance" />
                                    <MiniBadge kind="developer" label="Active Developer" />
                                </div>
                            </div>

                            <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs font-semibold text-zinc-200">
                                {guild?.badge && guild.identity_guild_id ? (
                                    <Image
                                        src={`https://cdn.discordapp.com/guild-tag-badges/${guild.identity_guild_id}/${guild.badge}.png`}
                                        alt=""
                                        width={16}
                                        height={16}
                                        className="h-4 w-4 object-contain"
                                    />
                                ) : (
                                    <GemIcon />
                                )}
                                {guild?.tag || "REAL"}
                            </div>

                            <div className="mt-3.5 w-full space-y-2 border-l-2 border-white/20 pl-3.5 text-left text-xs text-zinc-300">
                                <p className="font-mono text-zinc-300">⠡ &gt;&gt;</p>
                                <p className="break-words">
                                    My port [Remake]:{" "}
                                    <ExternalTextLink href="https://justjer-port.vercel.app/">
                                        https://justjer-port.vercel.app/
                                    </ExternalTextLink>
                                </p>
                                <p className="break-words">
                                    Join my Discord server:{" "}
                                    <ExternalTextLink href="https://discord.gg/yRRa5qXmrN">
                                        https://discord.gg/yRRa5qXmrN
                                    </ExternalTextLink>
                                </p>
                                <p className="border-l-2 border-white/15 pl-2.5 leading-relaxed text-zinc-400">
                                    Fav artist: VirtualRiot, Barely Alive, Plenka, Excision, Wooli, Chime, ELEPS &amp;
                                    Datsik
                                </p>
                            </div>
                        </div>

                        <div className="flex w-full shrink-0 flex-col justify-between gap-3 lg:w-[320px]">
                            <div className="discord-connections-panel space-y-3.5 rounded-2xl border border-white/15 bg-zinc-950/65 p-4 backdrop-blur-md">
                                <div>
                                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                                        Member Since
                                    </p>
                                    <p className="mt-0.5 text-xs font-medium text-zinc-200 sm:text-sm">Jul 18, 2022</p>
                                </div>

                                <div className="h-px w-full bg-white/10" />

                                <div>
                                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                                        Connections
                                    </p>
                                    <ul className="space-y-2">
                                        {connections.map(connection => (
                                            <li key={connection.platform}>
                                                <a
                                                    href={connection.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/link flex items-center justify-between gap-3 text-xs text-zinc-200 transition-colors hover:text-white"
                                                >
                                                    <span className="flex min-w-0 items-center gap-2.5">
                                                        <PlatformIcon platform={connection.platform} />
                                                        <span className="min-w-0">
                                                            <span className="block truncate">
                                                                {connection.username}
                                                            </span>
                                                            {connection.subtitle && (
                                                                <span className="mt-0.5 block text-[10px] text-zinc-400">
                                                                    {connection.subtitle}
                                                                </span>
                                                            )}
                                                        </span>
                                                    </span>
                                                    <span
                                                        className="shrink-0 text-zinc-500 transition-colors group-hover/link:text-zinc-200"
                                                        aria-hidden="true"
                                                    >
                                                        ↗
                                                    </span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <a
                                className="discord-message-button flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-zinc-950/65 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-white/30 hover:bg-zinc-950/80 sm:text-sm"
                                href={`https://discord.com/users/${userId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <DiscordIcon className="h-4 w-4" />
                                Message on Discord
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

function StatusBadge({ status }: { status: "online" | "idle" | "dnd" | "offline" }) {
    return (
        <span className="absolute bottom-0.5 right-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950">
            {status === "dnd" ? (
                <span className="h-2 w-3 rounded-full bg-[#ed4245]" aria-label="Do not disturb" />
            ) : status === "online" ? (
                <span className="h-3.5 w-3.5 rounded-full bg-[#23a55a]" aria-label="Online" />
            ) : status === "idle" ? (
                <span className="h-3.5 w-3.5 rounded-full bg-[#f0b232]" aria-label="Idle" />
            ) : (
                <span className="h-3.5 w-3.5 rounded-full border-2 border-zinc-500 bg-zinc-900" aria-label="Offline" />
            )}
        </span>
    );
}

function MiniBadge({ kind, label }: { kind: string; label: string }) {
    return (
        <span title={label} aria-label={label}>
            <BadgeIcon kind={kind} />
        </span>
    );
}

function BadgeIcon({ kind }: { kind: string }) {
    const paths: Record<string, string> = {
        nitro: "M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 3.1 5.9 3.3L12 11.7 6.1 8.4 12 5.1ZM5 10.1l5.8 3.3v5.2L5 15.4v-5.3Zm8.2 8.5v-5.2l5.8-3.3v5.3l-5.8 3.2Z",
        boost: "M12 2 3 12h6l-1 10 13-13h-7l1-7Z",
        brilliance: "M12 2 14.4 9.6 22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2Z",
        developer: "M8.5 7 3.5 12l5 5M15.5 7l5 5-5 5M13.5 5l-3 14",
    };
    return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
            <path d={paths[kind] ?? paths.nitro} />
        </svg>
    );
}

function GemIcon() {
    return (
        <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
            <path d="m3 7 3-4h8l3 4-7 10L3 7Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3 7h14M6 3l2 4 2 10 2-10 2-4" stroke="currentColor" strokeWidth="1.2" />
        </svg>
    );
}

function ExternalTextLink({ href, children }: { href: string; children: ReactNode }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="break-all text-sky-400 hover:underline">
            {children}
        </a>
    );
}

function PlatformIcon({ platform }: { platform: string }) {
    const iconClass = "h-5 w-5 shrink-0";

    if (platform === "GitHub") {
        return (
            <svg viewBox="0 0 24 24" fill="currentColor" className={`${iconClass} text-white`} aria-hidden="true">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.31-3.76-1.31-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.11.08 1.7 1.14 1.7 1.14.99 1.7 2.59 1.21 3.22.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.23-5.12 5.51.4.35.75 1.03.75 2.08v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
        );
    }

    if (platform === "Roblox") {
        return (
            <svg viewBox="0 0 24 24" fill="currentColor" className={`${iconClass} text-white`} aria-hidden="true">
                <path d="m5.2 1.9 17 4.5-4.5 17-17-4.5 4.5-17Zm2.4 6.4-2 7.4 7.4 2 2-7.4-7.4-2Z" />
            </svg>
        );
    }

    if (platform === "Spotify") {
        return (
            <svg viewBox="0 0 24 24" fill="currentColor" className={`${iconClass} text-[#1ed760]`} aria-hidden="true">
                <path d="M12 1.8A10.2 10.2 0 1 0 12 22.2 10.2 10.2 0 0 0 12 1.8Zm4.68 14.7a.78.78 0 0 1-1.07.26c-2.94-1.8-6.64-2.2-11-.99a.78.78 0 1 1-.42-1.5c4.77-1.33 8.87-.86 12.23 1.17.37.23.49.7.26 1.06Zm1.53-3.4a.97.97 0 0 1-1.34.32c-3.36-2.07-8.48-2.67-12.45-1.46a.97.97 0 1 1-.57-1.85c4.54-1.38 10.18-.71 14.04 1.67.46.28.61.87.32 1.33Zm.13-3.54c-4.03-2.4-10.68-2.62-14.53-1.45a1.17 1.17 0 1 1-.68-2.24c4.42-1.34 11.76-1.08 16.4 1.67a1.17 1.17 0 0 1-1.19 2.02Z" />
            </svg>
        );
    }

    if (platform === "Steam") {
        return (
            <svg viewBox="0 0 24 24" fill="none" className={`${iconClass} text-white`} aria-hidden="true">
                <circle cx="15.4" cy="8.3" r="5.1" stroke="currentColor" strokeWidth="2.1" />
                <circle cx="15.4" cy="8.3" r="2.1" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="6.2" cy="16.8" r="3.2" stroke="currentColor" strokeWidth="2" />
                <path
                    d="m8.9 15 3.5-2.8m-3.9 6.4 3.4 1.7a2.2 2.2 0 0 0 2.6-.5l1.5-1.7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    if (platform === "YouTube") {
        return (
            <svg viewBox="0 0 24 24" fill="none" className={`${iconClass} text-[#ff0033]`} aria-hidden="true">
                <path
                    d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8Z"
                    fill="currentColor"
                />
                <path d="m9.6 15.6 6.2-3.6-6.2-3.6v7.2Z" fill="white" />
            </svg>
        );
    }

    return (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center text-zinc-300" aria-hidden="true">
            ↗
        </span>
    );
}

function DiscordIcon({ className }: { className: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M19.7 5.3a18.5 18.5 0 0 0-4.6-1.4l-.6 1.2a17 17 0 0 0-5 0l-.6-1.2a18.5 18.5 0 0 0-4.6 1.4C1.4 9.6.6 13.8 1 18a18.7 18.7 0 0 0 5.7 2.9l1.2-2a12 12 0 0 1-1.9-.9l.5-.4c3.7 1.7 7.6 1.7 11.2 0l.5.4a12 12 0 0 1-1.9.9l1.2 2A18.7 18.7 0 0 0 23 18c.5-4.9-.8-9.1-3.3-12.7ZM8.8 15.1c-1.1 0-2-.9-2-2.1s.9-2.1 2-2.1 2 .9 2 2.1-.9 2.1-2 2.1Zm6.4 0c-1.1 0-2-.9-2-2.1s.9-2.1 2-2.1 2 .9 2 2.1-.9 2.1-2 2.1Z" />
        </svg>
    );
}
