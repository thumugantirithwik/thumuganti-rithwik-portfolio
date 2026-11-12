import { Calendar, ShieldCheck, UserCheck } from 'lucide-react'
import { Accent, SectionHeading } from '@/components/section-heading'
import { certifications } from '@/lib/portfolio-data'

const icons = {
  shield: ShieldCheck,
  analyst: UserCheck,
}

export function Certifications() {
  return (
    <section
      aria-labelledby="certifications-title"
      id="certifications"
      className="mx-auto w-full max-w-5xl px-5 py-16"
    >
      <SectionHeading
        id="certifications-title"
        kicker="03 — Learning & credentials"
        title={
          <>
            Certifications <Accent>earned.</Accent>
          </>
        }
        description="Practical cybersecurity experience through industry job simulations."
      />

      <div className="grid gap-3.5 md:grid-cols-2">
        {certifications.map((cert) => {
          const Icon = icons[cert.icon]
          return (
            <article
              key={cert.credentialId}
              className="flex gap-4 rounded-xl border border-border bg-card p-5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-teal">
                  {cert.provider}
                </p>
                <h3 className="mt-1 font-display text-base font-semibold">{cert.title}</h3>
                <p className="text-xs text-muted-foreground">{cert.provider}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] text-faint">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3" aria-hidden="true" />
                    {cert.issued}
                  </span>
                  <span className="break-all">
                    Credential ID <code>{cert.credentialId}</code>
                  </span>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
