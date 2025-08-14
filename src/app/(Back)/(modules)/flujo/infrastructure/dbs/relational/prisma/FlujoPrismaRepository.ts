import prisma from "@/app/(Back)/libs/prisma";
import { Flujo } from "../../../../domain/entities/Flujo";
import { FlujoRepository } from "../../../../domain/ports/FlujoRepository";
import { format } from "date-fns";


export class FlujoPrismaRepository implements FlujoRepository{

    async create(flujo: Flujo): Promise<void> {

        const {id, ingresosPorVentas, valorTicket, crecimientoDelTicket} = flujo


        await prisma.flujoDeCaja.create({
            data:{
                id,
                ingresosPorVentas,
                valorTicket,
                crecimientoDelTicket,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async getAll(): Promise<Flujo[]> {
        return await prisma.flujoDeCaja.findMany()
    }

    async getOneById(id: string): Promise<Flujo> {
        return await prisma.flujoDeCaja.findMany({
            where:{
                id:id
            }
        })
    }

    async update(flujo: Flujo): Promise<void> {

        const {id, ingresosPorVentas, valorTicket, crecimientoDelTicket} = flujo
        
        await prisma.flujoDeCaja.update({
            where:{
                id:id
            },
            data:{
                ingresosPorVentas,
                valorTicket,
                crecimientoDelTicket,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async delete(id: string): Promise<void> {
        
        await prisma.flujoDeCaja.delete({
            where:{
                id:id
            }
        })
    }


}