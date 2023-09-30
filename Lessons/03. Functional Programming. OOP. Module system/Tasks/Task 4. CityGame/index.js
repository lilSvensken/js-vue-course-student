class CityGame {
	cities = [];

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

export default CityGame;
