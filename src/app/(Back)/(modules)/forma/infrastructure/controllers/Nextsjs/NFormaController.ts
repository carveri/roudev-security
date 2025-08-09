import { FormaContainer } from "@/app/(Back)/(modules)/shared/infrastructure/FormaContainer";
import { IParams } from "@/app/Interfaces/IParametros";


export class NFormaController {

    async create(req:Request){

        const {id, nombreFormaPago, numeroCuotas, manyUsers} = await req.json()
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