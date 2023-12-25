import CarBrand from './carBrand';
class BugattiBrand extends CarBrand{
    constructor(model, power, accelerationtoHundreed, price){
        super(model, power, accelerationtoHundreed);
        this.price = price;
    }
    getIsExpensive(){
        return this.price > 1;
    }
}
export default BugattiBrand;