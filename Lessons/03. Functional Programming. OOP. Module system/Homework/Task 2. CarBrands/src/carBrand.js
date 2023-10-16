class CarBrand {
    constructor(model, power, timeTo100) {
        this.model = model;
        this.power = power;
        this.timeTo100 = timeTo100;
    }
    runDrag(time){
        return `${this.model} runs drag for ${time} seconds`;
    }
    getWhoIsFaster(car){
        if (this.timeTo100 < car.timeTo100){
            return `${this.model} is faster for ${car.timeTo100-this.timeTo100} seconds`;
        } else {
            return `${car.model} is faster for ${this.timeTo100-car.timeTo100} seconds`;
        }
    }

}

export default CarBrand;