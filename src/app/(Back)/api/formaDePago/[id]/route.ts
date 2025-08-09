import { NFormaController } from "@/app/(Back)/(modules)/forma/infrastructure/controllers/Nextsjs/NFormaController"
import { IParams } from "@/app/Interfaces/IParametros"
import { NextResponse } from "next/server"


const controller = new NFormaController()

export const GET = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await controller.getOneById({params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}


export const DELETE = async(req:Request, {params}:IParams)=>{

    try {
        return NextResponse.json(await controller.delete(req, {params}))
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