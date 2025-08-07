import { TareaRepository } from "../../../domain/ports/TareaRepository";


export class TareaGetAll{
    constructor(private repository:TareaRepository){}

    async run(){
        return this.repository.getAll()
    }
}