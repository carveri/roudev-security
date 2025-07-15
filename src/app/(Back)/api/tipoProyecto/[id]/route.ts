

import { NextResponse } from "next/server"
import { detalleTP1 } from "./controller"
import { IParams } from "@/app/Interfaces/IParametros"
//import { IPermisoParams } from "@/app/Interfaces/IParams"


export const GET = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await detalleTP1.getOneTipoProyecto(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}


export const DELETE = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await detalleTP1.deleteOneTipoProyecto(req,{params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

export const PUT =async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await detalleTP1.updatedOneTipoProyecto(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}