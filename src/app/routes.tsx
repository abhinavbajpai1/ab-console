import { lazy, Suspense, type ComponentType } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'

const Dashboard = lazy(() => import('../pages/Dashboard').then((m) => ({ default: m.Dashboard })))
const Projects = lazy(() => import('../pages/Projects').then((m) => ({ default: m.Projects })))
const ResourceDetail = lazy(() => import('../pages/ResourceDetail').then((m) => ({ default: m.ResourceDetail })))
const NotFound = lazy(() => import('../pages/NotFound').then((m) => ({ default: m.NotFound })))
const About = lazy(() => import('../pages/PortfolioPages').then((m) => ({ default: m.About })))
const ExperiencePage = lazy(() => import('../pages/PortfolioPages').then((m) => ({ default: m.ExperiencePage })))
const Resume = lazy(() => import('../pages/PortfolioPages').then((m) => ({ default: m.Resume })))
const Skills = lazy(() => import('../pages/PortfolioPages').then((m) => ({ default: m.Skills })))
const Contact = lazy(() => import('../pages/PortfolioPages').then((m) => ({ default: m.Contact })))

const AiMl = lazy(() => import('../pages/DevOpsPages').then((m) => ({ default: m.AiMl })))
const Mlops = lazy(() => import('../pages/DevOpsPages').then((m) => ({ default: m.Mlops })))

function PageLoader() {
  return (
    <div className="flex items-center justify-center py-16">
      <div
        className="h-6 w-6 animate-spin rounded-full border-2 border-console-border border-t-[#ff9900]"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

function withSuspense(Component: ComponentType) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: withSuspense(Dashboard) },
      { path: 'projects', element: withSuspense(Projects) },
      { path: 'projects/:id', element: withSuspense(ResourceDetail) },
      { path: 'ai-ml', element: withSuspense(AiMl) },
      { path: 'mlops', element: withSuspense(Mlops) },
      { path: 'about', element: withSuspense(About) },
      { path: 'experience', element: withSuspense(ExperiencePage) },
      { path: 'resume', element: withSuspense(Resume) },
      { path: 'skills', element: withSuspense(Skills) },
      { path: 'contact', element: withSuspense(Contact) },
      { path: '*', element: withSuspense(NotFound) },
    ],
  },
])
