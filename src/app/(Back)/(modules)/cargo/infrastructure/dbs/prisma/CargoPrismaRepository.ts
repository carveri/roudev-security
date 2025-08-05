import prisma from "@/app/(Back)/libs/prisma";
import { Cargo } from "../../../domain/entities/Cargo";
import { CargoRepository } from "../../../domain/ports/CargoRepository";
import { format } from "date-fns";


export class CargoPrismaRepository implements CargoRepository{

    async create(cargo: Cargo): Promise<void> {
        const {id, nombreCargo, sueldo, areaId, todos} = cargo

        await prisma.cargo.create({
            data:{
                id,
                nombreCargo,
                sueldo, 
                areaId, 
                users:{
                    connect: todos
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return console.log('guardado!');
        
    }

    async getAll(): Promise<Cargo[]> {
        return await prisma.cargo.findMany()

    }

    async getOneBy(id: string): Promise<Cargo> {
        return await prisma.cargo.findMany({
            where:{
              id:id  
            }
        })
    }

    async update(cargo: Cargo): Promise<void> {
        const {id, nombreCargo, sueldo, areaId, todos} = cargo
        
        await prisma.cargo.update({
            where:{
                id: id
            },
            data:{
                nombreCargo, 
                sueldo,
                areaId,
                users:{
                    connect: todos
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async delete(id: string): Promise<void> {
        await prisma.cargo.delete({
            where:{
                id:id
            }
        })
    }
}