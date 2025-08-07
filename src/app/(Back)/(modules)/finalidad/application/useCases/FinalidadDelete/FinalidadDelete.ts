import { FinalidadRepository } from "../../../domain/ports/FinalidadRepository";

export class FinalidadDelete {

    constructor(private repository:FinalidadRepository){}

    async run(id:string){
        return this.repository.delete(id)
    }
}