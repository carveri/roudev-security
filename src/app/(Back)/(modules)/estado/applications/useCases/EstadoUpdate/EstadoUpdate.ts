import { Estado } from "../../../domain/entities/Estado";
import { EstadoRepository } from "../../../domain/ports/EstadoRepository";
import { EstadoCostosOperativos } from "../../../domain/valueObjects/EstadoCostosOperativos";
import { EstadoId } from "../../../domain/valueObjects/EstadoId";


export class EstadoUpdate {
    constructor(private repository:EstadoRepository){}

    async run(id:EstadoId, costosOperativos:EstadoCostosOperativos ):Promise<void>{
           
        const estado = new Estado(
            id, 
            costosOperativos
        )
        
        return this.repository.update(estado)
    }
}