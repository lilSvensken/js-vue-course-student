import CarBrand from './carBrand';

class LadaBrand extends CarBrand {

    constructor(model, power, timeTo100, place) {
        super(model, power, timeTo100);
        this.place = place;
        this.model = 'Lada ' + this.model;
    }
    getLocation(){
        return `${this.model} is located in ${this.place}`;
    }

}

export default LadaBrand;