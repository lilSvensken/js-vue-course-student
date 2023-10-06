import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    // Начало
<<<<<<< HEAD
    constructor(brand, power, runTime, price) {
        super("Bugatti " + brand, power, runTime);
        this.price = price;
    }

    getIsExpensive() {
        return this.price > 1;
=======
    constructor(name ,power, acceleration,cost) {
        super('Bugatti', power, acceleration);
        this.name = name;
        this.cost = cost;
    }
    getIsExpensive(){
        return this.cost > 1;
>>>>>>> e3a22bd2a6535a38e74a74a326de368ead0a142c
    }

    // Конец
}

export default BugattiBrand;