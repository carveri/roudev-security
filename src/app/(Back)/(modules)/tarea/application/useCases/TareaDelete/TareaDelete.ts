import { TareaRepository } from "../../../domain/ports/TareaRepository";


export class TareaDelete {
    constructor(private repository:TareaRepository){}

    async run(id:string){
        return this.repository.delete(id)
    }
}