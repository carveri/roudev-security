import { IParams } from "@/app/Interfaces/IParametros";
import prisma from "../../libs/prisma";

//import prisma from "../../libs/prisma"

class DetalleUserProyecto {
    getUserPorProyecto1 = async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const getOneUP = await prisma.proyecto.findMany({
           where:{
                id:id
           },
           include:{
                users: {
                    include:{
                        equipos: true
                    }
                }
           }
        })
        return getOneUP
    }
}

export const detalleUserProyecto1 = new DetalleUserProyecto()