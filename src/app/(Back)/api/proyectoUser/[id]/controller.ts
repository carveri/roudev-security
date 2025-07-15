import { IParams } from "@/app/Interfaces/IParametros"
import prisma from "../../../libs/prisma";


class DetalleProyectoUser {
    getPU = async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const getPU = await prisma.user.findMany({
            where:{
                id:id
            },
            include:{
                proyectos:{
                    include:{
                        tipoProyecto:true,
                        finalidadProyecto: {
                            select:{
                                nombreFinalidadProyecto: true
                            }
                        },
                        equipos:{
                            include:{
                                tareas:{
                                    include:{
                                        user: true
                                    }
                                }
                            }
                        }
                    }   
                }   
            }
        })
        return getPU
    }
}


export const detalleProyectoUser1 = new DetalleProyectoUser()