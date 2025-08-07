import { Tarea } from "../../../domain/entities/Tarea";
import { TareaRepository } from "../../../domain/ports/TareaRepository";

export class TareaCreate{
    constructor(private repository:TareaRepository){}

    async run(id:string, nombreTarea:string, fechaInicio:string, fechaTermino: string, creadorTarea: string, responsableTarea:string,equipoResponsableTarea:string,descripcionDeTarea: string, aportantes: string[], equipoId: string, proyectoId:string, userId:string)
    {

        const tarea = new Tarea(
            id, 
            nombreTarea, 
            fechaInicio, 
            fechaTermino,
            creadorTarea,
            responsableTarea,
            equipoResponsableTarea, 
            descripcionDeTarea, 
            aportantes, 
            equipoId, 
            proyectoId, 
            userId
        )

        return this.repository.create(tarea)
    }
}