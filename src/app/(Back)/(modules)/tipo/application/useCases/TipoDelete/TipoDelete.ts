import { TipoRepository } from "../../../domain/ports/TipoRepository";

export class TipoDelete {

    constructor(private repository:TipoRepository){}

    async run(id:string){
        return this.repository.delete(id)
    }
}