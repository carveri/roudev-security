

import { NextResponse } from "next/server"
import { plan1 } from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await plan1.postPlan(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await plan1.getPlan())
    } catch (error) {
        return NextResponse.json(error)
    }
}