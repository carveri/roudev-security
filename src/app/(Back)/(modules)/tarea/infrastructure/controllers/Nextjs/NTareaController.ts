import { TareaContainer } from "@/app/(Back)/(modules)/shared/infrastructure/TareaContainer";
import { IParams } from "@/app/Interfaces/IParametros";

export class NTareaController {
    
    async create(req:Request){
        const {id, nombreTarea, fechaInicio, fechaTermino, etapaTarea, creadorTarea, responsableTarea, equipoResponsableTarea, urgenciaTarea, descripcionDeTarea, aportantes, equipoId, proyectoId, userId} = await req.json()
        return TareaContainer.tarea.create.run(id, nombreTarea, fechaInicio, fechaTermino, etapaTarea, creadorTarea, responsableTarea, equipoResponsableTarea, urgenciaTarea, descripcionDeTarea, aportantes, equipoId, proyectoId, userId)
    }

    async getAll(){
        return TareaContainer.tarea.getAll.run()
    }

    async getOneById(req:Request, {params}:IParams){
        const {id} = await params
        return TareaContainer.tarea.getOneById.run(id)
    }

    async getForUser(req:Request, {params}:IParams){
        const {id} = await params
        return TareaContainer.tarea.getForUser.run(id)
    }
    
    async getForProyectoId(req:Request, {params}:IParams){
        const {id} = await params
        return TareaContainer.tarea.getForProyectoId.run(id)
    }

    async update(req:Request, {params}:IParams){
        const {id} = await params
        const {nombreTarea,  fechaInicio, fechaTermino, etapaTarea, creadorTarea, responsableTarea, equipoResponsableTarea, urgenciaTarea, descripcionDeTarea, aportantes, equipoId, proyectoId, userId} = await req.json()
        console.log('urgencia tarea en contrrtrt:', urgenciaTarea);
        return TareaContainer.tarea.update.run(id, nombreTarea,  fechaInicio, fechaTermino, etapaTarea, creadorTarea, responsableTarea, equipoResponsableTarea, urgenciaTarea, descripcionDeTarea, aportantes, equipoId, proyectoId, userId)
    }

    async delete(req:Request, {params}:IParams){
        const {id} = await params
        return TareaContainer.tarea.delete.run(id)
    }
}