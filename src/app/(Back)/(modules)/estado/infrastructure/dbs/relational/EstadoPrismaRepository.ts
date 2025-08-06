import prisma from "@/app/(Back)/libs/prisma";
import { EstadoRepository } from "../../../domain/ports/EstadoRepository";
import { Estado } from "../../../domain/entities/Estado";
import { format } from "date-fns";


export class EstadoPrismaRepository implements EstadoRepository {

    async create(estado:Estado){
        const {id, costosOperativos} = estado 

        await prisma.estadoDeResultados.create({
            data:{
                id,
                costosOperativos,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }


    async getAll(): Promise<Estado[] > {
        return await prisma.estadoDeResultados.findMany()
    }

    async getOneById(id: string | null): Promise<Estado> {
        return await prisma.estadoDeResultados.findMany({
            where:{
                id:id
            }
        })
    }

    async update(estado: Estado): Promise<void> {
        const {id, costosOperativos} = estado
        
        await prisma.estadoDeResultados.update({
            where:{
                id:id
            },
            data:{
                id, 
                costosOperativos,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async delete(id: string): Promise<void> {
        await prisma.estadoDeResultados.delete({
            where:{
                id:id
            }
        })
    }


}