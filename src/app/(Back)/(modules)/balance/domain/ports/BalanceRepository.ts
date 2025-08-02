import { Balance } from "../entities/Balance";
import { BalanceId } from "../valueObjects/balanceId";


export interface BalanceRepository {

    // acá van los casos de uso, o las reglas de negocio
    create(balance: Balance):Promise<void>
    getAll():Promise<Balance[]>
    getOneById(id: string):Promise<Balance | null>
    update(balance:Balance):Promise<void>
    delete(id: string):Promise<void>
}