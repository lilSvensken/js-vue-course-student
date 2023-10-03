class CarBrand {
    constructor (model, power, acceleration_time){
        this.model = model
        this.power = power
        this.acceleration_time = acceleration_time
    }
    runDrag(time){
        return `${this.model} runs drag for ${time} seconds`
    }
    getWhoIsFaster(car){
        if (this.acceleration_time < car.acceleration_time){
            const k = car.acceleration_time - this.acceleration_time
            return `${this.model} is faster for ${k} seconds`
        }
        else {
            const k = this.acceleration_time - car.acceleration_time
            return `${car.model} is faster for ${k} seconds`
        }
    }
}
export default CarBrand;
