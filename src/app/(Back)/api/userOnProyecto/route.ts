


import { NextRequest, NextResponse } from "next/server"
import { uop1 } from "./controller"


// ruta post
export const POST = async(req:NextRequest)=>{
    try {
        return NextResponse.json(await uop1.postUserOnProyecto(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// // tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await uop1.getUserOnProyecto(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}