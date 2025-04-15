'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.push('/login')
      } else {
        setUser(session.user)
        setLoading(false)
      }
    }

    getSession()
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">
        Welcome, {user.user_metadata?.full_name || user.email}
      </h1>
      <p>You are logged in.</p>
    </main>
  )
}
