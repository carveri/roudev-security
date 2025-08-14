import { FlujoRepository } from "../../../domain/ports/FlujoRepository";


export class GetAllFlujo {
    constructor(private repository:FlujoRepository){}

    async run(){
        return this.repository.getAll()
    }
}