import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    // Начало
<<<<<<< HEAD
    constructor(brand, power, runTime, city) {
        super("Lada " + brand, power, runTime);
        this.city = city;
    }

    getLocation() {
        return this.brand + " is located in " + this.city;
=======
    constructor(name, power, acceleration, city) {
        super('Lada', power, acceleration);
        this.name = name;
        this.city = city;
    }
    getLocation(){
        return(this.brandModel + ' ' + this.name + ' is located in ' + this.city);
>>>>>>> e3a22bd2a6535a38e74a74a326de368ead0a142c
    }

    // Конец
}

export default LadaBrand;