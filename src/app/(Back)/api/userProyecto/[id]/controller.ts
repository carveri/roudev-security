import { IParams } from "@/app/Interfaces/IParametros";
import prisma  from "../../../libs/prisma";


class DetalleUserProyecto {
    getUserPorProyecto = async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const getOneUP = await prisma.proyecto.findMany({
           where:{
                id:id
           },
            include:{
                users:{
                    include:{
                        equipos: true
                    },
                    where:{
                        statusEnProyecto: {
                            not: 'Ceo'
                        }
                    }
                },
                
            }
        })
        return getOneUP
    }
}

export const detalleUserProyecto = new DetalleUserProyecto()