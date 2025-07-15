import { IParams } from "@/app/Interfaces/IParametros";
import prisma from "../../../libs/prisma";

class DetalleTipoProyecto {
    getOneTipoProyecto =async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const oneTP = await prisma.tipoProyecto.findMany({
            where:{
                id:id
            }
        })
        return oneTP
    }  
    
    deleteOneTipoProyecto =async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const oneTP = await prisma.tipoProyecto.delete({
            where:{
                id:id
            }
        })
        return oneTP
    }

    updatedOneTipoProyecto=async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const {nombreTipoProyecto} = await req.json()
        const updatedOneTP = await prisma.tipoProyecto.update({
            where:{
                id:id
            },
            data:{
                nombreTipoProyecto
            }
        })
        return updatedOneTP
    }
}

export const detalleTP1 = new DetalleTipoProyecto()