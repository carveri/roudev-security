import { CostosOperativos } from "../valueObjects/CostosOperativos"
import { EstadoCreatedAt } from "../valueObjects/EstadoCreatedAt"
import { EstadoHoraAt } from "../valueObjects/EstadoHoraAt"
import { EstadoId } from "../valueObjects/EstadoId"
import { EstadoIsActive } from "../valueObjects/EstadoIsActive"
import { EstadoUpdatedAt} from "../valueObjects/EstadoUpdatedAt"


export class Estado {
    
    id: EstadoId
    isActive: EstadoIsActive
    createdAt: EstadoCreatedAt
    horaAt: EstadoHoraAt
    updatedAt: EstadoUpdatedAt
    costosOperativos: CostosOperativos
    
    constructor(id: EstadoId, isActive: EstadoIsActive, createdAt: EstadoCreatedAt, horaAt: EstadoHoraAt,  updatedAt:EstadoUpdatedAt, constosOperativos:CostosOperativos){
        this.id = id
        this.isActive= isActive
        this.createdAt = createdAt
        this.horaAt = horaAt
        this.updatedAt = updatedAt
        this.costosOperativos = constosOperativos
    }


}