import { ProyectoRepository } from "../../../domain/ports/ProyectoRepository";


export class ProyectoGetAll{
    constructor(private repository:ProyectoRepository){}

    async run(){
        return this.repository.getAll()
    }
}