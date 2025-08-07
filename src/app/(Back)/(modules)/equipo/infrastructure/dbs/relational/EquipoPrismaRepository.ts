import prisma from "@/app/(Back)/libs/prisma";
import { Equipo } from "../../../domain/entities/Equipo";
import { EquipoRepository } from "../../../domain/ports/EquipoRepository";
import { format } from "date-fns";


export class EquipoPrismaRepository implements EquipoRepository {

    async create(equipo: Equipo): Promise<void> {

        const {id, nombreEquipo, responsableEquipo, puntosDelEquipo, manyProyectos, manyUsers, manyTareas} = equipo

        await prisma.equipo.create({
            data:{
                id,
                nombreEquipo,
                responsableEquipo, 
                puntosDelEquipo,
                proyectos:{
                    connect: manyProyectos
                },
                users:{
                    connect: manyUsers
                },
                tareas:{
                    connect: manyTareas
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async getAll(): Promise<Equipo[]> {
        return await prisma.equipo.findMany({
            where:{
                nombreEquipo: 'equipo1 de rios'
            }
        })

    }

    async getOneById(id: string): Promise<Equipo> {
        return await prisma.equipo.findMany({
            where:{
                id:id
            }
        })
    }

    async update(equipo: Equipo): Promise<void> {

        const {id, nombreEquipo, responsableEquipo, puntosDelEquipo, manyProyectos, manyUsers, manyTareas} = equipo

        await prisma.equipo.update({
            where:{
                id:id
            },
            data:{
                nombreEquipo,
                responsableEquipo,
                puntosDelEquipo, 
                proyectos:{
                    connect: manyProyectos
                },
                users:{
                    connect: manyUsers
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
        await prisma.equipo.delete({
            where:{
                id:id
            }
        })
    }

}