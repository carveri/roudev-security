
import prisma from "../../libs/prisma"
import { format } from "date-fns";

class FinalidadProyecto {
    postFinalidadProyecto =async(req:Request)=>{
        const {nombreFinalidadProyecto} = await req.json()
        const saveFinalidadProyecto = await prisma.finalidadProyecto.create({
            data:{
                nombreFinalidadProyecto,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveFinalidadProyecto
    }

    getFinalidadProyecto = async()=>{
        const getAllFinalidadProyectos = await prisma.finalidadProyecto.findMany({
            include:{
                proyectos:{
                    include:{
                        finalidadProyecto:{
                            select: {
                                nombreFinalidadProyecto: true
                            }
                        }
                    }
                }
            },
            orderBy:{
                nombreFinalidadProyecto: 'asc'
            }
        })
        return getAllFinalidadProyectos
    }
}

export const finalidadProyecto1 = new FinalidadProyecto()