// app/login/layout.tsx
export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      {children}
    </main>
  )
}
