class CityGame {
    // Начало
    cities = [];
    constructor(pl1, pl2) {
        this.pl1 = pl1;
        this.pl2 = pl2;
    }

    play(newCity) {
        if(newCity.length === 0) {
            return 'Incorrect'
        }
        if (newCity.toLowerCase().at(0) === this.cities.at(-1).toLowerCase().at(-1)) {
            return 'Correct'
        } else {
            return this
        }
    }

    // Конец
}

const game = new CityGame('Max', 'Ruslan');

export default CityGame;