import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    constructor(model, power, accelerationTime, location) {
        super("Lada " + model, power, accelerationTime, );
        this.location = location;
    }
    getLocation(){
        return this.model + " is located in " + this.location;
    }
}

export default LadaBrand;