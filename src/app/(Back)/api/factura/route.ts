
import { NextResponse } from "next/server"
import { factura1} from "./controller"
import { NFacturaController } from "../../(modules)/factura/infrastructure/controllers/Nextjs/NFacturaController"

const controller = new NFacturaController()

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