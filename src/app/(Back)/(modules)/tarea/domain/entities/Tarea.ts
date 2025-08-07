
export class Tarea {
    
    id:string
    nombreTarea:string
    fechaInicio:string
    fechaTermino: string
    creadorTarea: string
    responsableTarea:string
    equipoResponsableTarea:string
    descripcionDeTarea: string
    aportantes: string[]
    equipoId: string
    proyectoId:string
    userId:string

    
    constructor(id:string, nombreTarea:string, fechaInicio:string, fechaTermino: string, creadorTarea: string, responsableTarea:string,equipoResponsableTarea:string,descripcionDeTarea: string, aportantes: string[], equipoId: string, proyectoId:string, userId:string)
    {
        this.id = id
        this.nombreTarea = nombreTarea
        this.fechaInicio = fechaInicio
        this.fechaTermino = fechaTermino
        this.creadorTarea = creadorTarea
        this.responsableTarea = responsableTarea
        this.equipoResponsableTarea = equipoResponsableTarea
        this.descripcionDeTarea = descripcionDeTarea
        this.aportantes = aportantes
        this.equipoId = equipoId
        this.proyectoId = proyectoId
        this.userId = userId
    }
}