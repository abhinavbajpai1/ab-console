import { ChevronDown, ChevronRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useSidebar } from '../../contexts/SidebarContext'
import type { NavGroup } from '../../types'

interface SidebarGroupProps {
  group: NavGroup
}

export function SidebarGroup({ group }: SidebarGroupProps) {
  const { collapsedGroups, toggleGroup } = useSidebar()
  const isCollapsed = collapsedGroups.has(group.id)

  // If label is empty, render items as independent navigation without collapsible header
  if (!group.label) {
    return (
      <ul className="mb-1 space-y-0.5">
        {group.items.map((item) => (
          <li key={item.path + item.label}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block rounded px-3 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-console-accent ${
                  isActive
                    ? 'bg-console-sidebar-hover text-white font-medium'
                    : 'text-gray-300 hover:bg-console-sidebar-hover hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="mb-1">
      <button
        type="button"
        onClick={() => toggleGroup(group.id)}
        className="flex w-full items-center justify-between px-3 py-1.5 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-400 hover:text-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-console-accent"
        aria-expanded={!isCollapsed}
      >
        {group.label}
        {isCollapsed ? (
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
        )}
      </button>
      {!isCollapsed && (
        <ul className="mt-0.5 space-y-0.5">
          {group.items.map((item) => (
            <li key={item.path + item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block rounded px-3 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-console-accent ${
                    isActive
                      ? 'bg-console-sidebar-hover text-white font-medium'
                      : 'text-gray-300 hover:bg-console-sidebar-hover hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
