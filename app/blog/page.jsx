import BlogBox from '@/components/blog/BlogBox'
import React from 'react'
import blog1 from '/public/blog-1.jpg'
import blog2 from '/public/blog-2.jpg'
import blog3 from '/public/blog-3.jpg'
import blog4 from '/public/blog-4.jpg'
import blog5 from '/public/blog-5.jpg'
import blog6 from '/public/blog-6.jpg'
async function getData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function Blog() {
  const data = await getData()
  return (
    <>
      <div>
        <h1 className='text-4xl font-bold text-center text-green-600 '>Some Blogs</h1>
        <div className='mt-24'>
          {
            data.map(item => {
              return (
                <BlogBox
                  key={item.id}
                  title={item.title}
                  text={item.body}
                  img={`/blog-${Math.floor(Math.random() * 6 + 1)}.jpg`}
                  id={item.id}
                  />
              )
            })
          }
        </div>
      </div>
    </>
  )
}
