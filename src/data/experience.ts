import type { Experience } from '../types'

export const experience: Experience[] = [
  {
    id: 'exp-mca',
    company: 'MCA Program',
    role: 'Student — AI/ML Specialization',
    period: '2024 — Present',
    location: 'India',
    summary:
      'Pursuing Master of Computer Applications with focus on Artificial Intelligence and Machine Learning, combining AI/ML coursework with cloud and DevOps practice.',
    responsibilities: [
      'Applied ML concepts to deployment and MLOps workflows',
      'Built containerized inference APIs for model serving',
      'Explored intersection of AI/ML and cloud infrastructure',
    ],
    technologies: ['Python', 'Machine Learning', 'Docker', 'FastAPI', 'MLOps'],
  },
  {
    id: 'exp-bca',
    company: 'BCA Program',
    role: 'Student — Computer Applications',
    period: '2021 — 2024',
    location: 'India',
    summary:
      'Completed Bachelor of Computer Applications with foundation in programming, software engineering and system design.',
    responsibilities: [
      'Developed software projects across multiple languages',
      'Studied data structures, algorithms and database systems',
      'Built web applications and automation scripts',
    ],
    technologies: ['JavaScript', 'Python', 'C', 'SQL', 'Web Development'],
  },
  {
    id: 'exp-self-study',
    company: 'Independent Learning',
    role: 'Cloud & DevOps Engineer in Progress',
    period: '2024 — Present',
    location: 'Remote',
    summary:
      'Self-directed learning in cloud engineering, DevOps automation, containerization, CI/CD and infrastructure as code.',
    responsibilities: [
      'Built portfolio projects demonstrating AWS, Docker, Kubernetes and Terraform',
      'Created reusable CI/CD pipeline templates with security scanning',
      'Automated Linux server administration with Bash and Python',
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Linux'],
  },
]
