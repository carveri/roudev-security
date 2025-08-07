import prisma from "@/app/(Back)/libs/prisma";
import { Tipo } from "../../../domain/entities/Tipo";
import { TipoRepository } from "../../../domain/ports/TipoRepository";
import { format } from "date-fns";


export class TipoPrismaRepository implements TipoRepository{

    async create(tipo: Tipo): Promise<void> {

        const {id, nombreTipoProyecto, manyProyectos} = tipo

        await prisma.tipoProyecto.create({
            data:{
                id,
                nombreTipoProyecto,
                proyectos:{
                    connect: manyProyectos
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async getAll(): Promise<Tipo[]> {
        
        return await prisma.tipoProyecto.findMany()
    }

    async getOneById(id: string): Promise<Tipo> {
        return await prisma.tipoProyecto.findMany({
            where:{
                id:id
            }
        })
    }

    async update(tipo: Tipo): Promise<void> {
        
        const {id, nombreTipoProyecto, manyProyectos} = tipo
        
        await prisma.tipoProyecto.update({
            where:{
                id:id
            },
            data:{
                nombreTipoProyecto,
                proyectos:{
                    connect: manyProyectos
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async delete(id: string): Promise<void> {
        await prisma.tipoProyecto.delete({
            where:{
                id:id
            }
        })
    }
}