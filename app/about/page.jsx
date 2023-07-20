import React from 'react'
import about_img from 'public/about.jpg'
import Image from 'next/image'
export default function About() {
  return (
    <>
      <div className='flex flex-col items-center w-full'>
        {/* <Image src={about_img} alt='about' className='h-1/3 w-full' /> */}
        <div className='flex flex-col mt-5 w-full'>
          <h1 className='text-5xl font-bold text-green-600 text-center mb-5'>About Us</h1>
          <div className='flex lg:flex-row flex-col justify-evenly gap-10 w-full'>
            <div className='w-full h-auto border border-white p-5 rounded-lg shadow-md shadow-white'>
              <h2 className='text-3xl text-whtie font-semibold mb-5'>Who We Are ?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, impedit eveniet excepturi sint asperiores sit veniam necessitatibus ab a adipisci? Expedita, itaque. Veritatis ratione ut eos asperiores quidem. Ex placeat aspernatur adipisci eos itaque excepturi dignissimos? Laborum perspiciatis obcaecati, nisi exercitationem dolorem omnis, dicta animi non deleniti doloribus quis necessitatibus quibusdam iusto excepturi nobis incidunt. In ipsam similique numquam mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque at ullam, ad molestiae optio ipsam reprehenderit neque nisi eaque. Obcaecati est eligendi delectus, nobis error, maiores accusantium ut et amet possimus distinctio eveniet atque, ab consequuntur deleniti commodi veritatis minima mollitia blanditiis quod!</p>
            </div>
            <div className='w-full h-auto border border-white p-5 rounded-lg shadow-md shadow-white'>
              <h2 className='text-3xl text-whtie font-semibold mb-5'>What We Do ?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, impedit eveniet excepturi sint asperiores sit veniam necessitatibus ab a adipisci? Expedita, itaque. Veritatis ratione ut eos asperiores quidem. Ex placeat aspernatur adipisci eos itaque excepturi dignissimos? Laborum perspiciatis obcaecati, nisi exercitationem dolorem omnis, dicta animi non deleniti doloribus quis necessitatibus quibusdam iusto excepturi nobis incidunt. In ipsam similique numquam mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque at ullam, ad molestiae optio ipsam reprehenderit neque nisi eaque. Obcaecati est eligendi delectus, nobis error, maiores accusantium ut et amet possimus distinctio eveniet atque, ab consequuntur deleniti commodi veritatis minima mollitia blanditiis quod!
              </p>
              <h3 className='text-2xl font-normal text-white mt-3'>Lorem, ipsum dolor.</h3>
              <ul className='mt-3'>
                <li>1. Lorem ipsum dolor sit amet.</li>
                <li>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eos veniam nihil?</li>
                <li>3. Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
