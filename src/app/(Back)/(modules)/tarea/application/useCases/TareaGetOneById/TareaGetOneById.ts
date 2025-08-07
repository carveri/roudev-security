import { TareaRepository } from "../../../domain/ports/TareaRepository";


export class TareaGetOneById{
    constructor(private repository:TareaRepository){}

    async run(id:string){
        return this.repository.getOneById(id)
    }
}