import prisma from "@/app/(Back)/libs/prisma";
import { Area } from "../../domain/entities/Area";
import { AreaRepository } from "../../domain/ports/AreaRepository";
import { format } from "date-fns";

// acá uso todo lo que tiene que ver con prisma en este caso 
export class AreaPrismaRepository implements AreaRepository{

    async create(area:Area):Promise<void>{
        const {id, nombreArea, todos} = await area
        //console.log('todos:', todos, 'id', id, 'nombrearea:', nombreArea);
        
        await prisma.area.create({
            data:{
                id,
                nombreArea,
                cargos:{
                    connect:todos
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })

    }

    async getAll():Promise<Area[]>{
        const getAll = await prisma.area.findMany({
            include:{
                cargos:true
            }
        })
        return getAll
    }

    async getOneById(id: string): Promise<Area> {
        const getOne = await prisma.area.findMany({
            where:{
                id:id
            }
        })
        return getOne
    }

    async update(area: Area): Promise<void> {

        const {id, nombreArea, todos} = area
        
        await prisma.area.update({
            where:{
                id:id
            },
            data:{
                nombreArea,
                cargos:{
                    connect: todos
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })

    }

    async delete(id: string): Promise<void> {

        //console.log('id del delitesssss:', id);
        await prisma.area.delete({
            where:{
                id:id
            }
        })
        
    }



}
