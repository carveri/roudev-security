
import { NextResponse } from "next/server"
import { estadoDeResultados1 } from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await estadoDeResultados1.postEstadoDeResultados(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await estadoDeResultados1.getEstadoDeResultados())
    } catch (error) {
        return NextResponse.json(error)
    }
}