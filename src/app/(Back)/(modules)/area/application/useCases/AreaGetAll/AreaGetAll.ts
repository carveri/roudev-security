import { AreaRepository } from "../../../domain/ports/AreaRepository";


export class AreaGetAll{
    constructor(private repository:AreaRepository){}

    async run(){
        return this.repository.getAll()
    }

}