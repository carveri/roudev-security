
// import { NextResponse } from "next/server"
// import { userProyecto1} from "./controller"

import { NextResponse } from "next/server"
import { detalleUserProyecto1 } from "./controller"


// // ruta post
// export const POST = async(req:Request)=>{
//     try {
//         return NextResponse.json(await user1.postUser(req))
//     } catch (error) {
//         return NextResponse.json(error)
//     }
// }

// tuta get
// tuta get
export const GET = async()=>{
    try {
        return NextResponse.json(await detalleUserProyecto1.getUserPorProyecto1())
    } catch (error) {
        return NextResponse.json(error)
    }
}