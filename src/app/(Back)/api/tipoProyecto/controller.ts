import prisma from "../../libs/prisma"
import { format } from "date-fns";

class TipoProyecto {
    postTipoProyecto =async(req:Request)=>{
        const {nombreTipoProyecto} = await req.json()
        const saveTipoProyecto = await prisma.tipoProyecto.create({
            data:{
                nombreTipoProyecto,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveTipoProyecto
    }

    getTipoProyecto =async()=>{
        const getAllTipoProyecto =await prisma.tipoProyecto.findMany({
            orderBy:{
                nombreTipoProyecto: 'asc'
            }
        }) 
        return getAllTipoProyecto
    }
}


export const tipoProyecto1 = new TipoProyecto()