import { experience } from '../data/experience'
import { skills } from '../data/skills'
import { usePageTitle } from '../hooks/usePageTitle'
import { Breadcrumb } from '../components/navigation/Breadcrumb'
import { PageHeader } from '../components/common/PageHeader'
import { SectionCard } from '../components/common/SectionCard'
import { TechnologyTag } from '../components/common/TechnologyTag'
import { ExternalLink } from '../components/common/ExternalLink'
import { SITE_CONFIG } from '../lib/constants'
import { LinkedInIcon } from '../components/common/Icons'
import { Mail } from 'lucide-react'

export function About() {
  usePageTitle('About')
  return (
    <div>
      <Breadcrumb items={[{ label: 'Portfolio' }, { label: 'About' }]} />
      <PageHeader title="About" description="Professional technical profile." />
      <SectionCard title="Profile">
        <p className="text-sm leading-relaxed text-console-text">
          Abhinav Bajpai is pursuing an MCA in Artificial Intelligence &amp; Machine Learning. Focus
          areas include cloud infrastructure, AI/ML applications, software development, and building
          practical technical projects that integrate machine learning with modern software engineering
          practices.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-console-text">
          This console portfolio demonstrates cloud-native UX thinking — every project is presented
          as an infrastructure resource with metadata, status indicators and operational context
          rather than traditional portfolio cards.
        </p>
      </SectionCard>
    </div>
  )
}

export function ExperiencePage() {
  usePageTitle('Experience')

  return (
    <div>
      <Breadcrumb items={[{ label: 'Portfolio' }, { label: 'Experience' }]} />
      <PageHeader title="Experience" description="Professional and academic experience timeline." />
      <div className="space-y-4">
        {experience.map((exp) => (
          <article
            key={exp.id}
            className="rounded border border-console-border bg-console-surface p-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="font-mono text-xs text-console-muted">exp-{exp.id}</p>
                <h2 className="mt-1 text-base font-semibold text-console-text">{exp.role}</h2>
                <p className="text-sm text-console-muted">
                  {exp.company} · {exp.location}
                </p>
              </div>
              <span className="rounded bg-console-bg px-2 py-1 font-mono text-xs text-console-muted">
                {exp.period}
              </span>
            </div>
            <p className="mt-3 text-sm text-console-text">{exp.summary}</p>
            <ul className="mt-3 list-inside list-disc text-sm text-console-muted">
              {exp.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {exp.technologies.map((tech) => (
                <TechnologyTag key={tech} name={tech} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export function Resume() {
  usePageTitle('Resume')
  return (
    <div>
      <Breadcrumb items={[{ label: 'Portfolio' }, { label: 'Resume' }]} />
      <PageHeader title="Resume" description="Download professional resume." />
      <SectionCard title="Resume Resource">
        <p className="text-sm text-console-text">
          Download Abhinav Bajpai&apos;s resume in PDF format.
        </p>
        <a
          href="/resume.pdf"
          download
          className="mt-4 inline-flex rounded bg-[#ff9900] px-4 py-2 text-sm font-semibold text-console-sidebar hover:bg-[#ec8800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9900]"
        >
          Download Resume (PDF)
        </a>
        <p className="mt-3 text-xs text-console-muted">
          Place your resume PDF at public/resume.pdf to enable download.
        </p>
      </SectionCard>
    </div>
  )
}

export function Skills() {
  usePageTitle('Skills')
  return (
    <div>
      <Breadcrumb items={[{ label: 'Portfolio' }, { label: 'Skills' }]} />
      <PageHeader title="Skills" description="Technical skills and proficiency levels." />
      <SectionCard title="Skills Inventory">
        <div className="space-y-4">
          {skills.map((skill) => (
            <article
              key={skill.id}
              className="rounded border border-console-border bg-console-bg p-4"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-console-muted">
                    {skill.category}
                  </p>
                  <h2 className="mt-1 text-base font-semibold text-console-text">{skill.name}</h2>
                </div>
                <span className="rounded bg-console-surface px-2 py-1 font-mono text-xs text-console-muted">
                  {skill.proficiency}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {skill.evidence.map((evidence) => (
                  <TechnologyTag key={evidence} name={evidence} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}

export function Contact() {
  usePageTitle('Contact')
  return (
    <div>
      <Breadcrumb items={[{ label: 'Portfolio' }, { label: 'Contact' }]} />
      <PageHeader title="Contact" description="Professional contact information." />
      <SectionCard title="Contact Resources">
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-console-muted">Email</dt>
            <dd className="mt-1">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-2 text-[#0073bb] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0073bb]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {SITE_CONFIG.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-console-muted">GitHub</dt>
            <dd className="mt-1">
              <ExternalLink href={SITE_CONFIG.githubUrl}>github.com</ExternalLink>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-console-muted">LinkedIn</dt>
            <dd className="mt-1">
              <a
                href={SITE_CONFIG.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#0073bb] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0073bb]"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </dd>
          </div>
        </dl>
      </SectionCard>
    </div>
  )
}
