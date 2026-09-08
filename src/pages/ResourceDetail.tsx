import { Link, useParams } from 'react-router-dom'
import { GitHubIcon } from '../components/common/Icons'
import { getProjectById } from '../data/projects'
import { usePageTitle } from '../hooks/usePageTitle'
import { Breadcrumb } from '../components/navigation/Breadcrumb'
import { ExternalLink } from '../components/common/ExternalLink'
import { SectionCard } from '../components/common/SectionCard'
import { StatusBadge } from '../components/common/StatusBadge'
import { TechnologyTag } from '../components/common/TechnologyTag'
import { NotFound } from './NotFound'

function DetailSection({ title, content }: { title: string; content?: string }) {
  if (!content) return null
  return (
    <SectionCard title={title}>
      <p className="text-sm leading-relaxed text-console-text">{content}</p>
    </SectionCard>
  )
}

export function ResourceDetail() {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : undefined
  usePageTitle(project?.name ?? 'Resource')

  if (!project) return <NotFound />

  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: 'Projects', path: '/projects' },
          { label: project.name },
        ]}
      />

      <header className="rounded border border-console-border bg-console-surface p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-console-muted">Resource</p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-bold text-console-text">{project.name}</h1>
          <StatusBadge status={project.status} />
        </div>
        <p className="mt-3 font-mono text-sm text-console-muted">
          <span className="text-xs uppercase tracking-wider">Resource ID: </span>
          {project.resourceId}
        </p>
      </header>

      <DetailSection title="Overview" content={project.overview ?? project.description} />

      <SectionCard title="Architecture">
        <div className="rounded border border-dashed border-console-border bg-console-bg p-8 text-center">
          <p className="text-sm text-console-muted">
            Architecture diagram placeholder — {project.name}
          </p>
          <p className="mt-2 font-mono text-xs text-console-muted">
            {project.architectureUrl ? (
              <ExternalLink href={project.architectureUrl}>View diagram</ExternalLink>
            ) : (
              'Diagram available in project repository'
            )}
          </p>
        </div>
      </SectionCard>

      <SectionCard title="Technology Stack">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechnologyTag key={tech} name={tech} />
          ))}
        </div>
      </SectionCard>

      <DetailSection title="Implementation" content={project.implementation} />
      <DetailSection title="AI / ML" content={project.aiml} />
      <DetailSection title="Lessons Learned" content={project.lessonsLearned} />

      <div className="flex flex-wrap gap-3">
        {project.githubUrl && (
          <ExternalLink href={project.githubUrl}>
            <span className="inline-flex items-center gap-2 rounded bg-console-sidebar px-4 py-2 text-sm font-medium text-white hover:bg-console-sidebar-hover">
              <GitHubIcon className="h-4 w-4" />
              GitHub Repository
            </span>
          </ExternalLink>
        )}
        {project.demoUrl && (
          <ExternalLink href={project.demoUrl}>
            <span className="inline-flex items-center gap-2 rounded border border-console-border bg-console-bg px-4 py-2 text-sm font-medium text-console-text hover:bg-gray-100">
              Live Demo
            </span>
          </ExternalLink>
        )}
        <Link
          to="/projects"
          className="rounded border border-console-border px-4 py-2 text-sm font-medium text-console-text hover:bg-console-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0073bb]"
        >
          Back to inventory
        </Link>
      </div>
    </div>
  )
}
