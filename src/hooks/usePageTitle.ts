import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function usePageTitle(title: string) {
  const location = useLocation()

  useEffect(() => {
    document.title = title === 'Dashboard'
      ? 'AB Console | Cloud & AI/ML Portfolio'
      : `AB Console | ${title}`
  }, [title, location.pathname])
}
