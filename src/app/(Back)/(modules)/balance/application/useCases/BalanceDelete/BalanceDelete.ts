import { BalanceRepository } from "../../../domain/ports/BalanceRepository";
import { BalanceId } from "../../../domain/valueObjects/balanceId";

export class BalanceDelete{
    constructor(private repository: BalanceRepository){}

    // ACÁ LOS CASOS DE USO NO SE ENCARGAN DE HACER NADA CON LA DB, SOLO DAN ORDENES Y SE COMUNICAN EL EL REPOSITORIO 

    async run(id:string):Promise<void>{
        console.log('id del eliminado:', id);
        //const user = await this.repository.get(new UserId(id))
        
        return this.repository.delete(id)
    }
}