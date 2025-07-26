

import prisma from "../../../libs/prisma";

interface Params {
    id: string
}

export interface IParams {
    params: Params
}

class ProyectoDetalle {

    // get one
    getOneProyecto =async(req:Request,{params}:IParams)=>{
        const {id} = await params
        const oneProyecto = await prisma.user.findMany({
            where:{
                id:id
            },include:{
                proyectos:{
                    include:{
                        users: true
                    }
                }
                
            }},
        )
        return oneProyecto
    }

    // borrar un permiso 
    deleteOneProyecto = async(req:Request,{params}:IParams)=>{
        const {id} = await params
        const deleteOneProyecto = await prisma.proyecto.delete({
            where:{
                id:id
            }
        })
        return deleteOneProyecto
    }

    // putArea = async(req:Request, {params}:IParams)=>{
    //     const {id} = params
    //     const {nombreArea} = await req.json()
    //     const updatedArea = await prisma.area.update({
    //         where:{
    //             id
    //         },
    //         data:{
    //             nombreArea,
    //         }
    //     })
    //     return updatedArea
    // }

    // updated 
    updatedOneProyecto = async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const {todos,nombreProyecto, empleado,statusProyecto, puntosDelProyecto, ceo, finalidadProyectoId, tipoProyectoId} = await req.json()
        const updatedOneProyecto = await prisma.proyecto.update({
            where:{
                id: id
            },
            data:{
                nombreProyecto,
                statusProyecto, 
                puntosDelProyecto, 
                ceo,
                finalidadProyectoId,
                tipoProyectoId,
                empleado,
                users:{
                    connect:todos
                },
                
            }
        })
        return updatedOneProyecto
    }
}


export const proyectoDetalle1 = new ProyectoDetalle()