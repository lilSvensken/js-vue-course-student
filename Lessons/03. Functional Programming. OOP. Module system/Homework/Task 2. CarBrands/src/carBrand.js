class CarBrand {
    constructor(carCompany,horsepower,timeto100) {
        this.carCompany = carCompany;
        this.horsepower = horsepower;
        this.timeto100 = timeto100;
    }

    runDrag(time) {
        return this.carCompany + " runs drag for " + time + "seconds";
    }

    getWhoIsFaster(car) {
        if (this.timeto100 > car.timeto100) {
            return car.carCompany + " is faster for " + (this.timeto100 - car.timeto100) + " seconds";
        }
        else {
            return this.carCompany + " is faster for " + (car.timeto100 - this.timeto100) + " seconds";
        }
    }
}

export default CarBrand;