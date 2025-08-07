import { TipoRepository } from "../../../domain/ports/TipoRepository";

export class TipoGetOneById{
    constructor(private respository:TipoRepository){}

    async run(id:string){
        return this.respository.getOneById(id)
    }
}