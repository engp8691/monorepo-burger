'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function About() {
  const pathname = usePathname()
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log('Navigated to:', pathname)
    console.log(99991555, divRef, divRef.current)
  }, [])

  return (
    <div ref={divRef}>
      <h1>About Page. It is client rendering as React</h1>
      <p>Open dev tools and look at the console to see route changes.</p>
      <Link href="/">Back to Home</Link>
    </div>
  )
}
