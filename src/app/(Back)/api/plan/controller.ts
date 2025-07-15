import prisma from "../../libs/prisma"
import { format } from "date-fns";

class Plan {
    postPlan =async(req:Request)=>{
        const {nombrePlan, userId} = await req.json()
        const savePlan = await prisma.plan.create({
            data:{
                nombrePlan, 
                
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return savePlan
    }

    getPlan =async()=>{
        const getAllPlan =await prisma.plan.findMany({
            orderBy:{
                nombrePlan:'asc'
            }
        })
        return getAllPlan
    }
}

export const plan1 = new Plan()