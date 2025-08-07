
import { NextResponse } from "next/server"
import { NEstadoController } from "../../(modules)/estado/infrastructure/controllers/NEstadoController"




const controller = new NEstadoController()

// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await controller.create(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await controller.getAll(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}