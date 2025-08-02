import { BalanceNotFoundError} from "../../../domain/domainErrors/BalanceNotFoundError";
import { Balance} from "../../../domain/entities/Balance";
import { BalanceRepository } from "../../../domain/ports/BalanceRepository";
import { BalanceId} from "../../../domain/valueObjects/balanceId";


export class BalanceGetOneById{
    constructor(private repository: BalanceRepository){}
    // metodo run
    // le paso el id como string porque eso va a venir de la db, y es por ello que desoues la voy a cambiar por new UserId()
    async run(id:string):Promise<Balance>{
        //const id= 'perritos1'
        const balance = await this.repository.getOneById(id)

        //console.log('user que llamo:', user);
        

        if(!balance){
            // ACA USO UN ERROR PERSONALIZADO,PORQUE EL QUE VA A USAR ESTE METODO ES EL CONTROLADOR Y SI DA ERROR QUIERO DARLE LA MAYOR INFORMACION POSIBLE PARA QUE EL SE LA DE AL AGENTE QUE ESTA PIDIENDO EL RECURSO. (UN CLIENTE, OTRA API, UN CLIENTE MOVIL, ETC.)
            throw new BalanceNotFoundError('User not found!!!!!!!!!!!!!!!!!!!')
        }

        return balance
    }
}