import prisma from "../../libs/prisma"
import { format } from "date-fns";
import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";

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

    getData=async(req:Request)=>{
        const url = new URL(req.url)

        const proyectoId:any = url.searchParams.get("proyectoId")

        console.log("proyId", proyectoId);
        
        // const cargo1:any = url.searchParams.get("Diseño")
        // const cargo2:any = url.searchParams.get("QA")
        //const comando:any = url.searchParams.get("comando")
        const usersOnProyectos = await prisma.usersOnProyectos.findMany({
            where:{
                proyectoId: proyectoId,
                AND:[
                    {
                        cargo: {
                            not:{
                                contains: 'Diseñador'
                            }
                        }
                    },
                    {
                        cargo: {
                            not:{
                                contains: 'QA'
                            }
                        }
                    },

                ]
            },
            include:{
                user: true
            }
        })
        return usersOnProyectos
    } 
    
}

export const us1 = new UsersOnProyectos()