import { EstadoCostosOperativos } from "../valueObjects/EstadoCostosOperativos"
import { EstadoId } from "../valueObjects/EstadoId"


export class Estado {

    id:EstadoId
    costosOperativos: EstadoCostosOperativos

    constructor(id:EstadoId, costosOperativos:EstadoCostosOperativos){
        this.id = id
        this.costosOperativos = costosOperativos
    }
}