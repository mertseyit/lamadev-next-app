import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogBox = ({img, title, text, id}) => {
  return (
    <div className='flex mb-10 justify-between border border-white p-2 rounded-lg transition-all duration-200 cursor-pointer hover:shadow hover:shadow-white'>
        <Image src={img} alt='Blog Image' width={300} height={400}/>
        <div>
            <h2 className='pt-5 mb-3 pl-3 text-3xl  font-semibold capitalize'>{title}</h2>
            <p className='mt-3 pl-3 pt-5 text-gray-400 mb-5 capitalize'>{text}</p>
            <Link href={`/blog/${id}`} className='text-sm ml-5 underline p-1 hover:text-green-600 transition-all duration-200'>Read this blog</Link>
        </div>
    </div>
  )
}

export default BlogBox