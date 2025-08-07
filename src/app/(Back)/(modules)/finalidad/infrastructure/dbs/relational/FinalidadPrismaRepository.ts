import prisma from "@/app/(Back)/libs/prisma";
import { Finalidad } from "../../../domain/entities/Finalidad";
import { FinalidadRepository } from "../../../domain/ports/FinalidadRepository";
import { format } from "date-fns";


export class FinalidadPrismaRepository implements FinalidadRepository{

    async create(finalidad: Finalidad): Promise<void> {
        
        const {id,nombreFinalidadProyecto, manyProyectos} = finalidad

        await prisma.finalidadProyecto.create({
            data:{
                id,
                nombreFinalidadProyecto,
                proyectos:{
                    connect: manyProyectos
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async getAll(): Promise<Finalidad[]> {
        return await prisma.finalidadProyecto.findMany({
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
    }

    async getOneById(id: string): Promise<Finalidad> {
        return await prisma.finalidadProyecto.findMany({
            where:{
                id:id
            }
        })
    }

    async update(finalidad: Finalidad): Promise<void> {
        
        const {id,nombreFinalidadProyecto, manyProyectos} = finalidad

        await prisma.finalidadProyecto.update({
            where:{
                id:id
            },
            data:{
                nombreFinalidadProyecto,
                proyectos:{
                    connect: manyProyectos
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async delete(id: string): Promise<void> {
        await prisma.finalidadProyecto.delete({
            where:{
                id:id
            }
        })
    }

}