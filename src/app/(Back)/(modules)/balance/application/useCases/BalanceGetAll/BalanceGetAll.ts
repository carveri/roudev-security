import { Balance } from "../../../domain/entities/Balance";
import { BalanceRepository } from "../../../domain/ports/BalanceRepository";


export class BalanceGetAll {
    constructor(private repository: BalanceRepository){}

    async run():Promise<Balance[]>{
        return this.repository.getAll()
    }
}