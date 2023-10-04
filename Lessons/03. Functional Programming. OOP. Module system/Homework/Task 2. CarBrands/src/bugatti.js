import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    // Начало
    constructor(name ,power, acceleration,cost) {
        super('Bugatti', power, acceleration);
        this.name = name;
        this.cost = cost;
    }
    getIsExpensive(){
        return this.cost > 1;
    }

    // Конец
}

export default BugattiBrand;