class CityGame {
<<<<<<< HEAD
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
=======
    player1;
    player2;
    score = 0
    cities;
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }

    play(city){
        if (this.cities == []){
            this.cities.add(city)
            this.score += 1
        } 
        else if (this.cities.at(-1).split("").at(-1) == city.split("").at().toLowerCase()){
            this.cities.push(city)
            this.score += 1
            return this.cities
        }
        else{
            if (score % 2 == 0) return 'Game over! The winner is ${player2}'
            else return 'Game over! The winner is ${player1}'
        }   
    }
    restart(){
        this.cities = []
        this.score = 0
        return 'The game has been restarted!'
    }
>>>>>>> 8042429 (homework)
}

export default CityGame;
