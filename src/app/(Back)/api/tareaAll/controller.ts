import prisma from "../../libs/prisma"


class TareaAll {
    getTareaAll =async(req:Request)=>{
        const res = await prisma.tarea.findMany()
        return res
    }
}


export const tareaAll1 = new TareaAll()