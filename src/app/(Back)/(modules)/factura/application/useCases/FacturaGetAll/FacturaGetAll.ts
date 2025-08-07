import { FacturaRepository } from "../../../domain/ports/FacturaRepository";


export class FacturaGetAll{
    constructor(private repository:FacturaRepository){}

    async run(){
        return this.repository.getAll()
    }
}