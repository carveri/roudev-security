import prisma from "@/app/(Back)/libs/prisma";
import { Tarea } from "../../../../domain/entities/Tarea";
import { TareaRepository } from "../../../../domain/ports/TareaRepository";
import { format } from "date-fns";


export class TareaPrismaRepository implements TareaRepository {
    async create(tarea: Tarea): Promise<void> {
        const {id, nombreTarea, fechaInicio, fechaTermino, creadorTarea, responsableTarea, equipoResponsableTarea, descripcionDeTarea, aportantes, equipoId, proyectoId, userId} = tarea

        await prisma.tarea.create({
            data:{
                id,
                nombreTarea,
                fechaInicio,
                fechaTermino,
                creadorTarea,
                responsableTarea,
                equipoResponsableTarea,
                descripcionDeTarea,
                aportantes, 
                equipoId, 
                proyectoId, 
                userId,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async getAll(): Promise<Tarea[]> {
        
        return await prisma.tarea.findMany()
    }

    async getOneById(id: string): Promise<Tarea> {
        return await prisma.tarea.findMany({
            where:{
                id:id
            }
        })
    }

    async update(tarea: Tarea): Promise<void> {
        const {id, nombreTarea, fechaInicio, fechaTermino, creadorTarea, responsableTarea, equipoResponsableTarea, descripcionDeTarea, aportantes, equipoId, proyectoId, userId} = tarea
        await prisma.tarea.update({
            where:{
                id:id
            },
            data:{
                nombreTarea, 
                fechaInicio, 
                fechaTermino, 
                creadorTarea, 
                responsableTarea, 
                equipoResponsableTarea, 
                descripcionDeTarea, 
                aportantes, 
                equipoId, 
                proyectoId, 
                userId,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }

        })
    }

    async delete(id: string): Promise<void> {
        await prisma.tarea.delete({
            where:{
                id:id
            }
        })
    }
}