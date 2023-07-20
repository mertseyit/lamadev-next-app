import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

export async function POST(request) {
    const data = await request.json()
    console.log(data)
    const prisma = new PrismaClient()
    await prisma.post.create({
        data:data
    })

    return new NextResponse(JSON.stringify({
        success:true,
        message:"Post Created"
    }),{ status:201 })
}