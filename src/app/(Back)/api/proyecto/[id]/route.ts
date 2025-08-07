

import { NextResponse } from "next/server"
import { proyectoDetalle1 } from "./controller"
import { NProyectoController } from "@/app/(Back)/(modules)/proyecto/infrastructure/controllers/Nextjs/NProyectoController"
//import { IPermisoParams } from "@/app/Interfaces/IParams"

interface Params {
    id: string
}

export interface IParams {
    params: Params
}

const controller = new NProyectoController()

export const GET = async(req:Request,{params}:IParams)=>{
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


export const PUT = async(req:Request, {params}: IParams)=>{
    try {
        return NextResponse.json(await controller.update(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}