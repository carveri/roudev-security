
interface Todo{
    id:string
}

export interface IManyProyectos {
    manyProyectos: Todo[]
}

export interface IManyUsers{
    manyUsers: Todo[]
}

export interface IManyTareas{
    manyTareas: Todo[]
}


export class Equipo{

    id:string
    nombreEquipo:string
    responsableEquipo: string
    puntosDelEquipo: number
    manyProyectos: IManyProyectos
    manyUsers: IManyUsers
    manyTareas: IManyTareas


    constructor(id:string, nombreEquipo:string, responsableEquipo:string, puntosDelEquipo: number, manyProyectos:IManyProyectos, manyUsers:IManyUsers, manyTareas:IManyTareas){
        this.id = id
        this.nombreEquipo = nombreEquipo
        this.responsableEquipo = responsableEquipo
        this.puntosDelEquipo = puntosDelEquipo
        this.manyProyectos = manyProyectos
        this.manyUsers = manyUsers
        this.manyTareas = manyTareas
    }
}