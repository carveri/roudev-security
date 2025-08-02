// este es el controlador pricipal

import { EstadoContainer } from "@/app/(Back)/(modules)/shared/infrastructure/EstadoContainer"
import { Estado } from "../../../domain/entities/Estado"
import { EstadoId } from "../../../domain/valueObjects/EstadoId"

export class NextjsEstadoController {

        async create(req:Request):Promise<void>{
            const {id, isActive, createdAt, horaAt, updatedAt, costosOperativos} = await req.json()

            await EstadoContainer.estado.create.run(id, isActive, createdAt, horaAt, updatedAt, costosOperativos)
        }
    
        async getAll():Promise<Estado[]>{
            return await EstadoContainer.estado.getAll.run()
        }
    
        async getOneById({params}): Promise<Estado | null> {
            const {id} = params
            return await EstadoContainer.estado.getOneById.run(id) || null
        }
    
        async update(req:Request, {params}:any): Promise<void> {
            const {id} = await params
            const {isActive, createdAt, horaAt, updatedAt, costosOperativos} = await req.json()

            await EstadoContainer.estado.update.run(id, isActive, createdAt, horaAt, updatedAt, costosOperativos)
        }
    
        async delete(params:any): Promise<void> {
            const {id} = params

            await EstadoContainer.estado.delete.run(id)

        }
}