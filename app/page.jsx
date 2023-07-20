import Image from 'next/image'
import React from 'react'
import Hero from 'public/hero.png'

export default function Home() {
  return (
    <>
      <div className='flex lg:flex-row flex-col justify-between items-center lg:mt-2 mt-10'>
        <div>
          <h1 className='lg:text-6xl md:text-3xl text-2xl text-green-700 font-bold mb-5'>Share Your Blogs And Connect Other Users</h1>
          <p className='font-light lg:text-lg text-sm text-gray-400 mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab cupiditate sequi temporibus neque quidem exercitationem accusamus obcaecati voluptas ipsa, expedita voluptatum eveniet laudantium quia? Praesentium beatae, molestias.</p>
          <button className='lg:px-5 px-3 py-2 rounded-md lg:font-bold font-semibold lg:text-lg text-sm text-green-700 bg-transparent border border-green-700 hover:text-white hover:bg-green-700 transition-all duration-200'>See Our Works</button>
        </div>
        <Image src={Hero}  className='lg:w-1/2 w-full' alt='test' />
      </div>
    </>
  )
}
