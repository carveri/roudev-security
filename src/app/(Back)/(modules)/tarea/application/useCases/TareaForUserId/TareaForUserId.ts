import { TareaRepository } from "../../../domain/ports/TareaRepository";


export class TareaForUserId{

    constructor(private repository:TareaRepository){}

    async run(id:string){

        return this.repository.getForUserId(id)
    }
}