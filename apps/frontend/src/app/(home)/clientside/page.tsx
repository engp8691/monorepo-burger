// app/some/page.tsx
'use client'

import { useEffect } from 'react'

export default function ClientPage() {
  useEffect(() => {
    console.log('Runs in browser')
  }, [])

  return <h1>This is a client component</h1>
}
