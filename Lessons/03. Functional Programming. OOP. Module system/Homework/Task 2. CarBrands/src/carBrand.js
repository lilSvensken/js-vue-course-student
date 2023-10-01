class CarBrand {
    // Начало
     constructor(model, power, timeSpeed) {
         this.model = model;
         this.power = power;
         this.timeSpeed = timeSpeed;
     }
     getSpeed(model) {
         return this.timeSpeed;
     }
     runDrag(timeArrival) {
         if (this.power > 999) return 'Bugatti ' + this.model + ' runs drag for ' + timeArrival + ' seconds';
         else return 'Lada ' + this.model + ' runs drag for ' + timeArrival + ' seconds';
     }
     getWhoIsFaster(car) {
         const  speedCar = car.getSpeed();
         let difference = speedCar - this.getSpeed();
         return  "Bugatti " + this.model + " is faster for " + difference + " seconds";
     }

    // Конец
}

export default CarBrand;