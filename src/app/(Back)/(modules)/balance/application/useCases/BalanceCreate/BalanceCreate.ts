import { Balance } from "../../../domain/entities/Balance";
import { BalanceRepository } from "../../../domain/ports/BalanceRepository";
import { BalanceActivoCorriente } from "../../../domain/valueObjects/balanceActivoCorriente";
import { BalanceActivoNoCorriente } from "../../../domain/valueObjects/balanceActivoNoCorriente";
import { BalanceCapitalPropio } from "../../../domain/valueObjects/balanceCapitalPropio";
import { BalanceId } from "../../../domain/valueObjects/balanceId";


export class BalanceCreate {
 
    constructor(private repository: BalanceRepository){}

    async run(id: string, activoCorriente:number, activoNoCorriente:number, capitalPropio:number){        
        // este es el objeto que le voy a pasar al repo para que sea guardado
        const balance = new Balance(
            id,
            activoCorriente,
            activoNoCorriente,
            capitalPropio
        )
        return this.repository.create(balance)
    }
}