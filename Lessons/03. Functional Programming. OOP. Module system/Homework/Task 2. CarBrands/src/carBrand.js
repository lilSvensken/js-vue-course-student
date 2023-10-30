class CarBrand {
  // Начало
  constructor(power, acceleration) {
    this.power = power;
    this.acceleration = acceleration;
  }

  runDrag(time) {
    return `${this.model} runs drag for ${time} seconds`;
  }

  getWhoIsFaster(car) {
    const timeDifference = Math.abs(this.acceleration - car.acceleration);
    return `${this.model} is faster for ${timeDifference.toFixed(1)} seconds`;
  }

  // Конец
}

export default CarBrand;
