import { ProyectoRepository } from "../../../domain/ports/ProyectoRepository";


export class ProyectoDelete {
    constructor(private repository:ProyectoRepository){}

    async run(id:string){
        return this.repository.delete(id)
    }
}