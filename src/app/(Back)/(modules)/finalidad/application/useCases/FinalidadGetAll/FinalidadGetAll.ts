import { FinalidadRepository } from "../../../domain/ports/FinalidadRepository";


export class FinalidadGetAll {
    constructor(private repository:FinalidadRepository){}

    async run(){
        return this.repository.getAll()
    }
}