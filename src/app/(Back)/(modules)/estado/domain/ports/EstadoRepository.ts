import { Estado } from "../entities/Estado";


export interface EstadoRepository {

    create(estado:Estado):Promise<void>
    getAll():Promise<Estado[]>
    getOneById(id:string):Promise<Estado | null>
    update(estado:Estado):Promise<void>
    delete(id:string):Promise<void>
}   