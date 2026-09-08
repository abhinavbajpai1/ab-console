import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export function NotFound() {
  usePageTitle('404')

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-6xl font-bold text-console-muted">404</p>
      <h1 className="mt-4 font-mono text-lg font-semibold tracking-wide text-console-text">
        RESOURCE NOT FOUND
      </h1>
      <p className="mt-2 max-w-md text-sm text-console-muted">
        The requested resource does not exist in this console.
      </p>
      <Link
        to="/"
        className="mt-6 rounded bg-[#ff9900] px-4 py-2 text-sm font-semibold text-console-sidebar hover:bg-[#ec8800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9900]"
      >
        Return to Dashboard
      </Link>
    </div>
  )
}
