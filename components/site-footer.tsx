import { ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border bg-card">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-faint sm:flex-row">
        <p>{`© ${new Date().getFullYear()} Thumuganti Rithwik · Made with curiosity.`}</p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="hover:text-foreground">
            <GithubIcon className="size-3.5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="hover:text-foreground">
            <LinkedinIcon className="size-3.5" />
          </a>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-foreground">
            Back to top <ArrowUp className="size-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
