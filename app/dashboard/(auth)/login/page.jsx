"use client"
import LoginBtn from '@/components/auth/LoginBtn'
import { UserContext } from '@/components/context/UserContext';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react'

export default function Login() {
  const { status, data } = useSession()
  const {getUser} = useContext(UserContext)
  const router = useRouter()

  useEffect(() => {
    if (status === "authenticated") {
      (
        async () => {
          await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            body: JSON.stringify({
              email: data.user?.email,
              name: data.user?.name,
              profilePicture: data.user?.image
            })
          })
          await getUser()
        }
        )()
        router.push('/dashboard')
      }
  }, [status, router, data])

  if (status === "unauthenticated") {
    return (
      <div className='flex w-full h-80vh justify-center items-center'>
        <LoginBtn />
      </div>
    )
  } else if (status === "loading") {
    return (
      <div>Loading....</div>
    )
  } else {
    return (
      <div>Redirecting Home page</div>
    )
  }
}
