import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    // Начало
    constructor(brand, power, runTime, price) {
        super("Bugatti " + brand, power, runTime);
        this.price = price;
    }

    getIsExpensive() {
        return this.price > 1;
    }

    // Конец
}

export default BugattiBrand;