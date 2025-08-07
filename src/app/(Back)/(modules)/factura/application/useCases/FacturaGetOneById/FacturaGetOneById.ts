import { FacturaRepository } from "../../../domain/ports/FacturaRepository";


export class FacturaGetOneById{
    constructor(private repository:FacturaRepository){}

    async run(id:string){
        return this.repository.getOneById(id)
    }
}