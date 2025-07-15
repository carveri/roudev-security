import prisma from "../../libs/prisma"
import { format } from "date-fns";

class EstadoDeResultados {
    postEstadoDeResultados =async(req:Request)=>{
        const {isActive} = await req.json()
        const saveEstadoDeResultados = await prisma.estadoDeResultados.create({
            data:{
                isActive,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveEstadoDeResultados
    }

    getEstadoDeResultados =async()=>{
        const getEstadoDeResultados = await prisma.estadoDeResultados.findMany()
        return getEstadoDeResultados
    }
    
}

export const estadoDeResultados1 = new EstadoDeResultados()