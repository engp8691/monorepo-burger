'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function About() {
  const pathname = usePathname()

  useEffect(() => {
    console.log('Navigated to:', pathname)
  }, [pathname])

  return (
    <div>
      <h1>About Page</h1>
      <p>Open dev tools and look at the console to see route changes.</p>
      <Link href="/">Back to Home</Link>
    </div>
  )
}
