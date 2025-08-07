
interface Todo {
    id:string
}

export interface IManyProyectos{
    manyProyectos: Todo[]
}

export class Tipo {
    
    id:string
    nombreTipoProyecto:string
    manyProyectos: IManyProyectos
    
    constructor(id:string, nombreTipoProyecto:string, manyProyectos: IManyProyectos){
        this.id = id
        this.nombreTipoProyecto = nombreTipoProyecto
        this.manyProyectos = manyProyectos
    }
}