import { NextResponse } from "next/server"
import { us1} from "./controller"
// tuta get


export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await us1.postData(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

export const GET = async()=>{
    try {
        return NextResponse.json(await us1.getData())
    } catch (error) {
        return NextResponse.json(error)
    }
}