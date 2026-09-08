import type { Certification } from '../types'

export const certifications: Certification[] = [
  {
    id: 'devops-cert',
    name: 'DevOps Certification',
    provider: 'Training Provider',
    status: 'Operational',
    issueDate: '2026-05',
    skills: ['CI/CD', 'Docker', 'Linux', 'Automation'],
  },
  {
    id: 'javascript-cert',
    name: 'JavaScript Certification',
    provider: 'Training Provider',
    status: 'Operational',
    issueDate: '2026-05',
    skills: ['JavaScript', 'Web Development'],
  },
  {
    id: 'python-cert',
    name: 'Python Certification',
    provider: 'Training Provider',
    status: 'Operational',
    issueDate: '2024-10',
    skills: ['Python', 'Programming'],
  },
  {
    id: 'c-programming',
    name: 'Problem Solving Through Programming in C',
    provider: 'Academic',
    status: 'Operational',
    issueDate: '2025-01',
    skills: ['C', 'Algorithms', 'Problem Solving'],
  },
  {
    id: 'mca-aiml',
    name: 'MCA — Artificial Intelligence & Machine Learning',
    provider: 'University',
    status: 'In Progress',
    issueDate: '2024 — Present',
    skills: ['Machine Learning', 'AI', 'MLOps', 'Data Science'],
  },
  {
    id: 'bca',
    name: 'Bachelor of Computer Applications (BCA)',
    provider: 'University',
    status: 'Operational',
    issueDate: '2021 — 2024',
    skills: ['Software Engineering', 'Programming', 'Databases'],
  },
]
