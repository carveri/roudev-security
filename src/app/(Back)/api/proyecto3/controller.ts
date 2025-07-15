

import { NextRequest } from "next/server"
import prisma from "../../libs/prisma";

class Proyecto3 {
    
   getProyecto3 = async(req:NextRequest)=>{
        const url = new URL(req.url)

        const proyectoId:any = url.searchParams.get("proyectoId")
        const userId:any = url.searchParams.get("userId")

        const proyectoConTodosLosUsuarios = await prisma.user.findMany({
            where:{
                proyectos:{
                    some:{
                        id: proyectoId
                    }
                }
            }
            }
        )
        return proyectoConTodosLosUsuarios
    }
}


export const detalleProyecto3 = new Proyecto3()