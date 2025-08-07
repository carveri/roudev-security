import { EquipoRepository } from "../../../domain/ports/EquipoRepository";


export class EquipoDelete{

    constructor(private repository:EquipoRepository){}

    async run(id:string){
        return this.repository.delete(id)
    }



}