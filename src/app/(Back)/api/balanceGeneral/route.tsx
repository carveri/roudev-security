
import { NextResponse } from "next/server"
import { balanceGeneral1 } from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await balanceGeneral1.postBalanceGeneral(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await balanceGeneral1.getBalanceGeneral())
    } catch (error) {
        return NextResponse.json(error)
    }
}