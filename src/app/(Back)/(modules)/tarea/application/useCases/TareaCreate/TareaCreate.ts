import { Tarea } from "../../../domain/entities/Tarea";
import { TareaRepository } from "../../../domain/ports/TareaRepository";

export class TareaCreate{
    constructor(private repository:TareaRepository){}

    async run(id:string, nombreTarea:string, fechaInicio:string, fechaTermino: string, etapaTarea:string, creadorTarea: string, responsableTarea:string,equipoResponsableTarea:string,urgenciaTarea:string,  descripcionDeTarea: string, aportantes: string[], equipoId: string, proyectoId:string, userId:string)
    {

        const tarea = new Tarea(
            id, 
            nombreTarea, 
            fechaInicio, 
            fechaTermino,
            etapaTarea,
            creadorTarea,
            responsableTarea,
            equipoResponsableTarea, 
            urgenciaTarea,
            descripcionDeTarea, 
            aportantes, 
            equipoId, 
            proyectoId, 
            userId
        )

        return this.repository.create(tarea)
    }
}