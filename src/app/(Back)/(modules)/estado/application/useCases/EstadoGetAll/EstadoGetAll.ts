import { Estado } from "../../../domain/entities/Estado";
import { EstadoRepository } from "../../../domain/ports/EstadoRepository";


export class EstadoGetAll {
    constructor(private repository:EstadoRepository){}

    async run():Promise<Estado[]>{
        // aca voy a traer todo 
        return await this.repository.getAll()
    }
}