import { FinalidadRepository } from "../../../domain/ports/FinalidadRepository";


export class FinalidadGetOneById{
    constructor(private respository:FinalidadRepository){}

    async run(id:string){
        return this.respository.getOneById(id)
    }
}