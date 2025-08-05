import { Area, ITodos } from "../../../domain/entities/Area";
import { AreaRepository } from "../../../domain/ports/AreaRepository";


export class AreaCreate {
    constructor(private repository:AreaRepository){}

    async run(id:string, nombreArea:string, todos:ITodos){

        const area = new Area(
            id,
            nombreArea,
            todos
        )


        return this.repository.create(area)
    }

}