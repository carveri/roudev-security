

import { NextResponse } from "next/server"
import { proyectoDetalle1 } from "./controller"
//import { IPermisoParams } from "@/app/Interfaces/IParams"

interface Params {
    id: string
}

export interface IParams {
    params: Params
}

export const GET = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await proyectoDetalle1.getOneProyecto(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}


export const DELETE = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await proyectoDetalle1.deleteOneProyecto(req,{params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}


export const PUT = async(req:Request, {params}: IParams)=>{
    try {
        return NextResponse.json(await proyectoDetalle1.updatedOneProyecto(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}