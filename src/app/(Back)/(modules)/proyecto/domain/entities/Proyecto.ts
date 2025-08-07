
interface Todo {
    id:string
}

export interface IManyUsers {
    manyUsers: Todo[]
}

export interface IManyEquipos {
    manyEquipos: Todo[]
}

export interface IManyTareas {
    manyTareas: Todo[]
}

export class Proyecto {
    
    id:string
    nombreProyecto:string
    fechaInicio:string
    responsableProyecto:string
    manyUsers: IManyUsers
    finalidadProyectoId:string
    tipoProyectoId: string
    manyEquipos: IManyEquipos
    manyTareas: IManyTareas
    
    constructor(id:string, nombreProyecto:string, fechaInicio:string, responsableProyecto:string, manyUsers: IManyUsers, finalidadProyectoId:string, tipoProyectoId: string, manyEquipos: IManyEquipos, manyTareas: IManyTareas){

        this.id = id
        this.nombreProyecto = nombreProyecto
        this.fechaInicio = fechaInicio
        this.responsableProyecto = responsableProyecto
        this.manyUsers = manyUsers
        this.finalidadProyectoId = finalidadProyectoId
        this.tipoProyectoId = tipoProyectoId
        this.manyEquipos = manyEquipos
        this.manyTareas = manyTareas
    }
}