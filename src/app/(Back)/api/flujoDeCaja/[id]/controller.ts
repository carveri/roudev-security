import { IParams } from "@/app/Interfaces/IParametros";
import prisma from "../../../libs/prisma";


export class FlujoDeCaja {
    getOneFlujoDeCaja =async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const oneFlujoDeCaja = await prisma.flujoDeCaja.findMany({
            where:{
                id:id
            }
        })
        return oneFlujoDeCaja
    }   


    deleteOneFlujoDeCaja = async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const deleteOneFlujoDeCaja = await prisma.flujoDeCaja.delete({
            where:{
                id:id
            }
        })
        return deleteOneFlujoDeCaja
    }
}

export const detalleFlujoDeCaja = new FlujoDeCaja()