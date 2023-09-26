import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    // Начало
    constructor(model,power,accelerationTime,cost) {
        super(model,power,accelerationTime);
        this.cost = cost;
    }

    getIsExpensive(){
        return this.cost > 1;
    }
    // Конец
}

export default BugattiBrand;