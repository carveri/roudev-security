import { Factura } from "../entities/Factura";


export interface FacturaRepository {

    create(factura:Factura):Promise<void>
    getAll():Promise<Factura[]>
    getOneById(id:string):Promise<Factura>
    update(factura:Factura):Promise<void>
    delete(id:string):Promise<void>
}