import { IParams } from "@/app/Interfaces/IParametros"
import { NextResponse } from "next/server"
import { proy3 } from "./controller"

export const GET = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await proy3.getProyecto3(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}