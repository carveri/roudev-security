import { Flujo } from "../../../domain/entities/Flujo";
import { FlujoRepository } from "../../../domain/ports/FlujoRepository";

export class CreateFlujo {
    constructor(private repository:FlujoRepository){}

    async run(id:string, ingresosPorVentas:number, valorTicket:number, crecimientoDelTicket: number){

        const flujo = new Flujo(
            id,
            ingresosPorVentas,
            valorTicket,
            crecimientoDelTicket
        )

        return this.repository.create(flujo)
    }
}