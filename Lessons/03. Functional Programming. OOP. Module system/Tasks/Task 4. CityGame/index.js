class CityGame {
    constructor(name1, name2){
        this.name1;
        this.name2;
    }
    isFirst = false;
    arr = [];
    play(sity){
        this.isFirst = !this.isFirst;
        if (this.arr.length!==0){
            if (sity[0].toLowerCase() !== this.arr.at(-1).at(-1)){
                if (this.isFirst) console.log(this.name1 + " Проиграл");
                else console.log(this.name2 + " Проиграл");
            }
            else{
                this.arr = this.arr + sity;
                console.log(this.arr);
            }
        }
        else{
            this.arr = this.arr + sity;
        }
    }
    restart(){
        arr = [];
        this.isFirst = false;
    }
}

export default CityGame;