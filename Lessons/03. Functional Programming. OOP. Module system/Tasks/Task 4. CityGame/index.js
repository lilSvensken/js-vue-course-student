class CityGame {
    constructor(player1, player2) {
        this.players = [player2, player1];
        this.cities = [];
        this.currentPlayer = 0;
    }

    play(city) {
        if (this.cities.length === 0) {
            this.cities.push(city);
        } else {
            const lastCity = this.cities[this.cities.length - 1];
            const lastChar = lastCity[lastCity.length - 1].toLowerCase();
            const firstChar = city[0].toLowerCase();

            if (lastChar === firstChar) {
                this.cities.push(city);
            } else {
                const winner = this.players[this.currentPlayer];
                return `Game over! The winner is ${winner}`;
            }
        }

        this.currentPlayer = (this.currentPlayer + 1) % 2;
        return this.cities;
    }

    restart() {
        this.cities = [];
        return 'The game has been restarted!';
    }
}

export default CityGame;


// class CityGame {
//     // Начало
//     constructor(name1, name2){
//         this.name1 = name1;
//         this.name2 = name2;
//         this.cities = [];
//         this.currPlayer = 0;
//         this.gameOver = false;
//     }
//
//     play(city){
//         if (this.gameOver){
//             return 'Game over! The winner is ' + this.players[1 - this.currPlayer];
//         }
//
//         if (this.cities.length === 0 || this.isCityValid(city)){
//             this.cities.push(city);
//             this.currPlayer = 1 - this.currPlayer;
//             return this.cities;
//         } else {
//             this.gameOver = true;
//             return 'Game over! The winner is ' + this.players[this.currPlayer];
//         }
//
//     }
//
//     isCityValid(city){
//         const lastCity = this.cities[this.cities.length - 1];
//         const lastChar = lastCity[lastCity.length - 1].toLowerCase();
//         const firstChar = city[0].toLowerCase();
//         return lastChar === firstChar;
//     }
//
//     restart(){
//         this.cities = [];
//         this.currPlayer = 0;
//         this.gameOver = false;
//         return 'The game has been restarted!';
//     }
//     // Конец
// }
// /*
// export default CityGame;*/
// const game = new CityGame('Max', 'Lewis');
// console.log(game.play('Kazan'));        // ['Kazan']
// console.log(game.play('Novgorod'));     // ['Kazan', 'Novgorod']
// console.log(game.play('Denver'));       // ['Kazan', 'Novgorod', 'Denver']
// console.log(game.play('Paris'));        // 'Game over! The winner is Max'
//
// console.log(game.restart());            // 'The game has been restarted!'
// console.log(game.play('Prague'));       // ['Prague']
// console.log(game.play('Edinburgh'));    // ['Prague', 'Edinburgh']
// console.log(game.play('Kioto'));        // 'Game over! The winner is Lewis'