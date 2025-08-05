import { CargoContainer } from "../../../shared/infrastructure/CargoContainer"
import { Cargo } from "../../domain/entities/Cargo"


interface IPa {
    id:string
}

interface IParams3 {
    params: IPa
}


export class NCargoController {

    async create(req:Request):Promise<void>{
        const {id, nombreCargo, sueldo, areaId, todos} = await req.json()
        return await CargoContainer.cargo.create.run(id, nombreCargo, sueldo, areaId, todos)
    }

    async getAll():Promise<Cargo[]>{
        return await CargoContainer.cargo.getAll.run()
    }

    async getOneById({params}:IParams3){
        const {id} = await params
        return await CargoContainer.cargo.getOneById.run(id)
    }

    async update(req:Request, {params}:IParams3){
        const {id} = await params
        const {nombreCargo, sueldo, areaId, todos} = await req.json()
        return await CargoContainer.cargo.update.run(id, nombreCargo, sueldo, areaId, todos)
    }

    async delete(req:Request, {params}:IParams3){
        const {id} = await params
        return await CargoContainer.cargo.delete.run(id)
    }
}