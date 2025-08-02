export class EstadoUpdatedAt{
    value: Date

    constructor(value:Date){
        this.value = value
        this.ensureIsValid()
    }

    private ensureIsValid(){
        if(this.value > new Date()){
            throw new Error('the date of created is over today!')
        }
    }
}