import { CargoRepository } from "../../../domain/ports/CargoRepository";


export class CargoDelete {
    constructor(private repository: CargoRepository){}

    async run(id:string){
        return this.repository.delete(id)
    }
}