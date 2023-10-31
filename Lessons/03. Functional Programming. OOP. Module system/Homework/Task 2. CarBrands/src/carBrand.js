class CarBrand {
    constructor(model, power, accelerationTime){
        this.model = model,
        this.power = power,
        this.accelerationTime = accelerationTime
    }

    runDrag(time){
        return `${this.model} runs drag for ${time} seconds`
    }
}

export default CarBrand;