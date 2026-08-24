import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
        <div className="group relative w-full max-w-md sm:max-w-lg lg:max-w-[480px] shrink-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e0e] card-glow">
            <Image
              src="/images/WhatsApp Image 2026-07-20 at 18.51.15.jpeg"
              alt="Portrait of Jerry"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 512px, 480px"
              className="object-cover object-center grayscale contrast-[1.05] brightness-95 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">About me</h2>
          <div className="mt-6 flex flex-col gap-5 max-w-xl text-base sm:text-lg text-[#c4c7c8] leading-relaxed">
            <p>
              Hello! My name is Jer! , but you can call me Jeremy. I am passionate about coding and constantly eager to learn new technologies and improve my skills. I enjoy exploring different programming languages and frameworks, and I am particularly skilled in HTML, CSS, JavaScript, and Bootstrap. Over time, I have developed a strong foundation in web development and love creating interactive and user-friendly websites. When I'm not coding, I like to experiment with mini-games and other creative projects. I am always excited to take on new challenges and grow as a developer.
            </p>
            <p>
             i use arch btw
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}