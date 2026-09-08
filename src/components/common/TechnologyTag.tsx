interface TechnologyTagProps {
  name: string
}

export function TechnologyTag({ name }: TechnologyTagProps) {
  return (
    <span className="inline-block rounded border border-console-border bg-console-bg px-2 py-0.5 text-xs font-medium text-console-muted">
      {name}
    </span>
  )
}
