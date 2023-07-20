import Container from '@/components/category/Container'
import React from 'react'
import img1 from '/public/illustration.png'
import img2 from '/public/websites.jpg'
import img3 from '/public/apps.jpg'

export default function Category({params}) {
  return (
    <div className='h-full'>
      <h3 className='text-3xl text-white font-semibold capitalize'>{params.category}</h3>
      <Container direction={1} img={img1}/>
      <Container direction={2} img={img2}/>
      <Container direction={1} img={img3}/>
    </div>
  )
}
