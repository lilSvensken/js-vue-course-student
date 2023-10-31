import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    constructor(model, power, accelerationTime, cost) {
        super(model, power, accelerationTime)
        this.cost = cost
    }

    set accelerationTime(value){
        if (value > 100){
            alert('Время разгона не должно превышать 100')
            return  
        }
        this.accelerationTime = value   
    }

    getIsExpensive(){
        if (this.cost > 1000000) {return true}
        return false
    }
}

export default BugattiBrand;