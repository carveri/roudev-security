import { EquipoRepository } from "../../../domain/ports/EquipoRepository";


export class EquipoGetAll {
    constructor(private repository:EquipoRepository){}

    async run(){
        return this.repository.getAll()
    }


}