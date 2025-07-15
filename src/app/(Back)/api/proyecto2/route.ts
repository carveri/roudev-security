


import { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { detalleProyecto2 } from "./controller"
import { IParams } from "@/app/Interfaces/IParametros"
//import { IPermisoParams } from "@/app/Interfaces/IParams"


export const GET = async(req:NextRequest)=>{
    try {
        return NextResponse.json(await detalleProyecto2.getProyecto2(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}