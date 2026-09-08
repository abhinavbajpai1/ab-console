interface MetricCardProps {
  label: string
  value: string | number
  description?: string
}

export function MetricCard({ label, value, description }: MetricCardProps) {
  return (
    <div className="rounded border border-console-border bg-console-surface p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-console-muted">{label}</p>
      <p className="mt-1 text-2xl font-bold text-console-text">{value}</p>
      {description && <p className="mt-1 text-xs text-console-muted">{description}</p>}
    </div>
  )
}
