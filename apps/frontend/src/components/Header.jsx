
import Link from 'next/link'

const Header = () => {
  return (
    <nav className="p-4 bg-gray-100">
      <Link className="p-2 text-blue-600 hover:underline" href="/">Home</Link>
      <Link className="p-2 text-blue-600 hover:underline" href="/about">About</Link>
      <Link className="p-2 text-blue-600 hover:underline" href="/marketing">Marketing</Link>
      <Link className="p-2 text-blue-600 hover:underline" href="/ssgblog/1">SSG Blog</Link>
      <Link className="p-2 text-blue-600 hover:underline" href="/secret">Secret</Link>
      <Link className="p-2 text-blue-600 hover:underline" href="/ssrblog/6">SSR Blog</Link>
      <Link className="p-2 text-blue-600 hover:underline" href="/login">Login</Link>
    </nav>
  )
}

export default Header