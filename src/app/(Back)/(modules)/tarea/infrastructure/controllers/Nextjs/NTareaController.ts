import { TareaContainer } from "@/app/(Back)/(modules)/shared/infrastructure/TareaContainer";
import { IParams } from "@/app/Interfaces/IParametros";

export class NTareaController {
    
    async create(req:Request){
        const {id, nombreTarea, fechaInicio, fechaTermino, creadorTarea, responsableTarea, equipoResponsableTarea, descripcionDeTarea, aportantes, equipoId, proyectoId, userId} = await req.json()
        return TareaContainer.tarea.create.run(id, nombreTarea, fechaInicio, fechaTermino, creadorTarea, responsableTarea, equipoResponsableTarea, descripcionDeTarea, aportantes, equipoId, proyectoId, userId)
    }

    async getAll(){
        return TareaContainer.tarea.getAll.run()
    }

    async getOneById(req:Request, {params}:IParams){
        const {id} = await params
        return TareaContainer.tarea.getOneById.run(id)
    }

    async update(req:Request, {params}:IParams){
        const {id} = await params
        const {nombreTarea, fechaInicio, fechaTermino, creadorTarea, responsableTarea, equipoResponsableTarea, descripcionDeTarea, aportantes, equipoId, proyectoId, userId} = await req.json()
        return TareaContainer.tarea.update.run(id, nombreTarea, fechaInicio, fechaTermino, creadorTarea, responsableTarea, equipoResponsableTarea, descripcionDeTarea, aportantes, equipoId, proyectoId, userId)
    }

    async delete(req:Request, {params}:IParams){
        const {id} = await params
        return TareaContainer.tarea.delete.run(id)
    }
}