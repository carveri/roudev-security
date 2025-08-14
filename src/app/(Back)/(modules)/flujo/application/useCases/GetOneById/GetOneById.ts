import { FlujoRepository } from "../../../domain/ports/FlujoRepository";

export class GetOneById{

    constructor(private repository:FlujoRepository){}

    async run(id:string){
        return this.repository.getOneById(id)
    }

}