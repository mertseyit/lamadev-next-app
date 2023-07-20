import Image from 'next/image'
import React from 'react'
import img from '/public/blog-3.jpg'
import {FaArrowLeft} from 'react-icons/fa'
import Link from 'next/link';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function BlogPost({ params }) {
  const data = await getData(params.id)
  return (
    <div className='mt-16'>
      <Link href={'/blog'} className='group'>
        <FaArrowLeft className='text-4xl p-2 rounded-full border group-hover:text-green-600 group-hover:border-green-600 transition-all duration-150'/>
      </Link>
      <div className='mt-5 h-full w-full border justify-between border-white rounded-lg p-5'>
        <div>
          <h1 className='font-bold text-4xl text-green-600 mb-5 capitalize'>{data.title}</h1>
          <p className='capitalize font-semibold text-gray-400 text-lg my-10'>{data.body}</p>
          <Image src={`/blog-${Math.floor(Math.random() * 6 + 1)}.jpg`} width={800} height={400} alt='test image' className='p-2 h-80' />
          <p className='w-full text-lg font-normal text-gray-400 mt-10 indent-10 p-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi nobis minus corrupti ratione doloremque rem odio. Neque eligendi libero nemo, nesciunt nulla iusto nisi veritatis dicta ea tempore quisquam, cumque quas rerum asperiores
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti distinctio odit dolore aliquam recusandae quo eum quia vero beatae, sint eius quis magnam ex explicabo rerum officiis eos a debitis et reiciendis? Velit iste maxime atque! Consectetur, atque nesciunt doloremque commodi omnis aspernatur dolores veniam? Debitis sapiente ab, eius autem, impedit et culpa delectus aut eveniet eos suscipit quos, nulla recusandae consectetur earum! Accusantium soluta, similique placeat vel excepturi accusamus. Illo, sunt consequuntur eius minus fugiat necessitatibus deserunt impedit aut nostrum nisi aliquam perspiciatis veniam at quos quasi nihil itaque! Id nam fugiat voluptate non accusantium unde aliquid perferendis deleniti consectetur eos? Optio, ipsam deleniti repellat dicta iusto saepe quod maiores omnis praesentium temporibus iste in doloremque quae perspiciatis labore nesciunt molestiae eum quia voluptate, tempore, quas architecto quibusdam. Ipsa reiciendis odio esse consequuntur. Maiores, modi iusto inventore repellat dolore autem, minus facere odit corporis provident doloribus earum iure expedita ex ipsam! Error impedit ut labore doloremque incidunt ad quo itaque mollitia corrupti ipsum? Fuga rerum quaerat omnis dolores minus quas distinctio alias rem asperiores error sit, voluptatibus accusantium consectetur quis eaque doloribus iste hic totam molestiae. Porro delectus aut nostrum et at cumque quos vero doloribus sed ad voluptate, natus magni iste sapiente, aperiam quaerat perspiciatis debitis rerum fugiat accusamus? Iure nemo aliquid facilis officiis. Tenetur maxime possimus natus quia est dignissimos odit ipsam iusto deserunt saepe a cupiditate, ratione provident aspernatur cumque ut quod soluta ad. Ad officia, hic cum alias adipisci qui aut voluptatum harum nobis ipsa praesentium placeat, voluptatem deserunt repellat, voluptates numquam maiores quia architecto officiis molestias minus! Tempora illo non sint aliquam doloribus qui, fugit, dolore aperiam dignissimos molestiae voluptas veritatis eum totam, repellendus amet minima nostrum quis perspiciatis? Veniam, expedita fuga? Architecto ipsam rerum ex, velit temporibus fugiat nemo sed autem magnam cumque asperiores nostrum laboriosam corrupti blanditiis id eveniet placeat eius odio commodi aliquam veritatis eum reprehenderit sunt deleniti? Recusandae maiores dolore ad magni laudantium quasi perferendis a facere impedit quia. Sunt ab fugiat sapiente, eveniet, veritatis alias sit est illo mollitia incidunt deserunt ut nostrum repudiandae iusto error rem asperiores totam, quo nihil porro eos natus? Unde nobis laborum dignissimos? Natus nihil, aliquam odit voluptates, sed ratione beatae hic ipsa excepturi autem, officiis laborum tempora temporibus totam laudantium ad praesentium voluptatum et vitae? Aspernatur quaerat quo velit nostrum explicabo sunt ullam ad tempora soluta, animi veniam aut hic praesentium eveniet enim nemo molestias delectus rerum totam. Aperiam amet rem voluptatem maiores nisi modi enim consectetur veritatis, accusantium sunt, aliquam quas impedit minima eos debitis dolorem suscipit illum possimus! Totam sit corporis, voluptas mollitia quas aliquam, facilis voluptatum culpa hic molestiae modi fuga eveniet quisquam animi laborum tempora odio doloremque. Deleniti, itaque cum? Delectus dolores quidem impedit eum blanditiis modi totam unde natus tempore dolor soluta saepe distinctio at omnis, aliquam, cupiditate voluptatem laudantium nisi ipsam quam aut molestias quaerat consectetur. Quod laboriosam cumque maxime adipisci nam totam explicabo culpa aspernatur quaerat cum? Inventore alias illo porro, quia aliquam facilis obcaecati repudiandae nostrum iusto totam minima dolor ab fugiat? Vel iste molestiae ea quo quibusdam error minus tempora, perferendis similique consequuntur! Facilis, autem? Autem nemo consequuntur nam nihil ratione optio rerum ea aut nulla, dignissimos temporibus molestias unde est necessitatibus veritatis ipsum modi accusamus! Vitae, consectetur, fuga ipsam pariatur blanditiis quidem laudantium, ullam dolores molestiae cupiditate expedita.
          </p>
        </div>
      </div>
    </div>
  )
}
