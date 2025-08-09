import { FormaRepository } from "../../../domain/ports/FormaRepository";


export class FormaGetAll {
    constructor(private repository:FormaRepository){}

    async run(){
        return this.repository.getAll()
    }
}