import { Balance } from "../../../domain/entities/Balance"
import { BalanceRepository } from "../../../domain/ports/BalanceRepository"
import { BalanceActivoCorriente } from "../../../domain/valueObjects/balanceActivoCorriente"
import { BalanceActivoNoCorriente } from "../../../domain/valueObjects/balanceActivoNoCorriente"
import { BalanceCapitalPropio } from "../../../domain/valueObjects/balanceCapitalPropio"
import { BalanceId } from "../../../domain/valueObjects/balanceId"


export class BalanceUpdate{
    constructor(private repository: BalanceRepository){}

    // metodo run o disparador
    async run(id: string, activoCorriente:number, activoNoCorriente:number, capitalPropio:number):Promise<void>{

        const balanceGeneral = new Balance(
            id,
            activoCorriente,
            activoNoCorriente,
            capitalPropio
        )
        return this.repository.update(balanceGeneral)
    }
}