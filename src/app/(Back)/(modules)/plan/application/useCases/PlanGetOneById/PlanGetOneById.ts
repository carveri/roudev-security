import { PlanRepository } from "../../../domain/ports/PlanRepository";


export class PlanGetOneById{
    constructor(private repository:PlanRepository){}

    async run(id:string){
        return this.repository.getOneById(id)
    }
}