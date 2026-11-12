'use client'

import { Loader2, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { profile } from '@/lib/portfolio-data'

const fieldClass =
  'w-full rounded-lg border border-input bg-card px-3.5 py-2.5 text-sm placeholder:text-faint focus:border-teal focus:outline-none focus:ring-3 focus:ring-teal/10'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'preparing' | 'ready'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\nReply to: ${email}`)

    setStatus('preparing')
    window.setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('ready')
    }, 500)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xs text-muted-foreground">
          Your name
        </label>
        <input id="name" name="name" required autoComplete="name" placeholder="Jane Smith" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs text-muted-foreground">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@example.com"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me a little about what you have in mind..."
          className={`${fieldClass} resize-y`}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'preparing'}
        className="mt-1 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-[#244f70] disabled:opacity-70"
      >
        {status === 'preparing' ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Preparing email…
          </>
        ) : (
          <>
            Send a message <Send className="size-4" aria-hidden="true" />
          </>
        )}
      </button>
      <p aria-live="polite" className="min-h-4 text-xs text-muted-foreground">
        {status === 'preparing' && 'Opening your email app…'}
        {status === 'ready' && 'Your message is ready in your email app.'}
      </p>
    </form>
  )
}
