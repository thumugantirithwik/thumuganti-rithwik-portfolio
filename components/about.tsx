import { BadgeCheck, CodeXml, GraduationCap, MapPin } from 'lucide-react'
import type { ReactNode } from 'react'
import { Accent, SectionHeading } from '@/components/section-heading'
import { projects } from '@/lib/portfolio-data'

function Tile({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex min-h-32 flex-col justify-between gap-4 rounded-xl border border-border bg-card p-5">
      <span className="text-teal">{icon}</span>
      <div>{children}</div>
    </div>
  )
}

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="mx-auto w-full max-w-5xl px-5 py-16">
      <SectionHeading
        id="about-title"
        kicker="01 — A little about me"
        title={
          <>
            Curious by nature.
            <br />
            <Accent>Builder by choice.</Accent>
          </>
        }
        description="A few things that shape how I learn, work, and create."
      />

      <div className="grid gap-3 md:grid-cols-4 md:grid-rows-2">
        <article className="rounded-xl border border-border bg-card p-6 md:col-span-2 md:row-span-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-teal">The short version</p>
          <h3 className="mt-1 font-display text-lg font-semibold">{"Hi, I'm Rithwik."}</h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            I am a motivated and enthusiastic student with a strong interest in programming and web
            development. I have knowledge of C, C++, and Python, and I enjoy learning new technologies
            and solving coding problems. I am a quick learner, a good team player, and eager to gain
            practical experience through an internship while improving my technical and
            problem-solving skills.
          </p>
        </article>

        <Tile icon={<GraduationCap className="size-5" aria-hidden="true" />}>
          <h3 className="font-display text-base font-semibold">CS student</h3>
          <p className="text-xs text-muted-foreground">AI & Full Stack Development</p>
        </Tile>
        <Tile icon={<BadgeCheck className="size-5" aria-hidden="true" />}>
          <h3 className="font-display text-base font-semibold">Open to internships</h3>
          <p className="text-xs text-muted-foreground">Ready to learn & contribute</p>
        </Tile>
        <Tile icon={<CodeXml className="size-5" aria-hidden="true" />}>
          <p className="font-display text-4xl font-semibold leading-none text-primary">{projects.length}</p>
          <h3 className="mt-1 font-display text-base font-semibold">Projects built</h3>
        </Tile>
        <Tile icon={<MapPin className="size-5" aria-hidden="true" />}>
          <h3 className="font-display text-base font-semibold">Based in India</h3>
          <p className="text-xs text-muted-foreground">Building for the web</p>
        </Tile>
      </div>
    </section>
  )
}
