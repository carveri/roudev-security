import { IParams } from "@/app/Interfaces/IParametros";
import prisma from "../../../libs/prisma";

class DetalleUsersOnProyectos {
    getDataDetalle = async(req:Request, {params}:IParams)=>{
        const {id} = await params
       const getData = await prisma.usersOnProyectos.findMany({
        where:{
            proyectoId:id
        },
        include:{
            user: true
            
        }
       })  
       return getData
    }
}


export const detUOP = new DetalleUsersOnProyectos()