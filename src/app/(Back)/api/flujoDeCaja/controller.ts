import { format } from "date-fns";
import prisma from "../../libs/prisma"


class FlujoDeCaja {
    postFlujoDeCaja =async(req:Request)=>{
        const {ingresosPorVentas, ValorTicket, creciemientoDelTicket, usuarioGratuitos,UsuariosActivos, NuevosUsuarios, ChurnedUsers, DisminucionDeUsuarios, usuariosActivos} = await req.json()
        
        const saveArea = await prisma.flujoDeCaja.create({
            data:{
                ingresosPorVentas: ingresosPorVentas,
                ValorTicket: ValorTicket,
                creciemientoDelTicket: creciemientoDelTicket,
                usuarioGratuitos: usuarioGratuitos,
                UsuariosActivos:UsuariosActivos,
                NuevosUsuarios:NuevosUsuarios,
                ChurnedUsers:ChurnedUsers,
                DisminucionDeUsuarios:DisminucionDeUsuarios,
                usuariosActivos:usuariosActivos,

                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm'),
                
            }
        })
        return saveArea
    }

    getFlujoDeCaja =async()=>{
        const getAllArea = await prisma.flujoDeCaja.findMany()
        return getAllArea
    }
}

export const flujoDeCaja1 = new FlujoDeCaja() 