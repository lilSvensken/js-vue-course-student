class CityGame {
<<<<<<< HEAD
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
=======
	cities = [];
>>>>>>> 0cc445e2c23a9942e877bb69b032102dabb177ae

	constructor(pl1, pl2) {
		this.pl1 = pl1;
		this.pl2 = pl2;
	}

	play(newCity) {
		if (
			!this.cities.length ||
			!this.cities.includes(newCity) &&
			newCity[0].toUpperCase() === this.cities.at(-1).slice(-1).toUpperCase()
		) {
			this.cities.push(newCity);
			return this.cities;
		} else {
			const winner = this.cities.length % 2 ? this.pl1 : this.pl2;
			return `Game over! The winner is ${winner}`;
		}
	}

	restart() {
		this.cities = [];
		return 'The game has been restarted!';
	}
}

<<<<<<< HEAD
const game = new CityGame('Max', 'Ruslan');

export default CityGame;
=======
export default CityGame;
>>>>>>> 0cc445e2c23a9942e877bb69b032102dabb177ae
