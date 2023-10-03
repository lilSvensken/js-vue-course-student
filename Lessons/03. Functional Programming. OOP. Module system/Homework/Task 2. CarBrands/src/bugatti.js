import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    constructor(model, power, acceleration_time, cost) {
        super(model, power, acceleration_time);
        this.model = "Bugatti " + model
        this.cost = cost
    }

    getIsExpensive() {
        return (this.cost > 1)    
    }

}

export default BugattiBrand;

