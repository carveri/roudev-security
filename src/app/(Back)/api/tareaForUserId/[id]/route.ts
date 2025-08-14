
import { NextResponse } from "next/server"
import { IParams } from "@/app/Interfaces/IParametros"
import { NTareaController } from "@/app/(Back)/(modules)/tarea/infrastructure/controllers/Nextjs/NTareaController"
//import { IPermisoParams } from "@/app/Interfaces/IParams"

const controller = new NTareaController()

export const GET = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await controller.getForUser(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}