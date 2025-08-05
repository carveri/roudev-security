import { NAreaController } from "@/app/(Back)/(modules)/area/infrastructure/controllers/NAreaController"
import { NextResponse } from "next/server"
// import { AreaNextjsController } from "@/app/(Back)/(modules)/area/infrastructure/controllers/nextjs/AreaNextjsController"
// import { AreaId } from "@/app/(Back)/(modules)/area/domain/valueObjects/AreaId"


interface Params2 {
    id: string
}

export interface IParams {
    params: Params2
}

const controller = new NAreaController()

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