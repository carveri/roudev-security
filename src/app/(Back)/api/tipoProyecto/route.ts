
import { NextResponse } from "next/server"
import { tipoProyecto1 } from "./controller"
import { NTipoControllers } from "../../(modules)/tipo/infrastructure/controllers/Nextjs/NTipoControllers"


export const controller = new NTipoControllers() 

// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await controller.create(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async()=>{
    try {
        return NextResponse.json(await controller.getAll())
    } catch (error) {
        return NextResponse.json(error)
    }
}