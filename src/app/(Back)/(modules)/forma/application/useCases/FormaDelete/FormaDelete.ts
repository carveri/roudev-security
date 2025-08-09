import { FormaRepository } from "../../../domain/ports/FormaRepository";


export class FormaDelete {
    constructor(private repository:FormaRepository){}

    async run(id:string){
        return this.repository.delete(id)
    }
}