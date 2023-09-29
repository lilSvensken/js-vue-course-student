import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {

    constructor(model, power, accelerationTime, price) {
        super("Bugatti "+ model, power, accelerationTime);
        this.price = price;
    }
    getIsExpensive(){
        return this.price > 1;
    }
}

export default BugattiBrand;