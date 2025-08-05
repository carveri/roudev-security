import { AreaRepository } from "../../../domain/ports/AreaRepository";


export class AreaDelete{
    constructor(private repository:AreaRepository){}

    async run(id:string){
        return this.repository.delete(id)
    }

}