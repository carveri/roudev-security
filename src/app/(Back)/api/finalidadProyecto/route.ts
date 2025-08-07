
import { NextResponse } from "next/server"
import { finalidadProyecto1 } from "./controller"
import { NFinalidadController } from "../../(modules)/finalidad/infrastructure/controllers/nextjs/NFinalidadController"

const controller = new NFinalidadController()

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