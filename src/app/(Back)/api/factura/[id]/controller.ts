import prisma from "../../../libs/prisma";
import { IParams } from "@/app/Interfaces/IParametros";


class FacturaDetalle {
    getOneFactura =async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const oneFactura = await prisma.factura.findMany({
            where:{
                id:id
            }
        })
        return oneFactura
    }


    // delete
    deleteOneFactura =async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const deleteOneFactura = await prisma.factura.delete({
            where:{
                id:id
            }
        })
        return deleteOneFactura
    }
}

export const detalleFactura1 = new FacturaDetalle()

