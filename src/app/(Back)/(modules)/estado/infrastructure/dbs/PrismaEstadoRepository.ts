import prisma from "@/app/(Back)/libs/prisma";
import { Estado } from "../../domain/entities/Estado";
import { EstadoRepository } from "../../domain/ports/EstadoRepository";
import { EstadoId } from "../../domain/valueObjects/EstadoId";
import { format } from "date-fns";


export class PrismaEstadoRepository implements EstadoRepository{

    async create(estado:Estado):Promise<void>{
        //const {id, costosOperativos} = estado
        await prisma.estadoDeResultados.create({
            data: {
                id:estado.id,
                costosOperativos:estado.costosOperativos,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async getAll():Promise<Estado[]>{
        return await prisma.estadoDeResultados.findMany()
    }

    async getOneById(id: EstadoId): Promise<Estado | null> {
        return await prisma.estadoDeResultados.findMany({
            where:{
                id:id
            }
        })
    }

    async update(estado: Estado): Promise<void> {
        await prisma.estadoDeResultados.update({
           where:{
            id: estado.id
           },
           data:{
                costosOperativos:estado.costosOperativos,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
           } 
        })
    }

    async delete(id: EstadoId): Promise<void> {
        return await prisma.estadoDeResultados.delete({
            where:{
                id:id
            }
        })
    }

}