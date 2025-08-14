import { FlujoContainer } from "@/app/(Back)/(modules)/shared/infrastructure/FlujoContainer";
import { IParams } from "@/app/Interfaces/IParametros";


export class NFlujoController {

    async create(req:Request):Promise<void>{

        const {id, ingresosPorVentas, valorTicket, crecimientoDelTicket} = await req.json()
        return FlujoContainer.create.run(id, ingresosPorVentas, valorTicket, crecimientoDelTicket)
    }

    async getAll(){

        return FlujoContainer.getAll.run()
    }

    async getOneById({params}:IParams){

        const {id} = await params
        return FlujoContainer.getOneById.run(id)
    }

    async update(req:Request, {params}:IParams){

        const {id} = await params
        const {ingresosPorVentas, valorTicket, crecimientoDelTicket} = await req.json()
        return FlujoContainer.update.run(id, ingresosPorVentas, valorTicket, crecimientoDelTicket)
    }

    async delete(req:Request,{params}:IParams){

        const {id} = await params
        return FlujoContainer.delete.run(id)
    }

}