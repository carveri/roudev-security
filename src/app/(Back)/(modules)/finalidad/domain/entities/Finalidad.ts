
interface Todo {
    id:string
}

export interface IManyProyectos {
    manyProyectos: Todo[]
}

export class Finalidad {

    id:string
    nombreFinalidadProyecto:string
    manyProyectos: IManyProyectos

    constructor(id:string, nombreFinalidadProyecto:string, manyProyectos: IManyProyectos){
        this.id = id
        this.nombreFinalidadProyecto = nombreFinalidadProyecto
        this.manyProyectos = manyProyectos
    }
}