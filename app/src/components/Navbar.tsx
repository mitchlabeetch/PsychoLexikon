import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-2 py-4 sm:px-4 sm:py-6">
      <Link to="/" className="font-body text-[1rem] font-bold text-[#1a1a1a] no-underline sm:text-[1.25rem]">
        PsychoLexicon
      </Link>
    </nav>
  )
}
