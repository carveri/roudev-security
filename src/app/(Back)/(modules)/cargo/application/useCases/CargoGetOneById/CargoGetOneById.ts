import { CargoRepository } from "../../../domain/ports/CargoRepository";


export class CargoGetOneById{
    constructor(private repository:CargoRepository){}

    async run(id:string){
        return this.repository.getOneBy(id)
    }
}