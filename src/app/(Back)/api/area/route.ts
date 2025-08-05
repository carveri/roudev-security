
import { NextResponse } from "next/server"
import { NAreaController } from "../../(modules)/area/infrastructure/controllers/NAreaController"



// acá voy a decirle que controlador voy a utilizar ( next, exprees, nest, ...)
const controller = new NAreaController()

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