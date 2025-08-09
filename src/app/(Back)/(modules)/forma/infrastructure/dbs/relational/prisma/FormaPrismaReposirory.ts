import prisma from "@/app/(Back)/libs/prisma";
import { Forma } from "../../../../domain/entities/Forma";
import { FormaRepository } from "../../../../domain/ports/FormaRepository";
import { format } from "date-fns";


export class FormaPrismaRepository implements FormaRepository {

    async create(forma: Forma): Promise<void> {
        
        const {id, nombreFormaPago, numeroCuotas, manyUsers} = forma

        await prisma.formaDePago.create({
            data:{
                id,
                nombreFormaPago,
                numeroCuotas,
                users:{
                    connect: manyUsers
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async getAll(): Promise<Forma[]> {
        return await prisma.formaDePago.findMany()
    }

    async getOneById(id: string): Promise<Forma> {
        
        return await prisma.formaDePago.findMany({
            where:{
                id:id
            }
        })
    }

    async update(forma: Forma): Promise<void> {
        
        const {id, nombreFormaPago, numeroCuotas, manyUsers} = forma
        
        await prisma.formaDePago.update({
            where:{
                id:id
            },
            data:{
                nombreFormaPago,
                numeroCuotas,
                users:{
                    connect: manyUsers
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async delete(id: string): Promise<void> {
        
        await prisma.formaDePago.delete({
            where:{
                id:id
            }
        })
    }


}