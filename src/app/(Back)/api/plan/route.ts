

import { NextResponse } from "next/server"
import { NPlanControllers } from "../../(modules)/plan/infrastructure/controllers/NPlanControllers"

export const controller = new NPlanControllers()

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