class CarBrand {
    // Начало
    brand;
    model;
    power;
    acceleration;

    constructor(model, power, acceleration) {
        this.model = model;
        this.power = power;
        this.acceleration = acceleration;
    }

    runDrag(time) {
        return this.brand + " " + this.model + " runs drag for " + time + " seconds";
    }

    getWhoIsFaster(car) {
        const accelerationDifference = this.acceleration - car.acceleration;
        if (accelerationDifference > 0)
            return car.brand + " " + car.model + " is faster for " + accelerationDifference + " seconds";
        else
            return this.brand + " " + this.model + " is faster for " + Math.abs(accelerationDifference) + " seconds";
    }

    // Конец
}

export default CarBrand;