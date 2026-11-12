import type { ReactNode } from 'react'

type SectionHeadingProps = {
  id: string
  kicker: string
  title: ReactNode
  description?: string
  action?: ReactNode
}

export function SectionHeading({ id, kicker, title, description, action }: SectionHeadingProps) {
  return (
    <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-teal">
          {kicker}
        </p>
        <h2
          id={id}
          className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-5xl"
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground md:pb-1">{description}</p>
      ) : null}
      {action}
    </div>
  )
}

export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-primary">{children}</span>
}
