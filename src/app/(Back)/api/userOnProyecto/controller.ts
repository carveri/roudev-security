import { NextRequest } from "next/server";
import prisma from "../../libs/prisma";

class UserOnProyecto {
    postUserOnProyecto = async(req:NextRequest)=>{
        const {userId, proyectoId} = await req.json()
        const getUOP = await prisma.usersOnProductos.create({
            data:{
                userId: userId,
                proyectoId: proyectoId,
                assignedBy: userId
            }
        })
        return getUOP
    }

    getUserOnProyecto = async(req:NextRequest)=>{
        const url = new URL(req.url)

        const proyectoId:any = url.searchParams.get("proyectoId")

        const getAllProyecto2 = await prisma.proyecto.findMany({
            where:{
                id: proyectoId
            },
            include:{
                users: true
            }  
        }
        )
        return getAllProyecto2
    }
}

export const uop1 = new UserOnProyecto()