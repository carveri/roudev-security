import prisma from "../../libs/prisma"
import { format } from "date-fns";

interface ITodos{
    todos:[
        {id:string}
    ]
} 

class Proyecto {
    postProyecto =async(req:Request)=>{
        const {todos, ceo, empleado, presupuestoDelProyecto, nombreProyecto, iconoProyecto, fechaInicio, fechaTermino, fechaSuspension, fechaActualizacion, statusProyecto, puntosDelProyecto, responsableProyecto, userId, finalidadProyectoId, tipoProyectoId} = await req.json()
        //const lista = new Array(100)
        const saveProyecto = await prisma.proyecto.create({
            data:{
                nombreProyecto, 
                iconoProyecto, 
                fechaInicio, 
                fechaTermino,
                fechaSuspension, 
                fechaActualizacion, 
                statusProyecto, 
                puntosDelProyecto, 
                presupuestoDelProyecto,
                responsableProyecto,  
                finalidadProyectoId,
                tipoProyectoId,
                ceo,
                empleado,
                // users:{
                //     connect:[
                //     {
                //         id:id1
                //     },
                //     // {
                //     //     id:id2
                //     // },
                //     // {
                //     //     id:id3
                //     // },
                //     // {
                //     //     id:id2
                //     // }
                // ]
                // },
                users:{
                    connect:todos
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveProyecto
    }

    getProyecto =async()=>{
        const getAllProyecto = await prisma.proyecto.findMany({
            orderBy:{
                nombreProyecto:'asc'
            }
        })
        return getAllProyecto
    }
}

export const proyecto1 = new Proyecto()