
import prisma from "../../../libs/prisma";
import { IParams } from "@/app/Interfaces/IParametros";

class Proyecto3 {
    // postProyecto3 = async(req:NextRequest)=>{
    //     const {} = req.json()
    //     const createPro3 = await prisma.proyecto.create({
    //         data:{

    //         }
    //     })
    // }



    getProyecto3 = async(req:Request,{params}:IParams)=>{
        const {id} = await params
        const getALLLpROY = await prisma.usersOnProductos.findMany({
            where:{
                assignedBy: id
                
            }
        })
        return getALLLpROY
    }
}

export const proy3 = new Proyecto3()