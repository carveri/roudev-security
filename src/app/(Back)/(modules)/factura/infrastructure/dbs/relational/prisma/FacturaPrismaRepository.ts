import prisma from "@/app/(Back)/libs/prisma";
import { Factura } from "../../../../domain/entities/Factura";
import { FacturaRepository } from "../../../../domain/ports/FacturaRepository";
import { format } from "date-fns";


export class FacturaPrismaRepository implements FacturaRepository {

    async create(factura: Factura): Promise<void> {
        
        const {id, nombreFactura, mesFacturacion, añoFacturacion, diaFacturacion, userId, manyProyectos} = factura

        await prisma.factura.create({
            data:{
                id,
                nombreFactura,
                mesFacturacion,
                añoFacturacion,
                diaFacturacion,
                userId,
                proyectos:{
                    connect: manyProyectos
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async getAll(): Promise<Factura[]> {
        
        return await prisma.factura.findMany()
    }

    async getOneById(id: string): Promise<Factura> {
        
        return await prisma.factura.findMany({
            where:{
                id: id
            }
        })
    }

    async update(factura: Factura): Promise<void> {

        const {id, nombreFactura, mesFacturacion, añoFacturacion, diaFacturacion, userId, manyProyectos} = factura

        await prisma.factura.update({
            where:{
                id:id
            },
            data:{
                nombreFactura,
                mesFacturacion, 
                añoFacturacion, 
                diaFacturacion, 
                userId, 
                proyectos:{
                    connect: manyProyectos
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async delete(id: string): Promise<void> {
        await prisma.factura.delete({
            where:{
                id:id
            }
        })
    }
}