
import prisma from "../../libs/prisma"

class EquipoAll {
    getEquipoAll = async(req:Request)=>{
        const all = await prisma.equipo.findMany()
        return all
    }
}


export const eal1 = new EquipoAll()