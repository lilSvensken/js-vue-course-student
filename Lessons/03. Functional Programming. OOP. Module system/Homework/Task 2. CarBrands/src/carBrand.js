class CarBrand {
    constructor(brand, model, power, accelerationTime) {
        this.brand = brand;
        this.model = model;
        this.power = power;
        this.accelerationTime = accelerationTime;
    }

    runDrag(time) {
        return this.brand + ' ' + this.model +  ' runs drag for ' + time + ' seconds';
    }

    getWhoIsFaster(car) {
        const timeDifference = Math.abs(this.accelerationTime - car.accelerationTime);
        return this.brand + ' ' + this.model + ' is faster for ' + timeDifference + ' seconds';
    }
}

export default CarBrand;