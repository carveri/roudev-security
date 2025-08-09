import { Forma, IManyUsers } from "../../../domain/entities/Forma";
import { FormaRepository } from "../../../domain/ports/FormaRepository";


export class FormaCreate {

    constructor(private repository:FormaRepository){}

    async run(id:string, nombreFormaPago:string[], numeroCuotas: number, manyUsers: IManyUsers){

        const forma = new Forma(
            id,
            nombreFormaPago,
            numeroCuotas,
            manyUsers
        )

        return this.repository.create(forma)
    }

}