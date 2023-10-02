import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    // Начало

    brand = "Lada";
    model;
    acceleration;
    location;

    constructor(model, power, acceleration, location) {
        super(model, power, acceleration);
        this.model = model;
        this.power = power;
        this.acceleration = acceleration;
        this.location = location;
    }


    getLocation(){
        return this.brand + " " + this.model + " is located in " + this.location;
    }

    // Конец
}

export default LadaBrand;