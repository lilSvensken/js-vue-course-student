class CarBrand{
    constructor(model, power, accelerationtoHundreed){
        this.model = model;
        this.power = power;
        this.accelerationtoHundreed = accelerationtoHundreed;
    }

    runDrug(time){
        return "${this.model} runs drag for ${time} seconds"
    }
    getWhoIsFaster(car){
        if(this.accelerationtoHundreed > car.accelerationtoHundreed){
            return "${car.model} is faster for ${this.accelerationtoHundreed - car.accelerationtoHundreed} seconds"
        }else{
            return '${this.model} is faster for ${car.accelerationtoHundreed - this.accelerationtoHundreed} seconds'
        }
    }
}
export default CarBrand;