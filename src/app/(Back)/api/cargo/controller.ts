import prisma from "../../libs/prisma"
import { format } from "date-fns";

class Cargo {
    postCargo = async(req:Request)=>{
        const {nombreCargo, sueldo, areaId} = await req.json()
        const saveCargo = await prisma.cargo.create({
            data:{
                nombreCargo, 
                sueldo,
                areaId,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveCargo
    }   

    getCargo =async()=>{
        const getCargo = await prisma.cargo.findMany({
            orderBy:{
                nombreCargo:'asc'
            }
        })
        return getCargo
    }
}

export const cargo1 = new Cargo()