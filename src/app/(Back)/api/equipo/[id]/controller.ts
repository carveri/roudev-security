
import { IParams } from "@/app/Interfaces/IParametros";
import prisma from "../../../libs/prisma";

class DetalleEquipo {
    getOneEquipo = async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const getOneEquipo = await prisma.equipo.findMany({
            where:{
                id:id
            }
        })
        return getOneEquipo
    }


    deleteOneEquipo = async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const deleteOneEquipo = await prisma.equipo.delete({
            where:{
                id:id
            }
        })
        return deleteOneEquipo
    }
}

export const detalleEquipo = new DetalleEquipo()

