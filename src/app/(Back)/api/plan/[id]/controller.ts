// import { IParams } from "@/app/Interfaces/IParametros";
// import prisma from "../../../libs/prisma";

// class DetallePlan {
//     getOnePlan = async(req:Request, {params}:IParams)=>{
//         const {id} = await params
//         const getOnePlan = await prisma.plan.findMany({
//             where:{
//                 id:id
//             }
//         })
//         return getOnePlan
//     }


//     deleteOnePlan = async(req:Request, {params}:IParams)=>{
//         const {id} = await params
//         const deleteOnePlan = await prisma.plan.delete({
//             where:{
//                 id:id
//             }
//         })
//         return deleteOnePlan
//     }
// }

// export const detallePlan1 = new DetallePlan()