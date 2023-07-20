"use client"
import { signIn } from 'next-auth/react'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

const LoginBtn = () => {
  return (
   <>
    <button onClick={() =>signIn("google")} className='px-3 py-2 bg-red-500 flex justify-center items-center rounded-lg'>
        <FaGoogle className='text-3xl mr-3 p-1 border border-white rounded-full'/>
        <span className='font-semibold text-lg'>Login with your Google Account</span>
        
    </button>
   </>
  )
}

export default LoginBtn