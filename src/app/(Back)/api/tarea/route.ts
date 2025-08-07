
import { NextResponse } from "next/server"
import { NTareaController } from "../../(modules)/tarea/infrastructure/controllers/Nextjs/NTareaController"

const controller = new NTareaController()

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
        return NextResponse.json(await controller.getAll())
    } catch (error) {
        return NextResponse.json(error)
    }
}