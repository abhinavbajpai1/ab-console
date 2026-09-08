import { LayoutDashboard, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navigationGroups } from '../../lib/constants'
import { useSidebar } from '../../contexts/SidebarContext'
import { SidebarGroup } from '../navigation/SidebarGroup'

export function Sidebar() {
  const { isMobileOpen, closeMobile } = useSidebar()

  const sidebarContent = (
    <>
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
        <div
          className="flex h-9 w-9 items-center justify-center rounded bg-console-accent text-sm font-bold text-console-sidebar"
          aria-hidden="true"
        >
          AB
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Console</p>
          <p className="text-[10px] text-gray-400">Cloud & AI/ML Portfolio</p>
        </div>
        <button
          type="button"
          onClick={closeMobile}
          className="ml-auto rounded p-1 text-gray-400 hover:text-white lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-console-accent"
          aria-label="Close navigation menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-3" aria-label="Main navigation">
        <NavLink
          to="/"
          end
          onClick={closeMobile}
          className={({ isActive }) =>
            `mb-3 flex items-center gap-2 rounded px-3 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-console-accent ${
              isActive
                ? 'bg-console-sidebar-hover text-white font-medium'
                : 'text-gray-300 hover:bg-console-sidebar-hover hover:text-white'
            }`
          }
        >
          <LayoutDashboard className="h-4 w-4" aria-hidden="true" />
          Dashboard
        </NavLink>

        {navigationGroups.map((group) => (
          <SidebarGroup key={group.id} group={group} />
        ))}
      </nav>
    </>
  )

  return (
    <>
      {isMobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeMobile}
          aria-label="Close navigation overlay"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-console-sidebar transition-transform duration-200 lg:static lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Sidebar"
      >
        {sidebarContent}
      </aside>
    </>
  )
}
