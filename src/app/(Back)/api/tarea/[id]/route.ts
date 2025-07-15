
import { NextResponse } from "next/server"
import { detalleTarea1 } from "./controller"
import { IParams } from "@/app/Interfaces/IParametros"
//import { IPermisoParams } from "@/app/Interfaces/IParams"


export const GET = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await detalleTarea1.getOneTarea(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}


export const DELETE = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await detalleTarea1.deleteOneTarea(req,{params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}