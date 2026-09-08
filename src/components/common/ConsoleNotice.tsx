import { Info } from 'lucide-react'

export function ConsoleNotice() {
  return (
    <aside
      className="flex gap-3 rounded border border-console-border bg-console-surface p-4 text-sm text-console-muted"
      role="note"
      aria-label="Console notice"
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-console-accent" aria-hidden="true" />
      <div>
        <p className="font-semibold text-console-text">Console Notice</p>
        <p className="mt-1">
          This console is a portfolio interface. Resources, metrics and logs shown here describe
          personal learning projects — they are not live production infrastructure, and this site is
          not affiliated with any cloud provider.
        </p>
      </div>
    </aside>
  )
}
