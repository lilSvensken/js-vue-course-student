import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    // Начало
    constructor(name, power, acceleration, city) {
        super('Lada', power, acceleration);
        this.name = name;
        this.city = city;
    }
    getLocation(){
        return(this.brandModel + ' ' + this.name + ' is located in ' + this.city);
    }

    // Конец
}

export default LadaBrand;