import { Area } from "../entities/Area";


export interface AreaRepository {
    create(area:Area):Promise<void>
    getAll():Promise<Area[]>
    getOneById(id:string):Promise<Area>
    update(area:Area):Promise<void>
    delete(id:string):Promise<void>
}