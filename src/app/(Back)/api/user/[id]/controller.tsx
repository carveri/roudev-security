
import { IParams } from "@/app/Interfaces/IParametros"
import prisma from "../../../libs/prisma"

class UserDetalle {

    // metodo get
    getUserDetalle = async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const getOneUser = await prisma.user.findFirst({
            where:{
                id:id
            },
            orderBy:{
                updatedAt:'desc'
            }
            
        })
        return getOneUser
    }

    // metodo delete
    deleteUser = async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const deleteUser = await prisma.user.delete({
            where:{
                id
            }
        })
        return deleteUser
    }

    // // metodo put
    // putUserDetalle = async(req:Request, {params})=>{
    //     const {id} = await params
    //     const {primerNombre,segundoNombre, apellidoPaterno, apellidoMaterno, rutPersonal, empresaId, cargoId, equipoId, email } = await req.json()
    //     const updatedUser = await prisma.user.update({
    //         where:{
    //             id: id
    //         },
    //         data:{
    //             primerNombre,
    //             segundoNombre,
    //             apellidoPaterno,
    //             apellidoMaterno,
    //             rutPersonal,
    //             empresaId,
    //             cargoId,
    //             equipoId,
    //             email
                
    //         }
    //     })
    //     return updatedUser
    // }
}


export const user1 = new UserDetalle()