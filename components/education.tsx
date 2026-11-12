import { Accent, SectionHeading } from '@/components/section-heading'
import { education } from '@/lib/portfolio-data'

export function Education() {
  return (
    <section
      aria-labelledby="education-title"
      id="education"
      className="mx-auto w-full max-w-5xl px-5 py-16"
    >
      <SectionHeading
        id="education-title"
        kicker="02 — The learning path"
        title={
          <>
            Education <Accent>& growth.</Accent>
          </>
        }
        description="A foundation in computer science, with plenty more to explore."
      />

      <ol className="relative ml-1.5 border-l border-[#d8e0e5]">
        {education.map((item) => (
          <li key={item.title} className="relative pb-10 pl-9 last:pb-2">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-teal"
            />
            <p className="font-mono text-xs text-teal">{item.period}</p>
            <h3 className="mt-2 font-display text-lg font-medium">{item.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
