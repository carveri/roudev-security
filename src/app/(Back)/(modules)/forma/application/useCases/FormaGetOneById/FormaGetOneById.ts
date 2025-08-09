import { FormaRepository } from "../../../domain/ports/FormaRepository";


export class FormaGetOneById {
    constructor(private repository:FormaRepository){}

    async run(id:string){
        return this.repository.getOneById(id)
    }
}