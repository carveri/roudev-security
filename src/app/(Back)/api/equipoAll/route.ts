import { eal1 } from "./controller"
import { NextResponse } from "next/server"

export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await eal1.getEquipoAll())
    } catch (error) {
        return NextResponse.json(error)
    }
}