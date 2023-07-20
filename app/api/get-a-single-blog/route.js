import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

export async function POST(request) {
    const prisma = new PrismaClient()
    const blogId = request.nextUrl.searchParams.get("blogId")
    const blog = await prisma.post.findMany({
        where:{
            id:blogId
        }
    })

    return new NextResponse(JSON.stringify({
            success:true,
            blog
        }
    ))
}