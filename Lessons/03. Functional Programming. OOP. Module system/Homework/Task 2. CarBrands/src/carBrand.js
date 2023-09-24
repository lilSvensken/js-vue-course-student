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
        let diff = this.accelerationTime - car.accelerationTime;
        if(diff > 0){
            return this.model + " is faster for " + diff + " seconds";
        }else{
            return car.model + " is faster for " + Math.abs(diff) + " seconds";
        }
    }
}


export default CarBrand;