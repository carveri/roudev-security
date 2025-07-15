


import { NextResponse } from "next/server"
import { detalleProyectoUser1 } from "./controller"
import { IParams } from "@/app/Interfaces/IParametros"
//import { IPermisoParams } from "@/app/Interfaces/IParams"

export const GET = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await detalleProyectoUser1.getPU(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}


// export const DELETE = async(req:Request,{params}:IParams)=>{
//     try {
//         return NextResponse.json(await proyectoDetalle1.deleteOneProyecto(req,{params}))
//     } catch (error) {
//         return NextResponse.json(error)
//     }
// }