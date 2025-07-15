
import { NextResponse } from "next/server"
import { finalidadProyecto1 } from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await finalidadProyecto1.postFinalidadProyecto(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await finalidadProyecto1.getFinalidadProyecto())
    } catch (error) {
        return NextResponse.json(error)
    }
}