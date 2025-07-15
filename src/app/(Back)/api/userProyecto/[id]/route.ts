
import { NextResponse } from "next/server"
import { detalleUserProyecto } from "./controller";
import { IParams } from "@/app/Interfaces/IParametros";


// ruta get one
export const GET = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await detalleUserProyecto.getUserPorProyecto(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// //ruta delete
// export const DELETE = async(req:Request, {params}:IParams)=>{
//     try {
//         return NextResponse.json(await user1.deleteUser(req, {params}))
//     } catch (error) {
//         return NextResponse.json(error)
//     }
// }