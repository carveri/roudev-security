import { EstadoRepository } from "../../../domain/ports/EstadoRepository";


export class EstadoGetOneById {

    constructor(private repository:EstadoRepository){}

    async run(id:string){
        return this.repository.getOneById(id)
    }


}