import { Flujo } from "../entities/Flujo";

export interface FlujoRepository {
    create(flujo:Flujo):Promise<void>
    getAll():Promise<Flujo[]>
    getOneById(id:string):Promise<Flujo>
    update(flujo:Flujo):Promise<void>
    delete(id:string):Promise<void>
}