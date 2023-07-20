import React from 'react'

export default function CategoryLayout({children}) {
    return (
        <>
            <div className='w-full h-full mt-10'>
                <h1 className='text-4xl font-bold text-center text-green-600 '>Our Works</h1>
                {children}
            </div>
        </>
    )
}
