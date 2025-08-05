import { Cargo, ITodoCargo } from "../../../domain/entities/Cargo";
import { CargoRepository } from "../../../domain/ports/CargoRepository";

export class CargoCreate {

    constructor(private repository:CargoRepository){}

    async run(id:string,nombreCargo:string, sueldo:number, areaId:string, todos:ITodoCargo){

        const cargo = new Cargo(
            id,
            nombreCargo,
            sueldo, 
            areaId, 
            todos
        )

        return this.repository.create(cargo)
    }
}