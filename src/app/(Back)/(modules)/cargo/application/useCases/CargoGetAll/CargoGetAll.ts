import { CargoRepository } from "../../../domain/ports/CargoRepository";


export class CargoGetAll {
    constructor(private repository:CargoRepository){}

    async run(){
        return this.repository.getAll()
    }
}