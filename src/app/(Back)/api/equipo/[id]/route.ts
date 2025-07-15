
import { NextResponse } from "next/server"
import { detalleEquipo } from "./controller"
import { IParams } from "@/app/Interfaces/IParametros"
//import { IPermisoParams } from "@/app/Interfaces/IParams"


export const GET = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await detalleEquipo.getOneEquipo(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}


export const DELETE = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await detalleEquipo.deleteOneEquipo(req,{params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}
