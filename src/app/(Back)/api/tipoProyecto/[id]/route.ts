

import { NextResponse } from "next/server"
import { detalleTP1 } from "./controller"
import { IParams } from "@/app/Interfaces/IParametros"
import { NTipoControllers } from "@/app/(Back)/(modules)/tipo/infrastructure/controllers/Nextjs/NTipoControllers"
//import { IPermisoParams } from "@/app/Interfaces/IParams"

export const controller = new NTipoControllers() 

export const GET = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await controller.getOneById({params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

export const DELETE = async(req:Request, {params}:IParams)=>{
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



