

import { NextResponse } from "next/server"
import { flujoDeCaja1 } from "./controller"
import { NFlujoController } from "../../(modules)/flujo/infrastructure/controllers/NextJs/NFlujoController"

const controller = new NFlujoController()


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