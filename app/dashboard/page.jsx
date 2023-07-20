"use client"
import { UserContext } from '@/components/context/UserContext'
import Circle from '@/components/loading/Circle'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { FaBookmark, FaHeart, FaPlus } from 'react-icons/fa'

export default function Dahsboard() {
  const session = useSession()
  const router = useRouter()
  const [userInfo, setUserInfo] = useState({})
  const { user, getUser } = useContext(UserContext)


  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push('/')
    }
  }, [session, router])


  if (session.status === "loading") {
    return (
      <Circle />
    )
  }
  //TODO:Buradaki işlem render sırasında hata almamak için yapıldı
  if (session.status === "unauthenticated") {
    return <span className='w-full text-center mt-4'>Unauthorized</span>
  } else {
    return (
      <>
        <div className='mt-10 flex justify-between '>
          <div>
            <h1 className='text-5xl font-bold  mr-auto'>{user ? "Hi ! " + user.user[0].name : "Loading..."}</h1>
            <div className='mt-14 h-12 w-12 flex relative  group hover:w-64 items-center bg-green-600 p-2 rounded-full transition-all duration-200 overflow-hidden'>
              <Link href={'/blog/create'} className='z-20 absolute top-3 left-3 flex justify-between w-full overflow-hidden'>
                <FaPlus className='text-2xl' />
              </Link>
              <span className='-translate-x-11 group-hover:translate-x-20 opacity-0 group-hover:opacity-100 transition-all duration-300 text-lf font-bold'>Share A Blog</span>
            </div>
          </div>
          <div className='h-auto w-1/3 p-4 border border-white rounded-lg'>
            <h2 className='text-2xl font-semibold'>Your Statistic</h2>
            <div className='mt-3  w-full'>
              <div className='flex bg-slate-950 border border-slate-800 rounded-lg p-2 justify-between mb-2'>
                <span className='text-green-600 font-bold'>Blogs</span>
                <span>Unupdated</span>
              </div>
              <div className='flex bg-slate-950 border border-slate-800 rounded-lg p-2 justify-between mb-2'>
                <span className='text-green-600 font-bold'>The likes you get</span>
                <span>Unupdated</span>
              </div>
              <div className='flex bg-slate-950 border border-slate-800 rounded-lg p-2 justify-between mb-2'>
                <span className='text-green-600 font-bold'>Your saved posts</span>
                <span>{user ? user.user[0].saved : "Loading..."}</span>
              </div>
              <div className='flex bg-slate-950 border border-slate-800 rounded-lg p-2 justify-between mb-2'>
                <span className='text-green-600 font-bold'>Your liked post</span>
                <span>{user ? user.user[0].liked : "Loading..."}</span>
              </div>
            </div>
            <div className='flex w-full justify-evenly'>
              <Link className='text-2xl text-red-600' href={'/'}>
                <FaHeart />
              </Link>
              <Link className='text-2xl text-slate-400' href={'/'}>
                <FaBookmark />
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-20'>
          <h1 className='text-3xl font-bold text-green-600'>Blogs</h1>
          <div className='w-full h-auto mt-10 p-5 rounded-lg border border-slate-600'>
            {
              user ? (
                <>
                  <div className='grid grid-cols-4 gap-10'>
                    {
                      user.user[0].posts.length !== 0 ? (
                        <>
                          {
                            user.user[0].posts.map(post => (
                              <Link  key={post.id} href={`/dashboard/user-blog/read/${post.id}`}>
                                <div className='flex flex-col w-60 h-80 border border-white p-3 rounded-lg bg-slate-900 '>
                                <Image src="https://loremflickr.com/320/240/paris" alt='blog image' width={320} height={240} />
                                <h3 className='text-2xl font-bold p-1 capitalize border-b-2'>{post.title}</h3>
                                <p className='text-sm capitalize text-slate-300 mt-4'>{post.text.slice(0, 130)}...</p>
                              </div>
                              </Link>
                            ))
                          }
                        </>
                      ) : (
                        <p> You don&apos;t have any blogs yet</p>
                      )
                    }
                  </div>
                </>
              ) : ("Loading...")
            }
          </div>
          {/* ///TODO: blog resimlerinin url'i bu olacak */}
          {/* <Image src="https://loremflickr.com/320/240" alt='alksdf' width={200} height={300} /> */}
        </div>
      </>
    )
  }
}
