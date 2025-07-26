import { NextResponse } from "next/server"
import { detUOP } from "./controller"
import { IParams } from "@/app/Interfaces/IParametros"

export const GET = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await detUOP.getDataDetalle(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}