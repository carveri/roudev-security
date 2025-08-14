import { Flujo } from "../../../domain/entities/Flujo";
import { FlujoRepository } from "../../../domain/ports/FlujoRepository";


export class UpdateFlujo {

    constructor(private repository:FlujoRepository){}


    async run(id:string, ingresosPorVentas:number, valorTicket:number, crecimientoDelTicket: number){

        const flujo = new Flujo(
            id,
            ingresosPorVentas,
            valorTicket,
            crecimientoDelTicket
        )

        return this.repository.update(flujo)
    }

}