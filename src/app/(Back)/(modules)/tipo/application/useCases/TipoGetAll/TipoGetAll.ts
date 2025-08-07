import { TipoRepository } from "../../../domain/ports/TipoRepository";

export class TipoGetAll{

    constructor(private repository:TipoRepository){}

    async run(){
        return this.repository.getAll()
    }

}