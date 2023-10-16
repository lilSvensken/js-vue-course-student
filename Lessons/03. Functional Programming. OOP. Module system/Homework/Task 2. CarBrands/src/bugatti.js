import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    constructor(model, power, timeTo100, cost) {
        super(model, power, timeTo100);
        this.cost = cost;
        this.model = 'Bugatti ' + this.model;
    }
    getIsExpensive(){
        let flag = false;
        if (this.cost > 1){
            flag = true;
        }
        return flag;
    }

}

export default BugattiBrand;