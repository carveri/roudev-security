import prisma from "../../../../libs/prisma";
import { Balance } from "../../domain/entities/Balance";
import { BalanceRepository } from "../../domain/ports/BalanceRepository";
import { BalanceId } from "../../domain/valueObjects/balanceId";
import { format } from "date-fns";


export class PrismaBalanceRepository implements BalanceRepository {

    // 1) CREATE
    async create(balance:Balance):Promise<void>{
        await prisma.balanceGeneral.create({
            data: {
                id:balance.id,
                activoCorriente:balance.activoCorriente,
                activoNoCorriente:balance.activoNoCorriente,
                capitalPropio:balance.capitalPropio,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return console.log('as');
        
    }

    async getAll():Promise<Balance[]>{
        return await prisma.balanceGeneral.findMany()
    }

    async getOneById(id: string):Promise<Balance | null>{
        const getAOne = await prisma.balanceGeneral.findMany({
            where:{
                id:id 
            }
        })
        return getAOne
    }

    async update(balance:Balance):Promise<void>{
        const {id, activoCorriente, activoNoCorriente, capitalPropio} = balance
        await prisma.balanceGeneral.update({
            where:{
                id:id
            },
            data: {
                id,
                activoCorriente,
                activoNoCorriente,
                capitalPropio,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        
    }

    async delete(id:string):Promise<void>{
        await prisma.balanceGeneral.delete({
            where:{
                id:id
            }
        })
    }

}