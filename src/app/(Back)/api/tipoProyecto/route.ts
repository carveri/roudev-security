
import { NextResponse } from "next/server"
import { tipoProyecto1 } from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await tipoProyecto1.postTipoProyecto(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await tipoProyecto1.getTipoProyecto())
    } catch (error) {
        return NextResponse.json(error)
    }
}