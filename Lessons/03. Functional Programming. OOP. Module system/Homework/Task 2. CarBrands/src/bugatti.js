import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    // Начало
    constructor(model, power, accelerationTime, cost) {
        super(model, power, accelerationTime);
        this.cost = cost;
    }

    getIsExpensive() {
        return this.cost > 1; // Comparamos si el costo es mayor a 1 millón de dólares
    }
    // Конец
}

export default BugattiBrand;