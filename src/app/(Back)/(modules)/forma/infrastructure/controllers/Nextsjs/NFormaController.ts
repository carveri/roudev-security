import { FormaContainer } from "@/app/(Back)/(modules)/shared/infrastructure/FormaContainer";
import { IParams } from "@/app/Interfaces/IParametros";
import { z } from "zod";


const list = z.object({
    manyUsers: z.string().array()
})
// schemas de zod
const createFormaSchema = z.object({
    id: z.string().nonempty(),
    nombreFormaPago: z.string().array(),
    numeroCuotas: z.number(),
    manyUsers: z.object(z.string())
})


export class NFormaController {

    async create(req:Request){

        const {id, nombreFormaPago, numeroCuotas, manyUsers} = await createFormaSchema.parse(req.json()) 
        return FormaContainer.forma.create.run(id, nombreFormaPago, numeroCuotas, manyUsers)
    }

    async getAll(){
        return FormaContainer.forma.getAll.run()
    }

    async getOneById({params}:IParams){

        const {id} = await params
        return FormaContainer.forma.getOneById.run(id)
    }

    async update(req:Request, {params}:IParams){
        const {id} = await params
        const {nombreFormaPago, numeroCuotas, manyUsers} = await req.json()
        return FormaContainer.forma.update.run(id, nombreFormaPago, numeroCuotas, manyUsers)
    }

    async delete(req:Request, {params}:IParams){
        const {id} = await params
        return FormaContainer.forma.delete.run(id)
    }

}