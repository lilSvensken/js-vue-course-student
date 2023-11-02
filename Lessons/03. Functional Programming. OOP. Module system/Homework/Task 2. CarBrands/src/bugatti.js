import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    // Начало
    brand = "Bugatti";
    model;
    power;
    acceleration;
    price;

    constructor(model, power, acceleration, price) {
        super(model, power, acceleration);
        this.model = model;
        this.power = power;
        this.acceleration = acceleration;
        this.price = price;
    }

    getIsExpensive() {
        return (this.price > 1)
    }

    // Конец
}

export default BugattiBrand;