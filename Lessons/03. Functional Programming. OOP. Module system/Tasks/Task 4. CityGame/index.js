class CityGame {
    // Начало
    cities = [];
    lenOfCitiesList = 0;

    constructor(gamer1, gamer2) {
        this.gamer1 = gamer1;
        this.gamer2 = gamer2;
    }

    play(city) {
        if (this.lenOfCitiesList === 0) {
            this.cities[this.lenOfCitiesList] = city;
            this.lenOfCitiesList++;
        } else {
            if (this.cities.at(-1).at(-1).toUpperCase() === city.at(0)) {
                this.cities[this.lenOfCitiesList] = city;
                this.lenOfCitiesList++;
            } else {
                if (this.lenOfCitiesList % 2 === 1) {
                    return 'Game over! The winner is ' + this.gamer1;
                } else return 'Game over! The winner is ' + this.gamer2;
            }
        }
        return this.cities;
    }

    restart() {
        this.lenOfCitiesList = 0;
        this.cities = [];
        return 'The game has been restarted!';
    }
}

export default CityGame;
