
import { NextResponse } from "next/server"
import { NEquipoController } from "../../(modules)/equipo/infrastructure/controllers/NEquipoController"

export const controller = new NEquipoController()

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