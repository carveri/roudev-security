import { BalanceActivoCorriente } from "../valueObjects/balanceActivoCorriente"
import { BalanceActivoNoCorriente } from "../valueObjects/balanceActivoNoCorriente"
import { BalanceCapitalPropio } from "../valueObjects/balanceCapitalPropio"
import { BalanceId } from "../valueObjects/balanceId"

export class Balance {
    id: string
    activoCorriente: number
    activoNoCorriente: number
    capitalPropio: number


    constructor(id: string, activoCorriente:number, activoNoCorriente:number, capitalPropio:number){
        this.id = id
        this.activoCorriente = activoCorriente
        this.activoNoCorriente = activoNoCorriente
        this.capitalPropio = capitalPropio
    }

}