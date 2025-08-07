
import { NextResponse } from "next/server"
import { proyecto1 } from "./controller"
import { NProyectoController } from "../../(modules)/proyecto/infrastructure/controllers/Nextjs/NProyectoController"

const controller = new NProyectoController()

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