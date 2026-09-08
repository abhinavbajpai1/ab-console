import type { ReactNode } from 'react'

interface SectionCardProps {
  title: string
  children: ReactNode
  className?: string
}

export function SectionCard({ title, children, className = '' }: SectionCardProps) {
  return (
    <section className={`rounded border border-console-border bg-console-surface ${className}`}>
      <div className="border-b border-console-border px-4 py-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-console-muted">{title}</h2>
      </div>
      <div className="p-4">{children}</div>
    </section>
  )
}
