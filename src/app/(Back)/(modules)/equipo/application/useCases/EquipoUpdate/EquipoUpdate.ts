import { Equipo, IManyProyectos, IManyTareas, IManyUsers } from "../../../domain/entities/Equipo";
import { EquipoRepository } from "../../../domain/ports/EquipoRepository";


export class EquipoUpdate {
    constructor(private repository:EquipoRepository){}

    async run(id:string, nombreEquipo:string, responsableEquipo: string, puntosDelEquipo: number, manyProyectos: IManyProyectos, manyUsers: IManyUsers, manyTareas: IManyTareas){

        const equipo = new Equipo(
            id,
            nombreEquipo,
            responsableEquipo,
            puntosDelEquipo,
            manyProyectos,
            manyUsers,
            manyTareas
        )

        return this.repository.update(equipo)
    }

}