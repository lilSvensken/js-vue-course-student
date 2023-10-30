import CarBrand from "./carBrand";

class LadaBrand extends CarBrand {
  // Начало
  constructor(model, power, acceleration, location) {
    super(power, acceleration);
    this.model = "Lada " + model
    this.location = location;
  }

  getLocation() {
    return `${this.model} is located in ${this.location}`;
  }

  // Конец
}

export default LadaBrand;
