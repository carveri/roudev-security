
import { NextResponse } from "next/server"
import { NextjsBalanceController } from "../../(modules)/balance/infrastructure/controllers/nextjs/NextjsBalanceController"
import { InMemoryBalanceRepository } from "../../(modules)/balance/infrastructure/db/InMemoryBalanceRepository"

//const nextjsBalanceController = new NextjsBalanceController()
const controller = new NextjsBalanceController()


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await controller.create(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async()=>{
    try {
        return NextResponse.json(await controller.getAll())
    } catch (error) {
        return NextResponse.json(error)
    }
}