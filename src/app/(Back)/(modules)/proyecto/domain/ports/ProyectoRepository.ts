import { Proyecto } from "../entities/Proyecto";

export interface ProyectoRepository {

    create(proyecto:Proyecto):Promise<void>
    getAll():Promise<Proyecto[]>
    getOneById(id:string):Promise<Proyecto | null>
    update(proyecto:Proyecto):Promise<void>
    delete(id:string):Promise<void>
}