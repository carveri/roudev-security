

import { NextResponse } from "next/server"

import { IParams } from "@/app/Interfaces/IParametros"
//import { NextjsBalanceController } from "@/app/(Back)/(modules)/balance/infrastructure/controllers/nextjs/NextjsBalanceController"
import { NextjsEstadoController } from "@/app/(Back)/(modules)/estado/infrastructure/controllers/nextjs/NextjsEstadoController"
//import { IPermisoParams } from "@/app/Interfaces/IParams"
const controller = new NextjsEstadoController()

export const GET = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await controller.getOneById({params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}


export const DELETE = async(req:Request,{params}:IParams)=>{
    try {
        return NextResponse.json(await controller.delete({params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}


export const PUT = async(req:Request, {params}: IParams)=>{
    try {
        return NextResponse.json(await controller.update(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}