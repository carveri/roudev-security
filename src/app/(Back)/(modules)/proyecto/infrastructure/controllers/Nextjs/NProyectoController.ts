import { ProyectoContainer } from "@/app/(Back)/(modules)/shared/infrastructure/ProyectoContainer";
import { IParams } from "@/app/Interfaces/IParametros";


export class NProyectoController {

        async create(req:Request){
            const {id, nombreProyecto, fechaInicio, responsableProyecto, manyUsers, finalidadProyectoId, tipoProyectoId, manyEquipos, manyTareas} = await req.json()
            return ProyectoContainer.proyecto.create.run(id, nombreProyecto, fechaInicio, responsableProyecto, manyUsers, finalidadProyectoId, tipoProyectoId, manyEquipos, manyTareas)
        }

        async getAll(){
            return ProyectoContainer.proyecto.getAll.run()
        }

        async getOneById(req:Request, {params}:IParams){

            const {id} = await params

            return ProyectoContainer.proyecto.getOneById.run(id)
        }

        async update(req:Request, {params}:IParams){
            const {id} = await params
            const {nombreProyecto, fechaInicio, responsableProyecto, manyUsers, finalidadProyectoId, tipoProyectoId, manyEquipos, manyTareas} = await req.json()
            return ProyectoContainer.proyecto.update.run(id, nombreProyecto, fechaInicio, responsableProyecto, manyUsers, finalidadProyectoId, tipoProyectoId, manyEquipos, manyTareas)
        }

        async delete(req:Request, {params}:IParams){
            const {id} = await params
            return ProyectoContainer.proyecto.delete.run(id)
        }
}