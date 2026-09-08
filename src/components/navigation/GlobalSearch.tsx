import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { search } from '../../lib/search'
import type { SearchResult } from '../../types'

interface GlobalSearchProps {
  inputRef?: React.RefObject<HTMLInputElement | null>
}

const categoryLabels: Record<SearchResult['category'], string> = {
  PROJECT: 'PROJECT',
  TECHNOLOGY: 'TECHNOLOGY',
  SKILL: 'SKILL',
  CERTIFICATION: 'CERTIFICATION',
  NAVIGATION: 'NAVIGATION',
}

export function GlobalSearch({ inputRef: externalRef }: GlobalSearchProps) {
  const navigate = useNavigate()
  const internalRef = useRef<HTMLInputElement>(null)
  const inputRef = externalRef ?? internalRef
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const results = search(query)
  const containerRef = useRef<HTMLDivElement>(null)

  const selectResult = useCallback(
    (result: SearchResult) => {
      navigate(result.path)
      setQuery('')
      setIsOpen(false)
      inputRef.current?.blur()
    },
    [navigate, inputRef],
  )

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && e.key !== 'Escape') setIsOpen(true)

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && results[activeIndex]) {
      e.preventDefault()
      selectResult(results[activeIndex])
    } else if (e.key === 'Escape') {
      setIsOpen(false)
      inputRef.current?.blur()
    }
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl">
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-console-muted"
          aria-hidden="true"
        />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search resources, projects, skills..."
          className="w-full rounded border border-console-border bg-console-surface py-2 pl-10 pr-20 text-sm text-console-text placeholder:text-console-muted focus:border-[#0073bb] focus:outline-none focus:ring-1 focus:ring-[#0073bb]"
          aria-label="Search resources, projects, skills"
          aria-expanded={isOpen}
          aria-controls="search-results"
          aria-autocomplete="list"
          role="combobox"
        />
        <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded border border-console-border bg-console-bg px-1.5 py-0.5 font-mono text-[10px] text-console-muted sm:inline">
          /
        </kbd>
      </div>

      {isOpen && (
        <div
          id="search-results"
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-1 max-h-80 overflow-y-auto rounded border border-console-border bg-console-surface shadow-lg"
        >
          {query.trim() === '' ? (
            <p className="px-4 py-3 text-sm text-console-muted">
              Search projects, technologies, skills, certifications and navigation.
            </p>
          ) : results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-console-muted">No results found.</p>
          ) : (
            results.map((result, index) => (
              <button
                key={result.id}
                type="button"
                role="option"
                aria-selected={index === activeIndex}
                onClick={() => selectResult(result)}
                className={`flex w-full flex-col gap-0.5 border-b border-console-border px-4 py-2.5 text-left last:border-b-0 hover:bg-console-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0073bb] ${
                  index === activeIndex ? 'bg-console-bg' : ''
                }`}
              >
                <span className="text-[10px] font-semibold tracking-wide text-console-muted">
                  {categoryLabels[result.category]}
                </span>
                <span className="text-sm font-medium text-console-text">{result.title}</span>
                {result.description && (
                  <span className="text-xs text-console-muted">{result.description}</span>
                )}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  )
}
