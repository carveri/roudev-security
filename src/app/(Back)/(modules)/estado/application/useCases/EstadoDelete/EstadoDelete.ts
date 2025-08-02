import { Estado } from "../../../domain/entities/Estado";
import { EstadoRepository } from "../../../domain/ports/EstadoRepository";
import { EstadoId } from "../../../domain/valueObjects/EstadoId";


export class EstadoDelete{
    constructor(private repository:EstadoRepository){}

    async run(id:EstadoId):Promise<void>{
        await this.repository.delete(id)
    }

}