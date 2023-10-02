import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    constructor(carCompany, horsepower, timeto100, location) {
        super("Lada" + " " + carCompany, horsepower, timeto100);
        this.location = location;
    }

    getLocation() {
        return this.carCompany + " is located in " + this.location;
    }
}

export default LadaBrand;