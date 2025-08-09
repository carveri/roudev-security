
export class Tarea {
    
    id:string
    nombreTarea:string
    fechaInicio:string
    fechaTermino: string
    etapaTarea:string
    creadorTarea: string
    responsableTarea:string
    equipoResponsableTarea:string
    urgenciaTarea:string
    descripcionDeTarea: string
    aportantes: string[]
    equipoId: string
    proyectoId:string
    userId:string

    
    constructor(id:string, nombreTarea:string,  fechaInicio:string, fechaTermino: string, etapaTarea:string,  creadorTarea: string, responsableTarea:string, urgenciaTarea:string, equipoResponsableTarea:string,descripcionDeTarea: string, aportantes: string[], equipoId: string, proyectoId:string, userId:string)
    {
        this.id = id
        this.nombreTarea = nombreTarea
        this.fechaInicio = fechaInicio
        this.fechaTermino = fechaTermino
        this.etapaTarea = etapaTarea
        this.creadorTarea = creadorTarea
        this.responsableTarea = responsableTarea
        this.equipoResponsableTarea = equipoResponsableTarea
        this.urgenciaTarea = urgenciaTarea
        this.descripcionDeTarea = descripcionDeTarea
        this.aportantes = aportantes
        this.equipoId = equipoId
        this.proyectoId = proyectoId
        this.userId = userId
    }
}