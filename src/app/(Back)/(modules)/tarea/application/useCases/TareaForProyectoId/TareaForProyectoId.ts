import { TareaRepository } from "../../../domain/ports/TareaRepository";


export class TareaForProyectoId {

    constructor(private repository:TareaRepository){}

    async run(id:string){
        return this.repository.getForProyectoId(id)

    }

}