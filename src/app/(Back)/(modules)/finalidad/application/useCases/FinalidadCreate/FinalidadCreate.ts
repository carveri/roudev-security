import { Finalidad, IManyProyectos } from "../../../domain/entities/Finalidad";
import { FinalidadRepository } from "../../../domain/ports/FinalidadRepository";


export class FinalidadCreate {

    constructor(private repository:FinalidadRepository){}

    async run(id:string, nombreFinalidadProyecto:string, manyProyectos:IManyProyectos){

        const finalidad = new Finalidad(
            id,
            nombreFinalidadProyecto,
            manyProyectos
        )


        return this.repository.create(finalidad)
    }

}