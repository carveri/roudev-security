import { Balance } from "../../domain/entities/Balance";
import { BalanceRepository } from "../../domain/ports/BalanceRepository";
import { BalanceId } from "../../domain/valueObjects/balanceId";
//import { UserId } from "../../domain/valueObjects/userId";

// ESTA CLASE VA A SER GUARDAR Y OBTENER TODO DESDE UN ARRAY QUE SOLO ESTA EN MEMORIA.
export class InMemoryBalanceRepository implements BalanceRepository{
    // ESTE REPOSITORIO VA TENER QUE IMPLEMENTAR LA INTERFAZ DEL DEMINIO (UserRepository), OSEA LA QUE ESTA IN INTERFAZ(LA ULTIMA CAPA DEL DOMINIO)
    private balances: Balance[] = [];

    // metodo que usa el caso de uso y guarda en memoria
    async create(balance:Balance):Promise<void>{
        this.balances.push(balance)
    }

    async getAll():Promise<Balance[]>{
        return this.balances
    }

    async getOneById(id: BalanceId): Promise<Balance | null > {
        return this.balances.find((el)=>el.id === id) || null
    }

    async update(balanceGeneral:Balance):Promise<void>{
        const index = this.balances.findIndex((el)=>el.id === balanceGeneral.id)
        this.balances[index] = balanceGeneral;
    }

    async delete(id:BalanceId):Promise<void>{
        this.balances = this.balances.filter((el)=> el.id.value !== id.value)
    }
}
