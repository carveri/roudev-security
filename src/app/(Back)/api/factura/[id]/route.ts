

import { NextResponse } from "next/server"
import { NFacturaController } from "@/app/(Back)/(modules)/factura/infrastructure/controllers/Nextjs/NFacturaController"
//import { IPermisoParams } from "@/app/Interfaces/IParams"

interface Params {
    id: string
}

export interface IParams {
    params: Params
}

const controller = new NFacturaController()

export const GET = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await controller.getOneById(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

export const PUT = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await controller.update(req,{params}))
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