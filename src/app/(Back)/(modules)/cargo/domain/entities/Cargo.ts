
interface Todo{
    id:string
}

export interface ITodoCargo{
    todos: Todo[]
}

export class Cargo {
    id: string
    nombreCargo: string
    sueldo: number
    areaId: string
    todos: ITodoCargo

    constructor(id: string, nombreCargo: string, sueldo:number, areaId: string, todos: ITodoCargo){
        this.id = id
        this.nombreCargo = nombreCargo
        this.sueldo = sueldo
        this.areaId = areaId
        this.todos = todos
    }
}