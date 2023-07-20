import Image from 'next/image'
import React from 'react'


const Container = ({ direction, img }) => {
    return (
        <div className={`${direction === 1 ? "lg:flex-row-reverse flex-col" : "lg:flex-row flex-col"} flex items-center w-full h-2/3 mt-5 justify-between mb-20`}>
            <Image src={img} width={400} alt='category image' className='lg:mb-0 mb-10'/>
            <div className='lg:w-1/2 lg:mb-0 mb-20 w-3/5'>
                <h2 className='lg:text-5xl text-3xl text-white font-bold mb-5'>Lorem, ipsum dolor.</h2>
                <p className='mt-5 text-slate-400 text-lg mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed impedit fugiat accusamus iusto sapiente sit officia, atque aliquam eligendi, vel dicta explicabo. Placeat vel quibusdam sunt sequi reiciendis, explicabo ipsum ipsam labore. Magnam quis culpa ex nulla quod sequi officia obcaecati et odio eaque ipsa error animi iste, sit eos quia, cumque, similique provident perspiciatis?</p>
                <button className='px-3 lg:w-1/2 w-2/3 py-2 font-semibold text-white  rounded-md border border-green-600 bg-green-600 hover:text-green-600 hover:bg-transparent transition-all duration-150'>See More</button>
            </div>
        </div>
    )
}

export default Container