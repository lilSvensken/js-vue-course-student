class CarBrand {
    // Начало
    constructor(model,power,accelerationTime) {
        this.model = model;
        this.power = power;
        this.accelerationTime = accelerationTime;
    }
    runDrag(time){
        return `${this.model} runs drag for ${time} seconds`;
    }

    getWhoIsFaster(car){
        const difference = Math.abs(this.accelerationTime
            - car.accelerationTime);
        return `${this.model} is faster for ${difference} seconds`;
    }
    // Конец
}

export default CarBrand;