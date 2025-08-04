
import { NextResponse } from "next/server"
import { NextjsEstadoController } from "../../(modules)/estado/infrastructure/controllers/nextjs/NextjsEstadoController"



const controller = new NextjsEstadoController()

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