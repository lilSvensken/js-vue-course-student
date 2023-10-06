class CarBrand {
    // Начало
    constructor(brand, power, runTime) {
        this.brand = brand;
        this.power = power;
        this.runTime = runTime;
    }

    runDrag(time) {
        return this.brand + " runs drag for " + time + " seconds";
    }

    getWhoIsFaster(car) {
        if (this.runTime < car.runTime) {
            return this.brand + " is faster for " + (car.runTime - this.runTime) + " seconds";
        } else {
            return car.brand + " is faster for " + (this.runTime - car.runTime) + " seconds";
        }
    }

    getWhoIsFaster(car) {
        const timeDifference = Math.abs(this.acceleration - car.acceleration);
        let fasterCar;
        if (this.acceleration < car.acceleration) {
            fasterCar = this.brandModel + ' ' + this.name;
        } else {
            fasterCar = car.brandModel + ' ' + car.name;
        }
        return fasterCar + ' is faster for ' + timeDifference + ' seconds';
    
    }   
    // Конец
}

export default CarBrand;