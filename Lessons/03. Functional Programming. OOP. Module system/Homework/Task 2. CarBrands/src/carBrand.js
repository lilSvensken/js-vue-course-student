class CarBrand {
    // Начало
<<<<<<< HEAD
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
=======
    constructor(brandModel, power, acceleration){
        this.brandModel = brandModel;
        this.power = power;
        this.acceleration = acceleration;
    }
    runDrag(time){
        return(this.brandModel + ' ' + this.name + ' runs drag for ' + time + ' seconds');
>>>>>>> e3a22bd2a6535a38e74a74a326de368ead0a142c
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