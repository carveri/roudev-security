import { Estado } from "../../../domain/entities/Estado";
import { EstadoRepository } from "../../../domain/ports/EstadoRepository";
import { CostosOperativos } from "../../../domain/valueObjects/CostosOperativos";
import { EstadoCreatedAt } from "../../../domain/valueObjects/EstadoCreatedAt";
import { EstadoHoraAt } from "../../../domain/valueObjects/EstadoHoraAt";
import { EstadoId } from "../../../domain/valueObjects/EstadoId";
import { EstadoIsActive } from "../../../domain/valueObjects/EstadoIsActive";
import { EstadoUpdatedAt } from "../../../domain/valueObjects/EstadoUpdatedAt";


// aca tomo el requerimiento y lo dejo en el repositorio 
export class EstadoCreate {
    constructor(private repository:EstadoRepository){}

    async run(id:string, isActive:boolean, createdAt: Date, horaAt:string, updatedAt:Date, costosOperativos:number):Promise<void>{
        // aca creo el objeto (instancio la clase con la que voy a alimnetar el post)
        const estado = new Estado(
            new EstadoId(id),
            new EstadoIsActive(isActive),
            new EstadoCreatedAt(createdAt),
            new EstadoHoraAt(horaAt),
            new EstadoUpdatedAt(updatedAt),
            new CostosOperativos(costosOperativos)
        )

        return this.repository.create(estado)
    }
}
