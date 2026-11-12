import { About } from '@/components/about'
import { Certifications } from '@/components/certifications'
import { Contact } from '@/components/contact'
import { Education } from '@/components/education'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Skills } from '@/components/skills'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Education />
        <Certifications />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
