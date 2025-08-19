
import { AreaContainer } from "../../../shared/infrastructure/AreaContainer";
import { z } from "zod";

interface IPa {
    id:string
}

interface IParams2 {
    params: IPa
}

const createAreaSchema = z.object({
    id: z.string().nonempty(),
    nombreArea: z.string(),
    todos: z.object()
})


// aca va todo lo relacionado con prisma 
export class NAreaController {

    async create(req:Request):Promise<void>{
        const {id, nombreArea, todos} = await createAreaSchema.parse(req.json()) 
        return await AreaContainer.area.create.run(id, nombreArea, todos)
    }

    async getAll(){
        return await AreaContainer.area.getAll.run()
    }

    async getOneById({params}: IParams2){
        const {id} = await params
        return await AreaContainer.area.getOneById.run(id)
    }

    async update(req:Request, {params}:IParams2){
        const {id} = await params
        const {nombreArea, todos} = await req.json()
        await AreaContainer.area.update.run(id, nombreArea, todos)
    }

    async delete(req:Request, {params}:IParams2){
        const {id} = await params
        await AreaContainer.area.delete.run(id)
    }
}