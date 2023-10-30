import CarBrand from "./carBrand";

class BugattiBrand extends CarBrand {
  // Начало
  constructor(model, power, acceleration, cost) {
    super(power, acceleration);
    this.model = "Bugatti " + model;
    this.cost = cost;
  }

  getIsExpensive() {
    return this.cost > 1;
  }

  // Конец
}

export default BugattiBrand;
