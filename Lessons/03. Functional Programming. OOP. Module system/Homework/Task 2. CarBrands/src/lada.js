import CarBrand from './carBrand';

class LadaBrand extends CarBrand{
    constructor(model, power, accelerationtoHundreed, location){
        super(model, power, accelerationtoHundreed);
        this.location = location;
    }
    getLocation(){
        return '${this.model} is located in ${this.location}'
    }
}

export default LadaBrand;