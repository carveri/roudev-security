import { Area, ITodos } from "../../../domain/entities/Area";
import { AreaRepository } from "../../../domain/ports/AreaRepository";


export class AreaUpdate {
    constructor(private repository:AreaRepository){}

    async run(id:string, nombreArea:string, todos:ITodos){

        const area = new Area(
            id,
            nombreArea,
            todos
        )

        return this.repository.update(area)
    }
}