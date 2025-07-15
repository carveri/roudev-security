import { NextResponse } from "next/server"
import { tareaAll1 } from "./controller"

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await tareaAll1.getTareaAll(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}