import type { Activity } from '../types'

export const activities: Activity[] = [
  { id: 'a1', timestamp: '19:32:11', level: 'INFO', message: 'Deployment started for proj-cloud-001', resourceId: 'proj-cloud-001' },
  { id: 'a2', timestamp: '19:32:15', level: 'INFO', message: 'Build completed in 41s' },
  { id: 'a3', timestamp: '19:32:19', level: 'INFO', message: 'Docker image created: app:2026.06.1' },
  { id: 'a4', timestamp: '19:32:22', level: 'WARN', message: 'Image size above target budget (312MB)' },
  { id: 'a5', timestamp: '19:32:25', level: 'SUCCESS', message: 'Deployment completed — health checks passed', resourceId: 'proj-cloud-001' },
  { id: 'a6', timestamp: '19:41:04', level: 'INFO', message: 'Autoscaling evaluated: desired capacity 2' },
  { id: 'a7', timestamp: '20:15:33', level: 'INFO', message: 'Terraform plan completed for proj-infra-002', resourceId: 'proj-infra-002' },
  { id: 'a8', timestamp: '20:15:48', level: 'SUCCESS', message: 'Infrastructure apply completed — 12 resources changed' },
]
