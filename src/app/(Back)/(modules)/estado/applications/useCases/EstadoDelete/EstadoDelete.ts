import { EstadoRepository } from "../../../domain/ports/EstadoRepository";
import { EstadoId } from "../../../domain/valueObjects/EstadoId";


export class EstadoDelete {
    constructor(private repository: EstadoRepository){}

    async run(id:EstadoId):Promise<void>{
        return this.repository.delete(id)
    }
}   