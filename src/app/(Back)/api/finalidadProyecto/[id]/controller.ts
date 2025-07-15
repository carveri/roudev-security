import { IParams } from "@/app/Interfaces/IParametros";
import prisma from "../../../libs/prisma";


class DetalleFinalidadProyecto {
    getOneFinalidadProyecto =async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const oneFinalidadProyecto = await prisma.finalidadProyecto.findMany({
            where:{
                id:id
            }
        })
        return oneFinalidadProyecto
    }

    deleteOneFinalidadProyecto =async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const deleteOneFP = await prisma.finalidadProyecto.delete({
            where:{
                id:id
            }
        })
        return deleteOneFP
    }

    updatedOneFinalidadProyecto =async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const {nombreFinalidadProyecto} = await req.json()
        const updatedOnFP = await prisma.finalidadProyecto.update({
            where:{
                id:id
            },
            data:{
                nombreFinalidadProyecto
            }
        })
        return updatedOnFP
    }
}

export const detalleOneFP1 = new DetalleFinalidadProyecto()