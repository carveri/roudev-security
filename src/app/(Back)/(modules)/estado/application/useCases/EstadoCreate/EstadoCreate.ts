import { Estado } from "../../../domain/entities/Estado";
import { EstadoRepository } from "../../../domain/ports/EstadoRepository";


export class EstadoCreate{

    constructor(private repository:EstadoRepository){}


    async run(id:string, costosOperativos:number){

        const estado = new Estado(
            id,
            costosOperativos
        )

        return this.repository.create(estado)
    }

}