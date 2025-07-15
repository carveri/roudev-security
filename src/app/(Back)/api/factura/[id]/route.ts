

import { NextResponse } from "next/server"
import { detalleFactura1 } from "./controller"
//import { IPermisoParams } from "@/app/Interfaces/IParams"

interface Params {
    id: string
}

export interface IParams {
    params: Params
}

export const GET = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await detalleFactura1.getOneFactura(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}


export const DELETE = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await detalleFactura1.deleteOneFactura(req,{params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}