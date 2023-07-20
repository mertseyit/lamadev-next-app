"use client"
import { useSession } from 'next-auth/react'
import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useRouter } from 'next/navigation'

const BlogCreateForm = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [picture, setPicture] = useState('')
    const { user, getUser } = useContext(UserContext)
    const router = useRouter()
    const session = useSession()
    const handleSubmit = async (e) => {
        console.log("Createde User:::",user)
        e.preventDefault()
        await fetch('http://localhost:3000/api/create',{
            method:"POST",
            body:JSON.stringify({
                title,text, authorId:user.user[0].id
            }),
            cache:"no-cache"
        })
        getUser()
        router.push('/dashboard')
    }

  return (
    <div className='mt-10 flex h-full w-full justify-center items-center'>
        <form onSubmit={handleSubmit} className='w-1/2 h-full border border-white p-5 rounded-lg bg-slate-900'>
            <div className='flex flex-col mb-5'>
                <label htmlFor="title" className='font-bold text-lg text-slate-300 '>Enter A Blog Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name='title' id='title' className='bg-transparent focus:outline-none border border-white p-2 rounded-lg mt-3'/>
            </div>
            <div className='flex flex-col mb-5'>
                <label htmlFor="text" className='font-bold text-lg text-slate-300 '>Write Blog Here</label>
                <textarea value={text} onChange={(e) => setText(e.target.value)} type="text" rows={10} name='text' id='text' className='bg-transparent focus:outline-none border border-white p-2 rounded-lg mt-3'/>
            </div>
            <div className='flex flex-col mb-5'>
                <label htmlFor="picture" className='font-bold text-lg text-slate-300 '>Enter A Img URL <span className='text-xs'>(this section is work only for <a className='text-green-600 underline' href="loremflickr.com" target="_blank" rel="noopener noreferrer">loremflickr.com</a>)</span></label>
                <input value={picture} onChange={(e) => setPicture(e.target.value)} type="picture" name='picture' id='picture' className='bg-transparent px-2 focus:outline-none border border-white  rounded-lg mt-3'/>
            </div>
            <button className='text-lg font-semibold bg-transparent border rounded-lg text-green-600 hover:text-white border-green-600 p-2 hover:bg-green-600 w-1/2 transition-all duration-150'>Share</button>
        </form>
    </div>
  )
}

export default BlogCreateForm