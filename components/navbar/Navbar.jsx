"use client"
import { data } from 'autoprefixer';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
];
const Navbar = () => {
    const session = useSession()
    return (
        <nav className='flex justify-between p-5 items-center'>
            <div>
                <Link className='font-bold text-3xl text-green-500' href="/">SBlog</Link>
            </div>
            <div className='flex gap-10 items-center'>
                {
                    links.map(link => {
                        return (
                            <div key={link.id}>
                                <Link className='font-semibold text-lg hover:text-gray-300' href={link.url}>{link.title}</Link>
                            </div>
                        )
                    })
                }
                {
                    session.status === "authenticated" ? (
                        <>
                            <Link className='font-semibold text-lg hover:text-gray-300' href={"/dashboard"}>Dashboard</Link>
                            <button onClick={() => signOut()} href={'/dashboard/login'} className='px-3 py-2 text-sm hover:bg-green-700 bg-green-600 rounded-lg'>LogOut</button>
                            <div>
                                <Image src={session.data.user.image} width={30} className='rounded-full' height={30} alt='user profile'/>
                            </div>
                        </>
                    ) : (
                        <Link href={'/dashboard/login'} className='px-3 py-2 text-sm hover:bg-green-700 bg-green-600 rounded-lg'>Lets Start</Link>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar