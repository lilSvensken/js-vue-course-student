
class CarBrand {
    constructor(model, power, accelerationTime) {
        this.model = model;
        this.power = power;
        this.accelerationTime = accelerationTime;
    }

    runDrag(time) {
        if (this.power > 999){
            return "Bugatti " + this.model + " runs drag for " + time + ' seconds';
        } else {
            return "Lada " + this.model + " runs drag for " + time + ' seconds';
        }

    }

    getWhoIsFaster(car) {
        const timeDifference = car.accelerationTime
        let diferencia = timeDifference - this.accelerationTime;
        return "Bugatti " + this.model + " is faster for " + diferencia + " seconds";
    }
}

export default CarBrand;