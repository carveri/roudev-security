import { EstadoContainer } from "@/app/(Back)/(modules)/shared/infrastructure/EstadoContainer";
import { Estado } from "../../../domain/entities/Estado";
import { IParams } from "@/app/Interfaces/IParametros";


// aca es gestion, es decir voy a buscar al respository
export class NextjsEstadoController{
    async create(req:Request, res:Response):Promise<void>{
        const {id, costosOperativos} = await req.json()
        try {
            await EstadoContainer.estado.create.run(id, costosOperativos)
        } catch (error) {
            console.log(error);
        }
        
    }

    async getAll():Promise<Estado[]>{
        const estados = await EstadoContainer.estado.getAll.run()
        return estados
    }

    async getOneById({params}:IParams):Promise<Estado | null>{
        const {id} = await params
        const getOneById = await EstadoContainer.estado.getOneById.run(id)
        return getOneById || null
    }

    async update(req:Request, {params}:IParams):Promise<void>{
        const {id} = await params
        const {costosOperativos} = await req.json()
        await EstadoContainer.estado.update.run(id, costosOperativos)
        

    }

    async delete({params}:IParams):Promise<void>{
        const {id} = await params
        await EstadoContainer.estado.delete.run(id)
    }
}