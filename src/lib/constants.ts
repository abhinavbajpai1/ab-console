import type { NavGroup } from '../types'

export const navigationGroups: NavGroup[] = [
  {
    id: 'compute',
    label: 'Compute',
    items: [
      { label: 'Projects', path: '/projects' },
    ],
  },
  {
    id: 'independent',
    label: '',
    items: [
      { label: 'AI/ML Projects', path: '/ai-ml' },
      { label: 'MLOps', path: '/mlops' },
    ],
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    items: [
      { label: 'About', path: '/about' },
      { label: 'Experience', path: '/experience' },
      { label: 'Resume', path: '/resume' },
      { label: 'Skills', path: '/skills' },
      { label: 'Contact', path: '/contact' },
    ],
  },
]

export const SITE_CONFIG = {
  title: 'AB Console',
  subtitle: "Abhinav's Cloud & AI/ML Portfolio",
  region: 'ap-south-1 • India',
  lastDeploy: '2026-06-18 19:32',
  githubUrl: 'https://github.com',
  email: 'contact@example.com',
  linkedInUrl: 'https://linkedin.com',
}
