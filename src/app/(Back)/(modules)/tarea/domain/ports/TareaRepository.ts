import { Tarea } from "../entities/Tarea";


export interface TareaRepository {
    create(tarea:Tarea):Promise<void>
    getAll():Promise<Tarea[]>
    getOneById(id:string):Promise<Tarea | null>
    update(tarea:Tarea):Promise<void>
    delete(id:string):Promise<void>
}