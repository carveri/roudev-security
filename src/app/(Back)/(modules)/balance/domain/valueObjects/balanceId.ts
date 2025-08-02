

export class BalanceId{
    value: string

    constructor(value:string){
        this.value = value
        //this.ensureIsValid
    }

    //  private ensureIsValid(){
    //     if(this.value.length < 10){
    //         throw new Error(`El id tiene que a lo menos 10 digitos`)
    //     }
    // }
}