export type ResourceStatus =
  | 'Operational'
  | 'Building'
  | 'Archived'
  | 'Experimental'
  | 'In Progress'

export type ActivityLevel = 'INFO' | 'SUCCESS' | 'WARN' | 'ERROR'

export interface Project {
  id: string
  name: string
  category: string
  status: ResourceStatus
  description: string
  technologies: string[]
  resourceId: string
  githubUrl?: string
  demoUrl?: string
  architectureUrl?: string
  featured?: boolean
  overview?: string
  problem?: string
  solution?: string
  implementation?: string
  aiml?: string
  results?: string
  lessonsLearned?: string
}

export interface Skill {
  id: string
  name: string
  category: string
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  evidence: string[]
}

export interface Certification {
  id: string
  name: string
  provider: string
  status: ResourceStatus
  issueDate: string
  credentialUrl?: string
  skills: string[]
}

export interface Activity {
  id: string
  timestamp: string
  level: ActivityLevel
  message: string
  resourceId?: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  summary: string
  responsibilities: string[]
  technologies: string[]
}

export interface NavItem {
  label: string
  path: string
}

export interface NavGroup {
  id: string
  label: string
  items: NavItem[]
}

export interface SearchResult {
  id: string
  category: 'PROJECT' | 'TECHNOLOGY' | 'SKILL' | 'CERTIFICATION' | 'NAVIGATION'
  title: string
  description?: string
  path: string
}
