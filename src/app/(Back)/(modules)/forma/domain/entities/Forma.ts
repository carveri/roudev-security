
interface Todo {
    id:string
}

export interface IManyUsers {
    manyUsers: Todo[]
}

export class Forma {
    
    id:string
    nombreFormaPago:string[]
    numeroCuotas: number
    manyUsers: IManyUsers
    
    constructor(id:string, nombreFormaPago:string[], numeroCuotas: number, manyUsers: IManyUsers){
        this.id = id
        this.nombreFormaPago = nombreFormaPago
        this.numeroCuotas = numeroCuotas
        this.manyUsers = manyUsers
    }
}