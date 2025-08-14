import { FlujoRepository } from "../../../domain/ports/FlujoRepository";

export class DeleteFlujo {

    constructor(private repository:FlujoRepository){}

    async run(id:string){
        return this.repository.delete(id)
    }

}