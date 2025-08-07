import { IManyEquipos, IManyTareas, IManyUsers, Proyecto } from "../../../domain/entities/Proyecto";
import { ProyectoRepository } from "../../../domain/ports/ProyectoRepository";


export class ProyectoCreate {

    constructor(private repository:ProyectoRepository){}

    async run(id:string, nombreProyecto:string, fechaInicio:string, responsableProyecto:string, manyUsers: IManyUsers, finalidadProyectoId:string, tipoProyectoId: string, manyEquipos: IManyEquipos, manyTareas: IManyTareas){

        const proyecto = new Proyecto(
            id,
            nombreProyecto,
            fechaInicio,
            responsableProyecto,
            manyUsers,
            finalidadProyectoId,
            tipoProyectoId,
            manyEquipos,
            manyTareas
        )

        return this.repository.create(proyecto)
    }

}