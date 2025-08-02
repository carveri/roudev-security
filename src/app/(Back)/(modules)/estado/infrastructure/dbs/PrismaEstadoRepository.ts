import prisma from "@/app/(Back)/libs/prisma";
import { Estado } from "../../domain/entities/Estado";
import { EstadoRepository } from "../../domain/ports/EstadoRepository";
import { EstadoId } from "../../domain/valueObjects/EstadoId";
import { format } from "date-fns";

// aca va prisma puro

export class PrismaEstadoRepository implements EstadoRepository{
    
    async create(estado: Estado):Promise<void>{
        const {id, isActive, updatedAt,  costosOperativos} = estado
        await prisma.estadoDeResultados.create({
            data:{
                id:id.value,
                isActive: isActive.value,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm'),
                updatedAt: updatedAt.value,
                costosOperativos:costosOperativos.value,
            }
        })
        return console.log('guardado');
        
    }

    async getAll():Promise<Estado[]>{
        const getAll =  await prisma.estadoDeResultados.findMany()
        return getAll
    }

    async getOneById(id:EstadoId): Promise<Estado | null> {
        const getAll = await prisma.estadoDeResultados.findMany({
            where:{
                id:id
            }
        })
        return getAll || null
    }

    async update(estado: Estado): Promise<void> {
        const {id, costosOperativos} = estado
        
        await prisma.estadoDeResultados.update({
            where:{
                id:id
            },
            data:{
                costosOperativos
            }
        })
        
    }

    async delete(id: EstadoId): Promise<void> {
        await prisma.estadoDeResultados.delete({
            where:{
               id:id
            }
        })
    }
}