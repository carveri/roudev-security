import prisma from "@/app/(Back)/libs/prisma";
import { Tarea } from "../../../../domain/entities/Tarea";
import { TareaRepository } from "../../../../domain/ports/TareaRepository";
import { format } from "date-fns";


export class TareaPrismaRepository implements TareaRepository {
    async create(tarea: Tarea): Promise<void> {
        const {id, nombreTarea,  fechaInicio, fechaTermino, etapaTarea,  creadorTarea, responsableTarea, equipoResponsableTarea, urgenciaTarea, descripcionDeTarea, aportantes, equipoId, proyectoId, userId} = tarea

        await prisma.tarea.create({
            data:{
                id,
                nombreTarea,
                fechaInicio,
                fechaTermino,
                etapaTarea,
                creadorTarea,
                responsableTarea,
                equipoResponsableTarea,
                urgenciaTarea,
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

        console.log('tarea:', tarea);
        

        const {id, nombreTarea, fechaInicio, fechaTermino, etapaTarea, creadorTarea, responsableTarea, equipoResponsableTarea, urgenciaTarea,  descripcionDeTarea, aportantes, equipoId, proyectoId, userId} = tarea
        
        console.log('urgencia tarea en reposi:', equipoResponsableTarea);
        

        await prisma.tarea.update({
            where:{
                id:id
            },
            data:{
                nombreTarea, 
                fechaInicio, 
                fechaTermino, 
                etapaTarea,
                creadorTarea, 
                responsableTarea, 
                equipoResponsableTarea, 
                urgenciaTarea,
                descripcionDeTarea, 
                aportantes: {
                    push: aportantes
                }, 
                equipoId, 
                proyectoId, 
                userId,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }}
            
        //     update:{
        //         nombreTarea, 
        //     },
        //     create:{
        //         id:id,
        //         nombreTarea, 
        //         fechaInicio, 
        //         fechaTermino, 
        //         etapaTarea,
        //         creadorTarea, 
        //         responsableTarea, 
        //         equipoResponsableTarea, 
        //         urgenciaTarea,
        //         descripcionDeTarea, 
        //         aportantes, 
        //         equipoId, 
        //         proyectoId, 
        //         userId,
        //         createdAt: format(new Date(), 'dd/MM/yyyy'),
        //         horaAt: format(new Date(), 'H:mm')
        //     }

        // }
    )
    }

    async delete(id: string): Promise<void> {
        await prisma.tarea.delete({
            where:{
                id:id
            }
        })
    }
}