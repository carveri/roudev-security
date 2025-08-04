import { Estado } from "../../../domain/entities/Estado";
import { EstadoRepository } from "../../../domain/ports/EstadoRepository";
import { EstadoId } from "../../../domain/valueObjects/EstadoId";


export class EstadoGetOneById{
    constructor(private repository:EstadoRepository){}

    async run(id:EstadoId):Promise<Estado | null>{
        return this.repository.getOneById(id)
    }
}