import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    // Начало
    constructor(model, power, timeSpeed, price) {
        super(model, power, timeSpeed);
        this.price = price;
    }
    getIsExpensive() {
        return this.price > 1;
    }
    // Конец
}

export default BugattiBrand;