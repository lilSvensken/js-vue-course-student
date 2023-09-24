import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    cost;
    constructor(model, power, accelerationTime, cost) {
        super("Bugatti "+ model, power, accelerationTime);
        this.cost = cost;
    }
    getIsExpensive(){
        return this.cost > 1;
    }
}
export default BugattiBrand;