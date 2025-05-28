'use client'

import { useAppContext } from "@/context/AppContext"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

export default function LoginPage() {
  const { user, setUser } = useAppContext()
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    let timeId: NodeJS.Timeout | undefined = undefined
    if (user) {
      timeId = setTimeout(() => router.push('/'), 10000)
    }

    return () => {
      if (timeId) {
        clearTimeout(timeId)
      }
    }
  }, [router, user])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 space-y-6">
        {
          user ? (<div>User is logged in. Click to go
            <button
              type="submit"
              className="w-half text-blue-700 py-0 pl-1 rounded-lg transition duration-200 cursor-pointer"
              onClick={() => {
                router.push('/')
              }}
            >
              home
            </button>.

          </div>) :
            (
              <>
                <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={usernameRef}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={passwordRef}
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 cursor-pointer"
                    onClick={(event) => {
                      event.preventDefault()
                      if (passwordRef.current && usernameRef.current) {
                        setUser({
                          username: usernameRef.current.value,
                          password: passwordRef.current.value
                        })
                      }
                      router.push('/')
                    }}
                  >
                    Sign In
                  </button>
                </form>
              </>)
        }
      </div>
    </div>
  )
}
