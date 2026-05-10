import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-8">
      <Link
        to="/"
        className="font-body font-bold text-[1.25rem] text-[#1a1a1a] no-underline"
      >
        PSYCHLERN
      </Link>
    </nav>
  )
}
