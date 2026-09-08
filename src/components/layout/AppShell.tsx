import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
import { ConsoleNotice } from '../common/ConsoleNotice'

export function AppShell() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />
        <main className="flex-1 overflow-x-hidden p-4 md:p-6" id="main-content">
          <Outlet />
        </main>
        <footer className="border-t border-console-border bg-console-surface p-4 md:px-6">
          <ConsoleNotice />
        </footer>
      </div>
    </div>
  )
}
