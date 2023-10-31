import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    constructor(model, power, accelerationTime, location) {
        super(model, power, accelerationTime)
        this.location = location
    }

    getLocation(){
        return `Lada ${this.model} is located in ${this.location}`
    }

}

export default LadaBrand;