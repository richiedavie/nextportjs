import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold text-xs tracking-wider uppercase rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-[0.98] select-none";

  const variantStyles = {
    primary:
      "bg-white text-black px-7 py-3.5 hover:bg-neutral-200 hover:shadow-[0_0_24px_rgba(255,255,255,0.22)]",
    secondary:
      "border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-white px-7 py-3.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedStyles}
          target={target || (href.startsWith("http") ? "_blank" : undefined)}
          rel={rel || (href.startsWith("http") ? "noopener noreferrer" : undefined)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
