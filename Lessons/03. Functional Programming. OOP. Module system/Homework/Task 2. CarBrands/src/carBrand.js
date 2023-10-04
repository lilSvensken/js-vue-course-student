class CarBrand {
    // Начало
    constructor(brandModel, power, acceleration){
        this.brandModel = brandModel;
        this.power = power;
        this.acceleration = acceleration;
    }
    runDrag(time){
        return(this.brandModel + ' ' + this.name + ' runs drag for ' + time + ' seconds');
    }

    getWhoIsFaster(car) {
        const timeDifference = Math.abs(this.acceleration - car.acceleration);
        let fasterCar;
        if (this.acceleration < car.acceleration) {
            fasterCar = this.brandModel + ' ' + this.name;
        } else {
            fasterCar = car.brandModel + ' ' + car.name;
        }
        return fasterCar + ' is faster for ' + timeDifference + ' seconds';
    
    }   
    // Конец
}

export default CarBrand;