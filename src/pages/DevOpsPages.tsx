import { usePageTitle } from '../hooks/usePageTitle'
import { Breadcrumb } from '../components/navigation/Breadcrumb'
import { PageHeader } from '../components/common/PageHeader'
import { SectionCard } from '../components/common/SectionCard'

interface PipelineStep {
  label: string
}

interface DevOpsPageProps {
  title: string
  breadcrumb: string[]
  description: string
  pipeline?: PipelineStep[]
  sections: { title: string; content: string }[]
}

function DevOpsPageContent({
  title,
  breadcrumb,
  description,
  pipeline,
  sections,
}: DevOpsPageProps) {
  usePageTitle(title)

  return (
    <div>
      <Breadcrumb
        items={breadcrumb.slice(0, -1).map((label) => ({ label })).concat({
          label: breadcrumb[breadcrumb.length - 1],
        })}
      />
      <PageHeader title={title} description={description} />

      {pipeline && (
        <SectionCard title="Pipeline Flow">
          <div className="flex flex-col items-center gap-2 py-4 sm:flex-row sm:flex-wrap sm:justify-center">
            {pipeline.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <span className="rounded border border-console-border bg-console-bg px-4 py-2 font-mono text-sm">
                  {step.label}
                </span>
                {i < pipeline.length - 1 && (
                  <span className="hidden text-console-muted sm:inline" aria-hidden="true">
                    ↓
                  </span>
                )}
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      <div className="mt-4 space-y-4">
        {sections.map((section) => (
          <SectionCard key={section.title} title={section.title}>
            <p className="text-sm leading-relaxed text-console-text">{section.content}</p>
          </SectionCard>
        ))}
      </div>
    </div>
  )
}

export function AiMl() {
  return (
    <DevOpsPageContent
      title="AI/ML Projects"
      breadcrumb={['AI/ML Projects']}
      description="AI and machine learning projects with cloud deployment context."
      sections={[
        { title: 'ML Model Deployment API', content: 'Containerized FastAPI inference service with automated CI/CD pipeline. Demonstrates model serving in production-like environment.' },
        { title: 'MCA AI/ML Coursework', content: 'Machine learning fundamentals, model training and evaluation integrated with MLOps deployment practices.' },
      ]}
    />
  )
}

export function Mlops() {
  return (
    <DevOpsPageContent
      title="MLOps"
      breadcrumb={['MLOps']}
      description="Model development, deployment concepts and AI applications."
      sections={[
        { title: 'Model Development', content: 'Machine learning model training, evaluation and validation using Python and ML frameworks.' },
        { title: 'Model Deployment', content: 'Containerization concepts for model serving, API endpoints and inference services.' },
        { title: 'AI Applications', content: 'Practical AI/ML projects integrating model development with software engineering practices.' },
        { title: 'Model Versioning', content: 'Tracking model versions, artifacts and metadata for reproducibility.' },
      ]}
    />
  )
}
