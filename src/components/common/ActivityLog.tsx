import type { Activity, ActivityLevel } from '../../types'
import { SectionCard } from './SectionCard'

const levelColors: Record<ActivityLevel, string> = {
  INFO: 'text-blue-400',
  SUCCESS: 'text-green-400',
  WARN: 'text-amber-400',
  ERROR: 'text-red-400',
}

interface ActivityLogProps {
  activities: Activity[]
  title?: string
  demo?: boolean
}

export function ActivityLog({ activities, title = 'Recent Activity', demo = true }: ActivityLogProps) {
  return (
    <SectionCard title={title}>
      {demo && (
        <p className="mb-3 text-xs text-console-muted" role="note">
          Portfolio demo activity — simulated log stream for illustration.
        </p>
      )}
      <div
        className="overflow-x-auto rounded bg-[#1a1a2e] p-4 font-mono text-xs leading-relaxed text-gray-300"
        role="log"
        aria-label="Activity log"
        aria-live="polite"
      >
        {activities.map((entry) => (
          <div key={entry.id} className="flex gap-3 whitespace-nowrap sm:whitespace-normal">
            <span className="text-gray-500">{entry.timestamp}</span>
            <span className={`w-16 shrink-0 font-semibold ${levelColors[entry.level]}`}>
              {entry.level}
            </span>
            <span>{entry.message}</span>
          </div>
        ))}
      </div>
    </SectionCard>
  )
}
