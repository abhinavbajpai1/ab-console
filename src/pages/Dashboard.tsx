import { Link } from 'react-router-dom'
import { GitHubIcon } from '../components/common/Icons'
import { activities } from '../data/activities'
import { certifications } from '../data/certifications'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import { getFeaturedProjects } from '../data/projects'
import { usePageTitle } from '../hooks/usePageTitle'
import { SITE_CONFIG } from '../lib/constants'
import { ActivityLog } from '../components/common/ActivityLog'
import { ConsoleNotice } from '../components/common/ConsoleNotice'
import { MetricCard } from '../components/common/MetricCard'
import { ResourceCard } from '../components/common/ResourceCard'
import { SectionCard } from '../components/common/SectionCard'
import { SystemStatusIndicator } from '../components/common/StatusBadge'
import { ExternalLink } from '../components/common/ExternalLink'

export function Dashboard() {
  usePageTitle('Dashboard')
  const featured = getFeaturedProjects()

  return (
    <div className="space-y-6">
      <section className="rounded border border-console-border bg-console-surface p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-console-accent">
          Build. Create. Deploy.
        </p>
        <h1 className="mt-2 text-2xl font-bold text-console-text md:text-3xl">
          Welcome to Abhinav&apos;s Cloud Console
        </h1>
        <p className="mt-2 text-sm text-console-muted">
          Cloud • AI/ML • Software Engineering
        </p>
        <p className="mt-3 max-w-3xl text-sm text-console-text">
          MCA in Artificial Intelligence &amp; Machine Learning. Building practical expertise in cloud
          infrastructure, AI/ML applications, and software development with a focus on creating
          impactful technical projects.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="rounded bg-[#ff9900] px-4 py-2 text-sm font-semibold text-console-sidebar hover:bg-[#ec8800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9900]"
          >
            Explore Projects
          </Link>
          <Link
            to="/resume"
            className="rounded border border-console-border bg-console-bg px-4 py-2 text-sm font-medium text-console-text hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0073bb]"
          >
            View Resume
          </Link>
          <ExternalLink href={SITE_CONFIG.githubUrl}>
            <span className="inline-flex items-center gap-1.5 rounded border border-console-border bg-console-bg px-4 py-2 text-sm font-medium text-console-text hover:bg-gray-100">
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </span>
          </ExternalLink>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-[1fr_2fr]">
        <SectionCard title="System Status">
          <p className="mb-4 text-xs text-console-muted" role="note">
            Portfolio demo metadata — not connected to live infrastructure.
          </p>
          <SystemStatusIndicator />
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-console-muted">Region</dt>
              <dd className="mt-0.5 font-mono text-console-text">{SITE_CONFIG.region}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-console-muted">Last Deploy</dt>
              <dd className="mt-0.5 font-mono text-console-text">{SITE_CONFIG.lastDeploy}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-console-muted">Open Incidents</dt>
              <dd className="mt-0.5 font-mono text-console-text">0</dd>
            </div>
          </dl>
        </SectionCard>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <MetricCard label="Projects" value={`${projects.length}+`} description="Deployed portfolio resources" />
          <MetricCard label="Technologies" value={`${skills.length}+`} description="Across cloud, AI/ML and dev" />
          <MetricCard label="Certifications" value={certifications.length} description="Completed and in progress" />
          <MetricCard label="AI/ML Projects" value="2+" description="Machine learning applications" />
        </div>
      </div>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-console-text">Featured Resources</h2>
            <p className="text-sm text-console-muted">
              Selected projects from this console&apos;s compute inventory.
            </p>
          </div>
          <Link
            to="/projects"
            className="text-sm font-medium text-[#0073bb] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0073bb]"
          >
            View all projects →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project) => (
            <ResourceCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <ActivityLog activities={activities.slice(0, 6)} />

      <ConsoleNotice />
    </div>
  )
}
