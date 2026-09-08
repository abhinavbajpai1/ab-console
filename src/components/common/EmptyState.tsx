import { Inbox } from 'lucide-react'

interface EmptyStateProps {
  title?: string
  message?: string
}

export function EmptyState({
  title = 'NO RESOURCES FOUND',
  message = 'Try changing your search or filter.',
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded border border-dashed border-console-border bg-console-surface px-6 py-16 text-center">
      <Inbox className="mb-4 h-10 w-10 text-console-muted" aria-hidden="true" />
      <h3 className="font-mono text-sm font-semibold tracking-wide text-console-text">{title}</h3>
      <p className="mt-2 text-sm text-console-muted">{message}</p>
    </div>
  )
}
