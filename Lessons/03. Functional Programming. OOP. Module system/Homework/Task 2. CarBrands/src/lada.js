import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    // Начало
    constructor(brand, power, runTime, city) {
        super("Lada " + brand, power, runTime);
        this.city = city;
    }

    getLocation() {
        return this.brand + " is located in " + this.city;
    }

    // Конец
}

export default LadaBrand;