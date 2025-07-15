

import { NextResponse } from "next/server"
import { flujoDeCaja1 } from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await flujoDeCaja1.postFlujoDeCaja(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await flujoDeCaja1.getFlujoDeCaja())
    } catch (error) {
        return NextResponse.json(error)
    }
}