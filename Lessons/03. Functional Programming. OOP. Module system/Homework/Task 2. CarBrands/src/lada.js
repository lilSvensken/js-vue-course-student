import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    // Начало
    constructor(model, power, timeSpeed, location) {
        super(model, power, timeSpeed);
        this.location = location;
    }
    getLocation() {
        return "Lada " + this.model + " is located in " + this.location;
    }
    getSpeed(time) {
        return this.timeSpeed;
    }

    // Конец
}

export default LadaBrand;