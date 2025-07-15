
import { NextResponse } from "next/server"
import { detalleOneFP1 } from "./controller"
import { IParams } from "@/app/Interfaces/IParametros"
//import { IPermisoParams } from "@/app/Interfaces/IParams"


export const GET = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await detalleOneFP1.getOneFinalidadProyecto(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}


export const DELETE = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await detalleOneFP1.deleteOneFinalidadProyecto(req,{params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

export const PUT =async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await detalleOneFP1.updatedOneFinalidadProyecto(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}