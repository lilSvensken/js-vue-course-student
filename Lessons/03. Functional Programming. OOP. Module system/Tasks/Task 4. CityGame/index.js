class CityGame {
    name1;
    name2;
    cities = [];
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
    }
    play(city){
        if(!this.cities.length || (!this.cities.includes(city) && this.cities.at(-1).toUpperCase().at(-1) === city[0])){
            this.cities.push(city);
            return this.cities;
        }else{
            if(this.cities.length % 2 === 0){
                return "Game over! The winner is " + this.name2 + "";
            }
            else{
                return "Game over! The winner is " + this.name1 + "";
            }
        }
    }

    restart(){
        this.cities = [];
        return 'The game has been restarted!';
    }
}
export default CityGame;