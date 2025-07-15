
import prisma from "../../libs/prisma"
import { format } from "date-fns";
//import bcrypt from "bcryptjs";


class Factura {
    postFactura =async(req:Request)=>{
        const {nombreFactura, mesFacturacion,añoFacturacion,diaFacturacion,valorFacturacion} = await req.json()
        //const bpassword = bcrypt.hashSync(password)
        const saveUser = await prisma.factura.create({
            data:{
                nombreFactura,
                mesFacturacion,
                añoFacturacion,
                diaFacturacion,
                valorFacturacion,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveUser
    }

    getFactura =async()=>{
        const getUser = await prisma.factura.findMany({
            orderBy: {
                nombreFactura: 'asc'
            }
        })
        return getUser
    }
}

export const factura1 = new Factura()