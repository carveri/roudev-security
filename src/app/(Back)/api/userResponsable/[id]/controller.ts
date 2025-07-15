
import prisma from "@/app/(Back)/libs/prisma"
import { IParams } from "@/app/Interfaces/IParametros"



class UserResponsable {
    getUserResponsable = async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const resultado = await prisma.user.findMany({
            where:{
                proyectos:{
                    some: {
                        nombreProyecto: id
                    }
                }
            },
            select:{
                primerNombre: true,
                apellidoPaterno: true,
                id:true,
                avatar: true
            }
        })
        return resultado
    }
}


export const userResponsable1 = new UserResponsable()