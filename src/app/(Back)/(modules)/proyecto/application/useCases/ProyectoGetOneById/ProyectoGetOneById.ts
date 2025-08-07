import { ProyectoRepository } from "../../../domain/ports/ProyectoRepository";


export class ProyectoGetOneById{

    constructor(private respository:ProyectoRepository){}

    async run(id:string){
        return this.respository.getOneById(id)
    }

}