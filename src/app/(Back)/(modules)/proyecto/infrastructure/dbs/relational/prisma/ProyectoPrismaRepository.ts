import prisma from "@/app/(Back)/libs/prisma";
import { Proyecto } from "../../../../domain/entities/Proyecto";
import { ProyectoRepository } from "../../../../domain/ports/ProyectoRepository";
import { format } from "date-fns";


export class ProyectoPrismaRepository implements ProyectoRepository{

    async create(proyecto: Proyecto): Promise<void> {

        const {id, nombreProyecto, fechaInicio, responsableProyecto, manyUsers, finalidadProyectoId, tipoProyectoId, manyEquipos, manyTareas} = proyecto

        await prisma.proyecto.create({
            data:{
                id,
                nombreProyecto,
                fechaInicio,
                responsableProyecto,
                users:{
                    connect: manyUsers
                },
                finalidadProyectoId,
                tipoProyectoId,
                equipos:{
                    connect: manyEquipos
                },
                tareas:{
                    connect: manyTareas
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')

            }
        })
    }

    async getAll(): Promise<Proyecto[]> {
        
        return await prisma.proyecto.findMany({
            include:{
                users: true,
                tareas: true
            },
            orderBy:{
                nombreProyecto:'asc'
            }
        })
    }

    async getOneById(id: string): Promise<Proyecto> {
        
        return await prisma.proyecto.findMany({
            where:{
                id:id
            }
        })
    }

    async update(proyecto: Proyecto): Promise<void> {

        const {id, nombreProyecto, fechaInicio, responsableProyecto, manyUsers, finalidadProyectoId, tipoProyectoId, manyEquipos, manyTareas} = proyecto
        
        await prisma.proyecto.update({
            where:{
                id:id
            },
            data:{
                nombreProyecto,
                fechaInicio,
                responsableProyecto,
                users:{
                    connect: manyUsers
                },
                finalidadProyectoId,
                tipoProyectoId,
                equipos:{
                    connect: manyEquipos
                },
                tareas:{
                    connect: manyTareas
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async delete(id: string): Promise<void> {
        await prisma.proyecto.delete({
            where:{
                id:id
            }
        })
    }
}