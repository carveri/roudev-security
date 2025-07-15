import prisma from "../../libs/prisma"
import { format } from "date-fns";

class FormaDePago {
    postFormaDePago = async(req:Request)=>{
        const {nombreFormaPago,numeroCuotas} = await req.json()
        const saveFormaDePago = await prisma.formaDePago.create({
            data:{
                nombreFormaPago, 
                numeroCuotas,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveFormaDePago
    }


    getFormaDePago =async()=>{
        const getAllFormaDePago = await prisma.formaDePago.findMany({
            orderBy:{
                nombreFormaPago: 'asc'
            }
        })
        return getAllFormaDePago
    }
}

export const formaDePago1 = new FormaDePago()