
import { NextResponse } from "next/server"
import { proyecto2detalle1 } from "./controller"
//import { IPermisoParams } from "@/app/Interfaces/IParams"

interface Params {
    id: string
}

export interface IParams {
    params: Params
}

export const GET = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await proyecto2detalle1.getProyectoDetalle(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}