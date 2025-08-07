import { FacturaRepository } from "../../../domain/ports/FacturaRepository";


export class FacturaDelete {
    constructor(private repository:FacturaRepository){}

    async run(id:string){
        return this.repository.delete(id)
    }
}