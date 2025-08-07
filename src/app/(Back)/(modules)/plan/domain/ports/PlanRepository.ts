import { Plan } from "../entities/Plan";


export interface PlanRepository {
    create(plan:Plan):Promise<void>
    getAll():Promise<Plan[]>
    getOneById(id:string):Promise<Plan | null>
    update(plan:Plan):Promise<void>
    delete(id:string):Promise<void>
}