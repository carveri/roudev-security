import { FinalidadContainer } from "@/app/(Back)/(modules)/shared/infrastructure/FinalidadContainer";
import { IParams } from "@/app/Interfaces/IParametros";


export class NFinalidadController {
    
    async create(req:Request){

        const {id, nombreFinalidadProyecto, manyProyectos} = await req.json()
        return FinalidadContainer.finalidad.create.run(id, nombreFinalidadProyecto, manyProyectos)
    }

    async getAll(){
        return FinalidadContainer.finalidad.getAll.run()
    }

    async getOneById(req:Request,{params}:IParams){
        const {id} = await params
        return FinalidadContainer.finalidad.getOneById.run(id)
    }

    async update(req:Request, {params}:IParams){
        const {id} = await params
        const {nombreFinalidadProyecto, manyProyectos} = await req.json()

        return FinalidadContainer.finalidad.update.run(id, nombreFinalidadProyecto, manyProyectos)
    }

    async delete(req:Request, {params}:IParams){

        const {id} = await params
        return FinalidadContainer.finalidad.delete.run(id)
    }
}