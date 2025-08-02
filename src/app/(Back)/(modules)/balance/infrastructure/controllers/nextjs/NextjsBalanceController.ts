import prisma from "@/app/(Back)/libs/prisma"
import { BalanceId } from "../../../domain/valueObjects/balanceId"
import { IParams } from "@/app/Interfaces/IParametros"
import { Balance } from "../../../domain/entities/Balance"
import { ServiceContainer } from "@/app/(Back)/(modules)/shared/infrastructure/ServiceContainer"



export class NextjsBalanceController {
    //1)
        async getAll():Promise<Balance[]>{
           const balances = await ServiceContainer.balance.getAll.run()
            console.log('balances:', balances);

            return balances
        }

        //2)
        create =async(req:Request):Promise<void>=>{
        const {id, activoCorriente, activoNoCorriente, capitalPropio} = await req.json()
        try {
            await ServiceContainer.balance.create.run(id, activoCorriente, activoNoCorriente,capitalPropio)
            
        } catch (error) { 
            console.log('eroorrrr:', error);
        }
        
        
        }

        getOneById = async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const getOneBalance = await ServiceContainer.balance.getOneById.run(id)
        return getOneBalance || null

    }




        update = async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const {activoCorriente,activoNoCorriente, capitalPropio} = await req.json()
        await ServiceContainer.balance.update.run(id, activoCorriente, activoNoCorriente, capitalPropio)
        
    }

        delete = async(req:Request, {params}:IParams)=>{
        const {id} = await params
        await ServiceContainer.balance.delete.run(id)
    }
    
}