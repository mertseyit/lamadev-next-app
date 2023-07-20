import { prisma } from "@/utils/prisma"
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

export async function GET(request) {
    const prisma = new PrismaClient()
    const email = request.nextUrl.searchParams.get("email")
    const sessionUser = await prisma.user.findMany({
        where:{
            email:email,
        },
        include:{posts:true}
    })


    return new NextResponse(JSON.stringify({
        user:sessionUser
    }),{ status:200 })
}