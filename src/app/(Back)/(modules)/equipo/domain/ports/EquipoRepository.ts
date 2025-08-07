import { Equipo } from "../entities/Equipo";


export interface EquipoRepository {
    create(equipo:Equipo):Promise<void>
    getAll():Promise<Equipo[]>
    getOneById(id:string):Promise<Equipo>
    update(equipo:Equipo):Promise<void>
    delete(id:string):Promise<void>
}