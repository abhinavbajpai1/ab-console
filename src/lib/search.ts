import { certifications } from '../data/certifications'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import { navigationGroups } from './constants'
import type { SearchResult } from '../types'

function normalize(text: string): string {
  return text.toLowerCase().trim()
}

function tokenize(text: string): string[] {
  return normalize(text).split(/\s+/).filter(Boolean)
}

function scoreMatch(query: string, title: string, description?: string): number {
  const q = normalize(query)
  const t = normalize(title)
  if (t === q) return 100
  if (t.startsWith(q)) return 80
  if (t.includes(q)) return 60
  if (description && normalize(description).includes(q)) return 40
  const queryTokens = tokenize(q)
  const titleTokens = tokenize(title)
  const overlap = queryTokens.filter((qt) => titleTokens.some((tt) => tt.includes(qt) || qt.includes(tt)))
  return overlap.length * 15
}

export function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = []

  for (const project of projects) {
    results.push({
      id: `project-${project.id}`,
      category: 'PROJECT',
      title: project.name,
      description: project.description,
      path: `/projects/${project.id}`,
    })
    for (const tech of project.technologies) {
      results.push({
        id: `tech-${project.id}-${tech}`,
        category: 'TECHNOLOGY',
        title: tech,
        description: `Used in ${project.name}`,
        path: `/projects/${project.id}`,
      })
    }
  }

  for (const skill of skills) {
    results.push({
      id: `skill-${skill.id}`,
      category: 'SKILL',
      title: skill.name,
      description: `${skill.category} — ${skill.proficiency}`,
      path: '/projects',
    })
  }

  for (const cert of certifications) {
    results.push({
      id: `cert-${cert.id}`,
      category: 'CERTIFICATION',
      title: cert.name,
      description: cert.provider,
      path: '/certifications',
    })
  }

  for (const group of navigationGroups) {
    for (const item of group.items) {
      results.push({
        id: `nav-${item.path}`,
        category: 'NAVIGATION',
        title: item.label,
        description: group.label || 'Navigation',
        path: item.path,
      })
    }
  }

  return results
}

const searchIndex = buildSearchIndex()

export function search(query: string, limit = 12): SearchResult[] {
  if (!query.trim()) return []

  const seen = new Set<string>()
  const scored = searchIndex
    .map((item) => ({
      item,
      score: scoreMatch(query, item.title, item.description),
    }))
    .filter(({ score, item }) => {
      if (score <= 0) return false
      const key = `${item.category}-${item.title}-${item.path}`
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item)

  return scored
}
