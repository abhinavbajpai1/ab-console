import { useRef, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { GitHubIcon } from '../common/Icons'
import { GlobalSearch } from '../navigation/GlobalSearch'
import { SITE_CONFIG } from '../../lib/constants'
import { useSidebar } from '../../contexts/SidebarContext'
import { ExternalLink } from '../common/ExternalLink'

export function TopBar() {
  const { toggleMobile } = useSidebar()
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA'

      if (e.key === '/' && !isInput && !e.ctrlKey && !e.metaKey) {
        e.preventDefault()
        searchRef.current?.focus()
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-console-border bg-console-surface px-4">
      <button
        type="button"
        onClick={toggleMobile}
        className="rounded p-2 text-console-muted hover:bg-console-bg hover:text-console-text lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0073bb]"
        aria-label="Open navigation menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="hidden shrink-0 lg:block">
        <span className="text-sm font-semibold text-console-text">{SITE_CONFIG.title}</span>
      </div>

      <div className="flex-1">
        <GlobalSearch inputRef={searchRef} />
      </div>

      <div className="hidden shrink-0 sm:block">
        <ExternalLink href={SITE_CONFIG.githubUrl}>
          <span className="inline-flex items-center gap-1.5 text-sm">
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </span>
        </ExternalLink>
      </div>
    </header>
  )
}
