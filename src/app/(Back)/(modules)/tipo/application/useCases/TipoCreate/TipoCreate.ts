import { IManyProyectos, Tipo } from "../../../domain/entities/Tipo";
import { TipoRepository } from "../../../domain/ports/TipoRepository";


export class TipoCreate {

    constructor(private repository:TipoRepository){}

    async run(id:string, nombreTipoProyecto:string, manyProyectos:IManyProyectos){


        const tipo = new Tipo(
            id,
            nombreTipoProyecto,
            manyProyectos
        )

        return this.repository.create(tipo)
    }

}