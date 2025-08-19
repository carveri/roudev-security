import * as z from "zod";

interface Todos {
    id:string
}

export interface ITodos {
    todos: Todos[] 
}


export class Area {
    
    id: string
    nombreArea: string
    todos: ITodos

    
    constructor(id:string, nombreArea:string, todos:ITodos){
        this.id = id
        this.nombreArea = nombreArea
        this.todos = todos

    }
}