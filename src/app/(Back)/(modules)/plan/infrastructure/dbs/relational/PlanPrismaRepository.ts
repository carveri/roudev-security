import prisma from "@/app/(Back)/libs/prisma";
import { Plan } from "../../../domain/entities/Plan";
import { PlanRepository } from "../../../domain/ports/PlanRepository";
import { format } from "date-fns";


export class PlanPrismaRepository implements PlanRepository {

    async create(plan: Plan): Promise<void> {
        
        const {id, nombrePlan, manyUsers} = await plan

        await prisma.plan.create({
            data:{
                id, 
                nombrePlan,
                users:{
                    connect:manyUsers
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async getAll(): Promise<Plan[]> {
        return await prisma.plan.findMany()
    }

    async getOneById(id: string): Promise<Plan | null> {
        return await prisma.plan.findMany({
            where:{
                id:id
            }
        })
    }

    async update(plan: Plan): Promise<void> {
        
        const {id, nombrePlan, manyUsers} = plan

        await prisma.plan.update({
            where:{
                id:id
            },
            data:{
                nombrePlan,
                users:{
                    connect:manyUsers
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
    }

    async delete(id: string): Promise<void> {
        await prisma.plan.delete({
            where:{
                id:id
            }
        })
    }

}