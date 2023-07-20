import Image from 'next/image'
import React from 'react'
import contact_img from 'public/contact.png'
import ContactForm from '@/components/contact/ContactForm'

export default function Contact() {
  return (
    <>
      <div className='w-full h-auto'>
        <h1 className='text-center mt-5 font-bold text-5xl  text-green-600 whitespace-nowrap'>Contact Us</h1>
        <div className='flex lg:flex-row flex-col justify-center gap-20 lg:justify-between items-center p-1 mt-5 lg:mb-0 mb-20'>
          <Image src={contact_img} alt='contact image' className='lg:w-2/5 md:w-3/5 w-full'/>
          <ContactForm />
        </div>
      </div>
    </>
  )
}
