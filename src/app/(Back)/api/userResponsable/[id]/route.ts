
import { NextResponse } from "next/server"
import { userResponsable1 } from "./controller"


// tuta get
export const GET = async(req, {params})=>{
    try {
        return NextResponse.json(await userResponsable1.getUserResponsable(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}