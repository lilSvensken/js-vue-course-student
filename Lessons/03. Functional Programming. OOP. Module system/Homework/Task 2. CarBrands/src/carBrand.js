class CarBrand {
    constructor(model, power, acceleration) {
        this.model = model;
        this.power = power;
        this.acceleration = acceleration;
    }
    runDrag(time){
        return this.model + ' runs drag for ' + time + ' seconds'
    }
    getWhoIsFaster(car){
        return car.acceleration < this.acceleration ?
            car.model + ' is faster for ' + (this.acceleration - car.acceleration) + ' seconds' :
            this.model + ' is faster for ' + (car.acceleration - this.acceleration) + ' seconds'
    }
}

export default CarBrand;