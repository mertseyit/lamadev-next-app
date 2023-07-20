import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
import { v4 as uuidv4 } from 'uuid';


export async function POST(request) {
    const data = await request.json()
    const prisma = new PrismaClient()
    
    const isUserHas = await prisma.user.findMany({
        where:{
            email:data.email
        }
    })

    if(isUserHas.length === 0) {
        await prisma.user.create({
            data:{...data,userId:uuidv4(), totalLike:0,saved:0,liked:0}
        })
    }

    return new NextResponse(JSON.stringify({
        success:true,
        message:"User Registered"
    }),{ status:201 })
}