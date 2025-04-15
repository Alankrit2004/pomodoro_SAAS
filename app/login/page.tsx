'use client'

import { supabase } from '@/lib/supabaseClient'

export default function LoginPage() {
    const handleOAuthLogin = async (provider: 'google' | 'github') => {
        await supabase.auth.signInWithOAuth({ provider })
    }

    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-6">Login to Pomodoro</h1>
            <button
                onClick = {() => handleOAuthLogin('google')}
                className = "bg-red-500 text-white px-4 py-2 rounded mb-4"
                >
                    Sign in with Google
            </button>
            <button
                onClick={() => handleOAuthLogin('github')}
                className = "bg-gray-800 text-white px-4 py-2 rounded"
                >
                    Sign in with Github
            </button>
        </main>
    )
}