import { PlanRepository } from "../../../domain/ports/PlanRepository";

export class PlanDelete {
    constructor(private repository:PlanRepository){}

    async run(id:string){

        return this.repository.delete(id)
    }
}