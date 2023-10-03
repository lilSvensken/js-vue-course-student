import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    constructor(model, power, acceleration_time, location) {
        super(model, power, acceleration_time);
        this.model = "Lada " + model
        this.location = location
    }

    getLocation(){
        return `${this.model} is located in ${this.location}`
    }
}

export default LadaBrand;
