
import prisma from "../../libs/prisma"
import { format } from "date-fns";

class BalanceGeneral {
    postBalanceGeneral =async(req:Request)=>{
        const {isActive} = await req.json()
        const saveBalanceGeneral = await prisma.balanceGeneral.create({
            data:{
                isActive:isActive,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveBalanceGeneral
    }


    getBalanceGeneral =async()=> {
        const getAllBalanceGeneral = await prisma.balanceGeneral.findMany() 
        return getAllBalanceGeneral
    }
}

export const balanceGeneral1 = new BalanceGeneral()