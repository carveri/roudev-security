import { Interface } from "readline"
import { EstadoContainer } from "../../../shared/infrastructure/EstadoContainer"

interface IParams {
    id:string
}

export interface IParams4{
    params: IParams
}

export class NEstadoController {

    async create(req:Request){
        const {id, costosOperativos} = await req.json()
        return EstadoContainer.estado.create.run(id, costosOperativos)
    }

    async getAll(req:Request){

        const url = new URL(req.url)

        const id:any = url.searchParams.get("id")
        const costosOperativos:any = url.searchParams.get("costosOperativos")

        console.log('id:', id, 'costosoperativos:', costosOperativos);
        return EstadoContainer.estado.getAll.run(id, costosOperativos)
    }

    async getOneById({params}:IParams4){
        const {id} = await params
        return EstadoContainer.estado.getOneById.run(id)
    }

    async update(req:Request, {params}: IParams4){
        const {id} = await params
        const {costosOperativos} = await req.json()
        return EstadoContainer.estado.update.run(id, costosOperativos)
    }

    async delete({params}){
        const {id} = await params
        return EstadoContainer.estado.delete.run(id)
    }
}