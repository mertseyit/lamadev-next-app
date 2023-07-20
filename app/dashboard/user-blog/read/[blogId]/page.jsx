import React from 'react'
const getUserBlog = async (id) => {
    const data = await fetch(`http://localhost:3000/api/get-a-single-blog?blogId=${id}`, {
        method:"GET"
    })

    console.log(await data.json())
    
}
export default async function UserBlogRead({ params }) {
    const { blogId } = params
    const blog = await getUserBlog(blogId)
    return (
        <>
            alkdfjlak
        </>
    )
}
