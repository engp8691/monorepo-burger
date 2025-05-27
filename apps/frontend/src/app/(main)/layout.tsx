// app/(main)/layout.tsx
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Sidebar</h2>
        <ul className="space-y-4">
          <li><a href="/dashboard" className="hover:text-gray-300">Dashboard</a></li>
          <li><a href="/about" className="hover:text-gray-300">About</a></li>
          {/* Add more links here */}
        </ul>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-800">My App</h1>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  )
}
