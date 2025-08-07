import { IParams } from "@/app/Interfaces/IParametros";
import { IParams4 } from "../../../estado/infrastructure/controllers/NEstadoController";
import { PlanContainer } from "../../../shared/infrastructure/PlanContainer";

interface Todo {
    id:string
}

export interface IPlan{
    params:Todo[]
}


export class NPlanControllers{
    async create(req:Request){
        const {id, nombrePlan, manyUsers} = await req.json()
        return PlanContainer.plan.create.run(id, nombrePlan, manyUsers)
    }

    async getAll(){
        return PlanContainer.plan.getAll.run()
    }

    async getOneById({params}:IParams4){
        const {id} = await params
        return PlanContainer.plan.getOneById.run(id)
    }

    async update(req:Request, {params}:IParams4){

        const {id} = await params
        const {nombrePlan, manyUsers} = await req.json()

        return PlanContainer.plan.update.run(id, nombrePlan, manyUsers)
    }

    async delete({params}){
        const {id} = await params
        return PlanContainer.plan.delete.run(id)
    }


}