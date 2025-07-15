

import { NextResponse } from "next/server"
import { user2 } from "./controller";
import { IParams } from "@/app/Interfaces/IParametros";


// ruta get one
export const GET = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await user2.getUserDetalle2(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}