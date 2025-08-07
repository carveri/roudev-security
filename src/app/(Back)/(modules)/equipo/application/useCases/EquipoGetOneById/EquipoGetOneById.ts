import { EquipoRepository } from "../../../domain/ports/EquipoRepository";


export class EquipoGetOneById{

    constructor(private repository: EquipoRepository){}

    async run(id:string){
        return this.repository.getOneById(id)
    }


}