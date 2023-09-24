class CarBrand {
    brand;
    model;
    power;
    acceleration;

    constructor(model, power, acceleration) {
        this.model = model;
        this.power = power;
        this.acceleration = acceleration;
    }

    getWhoIsFaster(car) {
        const result = this.acceleration - car.acceleration;
        if (result > 0) return car.brand + ' ' + car.model + ' is faster for ' + result + ' seconds';
        return this.brand + ' ' + this.model + ' is faster for ' + (-1 * result) + ' seconds';
    }
    runDrag(time) {
        return this.brand + ' ' + this.model + ' runs drag for ' + time + ' seconds';
    }
}

export default CarBrand;