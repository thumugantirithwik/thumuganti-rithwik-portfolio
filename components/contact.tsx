import { Mail, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { ContactForm } from '@/components/contact-form'
import { Accent, SectionHeading } from '@/components/section-heading'
import { profile } from '@/lib/portfolio-data'

function Detail({ href, icon, children, external }: { href: string; icon: ReactNode; children: ReactNode; external?: boolean }) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
      >
        <span className="flex size-9 items-center justify-center rounded-lg border border-border text-teal group-hover:bg-accent">
          {icon}
        </span>
        {children}
      </a>
    </li>
  )
}

export function Contact() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="mx-auto w-full max-w-5xl px-5 py-16">
      <SectionHeading
        id="contact-title"
        kicker="06 — Your turn"
        title={
          <>
            {"Let's build something "}
            <Accent>together.</Accent>
          </>
        }
      />

      <div className="grid gap-3.5 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-display text-lg font-semibold">Have a project in mind?</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Have an opportunity, a question, or just want to say hello? My inbox is open.
          </p>
          <ul className="mt-6 flex flex-col gap-4">
            <Detail href={`mailto:${profile.email}`} icon={<Mail className="size-4" aria-hidden="true" />}>
              {profile.email}
            </Detail>
            <Detail href={profile.phoneHref} icon={<Phone className="size-4" aria-hidden="true" />}>
              {profile.phoneDisplay}
            </Detail>
            <Detail href={profile.github} external icon={<GithubIcon className="size-4" />}>
              {profile.githubLabel}
            </Detail>
            <Detail href={profile.linkedin} external icon={<LinkedinIcon className="size-4" />}>
              Connect on LinkedIn
            </Detail>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
