import React, { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header>
        <h2>My Site Header</h2>
      </header>
      <main>{children}</main>
      <footer>©2025 My site footer</footer>
    </div>
  )
}
