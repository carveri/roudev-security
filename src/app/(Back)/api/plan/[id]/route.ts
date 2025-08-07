
import { NextResponse } from "next/server"

import { IParams } from "@/app/Interfaces/IParametros"
import { NPlanControllers } from "@/app/(Back)/(modules)/plan/infrastructure/controllers/NPlanControllers"
import { IParams4 } from "@/app/(Back)/(modules)/estado/infrastructure/controllers/NEstadoController"
//import { IPermisoParams } from "@/app/Interfaces/IParams"

const controller = new NPlanControllers()

export const GET = async(req:Request, {params}:IParams4)=>{
    try {
        return NextResponse.json(await controller.getOneById({params}))
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

export const DELETE = async({params}:IParams)=>{
    try {
        return NextResponse.json(await controller.delete({params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}
