// import { IParams } from "@/app/Interfaces/IParametros"
// import prisma from "../../libs/prisma"


// class UserResponsable {
//     getUserResponsable = async(req:Request, {params}:IParams)=>{
//         const {} = await params
//         const resultado = await prisma.user.findMany({
//             where:{
//                 proyectos:{
//                     some: {
//                         nombreProyecto: 'pro2jara'
//                     }
//                 }
//             },
//             select:{
//                 primerNombre: true
//             }
//         })
//         return resultado
//     }
// }


// export const userResponsable1 = new UserResponsable()