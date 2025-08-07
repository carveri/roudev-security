import { IPlan, Plan } from "../../../domain/entities/Plan";
import { PlanRepository } from "../../../domain/ports/PlanRepository";


export class PlanCreate {

    constructor(private repository:PlanRepository){}

    async run(id:string, nombrePlan:string, manyUsers:IPlan){

        const plan = new Plan(
            id, 
            nombrePlan,
            manyUsers
        )

        return this.repository.create(plan)
    }

}