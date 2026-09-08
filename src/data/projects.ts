import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'cloud-deployment-platform',
    name: 'Cloud Deployment Platform',
    category: 'Compute',
    status: 'Operational',
    description:
      'A cloud-native project demonstrating containerization, automation and deployment.',
    technologies: ['AWS', 'Docker', 'GitHub Actions', 'Linux', 'Nginx'],
    resourceId: 'proj-cloud-001',
    featured: true,
    overview:
      'Automated deployment platform using Docker, GitHub Actions and AWS. Demonstrates end-to-end CI/CD with containerized workloads and infrastructure automation.',
    implementation:
      'Multi-stage Docker builds, Nginx reverse proxy configuration, and GitHub Actions workflows for build, test and deploy stages.',
    lessonsLearned:
      'Image size optimization and layer caching significantly reduce build times. Infrastructure-as-code makes rollbacks predictable.',
  },
  {
    id: 'terraform-vpc-baseline',
    name: 'Terraform VPC Baseline',
    category: 'Networking',
    status: 'Operational',
    description:
      'Reusable infrastructure-as-code module for a secure network baseline.',
    technologies: ['Terraform', 'AWS', 'IAM', 'Networking'],
    resourceId: 'proj-infra-002',
    featured: true,
    overview:
      'Modular Terraform configuration for VPC, subnets, route tables, security groups and IAM baseline policies.',
    implementation:
      'Terraform modules with remote state, variable-driven environment configuration and output exports for downstream stacks.',
    lessonsLearned:
      'Module composition and consistent tagging simplify multi-environment deployments.',
  },
  {
    id: 'kubernetes-microservices-lab',
    name: 'Kubernetes Microservices Lab',
    category: 'DevOps',
    status: 'Building',
    description:
      'Multi-service workload running on a managed Kubernetes cluster.',
    technologies: ['Kubernetes', 'Helm', 'Docker', 'Linux'],
    resourceId: 'proj-k8s-003',
    featured: true,
    overview:
      'Lab environment for deploying microservices with Deployments, Services, ConfigMaps and Helm charts.',
    implementation:
      'Containerized services with Kubernetes manifests, Helm values per environment and horizontal pod autoscaling.',
    lessonsLearned:
      'Helm templating reduces manifest duplication. Resource limits prevent noisy-neighbor issues.',
  },
  {
    id: 'cicd-pipeline-toolkit',
    name: 'CI/CD Pipeline Toolkit',
    category: 'DevOps',
    status: 'Operational',
    description:
      'Reusable workflow templates for build, test, scan and deploy.',
    technologies: ['GitHub Actions', 'Docker', 'Trivy', 'Bash'],
    resourceId: 'proj-devops-004',
    featured: true,
    overview:
      'Collection of reusable GitHub Actions workflows for standardized build, security scan and deployment pipelines.',
    implementation:
      'Composite actions and workflow templates with configurable inputs for language, registry and deployment target.',
    lessonsLearned:
      'Reusable workflows enforce consistency across repositories and reduce pipeline maintenance.',
  },
  {
    id: 'ml-model-deployment-api',
    name: 'ML Model Deployment API',
    category: 'AI & ML',
    status: 'Operational',
    description:
      'A trained model served behind a containerized inference API.',
    technologies: ['Python', 'FastAPI', 'Docker', 'Machine Learning'],
    resourceId: 'proj-ml-007',
    featured: true,
    overview:
      'Containerized FastAPI inference service for ML model serving with CI/CD deployment pipeline.',
    implementation:
      'FastAPI endpoints, model serialization, Docker multi-stage build, health and prediction routes.',
    aiml: 'Machine learning model deployment with FastAPI, model serialization, and inference API endpoints.',
    lessonsLearned:
      'Separating training and serving pipelines improves reproducibility. Containerization simplifies MLOps handoff.',
  },
  {
    id: 'linux-server-automation',
    name: 'Linux Server Automation',
    category: 'DevOps',
    status: 'Operational',
    description:
      'Bash and Python scripts for server provisioning, monitoring and maintenance tasks.',
    technologies: ['Linux', 'Bash', 'Python', 'Systemd'],
    resourceId: 'proj-auto-005',
    overview:
      'Automation scripts for user management, log rotation, backup scheduling and system health checks.',
    implementation:
      'Idempotent Bash scripts with error handling, cron/systemd timers and structured logging.',
    lessonsLearned: 'Idempotent scripts and clear logging are essential for reliable automation.',
  },
  {
    id: 'portfolio-console',
    name: 'AB Console Portfolio',
    category: 'Compute',
    status: 'In Progress',
    description:
      'This cloud-console-style portfolio built with React, TypeScript and Vite.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    resourceId: 'proj-portfolio-006',
    overview:
      'Personal portfolio presented as a cloud management console to demonstrate cloud-native UX thinking.',
    implementation:
      'Component-driven React SPA with typed data modules, client-side search and responsive console layout.',
    lessonsLearned:
      'Treating a portfolio as a product reinforces infrastructure and UX discipline.',
  },
  {
    id: 'aws-s3-static-hosting',
    name: 'AWS S3 Static Hosting',
    category: 'Storage',
    status: 'Experimental',
    description:
      'Static website hosting pattern using S3, CloudFront and ACM.',
    technologies: ['AWS', 'S3', 'CloudFront', 'ACM', 'Route 53'],
    resourceId: 'proj-storage-008',
    overview:
      'Infrastructure pattern for hosting static SPAs with CDN, TLS and DNS configuration.',
    implementation:
      'S3 bucket policy, CloudFront distribution, ACM certificate and Route 53 alias records.',
    lessonsLearned:
      'CloudFront caching strategies affect SPA routing — configure error pages for client-side routes.',
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
