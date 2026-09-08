import { Link } from 'react-router-dom'
import { GitHubIcon } from './Icons'
import type { Project } from '../../types'
import { StatusBadge } from './StatusBadge'
import { TechnologyTag } from './TechnologyTag'
import { ExternalLink } from './ExternalLink'

interface ResourceCardProps {
  project: Project
}

export function ResourceCard({ project }: ResourceCardProps) {
  return (
    <article className="flex flex-col rounded border border-console-border bg-console-surface transition-colors hover:border-[#0073bb]/40">
      <div className="flex items-start justify-between gap-2 border-b border-console-border px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-console-muted">
          {project.category}
        </span>
        <StatusBadge status={project.status} />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold text-console-text">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm text-console-muted">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <TechnologyTag key={tech} name={tech} />
          ))}
        </div>
        <p className="mt-4 font-mono text-xs text-console-muted">
          <span className="block text-[10px] uppercase tracking-wider">Resource ID</span>
          {project.resourceId}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link
            to={`/projects/${project.id}`}
            className="rounded border border-console-border bg-console-bg px-3 py-1.5 text-sm font-medium text-console-text hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0073bb]"
          >
            View Details
          </Link>
          {project.githubUrl && (
            <ExternalLink href={project.githubUrl}>
              <span className="inline-flex items-center gap-1">
                <GitHubIcon className="h-3.5 w-3.5" />
                GitHub
              </span>
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  )
}
