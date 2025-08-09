import { Forma } from "../entities/Forma";


export interface FormaRepository {

    create(forma:Forma):Promise<void>
    getAll():Promise<Forma[]>
    getOneById(id:string):Promise<Forma>
    update(forma:Forma):Promise<void>
    delete(id:string):Promise<void>
}