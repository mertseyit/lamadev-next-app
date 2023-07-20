import React from 'react'
import apps_img from '/public/apps.jpg'
import works_img from '/public/websites.jpg'
import illustration_img from '/public/illustration.png'
import Image from 'next/image'
import Link from 'next/link'
const list = [
  {
    name:"Illustirations",
    img:apps_img,
    link:"/portfolio/illustrations"
  },
  {
    name:"Websites",
    img:works_img,
    link:"/portfolio/websites"
  },
  {
    name:"Applications",
    img:illustration_img,
    link:"/portfolio/applications"
  }
]
export default function Portfolio() {
  return (
    <>
      <div className='w-full h-full mt-10'>
        <h1 className='text-4xl font-bold text-center text-green-600 '>Our Works</h1>
        <h3 className='text-3xl text-white font-semibold'>Choose a gallery</h3>
        <div className='mt-10 flex items-center gap-20 h-auto w-full'>
          {
            list.map(item => {
              return(
                <Link key={item.name} href={item.link}>
                  <div className={`cursor-pointer hover:-translate-y-4 transition-all duration-100 w-56 h-96 p-3 border bg group border-white rounded-lg relative`} >
                  <Image src={item.img} width={224} height={584} alt='work image' className=' absolute top-0 left-0 h-full rounded-lg p-1 -z-10'/>
                  <div className='absolute top-0 left-0 h-full w-full bg-black opacity-40 group-hover:opacity-80 transition-all duration-300 rounded-lg'></div>
                  <span className='absolute bottom-2 right-2 font-semibold text-3xl group-hover:text-green-600 transition-all duration-150'>{item.name}</span>
                </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
