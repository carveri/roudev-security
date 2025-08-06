import { EstadoRepository } from "../../../domain/ports/EstadoRepository";


export class EstadoDelete {

    constructor(private repository:EstadoRepository){}

    async run(id:string){
        return this.repository.delete(id)
    }


}