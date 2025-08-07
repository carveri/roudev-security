
import { NextResponse } from "next/server"
import { detalleOneFP1 } from "./controller"
import { IParams } from "@/app/Interfaces/IParametros"
import { NFinalidadController } from "@/app/(Back)/(modules)/finalidad/infrastructure/controllers/nextjs/NFinalidadController"
//import { IPermisoParams } from "@/app/Interfaces/IParams"

const controller = new NFinalidadController()

export const GET = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await controller.getOneById(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}


export const DELETE = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await controller.delete(req,{params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

export const PUT =async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await controller.update(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}