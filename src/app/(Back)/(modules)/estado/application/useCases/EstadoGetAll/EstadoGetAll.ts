import { EstadoRepository } from "../../../domain/ports/EstadoRepository";


export class EstadoGetAll{

    constructor(private repository:EstadoRepository){}

    async run(id:string, costosOperativos:number){
        console.log('id en el run:', id, 'costosenelran:', costosOperativos);
        
        return this.repository.getAll(id, costosOperativos)
    }
}