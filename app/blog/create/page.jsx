"use client"
import BlogCreateForm from '@/components/blog/BlogCreateForm'
import Circle from '@/components/loading/Circle'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function BlogCreate() {
    const session = useSession()
    const router = useRouter()
    useEffect(() => {
      if (session.status !== "authenticated") {
        router.push('/')
      }
    }, [session, router])
  
    if (session.status === "loading") {
      return (
        <Circle />
      )
    }
    return (
        <div className='w-full h-80vh'>
          <BlogCreateForm />
        </div>
    )
}
