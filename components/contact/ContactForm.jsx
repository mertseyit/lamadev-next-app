import React from 'react'

const ContactForm = () => {
  return (
    <div className='w-full'>
        <form className='flex flex-col w-full h-auto'>
            <input type="text" placeholder='Enter Name' className='lg:w-3/4 w-full focus:shadow-md focus:shadow-white  p-2 border rounded-lg mb-10 border-white focus:outline-none bg-transparent'/>  
            <input type="email" placeholder='Enter Email' className='lg:w-3/4 w-full focus:shadow-md focus:shadow-white  p-2 border rounded-lg mb-10 border-white focus:outline-none bg-transparent'/>  
            <textarea placeholder='Enter Your Message' className='lg:w-3/4 w-full focus:shadow-md focus:shadow-white  h-40 p-2 border rounded-lg mb-10 border-white focus:outline-none bg-transparent'/>  
            <button className='lg:w-3/4 w-full px-2 py-1 text-center bg-green-600 text-white font-semibold rounded-lg border border-green-600 cursor-pointer hover:bg-transparent hover:text-green-600 transition-all duration-150'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm