import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c4c7c8]/70 block mb-3 select-none">
          Soo.. you got something to ask?
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-2xl">
          If you got some question, just leave a comment
        </h2>
        <p className="text-base sm:text-lg text-[#c4c7c8] max-w-md mb-10 leading-relaxed font-normal">
          feel free to reach out my github page, ask me anything via gmail.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button href="mailto:hello@example.com" variant="primary">
            My Email
          </Button>
          <Button href="https://github.com" variant="secondary">
            GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
}
