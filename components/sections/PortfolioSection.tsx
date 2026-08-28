import React from "react";
import Image from "next/image";

interface PortfolioItem {
  title: string;
  date: string;
  description: string;
  image: string;
  alt: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "My first Landing Page – TrackinID",
    date: "September 2025",
    description:
      "This is the first Landing Page website i made on school, it's named TrackinID. TrackinID is a landing page I built to showcase a fleet management system designed to simplify how vehicle owners and companies monitor their operations in real time. The website highlights key features such as driver behavior monitoring, smart alert notifications, real-time vehicle tracking, and automated maintenance scheduling—all presented in a clean and interactive layout. By integrating all critical data into one centralized dashboard, TrackinID eliminates the need for multiple platforms, giving users an easy-to-understand, professional interface that emphasizes both functionality and modern design",
    image: "/images/LandingPage.png",
    alt: "My first Landing Page – TrackinID",
  },
  {
    title: "Project Replica ID [Canva]",
    date: "June 2024",
    description:
      "this is the project where i need to make a one website, and actually i got canva here, and i make canva here just like exactly same like the original canva, even it's not that perfect and not that fit as like the original canva, i have a skill in making a replica version of some web.",
    image: "/images/CanvaReplica.png",
    alt: "Project Replica ID [Canva]",
  },
  {
    title: "My Old Minigame [Feeding Frenzy V4]",
    date: "September 2022",
    description:
      "Not to mention that i also make a minigames, especially this one, that was known as Feeding Frenzy, at the first time i made this, it's just for the old school project since i was in grade 7, but back then, i constantly update this minigame and surpsingly it gained a lot of views, i usually spend my time here on scratch a lot, and i have a skills on making some minigames.",
    image: "/images/FeedingFrenzyV4.png",
    alt: "My Old Minigame [Feeding Frenzy V4]",
  },
  {
    title: "Project Hand Detection [ID]",
    date: "March 2023",
    description:
      "actually this project is just for fun, This project is a Hand Detection System built with Python, leveraging OpenCV and MediaPipe to track and recognize hand landmarks in real time using a webcam. The program detects and maps multiple hand points, allowing the system to recognize gestures such as raised fingers or specific hand positions. It includes a modular structure where the HandDetection class processes frames, extracts landmark data, and evaluates gestures. The system can be extended to trigger actions (like opening applications) based on detected hand gestures, making it a foundation for gesture-based interaction and automation.",
    image: "/images/ProjectHandDetection.png",
    alt: "Project Hand Detection [ID]",
  },
  {
    title: "Project Polri Mobile",
    date: "June 2026",
    description:
      "This interface is a responsive, user-friendly Public Incident Reporting Dashboard designed for a modern law enforcement portal to streamline how citizens file and track complaints. The layout features a personalized welcome banner displaying verified user credentials, a dynamic metrics panel with real-time status cards (tracking Total, In Progress, and Completed cases), and an intuitive empty-state interface with a clear Call-to-Action (CTA) button to encourage immediate report creation. Optimized for clarity and high accessibility, this dashboard ensures that users of all technical levels can effortlessly navigate the platform and securely communicate with authorities.",
    image: "/images/ProjectPolriMobile.png",
    alt: "Project Polri Mobile",
  },
  {
    title: "Project Dino Website",
    date: "December 2025",
    description:
      "Dino Wallet is a modern digital donation box that automatically and systematically counts the amount of money collected. The app is designed to streamline the process of collecting, recording, and reporting donations, making it more transparent, efficient, and accurate. Dino's Wallet was created to allow us to voluntarily help those in need. It involves donating money without expecting anything in return. In a social context, donations are a form of compassion that plays a vital role in bringing about positive change in society.",
    image: "/images/ProjectDinoWebsite.png",
    alt: "Project Dino Website",
  },
  {
    title: "Blender Animating 3D",
    date: "June 2025",
    description:
      "A professional product visualization featuring three beverage bottles. This animation focuses on multi-camera switching and dynamic rotation to showcase the product from various angles within a clean, studio-lit environment.",
    image: "/images/BlenderAnimating3D.png",
    alt: "Blender Animating 3D",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Portfolio
            </h2>
          </div>
          <p className="text-sm text-[#c4c7c8]/80 max-w-sm">
            Showcase of featured web applications, replicas, interactive minigames, computer vision systems, and 3D animations.
          </p>
        </div>

        {/* Responsive Grid of Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[26px] bg-[#0e0e0e]/70 backdrop-blur-xl border border-white/[0.09] hover:border-white/20 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            >
              {/* Card Header */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#c4c7c8]/70 mt-1">
                  {item.date}
                </p>
              </div>

              {/* Description container with subtle scroll if long */}
              <div className="mb-6 max-h-36 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
                <p className="text-xs sm:text-sm text-[#c4c7c8] leading-relaxed font-normal whitespace-pre-line">
                  {item.description}
                </p>
              </div>

              {/* Image Preview Container */}
              <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/[0.08] group-hover:border-white/20 transition-colors">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-contain filter contrast-[1.02] brightness-95 group-hover:brightness-100 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
