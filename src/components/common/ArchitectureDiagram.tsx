import { projects } from '../../data/projects'

export function ArchitectureDiagram({ projectName }: { projectName: string }) {
  const project = projects.find((p) => p.name === projectName)
  return (
    <div className="rounded border border-dashed border-console-border bg-console-bg p-8 text-center">
      <p className="font-mono text-sm text-console-muted">
        [{project?.resourceId ?? 'diagram'}] Architecture visualization
      </p>
      <p className="mt-2 text-xs text-console-muted">{projectName}</p>
    </div>
  )
}
