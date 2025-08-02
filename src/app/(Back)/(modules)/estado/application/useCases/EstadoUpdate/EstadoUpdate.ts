import { Estado } from "../../../domain/entities/Estado";
import { EstadoRepository } from "../../../domain/ports/EstadoRepository";
import { CostosOperativos } from "../../../domain/valueObjects/CostosOperativos";
import { EstadoCreatedAt } from "../../../domain/valueObjects/EstadoCreatedAt";
import { EstadoHoraAt } from "../../../domain/valueObjects/EstadoHoraAt";
import { EstadoId } from "../../../domain/valueObjects/EstadoId";
import { EstadoIsActive } from "../../../domain/valueObjects/EstadoIsActive";
import { EstadoUpdatedAt } from "../../../domain/valueObjects/EstadoUpdatedAt";


export class EstadoUpdate {
    constructor(private repository:EstadoRepository){}

    async run(id:EstadoId, isActive: EstadoIsActive, createdAt: EstadoCreatedAt, horaAt: EstadoHoraAt, updatedAt: EstadoUpdatedAt, costosOperativos:CostosOperativos):Promise<void>{
        
        // le tengo que pasar el objeto
        const estado = new Estado(id, isActive, createdAt,  horaAt, updatedAt,  costosOperativos) 
        await this.repository.update(estado)
    }

}