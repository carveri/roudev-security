
import { NextResponse } from "next/server"
import { detalleFlujoDeCaja } from "./controller"
//import { IPermisoParams } from "@/app/Interfaces/IParams"

interface Params {
    id: string
}

export interface IParams {
    params: Params
}

export const GET = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await detalleFlujoDeCaja.getOneFlujoDeCaja(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}


export const DELETE = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await detalleFlujoDeCaja.deleteOneFlujoDeCaja(req,{params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}