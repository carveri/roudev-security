// import { IParams } from "@/app/Interfaces/IParametros";
// import prisma from "../../../libs/prisma";


// class DetalleTarea {
//    getOneTarea =async(req:Request, {params}:IParams)=>{
//         const {id} = await params
//         const oneTarea = await prisma.tarea.findMany({
//             where:{
//                 id:id
//             },
//             include:{
//                 user:{
//                     include:{
//                         cargos: true
//                     }
//                 },
//                 equipo:{
//                     include:{
//                         proyectos: true
//                     }
//                 },

//             }
            
//         })

//         // // obtener los ids de los colaboradores
//         // let IdsAportantes:string[] = []
//         // if (oneTarea[0]?.aportantes.length ===0) {
//         //     return
//         // }
//         // else{
//         //     oneTarea[0]?.aportantes?.map((el)=>{
//         //         IdsAportantes.push(el)
//         //     })
//         // }


//         // // traer los nombres
//         // const nombres = []
//         // const final = await prisma.user.findMany({
//         //     where:{
//         //         id: IdsAportantes.map((el)=>{
//         //             el
//         //         })
//         //     }
//         // })


//         //const colabo = []
//         //oneTarea.push({colaboradores: IdsAportantes})
//         return oneTarea
//     } 

//     deleteOneTarea =async(req:Request, {params}:IParams)=>{
//         const {id}=await params
//         const deleteOneTarea = await prisma.tarea.delete({
//             where:{
//                 id:id
//             }
//         })
//         return deleteOneTarea
//     }
// }

// export const detalleTarea1 = new DetalleTarea()