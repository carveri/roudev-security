import { EstadoRepository } from "../../../domain/ports/EstadoRepository";


export class EstadoGetAll{

    constructor(private repository:EstadoRepository){}

    async run(){
        return this.repository.getAll()
    }
}