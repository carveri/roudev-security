import prisma from "../../../libs/prisma";
import { IParams } from "@/app/Interfaces/IParametros";


class Proyecto2 {
    getProyectoDetalle = async(req:Request, {params}:IParams)=>{
        const {id} = await params 
        const getProyectoDetalle = await prisma.proyecto.findMany({
            where:{
                id:id
            },
            include:{
                finalidadProyecto: {
                    select:{
                        nombreFinalidadProyecto: true
                    }
                },
                tipoProyecto:{
                    select:{
                        nombreTipoProyecto: true
                    }
                },
                equipos:{
                    include:{
                        tareas: true
                    }
                }
                
            }
        })
        return getProyectoDetalle
    }
}


export const proyecto2detalle1 = new Proyecto2()