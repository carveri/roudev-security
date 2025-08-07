import { PlanRepository } from "../../../domain/ports/PlanRepository";

export class PlanGetAll{
    constructor(private repository:PlanRepository){}

    async run(){
        return this.repository.getAll()
    }
    
}