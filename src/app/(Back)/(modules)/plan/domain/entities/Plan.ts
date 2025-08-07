
interface Todo {
    id:string
}

export interface IPlan {
    manyUsers: Todo[]
}

export class Plan {
    id:string
    nombrePlan:string
    manyUsers: IPlan
    
    constructor(id:string, nombrePlan:string, manyUsers:IPlan){
        this.id = id
        this.nombrePlan = nombrePlan
        this.manyUsers = manyUsers
    }
}