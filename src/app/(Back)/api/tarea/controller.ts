import prisma from "../../libs/prisma"
import { format } from "date-fns";


export class Tarea {
    postTarea = async(req:Request)=>{
        const {userId, proyectoId, equipoId, aportantes,descripcionDeTarea,nivelDeAvance,urgenciaTarea,nombreTarea, tipoTarea, statusTarea,fechaInicio,fechaTermino,etapaTarea,retornada,creadorTarea,responsableTarea,equipoResponsableTarea} = await req.json()
        const saveTarea = await prisma.tarea.create({
            data:{
                nombreTarea,
                tipoTarea,
                statusTarea,
                fechaInicio,
                fechaTermino,
                etapaTarea,
                retornada,
                creadorTarea,
                responsableTarea,
                equipoResponsableTarea,
                urgenciaTarea,
                nivelDeAvance,
                descripcionDeTarea,
                aportantes,
                equipoId,
                proyectoId, 
                userId,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveTarea
    }
    getTarea =async(req:Request)=>{
        const url = new URL(req.url)

        const proyectoId:any = url.searchParams.get("proyectoId")
        const userId:any = url.searchParams.get("userId")
        const status:any = url.searchParams.get("status")
        //const filtro:any = url.searchParams.get("filtro")

        //const {id} = await params
        const oneTarea = await prisma.tarea.findMany({
            where:{
                proyectoId: proyectoId,
                AND:{
                    userId: userId,
                    statusTarea: status,
                   // etapaTarea: filtro
                }
            }
        })
        return oneTarea
    }
}

export const tarea1 = new Tarea()