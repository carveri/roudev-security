import prisma from "../../libs/prisma"
import { format } from "date-fns";
import bcrypt from "bcryptjs";


class User {
    postUser =async(req:Request)=>{
        const {planId,puntosPersonales,fechaIngreso,dineroDisponible,statusEnProyecto,equity,rangoSalarialMaximo,rangoSalarialMinimo, siguiendo,perteneceAlProyecto,salarioActual,tipoTrabajoActual, tipoTrabajoIdeal, pago,trabajando, añosDeExperiencia, avatar, perfilGitHub, perfilLinkedin, telefonoLaboral, password, email, apellidoPaterno, apellidoMaterno, primerNombre, segundoNombre, email2, emailPersonal, telefonoPersonal, rutPersonal} = await req.json()
        const bpassword = bcrypt.hashSync(password)
        const saveUser = await prisma.user.create({
            data:{
                password:bpassword,
                email,
                apellidoPaterno,
                apellidoMaterno,
                primerNombre,
                segundoNombre,
                rutPersonal,
                email2,
                emailPersonal,
                telefonoPersonal,
                telefonoLaboral,
                perfilLinkedin,
                perfilGitHub,
                avatar,
                añosDeExperiencia,
                trabajando,
                pago,
                tipoTrabajoIdeal,
                tipoTrabajoActual,
                salarioActual,
                perteneceAlProyecto,
                siguiendo,
                rangoSalarialMinimo,
                rangoSalarialMaximo,
                equity,
                statusEnProyecto,
                dineroDisponible,
                fechaIngreso,
                puntosPersonales,
                planId,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveUser
    }

    getUser =async()=>{
        const getUser = await prisma.user.findMany({
            orderBy: {
                primerNombre: 'asc'
            }
        })
        return getUser
    }
}

export const user1 = new User()