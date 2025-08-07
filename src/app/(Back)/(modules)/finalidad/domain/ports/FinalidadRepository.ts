import { Finalidad } from "../entities/Finalidad";


export interface FinalidadRepository {
    create(finalidad:Finalidad):Promise<void>
    getAll():Promise<Finalidad[]>
    getOneById(id:string):Promise<Finalidad | null>
    update(finalidad:Finalidad):Promise<void>
    delete(id:string):Promise<void>
}