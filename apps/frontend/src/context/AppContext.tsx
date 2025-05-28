// src/context/AppContext.tsx
'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type User = {
    username: string
    password: string
}
type AppContextType = {
    user: User | null
    setUser: (user: User | null) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppContextProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('useAppContext must be used within AppContextProvider')
    }
    return context
}
