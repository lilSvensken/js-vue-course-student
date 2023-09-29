class CarBrand {
    constructor(model, power, accelerationTime) {
        this.model = model;
        this.power = power;
        this.accelerationTime = accelerationTime;
    }
    runDrag(time){
        return this.model + " runs drag for " + time + " seconds";
    }

    getWhoIsFaster(car){
        if (car.accelerationTime < this.accelerationTime) {
            return car.model + " is faster for " + (this.accelerationTime - car.accelerationTime) + " seconds"
        }
        return this.model + " is faster for " + (car.accelerationTime - this.accelerationTime) + " seconds"

    }
}

export default CarBrand;