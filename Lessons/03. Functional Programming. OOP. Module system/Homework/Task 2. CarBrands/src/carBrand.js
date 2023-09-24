class CarBrand {
    model;
    power;
    accelerationTime;
    constructor(model, power, accelerationTime) {
        this.model = model;
        this.power = power;
        this.accelerationTime = accelerationTime;
    }
    runDrag(time){
        return this.model + " runs drag for " + time + " seconds";
    }

    getWhoIsFaster(car){
        if(this.accelerationTime < car.accelerationTime){
            return this.model + " is faster for " + car.accelerationTime - this.accelerationTime + " seconds";
        }
    }
}


export default CarBrand;