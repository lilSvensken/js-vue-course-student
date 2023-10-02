import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    constructor(carCompany, horsepower, timeto100, price) {
        super("Bugatti" + " " + carCompany, horsepower, timeto100);
        this.price = price;
    }

    getIsExpensive() {
        if (this.price > 1) return true;
    }
}

export default BugattiBrand;