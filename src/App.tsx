import { RouterProvider } from 'react-router-dom'
import { SidebarProvider } from './contexts/SidebarContext'
import { router } from './app/routes'

export default function App() {
  return (
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  )
}
