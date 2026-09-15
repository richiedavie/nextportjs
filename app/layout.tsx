import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BackgroundGrid } from "@/components/ui/BackgroundGrid";

export const metadata: Metadata = {
  title: "my port — Jerry | Web Developer & Creator",
  description:
    "Personal developer portfolio of Jerry — Web Developer & Creator. Focused on building refined digital experiences.",
  openGraph: {
    title: "my port — Jerry | Web Developer & Creator",
    description:
      "Personal developer portfolio of Jerry — Web Developer & Creator.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white selection:bg-white selection:text-black">
        <BackgroundGrid />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
