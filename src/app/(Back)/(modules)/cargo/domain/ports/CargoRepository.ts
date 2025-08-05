import { Cargo } from "../entities/Cargo";


export interface CargoRepository {

    create(cargo:Cargo):Promise<void>
    getAll():Promise<Cargo[]>
    getOneBy(id:string):Promise<Cargo>
    update(cargo:Cargo):Promise<void>
    delete(id:string):Promise<void>
}   