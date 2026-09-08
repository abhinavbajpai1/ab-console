import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import { usePageTitle } from '../hooks/usePageTitle'
import { Breadcrumb } from '../components/navigation/Breadcrumb'
import { EmptyState } from '../components/common/EmptyState'
import { PageHeader } from '../components/common/PageHeader'
import { ResourceCard } from '../components/common/ResourceCard'

export function Projects() {
  usePageTitle('Projects')
  const [filter, setFilter] = useState('')

  const filtered = useMemo(() => {
    const q = filter.toLowerCase().trim()
    if (!q) return projects
    return projects.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q),
    )
  }, [filter])

  return (
    <div>
      <Breadcrumb items={[{ label: 'Compute' }, { label: 'Projects' }]} />
      <PageHeader
        title="Projects"
        description="Compute resource inventory — portfolio projects represented as cloud resources."
      />
      <div className="mb-4">
        <input
          type="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter resources..."
          className="w-full max-w-md rounded border border-console-border bg-console-surface px-3 py-2 text-sm focus:border-[#0073bb] focus:outline-none focus:ring-1 focus:ring-[#0073bb]"
          aria-label="Filter projects"
        />
      </div>
      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <ResourceCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}
