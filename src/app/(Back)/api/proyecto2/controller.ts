
import { NextRequest } from "next/server"
import prisma from "../../libs/prisma";

class Proyecto2 {
    getProyecto2 = async(req:NextRequest)=>{
        const url = new URL(req.url)

        const proyectoId:any = url.searchParams.get("proyectoId")
        const userId:any = url.searchParams.get("userId")

        const getAllProyecto2 = await prisma.proyecto.findMany({
            where:{
                id: proyectoId
            },
            include:{
                users:{
                    where:{
                        id: userId
                    }
                }
            }  
        }
        )
        return getAllProyecto2
    }
}

export const detalleProyecto2 = new Proyecto2()