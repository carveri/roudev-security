
import { NextResponse } from "next/server"
import { formaDePago1 } from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await formaDePago1.postFormaDePago(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await formaDePago1.getFormaDePago())
    } catch (error) {
        return NextResponse.json(error)
    }
}