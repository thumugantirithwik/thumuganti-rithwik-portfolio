import { ArrowDown, ExternalLink, FileText, Send } from 'lucide-react'
import Image from 'next/image'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'

const buttonBase =
  'inline-flex h-11 items-center gap-2 rounded-lg border px-4 text-[13px] font-medium transition-all hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto grid w-full max-w-5xl items-center gap-12 px-5 pt-32 pb-20 md:grid-cols-[1fr_280px] md:pt-40 md:pb-28"
    >
      <div className="order-2 md:order-1">
        <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-teal">
          <span aria-hidden="true" className="h-px w-6 bg-teal" />
          Portfolio · 2026
        </p>
        <h1
          id="hero-title"
          className="mt-5 mb-6 font-display text-6xl font-semibold leading-[0.98] tracking-tighter md:text-8xl"
        >
          {profile.firstName}
          <br />
          <span className="text-primary">{profile.lastName}.</span>
        </h1>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
          {"I'm a curious computer science student who loves turning ideas into clean, thoughtful web experiences. Always learning, always building."}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className={`${buttonBase} border-primary bg-primary text-primary-foreground hover:bg-[#244f70]`}
          >
            View Projects <ArrowDown className="size-3.5" aria-hidden="true" />
          </a>
          <a
            href={profile.resumePath}
            download={profile.resumeFileName}
            className="inline-flex h-11 items-center gap-2.5 rounded-xl border border-border bg-card px-5 text-[15px] font-medium text-foreground transition-all hover:-translate-y-px hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <FileText className="size-[18px]" aria-hidden="true" />
            Download Resume
          </a>
          <a href="#contact" className={`${buttonBase} border-border bg-card hover:bg-secondary`}>
            {"Let's Talk"} <Send className="size-3.5" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-6 flex items-center gap-4 text-foreground/80">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="hover:text-primary"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-primary"
          >
            <LinkedinIcon className="size-4" />
          </a>
        </div>
      </div>

      <div className="relative order-1 mx-auto w-56 md:order-2 md:w-full">
        <div className="aspect-square overflow-hidden rounded-full border-4 border-card shadow-[0_0_0_1px_#e5e7eb,0_18px_50px_rgba(24,33,43,0.08)]">
          <Image
            src={profile.photo || '/placeholder.svg'}
            alt="Portrait of Thumuganti Rithwik"
            width={560}
            height={560}
            priority
            className="size-full object-cover object-top"
          />
        </div>
        <a
          href="#contact"
          className="absolute right-0 bottom-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-primary shadow-sm hover:bg-secondary md:-right-3"
        >
          Open to internships <ExternalLink className="size-3" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
