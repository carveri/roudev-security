


import { IParams } from "@/app/Interfaces/IParametros"
import prisma from "../../../libs/prisma"

class UserDetalle2 {

    // metodo get
    
    pivote = [{"id":"cf97d764-3131-4e6f-8cb7-03178d341641"}, {"id":"a140c95f-acb0-4129-8901-e047f2535e93"}]
    getUserDetalle2 = async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const getOneUser2 = await prisma.user.findMany({
            where:{
                id: id
            },
            orderBy:{
                updatedAt:'desc'
            }
            
        })

        
        return getOneUser2
    // }

    // webeo
        // webeo = (req:Request, {params}:IParams)=>{
        //     await this.pivote.map((el)=>{
        //         await prisma.user.findMany({
        //             where:{
        //                 id: el
        //             }
        //         })
        //     })
             
        // }
    }

    // metodo delete
    deleteUser2 = async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const deleteUser2 = await prisma.user.delete({
            where:{
                id
            }
        })
        return deleteUser2
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


export const user2 = new UserDetalle2()