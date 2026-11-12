import {
  Boxes,
  Clock,
  CodeXml,
  FileCode,
  Globe,
  Lightbulb,
  MessagesSquare,
  Network,
  Puzzle,
  Sun,
  Terminal,
  Users,
  Zap,
} from 'lucide-react'
import { Accent, SectionHeading } from '@/components/section-heading'
import { strengths, technicalSkills } from '@/lib/portfolio-data'

const skillIcons = {
  code: CodeXml,
  python: Terminal,
  html: FileCode,
  structure: Network,
  oop: Boxes,
  frontend: Puzzle,
  web: Globe,
}

const strengthIcons = {
  communication: MessagesSquare,
  time: Clock,
  positive: Sun,
  team: Users,
  problem: Lightbulb,
  quick: Zap,
}

export function Skills() {
  return (
    <section aria-labelledby="skills-title" id="skills" className="mx-auto w-full max-w-5xl px-5 py-16">
      <SectionHeading
        id="skills-title"
        kicker="05 — My toolkit"
        title={
          <>
            Skills in <Accent>motion.</Accent>
          </>
        }
        description="Learning by doing—and keeping the curiosity switched on."
      />

      <ul className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
        {technicalSkills.map((skill) => {
          const Icon = skillIcons[skill.icon]
          return (
            <li
              key={skill.label}
              className="flex min-h-12 items-center gap-3 rounded-lg border border-border bg-card px-3.5 py-3 text-[13px]"
            >
              <Icon className="size-4 shrink-0 text-teal" aria-hidden="true" />
              {skill.label}
            </li>
          )
        })}
      </ul>

      <h3 className="mt-8 mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-teal">
        The way I work
      </h3>
      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
        {strengths.map((strength) => {
          const Icon = strengthIcons[strength.icon]
          return (
            <li
              key={strength.label}
              className="flex min-h-36 flex-col items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 py-5 text-center text-xs text-muted-foreground"
            >
              <Icon className="size-4 text-teal" aria-hidden="true" />
              {strength.label}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
