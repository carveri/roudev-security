import { Tipo } from "../entities/Tipo";


export interface TipoRepository {

    create(tipo:Tipo):Promise<void>
    getAll():Promise<Tipo[]>
    getOneById(id:string):Promise<Tipo | null>
    update(tipo:Tipo):Promise<void>
    delete(id:string):Promise<void>
}