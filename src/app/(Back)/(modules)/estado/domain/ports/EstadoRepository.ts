import { Estado } from "../entities/Estado";
import { EstadoId } from "../valueObjects/EstadoId";

export interface EstadoRepository {
    create(estado:Estado):Promise<void>
    getAll():Promise<Estado[]>
    getOneById(id:EstadoId):Promise<Estado | null>
    update(estado:Estado):Promise<void>
    delete(estadoId:EstadoId):Promise<void>
}