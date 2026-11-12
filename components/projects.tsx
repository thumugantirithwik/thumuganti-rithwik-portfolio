import { ArrowRight, ExternalLink, Hand, Sprout } from 'lucide-react'
import { Accent, SectionHeading } from '@/components/section-heading'
import { profile, projects } from '@/lib/portfolio-data'

const icons = { hand: Hand, sprout: Sprout }

export function Projects() {
  return (
    <section aria-labelledby="projects-title" id="projects" className="mx-auto w-full max-w-5xl px-5 py-16">
      <SectionHeading
        id="projects-title"
        kicker="04 — Selected work"
        title={
          <>
            {"Things I've "}
            <Accent>made.</Accent>
          </>
        }
        action={
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-fit items-center gap-2 rounded-lg border border-border bg-card px-4 text-[13px] font-medium hover:bg-secondary"
          >
            More on GitHub <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        }
      />

      <div className="grid gap-3.5 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = icons[project.icon]
          return (
            <article
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-[#9aafbd]"
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                <span>Project {String(index + 1).padStart(2, '0')}</span>
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </div>
              <div className="my-4 flex h-24 items-center justify-center rounded-lg border border-[#e5e9ed] bg-muted">
                <Icon className="size-8 text-teal" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between pt-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  {project.category}
                </span>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium hover:text-primary"
                >
                  GitHub <ArrowRight className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">{`repository for ${project.title}`}</span>
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
