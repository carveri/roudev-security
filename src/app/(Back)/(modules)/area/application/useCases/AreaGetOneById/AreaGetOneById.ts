import { AreaRepository } from "../../../domain/ports/AreaRepository";


export class AreaGetOneById {

    constructor(private repository:AreaRepository){}

    async run(id:string){
        
        return this.repository.getOneById(id)
    }


}