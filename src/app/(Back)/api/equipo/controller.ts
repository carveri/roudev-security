// import prisma from "../../libs/prisma"
// import { format } from "date-fns";

// class Equipo {
//     postEquipo =async(req:Request)=>{
//         const {todoTareas, todoUsuarios, todoProyectos, nombreEquipo, responsableEquipo, puntosDelEquipo} = await req.json()
//         const saveEquipo = await prisma.equipo.create({
//             data:{
//                 nombreEquipo,
//                 responsableEquipo,
//                 puntosDelEquipo,
//                 users:{
//                     connect: todoUsuarios
//                 },
//                 proyectos:{
//                     connect: todoProyectos
//                 },
//                 tareas:{
//                     connect: todoTareas
//                 },
//                 createdAt: format(new Date(), 'dd/MM/yyyy'),
//                 horaAt: format(new Date(), 'H:mm')
//             }
//         })
//         return saveEquipo
//     }

//     getEquipo = async(req:Request)=>{
//         const url = new URL(req.url)

//         const nombreProyecto:any = url.searchParams.get("nombreProyecto")
//         //const userId:any = url.searchParams.get("userId")
//         const bandera:any = Boolean(url.searchParams.get("bandera")) 

//         const getAllEquipos = await prisma.equipo.findMany({
//             where:{
//                 proyectos:{
//                     some:{
//                         nombreProyecto: nombreProyecto
//                     }
//                 },
//                 AND:{
//                     isActive: bandera

//                 }
//                 //isActive: bandera
                
//             }
//         })
//         return getAllEquipos
//     }
    
// }

// export const equipo1 = new Equipo()