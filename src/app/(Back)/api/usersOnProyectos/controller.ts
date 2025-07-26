import prisma from "../../libs/prisma"
import { format } from "date-fns";
import bcrypt from "bcryptjs";

class UsersOnProyectos {

    postData=async(req:Request)=>{
        const {userId, proyectoId, cargo, permisos, assignedBy } = await req.json()
        const saveUOP = await prisma.usersOnProyectos.create({
            data:{
                userId,
                proyectoId,
                cargo,
                permisos,
                assignedBy
            }
        })
        return saveUOP
    }

    getData=async()=>{
        const usersOnProyectos = await prisma.usersOnProyectos.findMany()
        return usersOnProyectos
    } 
    
}

export const us1 = new UsersOnProyectos()