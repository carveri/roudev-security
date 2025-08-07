import { PlanCreate } from "../../plan/application/useCases/PlanCreate/PlanCreate";
import { PlanDelete } from "../../plan/application/useCases/PlanDelete/PlanDelete";
import { PlanGetAll } from "../../plan/application/useCases/PlanGetAll/PlanGetAll";
import { PlanGetOneById } from "../../plan/application/useCases/PlanGetOneById/PlanGetOneById";
import { PlanUpdate } from "../../plan/application/useCases/PlanUpdate/PlanUpdate";
import { PlanPrismaRepository } from "../../plan/infrastructure/dbs/relational/PlanPrismaRepository";

const planRepository = new PlanPrismaRepository()

export const PlanContainer = {
    plan:{
        create: new PlanCreate(planRepository),
        getAll:new PlanGetAll(planRepository),
        getOneById: new PlanGetOneById(planRepository),
        update: new PlanUpdate(planRepository),
        delete: new PlanDelete(planRepository)
    }
}