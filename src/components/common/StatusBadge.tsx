import type { ResourceStatus } from '../../types'

const statusConfig: Record<ResourceStatus, { dot: string; bg: string; text: string }> = {
  Operational: { dot: 'bg-[var(--color-status-operational)]', bg: 'bg-green-50', text: 'text-green-800' },
  Building: { dot: 'bg-[var(--color-status-building)]', bg: 'bg-blue-50', text: 'text-blue-800' },
  Archived: { dot: 'bg-[var(--color-status-archived)]', bg: 'bg-gray-100', text: 'text-gray-700' },
  Experimental: { dot: 'bg-[var(--color-status-experimental)]', bg: 'bg-purple-50', text: 'text-purple-800' },
  'In Progress': { dot: 'bg-[var(--color-status-progress)]', bg: 'bg-amber-50', text: 'text-amber-800' },
}

interface StatusBadgeProps {
  status: ResourceStatus
  className?: string
}

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const config = statusConfig[status]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-xs font-medium ${config.bg} ${config.text} ${className}`}
      role="status"
      aria-label={`Status: ${status}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} aria-hidden="true" />
      {status}
    </span>
  )
}

export function SystemStatusIndicator({ operational = true }: { operational?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-green-700" role="status">
      <span className="h-2 w-2 rounded-full bg-[var(--color-status-operational)]" aria-hidden="true" />
      {operational ? 'ALL SYSTEMS OPERATIONAL' : 'DEGRADED'}
    </span>
  )
}
