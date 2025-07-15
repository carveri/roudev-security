
import { NextResponse } from "next/server"
import { factura1} from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await factura1.postFactura(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async()=>{
    try {
        return NextResponse.json(await factura1.getFactura())
    } catch (error) {
        return NextResponse.json(error)
    }
}